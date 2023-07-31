/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'main-color': '#f49d37',
      'dark-color': '#6a4c29',
      'text-color': '#f6fdfa',
      'bg-header': '#2c241c',
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}