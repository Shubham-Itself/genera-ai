import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      boxShadow: {
        "header-box-shadow": "0px 0px 10px 0px rgba(0, 0, 0, 0.07)",
      },
      fontFamily: {
        "campton-bold": ["CamptonBold", "sans-serif"],
        "campton-book": ["CamptonBook", "sans-serif"],
        "campton-medium": ["CamptonMedium", "sans-serif"],
        "campton-semibold": ["CamptonSemiBold", "sans-serif"],
        "metaplus-medium": ["MetaPlusMedium", "sans-serif"],
        metaplus: ["MetaPlus", "sans-serif"],
        "myriad-pro": ["MyriadPro-Regular", "sans-serif"],
      },
      screens: {
        md: { max: "768px" },
        tab: { min: "769px", max: "1279px" },
      },
    },
  },
  plugins: [],
} satisfies Config;
