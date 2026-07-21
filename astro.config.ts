import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://eunhye0323.github.io',
  base: '/',
  integrations: [tailwind({ applyBaseStyles: false })],
  output: 'static',
});
