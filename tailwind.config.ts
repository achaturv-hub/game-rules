import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    colors: {
      black: "#000000",
      white: "#ffffff",
      green: "#00FF00",
      red: "#FF0000",
      background: {
        dark: "#100E17"
      }
    },
    extend: {
      keyframes: {
        "move-out": {
          '0%': { transform: 'translateY(0.0deg)' },
          '50%': { transform: 'translateY(-20px)' },
          '100%': { transform: 'translateY(0.0deg)' },
        },
      },
      animation: {
        'bounce-ball': 'move-out 1s ease infinite 100ms',
        'bounce-ball-500': 'move-out 1s ease infinite 200ms',
         'bounce-ball-1000': 'move-out 1s ease infinite 300ms'
      },
      
    },
  },
  plugins: [],
} satisfies Config;
