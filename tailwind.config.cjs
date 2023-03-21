/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "580px",
      md: "725px",
      lg: "850px",
      xl: "1280px",
      "2xl": "1536px",
    },
    colors: {
      purple: "#6F73EE",
      "purple-200": "#8185F9",
      black: "#282739",
      "gray-600": "#5D6C7B",
      "gray-200": "#EAEBED",
      white: "#FFFFFF",
      bg: "#F4F7FB",
      red: "#EE685F",
      orange: "#F3A712",
      green: "#75D14A",
    },
    extend: {
      fontFamily: {
        jost: ["Jost", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        sfprodisplay: ["SF Pro Display", "sans-serif"],
        sfprotext: ["SF Pro Text", "sans-serif"],
      },
    },
  },
  plugins: [],
};
