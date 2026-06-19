import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://paul.sapieha.org',
  integrations: [sitemap()],
});
