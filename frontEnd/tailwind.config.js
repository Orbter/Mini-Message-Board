/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'], // Include your source files
  theme: {
    extend: {
      colors: {
        customWhiteBot: '#9EA5B0',
        customGrayBorder: '#D2D4D7',
      },
    },
  },
  plugins: [],
};
