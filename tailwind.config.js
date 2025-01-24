/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#888",
        secondary: {
          light: "rgb(214, 238, 214)",
          dark: "#00C700",
          veryDark: "#045904",
          cart: "rgb(112, 219, 112)",
        },
        btn: {
          primary: "#00C700",
          secondary: "#FFFFFF",
        },
        backdrop: "rgba(0, 0, 0, 0.6)",
      },
      fontFamily: {
        body: ["campton"],
        heading: ["camptonExtraBold"],
        subHeading: ["camptonBold"],
        subHeading2: ["camptonMedium"],
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
