module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    fontFamily: {
      sans: ['Ringside Regular A', 'Ringside Regular B', 'sans-serif'],
      serif: ['Lora', 'serif'],
      logo: ['Bodoni Moda', 'serif'],
    },
    extend: {
      colors: {
        viva_magenta: '#BB2649',
        viva_magenta_shade: '#FC3262',
        primary: '#6667ab',
        background_t: '#03030D',
        background_b: '#0F0F38',
        secondary: '#EBEBFF',
      },
      screens: {
        '2xl': '1680px',
      },
    },
  },
  plugins: [],
};
