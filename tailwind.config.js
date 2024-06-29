/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
        MrDafoe: ["Mr Dafoe", "cursive"],
      },
      colors: {
        mywhite: "#D9D9D9",
        myOffWhite: "#e8eef2",
        myPink: "#F96666",
        myRed: "#DF3135",
        myGray: "#E8EEF2"
      },
    },
  },
  plugins: [],
};
