import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#213445", // dar grey
          secondary: "#3155d8", // blue
          accent: "#d43fc4", // bright pink
          neutral: "#5a5a5a", // light grey
          "background-base": "#8acfff",
          info: "#3ABFF8", // reg
          success: "#22C55E", // reg
          warning: "#F59E08", // reg
          error: "#EF4444", // reg
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
export default config;
