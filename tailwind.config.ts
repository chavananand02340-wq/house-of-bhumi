import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F5F0E8",
        sand: "#E8DDCC",
        bark: "#342D25",
        clay: "#A7654C",
        olive: "#606650"
      },
      fontFamily: {
        serif: ["Georgia", "serif"]
      }
    }
  },
  plugins: []
};

export default config;
