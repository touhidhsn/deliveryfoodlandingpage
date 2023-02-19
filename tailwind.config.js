/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx,jsx,js}"],
  theme: {
    fontFamily: {
      primary: "Open Sans",
      secondary: "Lato",
    },
    container: {
      padding: {
        default: "1rem",
        lg: "0",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1170px",
      },
    },
    extend: {
      colors: {
        primary: "#212353",
        secondary: "#4B5D68",
        accent: {
          primary: "#9C69E2",
          primary_hover: "#9059DB",
          secondary: "#F063BB",
          secondary_hover: "#E350A9",
          teriary: "68C9BA",
        },
      },
    },
  },
  plugins: [],
};
