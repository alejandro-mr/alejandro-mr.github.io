/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    fontFamily: {
      orienta: ['Orienta', 'sans-serif'],
      sora: ['Sora Variable', 'sans-serif'],
    },
    extend: {
      colors: {
        background: '#12151A',

        blueberry: '#2C333E',
        grapemist: '#8398CA',
        pristine: '#F2E8DA',
        marsala: '#964F4C',
        'almond-peach': '#D8C8BD',
        'mango-mint': '#CDB127',
        'peach-fuzz': '#FFBE98',
        'peach-pearl': '#FFB2A5',
        'peach-puree': '#EFCFBA',
        'georgia-peach': '#F97272',
        'nautical-blue': '#1B5091',
        'aurora-pink': '#E881A6',
        'pink-yarrow': '#CE3375',
        'party-punch': '#C54966',
        'sun-dried-tomato': '#752329',
      },
    },
  },
  plugins: [],
};
