/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["var(--font-montserrat)"],
        cormorant: ["var(--font-cormorant)"],
        dm: ["var(--font-dm)"],
      },

      animation: {
        'fade-left': "fadeInLeft 1.2s ease forwards",
        'fade-right': "fadeInRight 1.2s ease forwards",
        'fade-up': "fadeInUp 0.6s ease forwards",
      },

      colors: {
        cream: "#FAF7F2",
        gold: "#D4AF37",
        espresso: "#3B2F2F",
      },
    },
  },
  plugins: [],
};