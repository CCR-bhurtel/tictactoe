/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        Haiti: "#0D0A2E",
        Casal: "#2D5D6C",
        Hoki: "#728D96",
        Iron: "#D9D9D9",
        Black: "#000000",
        White: "#FFFFFF",
      },
      fontFamily: {
        Open: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
