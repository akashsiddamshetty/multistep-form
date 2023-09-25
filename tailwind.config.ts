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
        Ubuntu: ["Ubuntu", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        mobile_background: "url('/bg-sidebar-mobile.svg')",
        desktop_background: "url('/bg-sidebar-desktop.svg')",
      },
      colors: {
        custom_bg: "#EFF5FF",
        custom_border: "#D6D9E6",
        Grey: "#9699AA",
        Denim: "#022959",
        lightBlue: "#ABBCFF",
        skyBlue: "#BEE2FD",
        redError: "#EE374A",
        lightDenim: "#164A8A",
        purpleBorder: "#483EFF",
        veryLightGrey: "#F8F9FF",
      },
    },
  },
  plugins: [],
};
export default config;
