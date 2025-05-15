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
        accent: '#C64D14',     // 🔥 Bold Orange (buttons, links)
        muted: '#888C8A',      // 🧊 Gray (secondary text, borders)
        dark: '#212B2B',       // 🖤 Onyx Base (footer, sidebar)
        primary: '#2D4652',    // 🌊 Slate Blue (headers, nav)
        cream: '#D2B078',      // 🥯 Warm Neutral (backgrounds, alt cards)
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
        26: '6.5rem',
      },
      fontSize: {
        '2xs': '0.625rem',
        'tiny': '0.7rem',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        gold: '0 4px 14px rgba(210, 176, 120, 0.3)',
      },
      transitionProperty: {
        'spacing': 'margin, padding',
      },
    },
  },
  plugins: [],
}
