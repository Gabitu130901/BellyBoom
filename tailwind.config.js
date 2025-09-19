/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        coral: '#FF6F61',
        emerald: '#2ECC71',
        ivory: '#FFFBF7',
        charcoal: '#2F3B3F',
        sand: '#F2E9E4',
        rose: '#E7A6B1',
      },
    },
  },
  plugins: [],
};
