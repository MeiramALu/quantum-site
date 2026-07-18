// @ts-check
import { defineConfig } from 'astro/config';

// Static showcase site for the Quantum AI Laboratory (Al-Farabi KazNU).
// Set `site` to the final deploy URL; if deploying to a GitHub Pages
// project path, also set `base` (e.g. '/quantum-ai-landing').
export default defineConfig({
  site: 'https://quantum-ai-lab.example.kz',
  image: {
    // Allow modern responsive formats out of the box.
    responsiveStyles: true,
  },
  build: {
    inlineStylesheets: 'auto',
  },
});
