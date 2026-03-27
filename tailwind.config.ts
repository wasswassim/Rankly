import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#7C3AED",
        accent: "#FF6B6B",
        "dark-bg": "#0D0D14",
        "light-bg": "#F9F7FF",
      },
      borderRadius: {
        card: "16px",
        pill: "999px",
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)", "DM Sans", "sans-serif"],
        display: ["var(--font-syne)", "Syne", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
