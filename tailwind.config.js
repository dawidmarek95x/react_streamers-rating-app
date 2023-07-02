import withMT from "@material-tailwind/react/utils/withMT";

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "#7A3AED",
        "accent-dark": "#5D12E4",
      },
      fill: {
        accent: "#7A3AED",
        "accent-dark": "#5D12E4",
      },
      backgroundColor: {
        accent: "#7A3AED",
        "accent-dark": "#5D12E4",
      },
      boxShadow: {
        accent:
          "0px 0px 0.85em 0.15em #7A3AED, inset 0px 0px 0.85em 0.10em #7A3AED, 0px 0px 0.5em 0.15em #7A3AED, inset 0px 0px 0.5em 0.10em #7A3AED",
      },
    },
    fontFamily: {
      serif: ["Roboto", "sans-serif"],
      mono: ["Roboto Mono", "monospace"],
    },
    screens: {
      xxs: "320px",
      xs: "375px",
      sm: "576px",
      md: "768px",
      lg: "1024px",
      xl: "1200px",
      xxl: "1440px",
    },
  },
  plugins: [],
});
