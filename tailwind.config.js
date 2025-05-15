/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  safelist: [
    'sidebar',
    'open',
    'sidebar.open',
    'animate-marquee',
    'line-clamp-3'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#233234',
        black: '#080705',
        accent: '#ED8626',
        gold: '#A47335',
        cream: '#DFBD82'
      },
    },
  },
  plugins: [],
}
