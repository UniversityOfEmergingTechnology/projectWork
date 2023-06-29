/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'walsheim': ['GT Walsheim Pro', 'sans-serif'],
        'walsheimMed': ['GT Walsheim GT Walsheim Medium', 'sans-serif'],
        'walsheimReg': ['GT Walsheim Regular', 'sans-serif'],
        'walsheimCon': ['GT Walsheim Condensed', 'sans-serif'],
      },
    },
  },
  plugins: [],
}