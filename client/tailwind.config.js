/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{jsx,js,tsx,ts}'],
  theme: {
    extend: {
      screens: {
        'xsm': {'min': '200px', 'max': '640px'},
      },
    },
  },
  plugins: [],
}

