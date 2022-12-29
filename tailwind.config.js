/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        move: "move 1s ease-in-out",
      },
      keyframes: {
        move: {
          "0%": { left: "-100px" },
          "100%": { left: "0px" },
        },
      },
    },
  },
  plugins: [],
};
