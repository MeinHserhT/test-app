import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        pink: "#edc7b7",
        silver: "#eee2cd",
        grey: "#bab2b5",
        "dark-blue": "#123c69",
        velvet: "#ac3b61",
      },
    },
  },
  plugins: [],
} satisfies Config;
