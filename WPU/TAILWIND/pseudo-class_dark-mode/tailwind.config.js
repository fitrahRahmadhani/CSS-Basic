/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      spacing:{
        13: '3.25rem',
      },
      fontFamily:{
        inter: ['Inter']
      },
      colors:{
        wpu: '#bada55'
      }
    },
  },
  plugins: [],
}

