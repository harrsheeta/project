/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      colors: {
        pastel: {
          blue: '#B8E3FF',
          pink: '#FFD6E5',
          mint: '#C1F0C1',
          lavender: '#E2D9F3',
        },
      },
    },
  },
  plugins: [],
};