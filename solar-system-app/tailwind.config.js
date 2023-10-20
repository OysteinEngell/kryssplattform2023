/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors:{
      system:{
        brand: "#8686ff",
        brandbg: "#060625",
        white: "#ffffff"
      }
    },
    extend: {},
  },
  plugins: [],
}

