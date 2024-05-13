/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sidenavCol:'#475569',
        ColItem:'#d1d5db',
        ColHover:'#e2e8f0',
        mainCol:'#d8b4fe',
        boxCol:'#d8b4fe',
      },
    },
  },
  plugins: [],
}

