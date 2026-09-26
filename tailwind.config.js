/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          'canvas': '#0C0D11',
          'rosegold': '#E2A898',
          'platinum': '#E8EEF3',
          'pearl': '#FAF8F6',
          'rhodium': '#171821',
          'muted': '#9496A1',
          'border': 'rgba(226, 168, 152, 0.22)'
        }
      },
      fontFamily: {
        'display': ['Prata', 'serif'],
        'body': ['Urbanist', 'sans-serif']
      }
    },
  },
  plugins: [],
}
