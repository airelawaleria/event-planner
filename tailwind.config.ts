import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ba68c8",
        "primary-hover": "#5b2c65",
        secondary: "#e1bde8",
        "secondary-hover": "#72407A",
        "primary-surface": "#2A373E",
        "secondary-surface": "#374751",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
