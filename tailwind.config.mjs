import defaultTheme from 'tailwindcss/defaultTheme';
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['InterVariable', 'Inter', ...defaultTheme.fontFamily.sans],
        heading: ['InterVariable', 'Inter', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: '#2563eb',
      },
    },
  },
  plugins: [typography],
};
