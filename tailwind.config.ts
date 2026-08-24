import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        team: {
          white: "#F8FAFC",
          red: "#EF4444",
          blue: "#3B82F6",
          purple: "#A855F7",
          yellow: "#EAB308",
          green: "#22C55E",
          orange: "#F97316",
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
