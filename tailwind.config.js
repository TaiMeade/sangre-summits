/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  // Vuetify ships its own base/reset styles. Tailwind's preflight would clash
  // with them, so we disable it and use Tailwind purely for utilities.
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      colors: {
        // Mirrors the Vuetify theme in src/plugins/vuetify.js
        alpenglow: '#B23A2E', // sunset red on the peaks — "sangre de cristo"
        adobe: '#C1683C', // clay / terracotta
        sage: '#7C8B6F', // high-desert sage
        turquoise: '#2A9D8F', // NM turquoise accent
        sand: '#E9D8C4', // warm sand
        mountain: '#1D2D44', // deep mountain indigo
        'mountain-soft': '#2B3F5C',
      },
      fontFamily: {
        display: ['Sora', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '1200px',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards',
      },
    },
  },
  plugins: [],
}
