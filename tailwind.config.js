/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: "display",
        graph: "Inter"
      },
      colors: {
        "light-blue": "#838FFF",
        "dark-purple": "#3F008F",
      }
    },
  },
  plugins: [],
}