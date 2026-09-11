import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F8F2E9",
        sand: "#E9DCCB",
        bark: "#342D28",
        clay: "#A96755",
        rose: "#B77968",
        olive: "#66634F",
        gold: "#B18A58"
      },
      fontFamily: {
        serif: ["Georgia", "Times New Roman", "serif"]
      },
      boxShadow: {
        soft: "0 20px 60px rgba(52,45,40,0.08)"
      }
    }
  },
  plugins: []
};

export default config;
