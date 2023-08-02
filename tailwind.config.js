/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'main-color': '#b9b6fb',
      'dark-color': '#4b3f30',
      'text-color': '#f6fdfa',
      'bg-header': '#251f18',
      'icons-color': '#3c37d7',
      'menu-color': '#f68356',
      'bg-footer': '#3e3428',
    },
    extend: {
      fontFamily: {
        'dosis': ['Dosis', 'sans-serif']
      }
    },
  },
  plugins: [require("daisyui")],
}