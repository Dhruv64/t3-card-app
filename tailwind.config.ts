/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkslateblue: "#061e47",
        white: "#fff",
        limegreen: "#48e221",
        black: "#000",
        mintcream: "#f6faf6",
        paleturquoise: "#a0fff5",
        gray: "#fefefe",
        whitesmoke: "#f1f1f1",
      },
      fontFamily: { inter: "Inter", inherit: "inherit" },
      borderRadius: { "3xs": "10px", "11xl": "30px" },
    },
    fontSize: {
      "5xl": "24px",
      "9xl": "28px",
      "45xl": "50px",
      "77xl": "96px",
      "lg": "18px",
      "xl": "20px",
      "2xl": "24px",
      "3xl" : "30px",
      "4xl": "36px",
      "6xl": "60px",
      "7xl": "72px",
      "8xl": "96px",
    
    },
  },
  corePlugins: {preflight: false},
  plugins: [],
}
