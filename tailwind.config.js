import { defineConfig } from "vite";
import { COLOR_JSON } from "./src/tw-config/colorJson";

/** @type {import('tailwindcss').Config} */
export default defineConfig({
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["outfit-regular", "sans-serif"],
        "outfit-medium": ["outfit-medium", "sans-serif"],
        "inter-regular": ["inter-regular", "sans-serif"],
        "inter-medium": ["inter-medium", "sans-serif"],
      },
      colors: COLOR_JSON,
    },
  },
  plugins: [],
});
