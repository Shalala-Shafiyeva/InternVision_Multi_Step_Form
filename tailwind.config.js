/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
       backgroundImage: {
        'main-bg': "url('./assets/imgs/bg.jpg')",
      },
    },
  },
  plugins: [],
}

