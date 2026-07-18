# Quantum AI Laboratory — website

Marketing/showcase site for the Quantum AI Laboratory at Al-Farabi Kazakh National
University (KazNU), Almaty. Built with [Astro](https://astro.build) (static output),
styled after the MIT Technology Review design system, typeset in Geist.

## Develop

```bash
npm install
npm run dev        # http://localhost:4321
```

## Build

```bash
npm run build      # → ./dist  (static, deploy anywhere)
npm run preview    # serve the built site locally
```

Deploy `dist/` to any static host (Netlify, Vercel, GitHub Pages, Cloudflare Pages).
In `astro.config.mjs`, set `site` to the final URL; if hosting under a sub-path
(e.g. GitHub Pages project sites) also set `base`.

## Deploy to Vercel

No `vercel.json` needed — Vercel auto-detects Astro and uses the right settings out of
the box:

- **Build command:** `npm run build`
- **Output directory:** `dist`
- **Install command:** `npm install`

Steps:

1. Push this repo to GitHub (see below).
2. In Vercel: **Add New → Project**, import the repo. Framework preset auto-detects as
   **Astro** — leave the defaults and click **Deploy**.
3. Once you have the live URL, set it as `site` in `astro.config.mjs` (used for canonical
   links) and redeploy.

No environment variables are required — the site has no backend, API keys, or database.

## Pages

- `/` — home: hero video, lab overview, research preview, equipment, team, gallery
- `/research` — directions, headline results (with DOIs), grant projects, publications
- `/media` — press coverage, international partners, SpinQ, conferences & visits

## Editing content

All content lives in typed data files under `src/data/` — no HTML editing needed:

- `team.ts` — the three members
- `research.ts` — directions, projects, results
- `publications.ts` — publication list
- `media.ts` — "Media about us" coverage (add one object per new article)
- `partners.ts` — partners and travel/conferences

## Team photos

Portraits live in `src/assets/team/` and are matched by filename to the `photoFile`
field in `src/data/team.ts`. `src/pages/index.astro` glob-imports that folder, so
dropping in a new file with a matching name is all that's needed — no code change. If a
listed `photoFile` has no matching image, that member falls back to a styled
initials placeholder automatically.

## Contact / Collaborate

The "Collaborate" nav link and the footer both open a pre-filled `mailto:` link — the
address is intentionally never printed as visible text on the page. It's set directly in
`src/components/Nav.astro` (`collabHref`) and `src/components/Footer.astro`.

## Hero video

Optimised files live in `public/` (`hero.mp4`, `hero.webm`, `poster.jpg`), transcoded
from the original in `assets/`. The video is decorative and muted; it is **not**
downloaded on mobile, with reduced-motion, or on save-data connections — the poster
image carries those cases. To regenerate from a new source:

```bash
ffmpeg -y -i SOURCE.mp4 -an -vf "scale=1280:720:force_original_aspect_ratio=increase,crop=1280:720,fps=24" \
  -c:v libx264 -profile:v high -preset slow -crf 30 -pix_fmt yuv420p -movflags +faststart public/hero.mp4
ffmpeg -y -i SOURCE.mp4 -an -vf "scale=1280:720:force_original_aspect_ratio=increase,crop=1280:720,fps=24" \
  -c:v libvpx-vp9 -crf 36 -b:v 0 -row-mt 1 public/hero.webm
ffmpeg -y -ss 2 -i SOURCE.mp4 -vframes 1 -vf "scale=1280:720:force_original_aspect_ratio=increase,crop=1280:720" public/poster.jpg
```
