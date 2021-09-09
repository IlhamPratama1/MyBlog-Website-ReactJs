module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      maxWidth: {
       '7xl': '85rem',
      },
      fontFamily: {
       'playfair': ['"Playfair Display"',],
       'source': ['"Source Sans Pro"'],
      },
      colors: {
        'black-main': '#000000',
        'black-second': '#141414',
        'black-third': '#1B1B1B',
        'white-main': '#FFFFFF',
        'white-second': '#F3F3F3',
        'white-third': '#E1E1E1',
      },
      width: {
        '96': '36rem',
        '120': '120rem',
      },
      fontSize: {
        'xxs': '0.65rem',
        '4xl': '2.4rem',
       }
    },
  },
  variants: {
    extend: {
      animation: ['motion-safe'],
    }
  },
  plugins: [],
}
