import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      letterSpacing: {
        wide: "3px", // Custom letter spacing
      },
      fontSize: {
        clamp: "clamp(20px, 9vw, 82px)", // Add custom font-size using clamp
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#213445", // dar grey
          secondary: "#3155d8", // blue
          accent: "#d43fc4", // bright pink
          neutral: "#5a5a5a", // light grey
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
