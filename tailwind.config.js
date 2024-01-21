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
      arial: ['BPG Mrgvlovani']
    },
    screens: {
      'xsm': '400px',

      'sm': '640px',

      'md': '768px',

      'lg': '1024px',

      'xl': '1280px',
    },

  },
  plugins: [],
}