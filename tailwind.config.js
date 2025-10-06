/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sf: ['SF Pro Display', 'sans-serif'],
      },
      colors: {
        'yamet-yellow': {
          DEFAULT: '#FFD600', // warna kuning utama, bisa diganti sesuai kebutuhan
          50: '#FFFDE7',
          100: '#FFF9C4',
          200: '#FFF59D',
          300: '#FFF176',
          400: '#FFD600', // utama
          500: '#FFCA28',
          600: '#FFC107',
          700: '#FFB300',
          800: '#FFA000',
          900: '#FF8F00',
        },
      },
    },
  },
  plugins: [],
}

