// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://magromaldonadoaaron.com',
  integrations: [
    sitemap({
      // The CV pages only exist to print the PDFs.
      filter: (page) => !page.endsWith('/cv/'),
      i18n: {
        defaultLocale: 'es',
        locales: { es: 'es-ES', en: 'en-GB' },
      },
    }),
  ],
});
