const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      ...colors,
      dark: "#0a0a0a",
      "upstairs-purple": "#6122bf",
      "upstairs-dark-purple": "#541aab",
      "github-white": "#fafafa",
      "github-gray": "#333333",
      "linkedin-blue": "#0077B5",
    },
    extend: {
      gradientColorStops: {
        "to-header-transparent":
          "--tw-gradient-from: #fff1f2; --tw-gradient-to: rgb(255 241 242 / 0); --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);",
      },
    },
  },
  plugins: [],
};
