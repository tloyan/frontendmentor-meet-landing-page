import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: "var(--font-red-hat-display)"
      },
      colors: {
        cyan: {
          600: "hsl(192, 37%, 48%)",
          300: "hsl(192, 90%, 77%)"
        },
        purple: {
          600: "hsl(268, 34%, 53%)",
          300: "hsl(268, 100%, 86%)"
        },
        slate: {
          900: "hsl(240, 21%, 20%)",
          600: "hsl(240, 10%, 57%)",
          300: "hsl(240, 18%, 85%)"
        },
        white: "hsl(0, 0%, 98%)"
      }
    },
  },
  plugins: [],
};
export default config;
