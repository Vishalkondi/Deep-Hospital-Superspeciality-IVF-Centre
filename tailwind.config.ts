import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "deep-navy": "#0A1628",
        "medical-blue": "#1B4FD8",
        "teal-heal": "#0D9488",
        "warm-white": "#F8FAFC",
        "soft-grey": "#E2E8F0",
        "text-primary": "#0F172A",
        "text-muted": "#64748B",
        "gold-trust": "#D97706",
        "emergency-red": "#DC2626",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      animation: {
        "pulse-slow": "pulse-slow 4s ease-in-out infinite",
        "fade-in": "fade-in 0.8s ease-out forwards",
        "slide-up": "slide-up 0.6s ease-out forwards",
        "count-up": "count-up 2s ease-out forwards",
      },
      keyframes: {
        "pulse-slow": {
          "0%, 100%": { transform: "scale(1)", opacity: "0.3" },
          "50%": { transform: "scale(1.15)", opacity: "0.15" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-teal-navy":
          "linear-gradient(135deg, #0D9488 0%, #0A1628 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
