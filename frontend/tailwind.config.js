/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
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
      label:"#525252",
    },
    fontFamily: {
      cursive: '"Cedarville Cursive", cursive;',
    },
    backgroundImage: {
      img1: "url('./src/assets/cow-img1.png')",
      img2: "url('./src/assets/cow-img0.png')",
      bg1: "url('./src/assets/cow-bgImg0.png')",
      bg2: "url('./src/assets/cow-bgImg2.png')",
      kunal: "url('./src/assets/kunal.jpg')",
    },
  },
  plugins: [],
};
