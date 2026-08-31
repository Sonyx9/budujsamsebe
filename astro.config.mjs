// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://budujsamsebe.cz',
  // Staré adresy — ať nikomu neumře odkaz z e-mailu, PDF nebo vyhledávače.
  redirects: {
    '/plany/75-hard/': '/plany/75-dni/',
    '/tracker/dekujeme/': '/dekujeme/',
    '/o-webu/': '/o-nas/',
  },
  integrations: [
    sitemap({
      // děkovačky a jiné noindex stránky nepatří do sitemapy
      filter: (page) => !page.includes('/dekujeme/'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
