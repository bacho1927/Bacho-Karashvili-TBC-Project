/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      archy: ["BPG Arial Caps"],
      arial: ['BPG Mrgvlovani'],
      mrgvlovani: ["BPG Mrgvlovani Caps"]

    },
    screens: {
      'xsm': '320px',

      'sm': '640px',

      'md': '768px',

      'lg': '1024px',

      'xl': '1280px',
    },
    keyframes: {
      slide: {
        "0%": { opacity: 0 },
        "100%": { opacity: 1 },
      },
      sideReveal: {
        '0%': {

          transform: 'translateX(100%)',
        },
        '100%': {

          transform: 'translateX(0)',
        },

      },
      
    },
    plugins: [],
  }
}