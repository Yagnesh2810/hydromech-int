/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#f0f4f8',
          100: '#d9e2ec',
          200: '#bcccdc',
          300: '#9fb3c8',
          400: '#829ab1',
          500: '#4a5f8e', // Navy Light
          600: '#2e446b', // Navy Mid
          700: '#1c2f4a', // Navy Deep
          800: '#11385c', // Navy Background
          900: '#0b223c',
        },
        steel: {
          50: '#f6f7f8', // Paper
          100: '#dedfdf', // Steel Light
          200: '#c0c1c1', // Steel Mid
          300: '#9e9f9f', // Steel Dark
          400: '#717170', // Gunmetal Text
          500: '#555555',
          600: '#444444',
          700: '#333333',
          800: '#222222',
          900: '#111111',
        },
        accent: {
          50: '#f6f7f8',
          100: '#dedfdf',
          200: '#c0c1c1',
          300: '#9e9f9f',
          400: '#717170',
          500: '#2e446b',
          600: '#1c2f4a',
          700: '#11385c',
        }
      },
    },
  },
  plugins: [],
}