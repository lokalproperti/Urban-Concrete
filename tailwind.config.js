/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'concrete-bg': '#FAFAF9',
        'concrete-text': '#1C1917',
        'concrete-accent': '#44403C',
      },
      fontFamily: {
        'baskerville': ['Libre Baskerville', 'serif'],
        'inter': ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}