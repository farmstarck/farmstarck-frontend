/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#333333",
        secondary: {
          light: "rgb(214, 238, 214)",
          dark: "#00C700",
        },
        btn: {
          primary: "#00C700",
          secondary: "#FFFFFF",
        },
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
