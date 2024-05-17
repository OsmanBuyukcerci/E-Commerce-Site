import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      primary: "#363B49",
      secondary: "#9EA5BD",
      accent: "#5F6995",
      green: "#20c523",
      dgreen: "#15a418",
      lyellow: "#ebe459",
      black: "#000000",
      blue: "#6a7fc1",
      gray: "#4f4f4f",
      white: "#ffffff"
    }
  },
  plugins: [],
};
export default config;
