// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", 
    "./dist/*.html",
    "./dist/result_pages/dudit_results.html"],
  theme: {
    screens: {
      xs: '320px',
      sm: '375px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      colors: {
        lightblue: "#1e90ff",
      }
    },
  },
  plugins: [],
}

