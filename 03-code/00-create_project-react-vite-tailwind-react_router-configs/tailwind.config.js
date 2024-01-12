/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        iranSans: ["IRANSans", "sans-serif"],
      },
      colors: {},
      keyframes: {
        slideDown: {
          "0%": { "transform-origin": "0 0", transform: "translateY(-40%)" },
          "100%": { "transform-origin": "0 0", transform: "translateY(0%)" },
        },
      },
      animation: {
        slideDown: "slideDown 0.3s linear 1",
      },
    },
  },
  plugins: [],
};
