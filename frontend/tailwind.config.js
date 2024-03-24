/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        goa: "#0070c4"
      },
      fontFamily: {
        "acumin": ["acumin-pro-semi-condensed", "Acumin Pro", "sans-serif"],
      }
    },
  },
  plugins: [],
};
