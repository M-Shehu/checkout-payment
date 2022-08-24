/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "regal-blue": "#D7E8F9",
        "maybe-grey": "#ACABBC",
        "clean-blue": "#2254CC",
      },
      fontSize: {
        xxs: "9px",
      },
      fontFamily: {
        mono: ["IBM Plex Sans", ...defaultTheme.fontFamily.mono],
      },
      spacing: {
        26: "105px",
        112: "26rem",
      },
    },
  },
  plugins: [],
};
