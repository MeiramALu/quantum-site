// Данные сайта берутся из Directus (админка). Старые src/data/*.ts больше не используются.
const CMS_URL = process.env.CMS_URL ?? import.meta.env.CMS_URL ?? 'http://localhost:8055';
// Адрес, по которому браузер посетителя открывает картинки
export const CMS_PUBLIC_URL = process.env.PUBLIC_CMS_URL ?? import.meta.env.PUBLIC_CMS_URL ?? 'http://localhost:8055';

async function items<T = any>(collection: string): Promise<T[]> {
  const res = await fetch(`${CMS_URL}/items/${collection}?limit=-1&sort=sort,id`);
  if (!res.ok) throw new Error(`CMS ${collection}: ${res.status}`);
  return (await res.json()).data;
}

/** Ссылка на картинку из Directus с ресайзом (webp). */
export const img = (id: string | null | undefined, width = 800) =>
  id ? `${CMS_PUBLIC_URL}/assets/${id}?width=${width}&format=webp&quality=80` : null;
export const imgSet = (id: string, widths: number[]) =>
  widths.map((w) => `${img(id, w)} ${w}w`).join(', ');

export type SiteSettings = Record<
  'logo_farabi' | 'logo_spinq' | 'logo_spinq_white' | 'hero_video_webm' | 'hero_video_mp4' | 'hero_poster' |
  'lab_main' | 'lab_interior' | 'lab_opening' | 'spinq_visit_1' | 'spinq_interface' | 'spinq_visit_2',
  string | null
>;
let settingsCache: { at: number; p: Promise<SiteSettings> } | null = null;
/** Логотипы, видео и фото сайта (singleton). Кэш 3 сек, чтобы шапка/футер/страница не дёргали CMS трижды. */
export function getSettings(): Promise<SiteSettings> {
  if (!settingsCache || Date.now() - settingsCache.at > 3000) {
    settingsCache = { at: Date.now(), p: fetch(`${CMS_URL}/items/site_settings`).then(async (r) => { if (!r.ok) throw new Error(`CMS settings: ${r.status}`); return (await r.json()).data; }) };
  }
  return settingsCache.p;
}
/** Прямая ссылка на файл (для видео). */
export const fileUrl = (id: string | null | undefined) => (id ? `${CMS_PUBLIC_URL}/assets/${id}` : null);

export interface Member { name: string; role: string; credentials: string; initials: string; focus: string[]; photo: string | null }
export interface Partner { name: string; country: string; kind: 'Industry' | 'Research' | 'University' }
export interface Trip { event: string; place: string; note: string; image: string | null }
export interface Publication { authors: string; year: number; title: string; venue: string; doi?: string | null }
export interface MediaMention { outlet: string; lang: 'EN' | 'RU'; title: string; date: string | null; url: string; excerpt: string }
export interface Direction { title: string; blurb: string; detail: string; tags: string[]; color: 'chartreuse' | 'lavender' | 'mint' }
export interface Project { title: string; scope: string; status: 'Active & completed' | 'Under review'; funding: string }
export interface Result { title: string; metric: string; metricLabel: string; detail: string; doi: string; venue: string }

export const getTeam = () => items<Member>('team_members');
export const getPartners = () => items<Partner>('partners');
export const getTrips = () => items<Trip>('trips');
export const getPublications = async () => (await items<Publication>('publications')).sort((a, b) => b.year - a.year);
export const getMedia = async () => (await items<MediaMention>('media_mentions')).map((m) => ({ ...m, date: m.date ?? '' }));
export const getDirections = () => items<Direction>('directions');
export const getProjects = () => items<Project>('projects');
export const getResults = async () => (await items<any>('results')).map((r) => ({ ...r, metricLabel: r.metric_label }) as Result);
