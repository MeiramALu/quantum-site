// @ts-check
import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

// Static showcase site for the Quantum AI Laboratory (Al-Farabi KazNU).
// Set `site` to the final deploy URL; if deploying to a GitHub Pages
// project path, also set `base` (e.g. '/quantum-ai-landing').
export default defineConfig({
  // SSR: страницы строятся на каждый запрос, правки из админки видны сразу
  output: 'server',
  adapter: node({ mode: 'standalone' }),
  site: 'https://quantum-ai-lab.example.kz',
  image: {
    // Allow modern responsive formats out of the box.
    responsiveStyles: true,
  },
  build: {
    inlineStylesheets: 'auto',
  },
});
