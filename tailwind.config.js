/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "*{html,js}"],
  theme: {
    fontFamily: {
      'cerapro': ["Cera Pro", 'sans-serif']
    },
    extend: {
      backgroundImage: {
        'hero-gradient': "url('./dist/images/header_bg.png')",
        'all-content': "url('./dist/images/allcontent.png')",
        'feature': "url('./dist/images/feature_bg.png')",
      },
      animation: {
        'bounce-slow': 'bounce 3s linear infinite',
      },
      colors: {
        'primary': '#3070D4',
        'secondary': '#F4F4F8'
      }
    },
  },
  plugins: [],
}

