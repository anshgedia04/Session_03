/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "*" ],
  theme: {
    extend: {
      colors: {
        'primary': '#DF6951',
        'secondary': '#F1A501',
        'text-dark': '#181E4B',
        'text-light': '#5E6282',
        'text-heading': '#14183E',
        'white-smoke': '#FFF1DA',
        'light-gray': '#F5F5F5',
        'light-purple': '#DFD7F9',
      },
      fontFamily: {
        'poppins': ['"Poppins"', 'sans-serif'],
        'volkhov': ['"Volkhov"', 'serif'],
        'sans': ['"Google Sans"', 'sans-serif'],
        'montserrat': ['"Montserrat"', 'sans-serif'],
      },
      boxShadow: {
        'card': '0px 1.85px 3.15px 0px rgba(0, 0, 0, 0), 0px 8.15px 6.52px 0px rgba(0, 0, 0, 0.01), 0px 20px 13px 0px rgba(0, 0, 0, 0.01), 0px 38.52px 25.48px 0px rgba(0, 0, 0, 0.01), 0px 64.81px 46.85px 0px rgba(0, 0, 0, 0.02), 0px 100px 80px 0px rgba(0, 0, 0, 0.02)',
        'button': '0px 20px 35px 0px rgba(241, 165, 1, 0.15)',
        'play': '0px 15px 30px 0px rgba(223, 105, 81, 0.3)',
      },
      borderRadius: {
        'xl-top': '129px',
      }
    },
  },
  plugins: [],
}

