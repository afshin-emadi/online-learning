/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        "1/10": "10%",
        "2/10": "20%",
        "3/10": "30%",
        "4/10": "40%",
        "5/10": "50%",
        "6/10": "60%",
        "7/10": "70%",
        "8/10": "80%",
        "9/10": "90%",
      },
      maxWidth: {
        "8xl": "1400px",
        "9xl": "1600px",
      },
      screens: {
        mobile: "360px",
        tablet: "601px",
        laptop: "1024px",
        desktop: "1280px",
        tv: "1920px",
      },
      fontFamily: {
        iranSans: ["IRANSans", "sans-serif"],
      },
      colors: {
        "my-red-500": "#f51767",
      },
      boxShadow: {
        light: "rgba(19, 15, 235, 0.1) 1px 2px 20px",
      },
      keyframes: {
        slideDown: {
          "0%": { "transform-origin": "0 0", transform: "translateY(-40%)" },
          "100%": { "transform-origin": "0 0", transform: "translateY(0%)" },
        },
        rgb: {
          "0%": {
            filter:
              "invert(28%) sepia(55%) saturate(6915%) hue-rotate(325deg) brightness(94%) contrast(104%)",
          },
          "25%": {
            filter:
              "invert(72%) sepia(60%) saturate(1845%) hue-rotate(0deg) brightness(103%) contrast(105%)",
          },
          "50%": {
            filter:
              "invert(27%) sepia(98%) saturate(1844%) hue-rotate(161deg) brightness(86%) contrast(101%)",
          },
          "75%": {
            filter:
              "invert(7%) sepia(87%) saturate(7400%) hue-rotate(281deg) brightness(76%) contrast(106%)",
          },
          "93.75%": {
            filter:
              "invert(78%) sepia(4%) saturate(2492%) hue-rotate(302deg) brightness(104%) contrast(103%)",
          },
          "100%": {
            filter:
              "invert(28%) sepia(55%) saturate(6915%) hue-rotate(325deg) brightness(94%) contrast(104%)",
          },
        },
      },
      animation: {
        slideDown: "slideDown 0.3s linear 1",
        rgb: "rgb 20s linear infinite",
      },
    },
  },
  plugins: [],
};
