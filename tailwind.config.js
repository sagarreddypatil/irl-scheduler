/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2c3039",
        background: "#f6efed",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
