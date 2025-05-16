import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

export default defineConfig({
  server: {
      host: true
  },

  devToolbar: {
      enabled: false
  },

  site: 'https://vincentpiercedev.github.io',
  base: '/TonySpatola',
  output: 'static',
  integrations: [react()]
});