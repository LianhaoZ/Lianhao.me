const { addDynamicIconSelectors } = require('@iconify/tailwind');

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    addDynamicIconSelectors(),
    require("daisyui"),
  ],
  daisyui: {
    themes: ["synthwave", "dark", 'night'],
  },
  darkMode: ['class', '[data-theme="night"]'],
}