/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        thanh: ["DM sans", "sans-serif"],
      },
      colors: {
        primary: "#F62682",
      },
    },
  },
  plugins: [],
};
