/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-bg-color": "#272A39",
        "primary-font-color": "#70D050",
        "secondary-font-color": "#B4BFB5",
      },
    },
  },
  plugins: [],
};
