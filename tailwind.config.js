/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-cyan-100": "hsl(193, 38%, 86%)",
        "brand-green-400": "hsl(150, 100%, 66%)",
  
        "brand-blue-200": "hsl(217, 19%, 38%)",
        "brand-blue-300": "hsl(217, 19%, 24%)",
        "brand-blue-400": "hsl(218, 23%, 16%)",
      },
      screens: {
        "sm": "320px",
        "md": "600px",
        "lg": "1000px"
      },
      boxShadow: {
        '3xl': '0 0 30px 1px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [],
}

