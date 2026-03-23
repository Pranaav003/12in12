/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#f7f5f0",
        canvas: "#ffffff",
        ink: "#0a0a0a",
        muted: "#5c5c5c",
        line: "#d4d0c8",
        accent: "#2a2a2a",
        desk: "#b0aba2",
        deskDark: "#1a1917",
        newsprint: "#edeae0",
        newsprintDark: "#2b2723",
      },
      boxShadow: {
        clipping:
          "0 1px 0 rgba(0,0,0,0.05), 0 2px 8px rgba(0,0,0,0.06), 0 12px 36px rgba(0,0,0,0.09)",
        clippingDark: "0 1px 0 rgba(0,0,0,0.35), 0 8px 36px rgba(0,0,0,0.45)",
      },
      fontFamily: {
        serif: ['"EB Garamond"', "Georgia", "Times New Roman", "serif"],
        display: ['"EB Garamond"', "Georgia", "Times New Roman", "serif"],
        sans: ['"Source Sans 3"', "system-ui", "sans-serif"],
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
      },
      transitionDuration: {
        400: "400ms",
      },
    },
  },
  plugins: [],
};
