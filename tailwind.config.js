/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Hero gradient colors
        hero: {
          start: "#6A002F", // deep burgundy
          mid: "#7A003A",   // rich plum
          end: "#5C0027",   // dark maroon
        },

        // Brand accent (Asana-style pink/red)
        brand: "#F06A6A",

        // Secondary accents (buttons, tags, statuses)
        accent: {
          blue: "#3E8BFF",
          orange: "#FFB357",
          green: "#22C55E",
          yellow: "#FACC15",
        },

        // Card + surfaces
        card: {
          base: "#FFFFFF",
          light: "#F7F7F7",
          divider: "#E5E5E5",
        },

        // Text colors
        text: {
          headline: "#FFFFFF",
          sub: "#FBECEE",
          dark: "#202020",
          gray: "#6B6B6B",
        },
      },

      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },

      boxShadow: {
        soft: "0 18px 45px rgba(0, 0, 0, 0.35)",
      },

      fontFamily: {
        // you can use this as font-sans if you like
        sans: ["system-ui", "ui-sans-serif", "Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};

