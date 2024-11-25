/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#4839E5',  // The purple/blue color from your design
        'danger': '#ff3b30',   // For the subscription warning
      }
    },
  },
  plugins: [],
}