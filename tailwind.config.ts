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
          "base-100": "#ffffff",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
export default config;
