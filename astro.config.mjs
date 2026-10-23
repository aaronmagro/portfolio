// @ts-check
import { mkdir, rename, rm } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Static hosts serve the nearest 404.html up the path, but Astro only writes that name for the root page.
// This moves the English one to /en/404.html so missing pages under /en/ get it.
const localized404 = {
  name: 'localized-404',
  hooks: {
    /** @param {{ dir: URL }} options */
    'astro:build:done': async ({ dir }) => {
      const folder = fileURLToPath(new URL('en/404/', dir));
      await mkdir(fileURLToPath(new URL('en/', dir)), { recursive: true });
      await rename(`${folder}index.html`, fileURLToPath(new URL('en/404.html', dir)));
      await rm(folder, { recursive: true });
    },
  },
};

// https://astro.build/config
export default defineConfig({
  site: 'https://aaronmagro.com',
  integrations: [
    sitemap({
      // The CV pages only exist to print the PDFs; the 404 pages are not for search.
      filter: (page) => !page.endsWith('/cv/') && !page.includes('/404'),
      i18n: {
        defaultLocale: 'es',
        locales: { es: 'es-ES', en: 'en-GB' },
      },
    }),
    localized404,
  ],
});
