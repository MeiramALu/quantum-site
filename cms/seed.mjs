// Создаёт коллекции в Directus и переносит данные из ../src/data/*.ts + картинки.
// Запуск: node seed.mjs   (Directus должен работать на :8055)
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const BASE = process.env.CMS_URL ?? 'http://localhost:8055';
const EMAIL = process.env.ADMIN_EMAIL ?? 'admin@example.com';
const PASSWORD = process.env.ADMIN_PASSWORD ?? 'Admin12345!';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const data = async (n) => import(pathToFileURL(path.join(root, 'src/data', n + '.ts')).href);

let token;
async function api(p, method = 'GET', body) {
  const res = await fetch(BASE + p, {
    method,
    headers: { Authorization: `Bearer ${token}`, ...(body && !(body instanceof FormData) ? { 'Content-Type': 'application/json' } : {}) },
    body: body instanceof FormData ? body : body ? JSON.stringify(body) : undefined,
  });
  const j = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(`${method} ${p}: ${JSON.stringify(j.errors ?? j)}`);
  return j.data;
}

const f = (field, type, extra = {}) => ({ field, type, schema: {}, meta: { interface: extra.interface, width: extra.width ?? 'full', note: extra.note, options: extra.options, special: extra.special, required: extra.required }, ...(extra.schema ? { schema: extra.schema } : {}) });
const text = (n, o = {}) => f(n, 'string', { interface: 'input', ...o });
const area = (n, o = {}) => f(n, 'text', { interface: 'input-multiline', ...o });
const tags = (n, o = {}) => f(n, 'json', { interface: 'tags', special: ['cast-json'], ...o });
const dropdown = (n, choices, o = {}) => f(n, 'string', { interface: 'select-dropdown', options: { choices: choices.map((c) => ({ text: c, value: c })) }, ...o });
const image = (n) => f(n, 'uuid', { interface: 'file-image', special: ['file'] });

const collections = {
  team_members: { note: 'Команда', fields: [text('name'), text('role'), text('credentials'), text('initials'), tags('focus'), image('photo')] },
  partners: { note: 'Партнёры', fields: [text('name'), text('country'), dropdown('kind', ['Industry', 'Research', 'University'])] },
  trips: { note: 'Поездки', fields: [text('event'), text('place'), area('note'), image('image')] },
  publications: { note: 'Публикации', fields: [text('authors'), f('year', 'integer', { interface: 'input' }), area('title'), text('venue'), text('doi')] },
  media_mentions: { note: 'СМИ о нас', fields: [text('outlet'), dropdown('lang', ['EN', 'RU']), area('title'), f('date', 'date', { interface: 'datetime' }), text('url'), area('excerpt')] },
  directions: { note: 'Направления исследований', fields: [text('title'), area('blurb'), area('detail'), tags('tags'), dropdown('color', ['chartreuse', 'lavender', 'mint'])] },
  projects: { note: 'Проекты', fields: [area('title'), area('scope'), dropdown('status', ['Active & completed', 'Under review']), text('funding')] },
  results: { note: 'Результаты', fields: [text('title'), text('metric'), text('metric_label'), area('detail'), text('doi'), text('venue')] },
};

async function upload(file) {
  const buf = await readFile(file.startsWith('../') ? path.join(root, file.slice(3)) : path.join(root, 'src', file));
  const fd = new FormData();
  fd.append('title', path.basename(file));
  fd.append('file', new Blob([buf]), path.basename(file));
  return (await api('/files', 'POST', fd)).id;
}

// --- вход
token = (await fetch(BASE + '/auth/login', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email: EMAIL, password: PASSWORD }) }).then((r) => r.json())).data.access_token;

// --- коллекции
const existing = (await api('/collections')).map((c) => c.collection);
for (const [name, def] of Object.entries(collections)) {
  if (existing.includes(name)) { console.log('есть уже:', name); continue; }
  const fields = [
    { field: 'id', type: 'integer', meta: { hidden: true }, schema: { is_primary_key: true, has_auto_increment: true } },
    { field: 'sort', type: 'integer', meta: { hidden: true }, schema: {} },
    ...def.fields,
  ];
  await api('/collections', 'POST', { collection: name, meta: { note: def.note, sort_field: 'sort' }, schema: {}, fields });
  if (fields.some((x) => x.meta?.special?.includes('file'))) {
    for (const fl of fields.filter((x) => x.meta?.special?.includes('file')))
      await api('/relations', 'POST', { collection: name, field: fl.field, related_collection: 'directus_files', schema: { on_delete: 'SET NULL' } });
  }
  console.log('создана:', name);
}

