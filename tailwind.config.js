/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        sm:'450px',
        md:'700px',
        lg:'1110px',
        xl:'1440px'  
      }
    },
  },
  plugins: [],
}