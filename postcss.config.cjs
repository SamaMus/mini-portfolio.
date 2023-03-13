/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html','./src/**/*.{jsx,js}'],
  darkMode:'media', //can also be class
  theme: {
    extend: {
        fontFamily:{
            inter: ['inter', 'serif'],
            
        }
    },
  },
  plugins: [],
}
