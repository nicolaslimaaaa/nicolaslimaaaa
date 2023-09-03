/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'main-color': '#06D900',
      'dark-color': '#000500',
      'complement-color': '#3238e2',
      'text-color': '#f6fdfa',
      'icons-color': '#3c37d7',
    },
    extend: {
      fontFamily: {
        'dosis': ['Dosis', 'sans-serif']
      }
    },
  },
  plugins: [require("daisyui")],
}