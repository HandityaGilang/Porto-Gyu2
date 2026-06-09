/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        lg: "2rem",
        xl: "2.5rem",
      },
    },
    extend: {
      colors: {
        bg: {
          main: "var(--bg-main)",
          soft: "var(--bg-soft)",
        },
        text: {
          main: "var(--text-main)",
          muted: "var(--text-muted)",
        },
        accent: {
          red: "var(--accent-red)",
          "red-dark": "var(--accent-red-dark)",
          gold: "var(--accent-gold)",
        },
        border: {
          soft: "var(--border-soft)",
        },
      },
      borderRadius: {
        "4xl": "2rem",
      },
      boxShadow: {
        soft: "var(--shadow-soft)",
        card: "var(--shadow-card)",
      },
      backgroundImage: {
        "gold-line": "linear-gradient(90deg, rgba(223,164,85,0), rgba(223,164,85,0.9), rgba(223,164,85,0))",
      },
    },
  },
  plugins: [],
};
