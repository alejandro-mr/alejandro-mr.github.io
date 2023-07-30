module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    fontFamily: {
      sans: ['Ringside Regular A', 'Ringside Regular B', 'sans-serif'],
      serif: ['Lora', 'serif'],
      logo: ['Bodoni Moda', 'serif'],
      'plus-jakarta': ['Plus Jakarta Sans', 'sans-serif'],
      overpass: ['Overpass', 'sans-serif'],
    },
    extend: {
      gridTemplateColumns: {
        menu: '12% auto 10%',
      },
      colors: {
        viva_magenta: '#BB2649',
        viva_magenta_shade: '#FC3262',
        primary: '#6667ab',
        background_t: '#03030D',
        background_b: '#0F0F38',
        secondary: '#EBEBFF',
        ternary: '#17AEE6',
        four: '#0E475C',
      },
      backgroundImage: {
        'github-icon': "url('/github-icon.svg')",
        'linkedin-icon': "url('/linkedin-icon.svg')",
      },
      screens: {
        '2xl': '1680px',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        menu: {
          '0% 100%': {
            width: 0,
          },
          '50%': {
            width: '100%',
          },
        },
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        menu: 'menu 1s ease-in-out 1',
      },
    },
  },
  plugins: [],
};
