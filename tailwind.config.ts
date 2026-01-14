import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ivory: "#F6F1E8",
        sand: "#E7DED2",
        ink: "#141414",
        stone: "#8E877E"
      },
      boxShadow: {
        soft: "0 20px 60px rgba(0,0,0,0.12)"
      }
    }
  },
  plugins: []
} satisfies Config;
