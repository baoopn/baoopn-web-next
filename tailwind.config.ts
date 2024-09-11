import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // mono: ['"IBM Plex Mono"', 'monospace'],
        mono: ['"Fira Mono"', 'monospace'],
        // mono: ['"Ubuntu Mono"', 'monospace'],
        sans: ['"Inter"', 'sans-serif'],
        sans_serif: ['"Comfortaa"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
