/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#C18221",
          hover: "#E88D17",
        },

        secondary: {
          DEFAULT: "#215E61",
          hover: "#18484B",
        },

        accent: "#C18221",

        background: "#F4F2F2",

        card: "#FFFFFF",

        heading: "#1D2128",

        paragraph: "#5B6472",

        border: "#D9D9D9",

        success: "#22C55E",

        danger: "#EF4444",

        warning: "#F59E0B",
      },

      fontFamily: {
        heading: ["Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },

      maxWidth: {
        container: "1280px",
      },

      height: {
        navbar: "80px",
      },

      borderRadius: {
        xl: "0.75rem",
        "2xl": "1rem",
      },

      boxShadow: {
        card: "0 4px 20px rgba(0,0,0,0.06)",
        hover: "0 10px 35px rgba(0,0,0,0.12)",
      },
    },
  },

  plugins: [],
};
