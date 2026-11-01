import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import rehypeBilingual from './src/utils/rehypeBilingual.mjs';

export default defineConfig({
  site: 'https://eunhye0323.github.io',
  base: '/',
  integrations: [tailwind({ applyBaseStyles: false })],
  markdown: { rehypePlugins: [rehypeBilingual] },
  output: 'static',
});
