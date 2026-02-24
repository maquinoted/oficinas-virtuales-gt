import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.oficinasvirtualesguatemala.com',
  trailingSlash: 'never', // ESTO elimina el / de las URLs
  // ... resto de tu config
});

