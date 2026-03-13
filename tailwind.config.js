/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'], // watch edits to compile by vite
  theme: {
    extend: {
      fontFamily:{
        sans: ['Popins', 'sans-serif']
      },
      gridTemplateColumns:{
        '70/30' : '70% 28%'
      }
    },
  },
  plugins: [],
}

