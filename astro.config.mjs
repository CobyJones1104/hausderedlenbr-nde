import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://hausderedlenbraende.de',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
  image: {
    domains: [],
  },
});
