/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  mode: "jit",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#202023",
        light: "#F9F9F9",
        blue: "#33d2ff",
        'dark-blue': '#144272',
        gray: "#C4C4C4",
        "dark-gray": "#1A1A1A",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        outfit: ["Outfit", "sans-serif"],
      },
    },
  },
  plugins: [],
}