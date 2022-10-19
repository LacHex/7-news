/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    fontFamily: {
      primary: '"Poppins", sans-serif',
      secondary: '"Inter", sans-serif'
    },
    extend: {}
  },
  plugins: []
};
