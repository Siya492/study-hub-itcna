import type { Config } from "tailwindcss";

/**
 * Tailwind CSS configuration for the ITCNA1-12 Study Hub.
 *
 * NOTE: Tailwind CSS v4 uses CSS-first configuration by default.
 * This JS config file is kept for reference and as a fallback.
 * You can also define these tokens in your global CSS using
 * @theme { ... } blocks if you prefer the v4 CSS-first approach.
 */
const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/lib/**/*.{ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Dark backgrounds — matching the existing study_hub.html
        bg: {
          DEFAULT: "#0f0f1a",
          secondary: "#1a1a2e",
        },
        // Accent palette
        accent: {
          DEFAULT: "#6c63ff", // Primary purple
          pink: "#ff6584",    // Secondary pink
          green: "#43e97b",   // Success / progress green
          yellow: "#f9d423",  // Warning / highlight yellow
        },
        // Text
        foreground: {
          DEFAULT: "#e8e8f0",
          muted: "#a0a0b8",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
      // TODO: Add keyframes for card hover animations, progress bar fills, etc.
    },
  },
  plugins: [
    // TODO: Add @tailwindcss/typography for rich topic content rendering
    // TODO: Add @tailwindcss/forms for quiz input styling
  ],
};

export default config;