// --- настройки сайта (singleton: логотипы, видео, фото)
const settingsFiles = {
  logo_farabi: ['assets/logos/farabi.png', 'Логотип КазНУ (шапка и футер)'],
  logo_spinq: ['assets/logos/spinq.png', 'Логотип SpinQ в шапке (тёмный)'],
  logo_spinq_white: ['assets/logos/spinq-white.png', 'Логотип SpinQ в футере (белый)'],
  hero_video_webm: ['../public/hero.webm', 'Hero-видео (webm)'],
  hero_video_mp4: ['../public/hero.mp4', 'Hero-видео (mp4)'],
  hero_poster: ['../public/poster.jpg', 'Hero: постер (до загрузки видео, на телефонах)'],
  lab_main: ['assets/images/lab-main.jpeg', 'Главная: фото «О лаборатории»'],
  lab_interior: ['assets/images/lab-interior.jpg', 'Главная: галерея — Inside the lab'],
  lab_opening: ['assets/images/lab-opening.png', 'Главная: галерея — Official opening'],
  spinq_visit_1: ['assets/images/spinq-visit-1.jpeg', 'Главная: галерея — With the SpinQ delegation'],
  spinq_interface: ['assets/images/spinq-interface.jpeg', 'Главная: интерфейс SpinQ'],
  spinq_visit_2: ['assets/images/spinq-visit-2.jpeg', 'Медиа: встреча со SpinQ'],
};
if (!existing.includes('site_settings')) {
  await api('/collections', 'POST', {
    collection: 'site_settings', meta: { note: 'Настройки сайта: логотипы, видео, фото', singleton: true }, schema: {},
    fields: [
      { field: 'id', type: 'integer', meta: { hidden: true }, schema: { is_primary_key: true, has_auto_increment: true } },
      ...Object.entries(settingsFiles).map(([k, [, note]]) => ({ field: k, type: 'uuid', schema: {}, meta: { interface: k.startsWith('hero_video') ? 'file' : 'file-image', special: ['file'], note } })),
    ],
  });
  for (const k of Object.keys(settingsFiles)) await api('/relations', 'POST', { collection: 'site_settings', field: k, related_collection: 'directus_files', schema: { on_delete: 'SET NULL' } });
  console.log('создана: site_settings');
}
const cur = await api('/items/site_settings');
if (!cur || !cur.hero_poster) {
  const row = {};
  for (const [k, [p]] of Object.entries(settingsFiles)) row[k] = await upload(p);
  await api('/items/site_settings', 'PATCH', row);
  console.log('загружено: site_settings');
}

// --- публичное чтение (для сайта)
const policies = await api('/policies?limit=-1');
const pub = policies.find((p) => p.name?.includes('Public') || p.name === '$t:public_label');
const perms = await api('/permissions?limit=-1');
for (const c of [...Object.keys(collections), 'site_settings', 'directus_files']) {
  if (!perms.some((p) => p.policy === pub.id && p.collection === c && p.action === 'read'))
    await api('/permissions', 'POST', { policy: pub.id, collection: c, action: 'read', fields: ['*'], permissions: {}, validation: {} });
}

// --- данные (только если коллекция пустая)
const empty = async (c) => (await api(`/items/${c}?limit=1`)).length === 0;
const load = async (c, rows) => { if (await empty(c)) { await api(`/items/${c}`, 'POST', rows.map((r, i) => ({ ...r, sort: i + 1 }))); console.log('загружено:', c, rows.length); } };

const team = (await data('team')).team;
if (await empty('team_members')) {
  const rows = [];
  for (const m of team) rows.push({ name: m.name, role: m.role, credentials: m.credentials, initials: m.initials, focus: m.focus, photo: await upload('assets/team/' + m.photoFile) });
  await load('team_members', rows);
}
await load('partners', (await data('partners')).partners);
if (await empty('trips')) {
  const rows = [];
  for (const t of (await data('partners')).trips) rows.push({ event: t.event, place: t.place, note: t.note, image: await upload('assets/images/' + t.imageFile) });
  await load('trips', rows);
}
await load('publications', (await data('publications')).publications);
await load('media_mentions', (await data('media')).media.map((m) => ({ ...m, date: m.date || null })));
const r = await data('research');
await load('directions', r.directions);
await load('projects', r.projects);
await load('results', r.results.map(({ metricLabel, ...x }) => ({ ...x, metric_label: metricLabel })));
console.log('готово');
