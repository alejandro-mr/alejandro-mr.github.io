import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  site: 'https://alejandro-mr.github.io',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    fallback: {
      es: 'en',
    },
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [tailwind(), mdx(), preact()],
});

