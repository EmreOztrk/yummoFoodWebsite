/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container:{
        screens:{
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1169px',
          '2xl': '1169px',
        },
      },
      colors:{
        primary:"#ffc637",
        secondary:"#222",
        red:"#e53e47",
        crown:"#3c3c3c",
      },
      fontFamily:{
        montserat: ['Montserrat', "sans-serif"],
        yeseva:['Yeseva One', "sans-serif"],
      },
    },
  },
  plugins: [],
}
