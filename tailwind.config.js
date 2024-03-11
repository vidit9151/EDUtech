/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryGreen: "#5CDB95",
        lighterPrimaryGreen: "#8EE4AF",
        secondaryGreen: "#379683",
        complementryBlue: "#05386B",
        complementryGrey: "#EDF5E1",
      },

      fontFamily: {
        ubuntu: ["Ubuntu", "sans-serif"],
      },
    },
  },
  plugins: [],
};
