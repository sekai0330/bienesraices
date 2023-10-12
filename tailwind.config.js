/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      header1: "#323831",
      header2: "#3F443E",
      //footer: "#0f172a",
      footer: "#131313",
      botones: "#C5AA5A",
      botoneshover: "#A58944",
      botondisable: "#e5e7eb",
      textgris: "#6b7280",
      white: "#ffffff",
      black: "#131313",
      grisclaro: "#e5e7eb",
      precio: "#C5AA5A",
      navegacion: "#C5AA5A",
      fondodetalles: "#FFF8E2",
      wsboton: "#25D366"
    }
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}

