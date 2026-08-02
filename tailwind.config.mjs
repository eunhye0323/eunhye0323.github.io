import defaultTheme from 'tailwindcss/defaultTheme';
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['InterVariable', 'Inter', 'Apple SD Gothic Neo', 'Malgun Gothic', 'Noto Sans KR', ...defaultTheme.fontFamily.sans],
        heading: ['InterVariable', 'Inter', 'Apple SD Gothic Neo', 'Malgun Gothic', 'Noto Sans KR', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: '#2563eb',
      },
    },
  },
  plugins: [typography],
};
