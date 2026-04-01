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
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        inspira: {
          primary: "#465664",
          secondary1: "#686ea3",
          secondary2: "#424577",
          tertiary1: "#ff9a7b",
          tertiary2: "#ffaf57",
          amenities: "#08b554",
          "points-a": "#ea732d",
          "points-b": "#0b81d1",
          expiring: "#f7665f",
          quaternary1: "#08b554",
          quaternary2: "#45e68b",
          subhead: "#4d4d4d",
          header: "#333333",
          "color-subhead": "#3d3d3d",
          "btn-filters": "#a4a8c8",
          "lines-light": "#c3c3c3",
          lines: "#adadad",
          "nav-on": "#424577",
          bg: "#eef2f6",
        },
      },
      boxShadow: {
        card: "0px 3px 5px 4px rgba(0,0,0,0.05)",
        header: "0px 2px 9px 2px rgba(0,0,0,0.12)",
        comparison: "0px 1px 4px 5px rgba(0,0,0,0.15)",
      },
      letterSpacing: {
        inspira: "0.026em",
      },
    },
  },
  plugins: [],
};

export default config;
