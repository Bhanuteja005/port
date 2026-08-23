const svgToDataUri = require("mini-svg-data-uri");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/*"
  ],

  theme: {
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
      '6xl': '4.052rem',
      '7xl': '5.052rem',
    },

    extend: {
      fontFamily: {
        'sans': ['Lato', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
        'raleway': ['Raleway', '-apple-system', 'sans-serif'],
        'lato': ['Lato', 'ui-sans-serif', 'sans-serif'],
      },

      colors: {
        "dark-gray": "rgb(var(--color-dark-gray) / <alpha-value>)",
        "primary": "rgb(var(--color-primary) / <alpha-value>)",
        "secondary": "rgb(var(--color-secondary) / <alpha-value>)",
        "third": "rgb(var(--color-third) / <alpha-value>)",
        "primary-text": "rgb(var(--color-primary-text) / <alpha-value>)",
        "secondary-text": "rgb(var(--color-secondary-text) / <alpha-value>)"
      },

      screens: {
      },

      animation: {
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },

      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },

        shimmer: {
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-200% 0",
          },
        },
      },
    },
  },

  plugins: [
    require("@tailwindcss/aspect-ratio"),
    backgroundSVG
  ],

  darkMode: 'class',
}

function backgroundSVG({ matchUtilities, theme }) {
  matchUtilities(
    {
      "bg-grid": (value) => ({
        backgroundImage: `url("${svgToDataUri(
          `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
        )}")`,
      }),
      "bg-grid-small": (value) => ({
        backgroundImage: `url("${svgToDataUri(
          `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
        )}")`,
      }),
      "bg-dot": (value) => ({
        backgroundImage: `url("${svgToDataUri(
          `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
        )}")`,
      }),
    },
    { values: theme("backgroundColor"), type: "color" }
  );
}