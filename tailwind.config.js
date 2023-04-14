const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "dbs-wallpaper": "url('./assets/dbs.jpeg')",
      },
      animationDelay: {
        5000: "5000ms",
      },
      animation: {
        ["fade-out"]: "fadeOut 0.5s ease-in-out forwards",
        ["fade-in"]: "fadeIn 0.5s ease-in-out forwards",
      },
      keyframes: (theme) => ({
        fadeOut: {
          "0%": { opacity: 100 },
          "100%": { opacity: 0 },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 100 },
        },
      }),
    },
    variants: {
      animationDelay: ["responsive", "hover"],
    },
  },
  plugins: [],
});
