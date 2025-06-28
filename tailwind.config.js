/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.liquid'],
  theme: {
    screens: {
      'xxs': '421px',
      'xs': '577px',
      'sm': '641px',
      'md': '769px',
      'lg': '1025px',
      'xl': '1281px',
      '2xl': '1537px',
    },
    extend: {},
  },
  plugins: []
}