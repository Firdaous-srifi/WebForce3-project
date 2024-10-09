/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {  // Add this line
        primary: "#0067FF",
        yellow: "#FEB60D",
        purple: "#9771FF",
        irisBlue: "#01B5C5",
        heading: "#181A1E",
        text: "#4E545F",
      },
      boxShadow: {
        panelShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;",
      },
    },
  },
  plugins: [],
}