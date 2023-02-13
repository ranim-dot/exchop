/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    screens: {
      'sm': '260px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    animation: {
      blob: "blob 7s infinite",
    },
    keyframes: {
      blob: {
        "0%": {
          transform: "translate(0px, 0px) scale(1)",
        },
        "50%": {
          transform: "translate(20px, -40px) scale(0.9)",
        },
        "100%": {
          transform: "translate(0px, 00px) scale(1)",
        },
      },
    },
    extend: {},
    fontFamily : {
      'sans': ['Abril Fatface'],
      'serif': ['ui-serif', 'Georgia']
    }
  },

  plugins: [require('@tailwindcss/forms')],
}
