import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      letterSpacing: {
        wide: "3px",
      },
      fontSize: {
        clamp: "clamp(20px, 9vw, 82px)",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#213445",
          secondary: "#3155d8",
          accent: "#d43fc4",
          neutral: "#5a5a5a",
          "base-100": "#8ACFFF",
          info: "#3ABFF8",
          success: "#22C55E",
          warning: "#F59E08",
          error: "#EF4444",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
export default config;
