/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#333333",
        secondary: {
          veryLight: "rgba(212, 245, 213, 1)",
          light: "#00c700",
          dark: "#027402",
          veryDark: "#015401",
          cart: "rgb(112, 219, 112)",
          navBg: "rgb(228, 249, 228)",
        },
        btn: {
          primary: "#00C700",
          secondary: "#FFFFFF",
        },
        backdrop: "rgba(0, 0, 0, 0.6)",
      },
      fontFamily: {
        body: ["carbinet"],
        heading: ["cabinetExtraBold"],
        subHeading: ["cabinetBold"],
        subHeading2: ["cabinetMedium"],
        footerHeading: ["satoshiExtraBold"],
        footerSubHeading: ["satoshiMedium"],
        footerBody: ["satoshi"],
        btnBody: ["satoshiMedium"],
      },
      backgroundPosition: {
        "bottom-4": "center top",
      },
      fontSize: {
        "btn-txt": [
          "0.65rem",
          {
            lineHeight: "1rem",
            letterSpacing: "-0.01em",
          },
        ],
      },
    },
  },
  plugins: [],
};
