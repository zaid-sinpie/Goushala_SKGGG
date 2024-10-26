/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        slideInFromLeft: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        slideInFromLeft: "slideInFromLeft 0.5s ease-out forwards",
      },
      fontFamily: {
        "lato-thin": ["Lato", "sans-serif"],
      },
    },
    colors: {
      text: "#fff",
      white: "#fff",
      blur: "#42424262",
      divider: "#4949495d",
      dark: "#000",
      darkTextBtnBg: "#343434",
      dullText: "#e4e4e4",
      calmbg: "#FFFAFA",
      stroke: "#CDCDCD",
      label: "#525252",
      slate50: "#f8fafc",
      red50: "#fef2f2",
    },
    fontFamily: {
      cursive: '"Cedarville Cursive", cursive;',
    },
    backgroundImage: {
      img1: "url('/cow-img1.png')",
      img2: "url('/cow-img0.png')",
      bg1: "url('/cow-bgImg0.png')",
      bg2: "url('/cow-bgImg2.png')",
      kunal: "url('/kunal.jpg')",
    },
  },
  plugins: [],
};
