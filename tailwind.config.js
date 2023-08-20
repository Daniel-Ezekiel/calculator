/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html', 'js/script.js'],
  theme: {
    extend: {},

    fontSize: {
      sm: '1.2rem',
      base: '1.5rem',
      xl: '1.8rem',
      '2xl': '2rem',
      '3xl': '2.5rem',
      '4xl': '3rem',
      '5xl': '3.5rem',
    },

    spacing: {
      1: '0.5rem',
      2: '1rem',
      3: '1.5rem',
      4: '2rem',
      5: '2.5rem',
      6: '3rem',
      7: '3.5rem',
      8: '4rem',
      9: '4.5rem',
      10: '5rem',
    },

    borderWidth: {
      DEFAULT: '0.1rem',
      0: '0',
      2: '0.2rem',
      3: '0.3rem',
      4: '0.4rem',
      5: '0.5rem',
    },

    fontFamily: {
      sans: ['"League Spartan"', 'sans-serif', 'system-ui'],
    },
    //   // Backgrounds
    //   'theme1-main': '#3a4764',
    //   'theme2-main': '#e6e6e6',
    //   'theme3-main': '#160628',

    //   'theme1-toggle': '#232c43',
    //   'theme2-toggle': '#d1cccc',
    //   'theme3-toggle': '#1d0934',

    //   'theme1-screen': '#182034',
    //   'theme2-screen': '#ededed',
    //   'theme3-screen': '#1d0934',

    //   // Keys
    //   'theme1-keybg-1': '#637097',
    //   'theme1-keybg-2': '#d03f2f',
    //   'theme1-keybg-3': '#eae3dc',
    //   'theme1-keyshadow-1': '#404e72',
    //   'theme1-keyshadow-2': '#93261a',
    //   'theme1-keyshadow-3': '#b4a597',

    //   'theme2-keybg-1': '#377f86',
    //   'theme2-keybg-2': '#ca5502',
    //   'theme2-keybg-3': '#e5e4e1',
    //   'theme2-keyshadow-1': '#1b5f65',
    //   'theme2-keyshadow-2': '#893901',
    //   'theme2-keyshadow-3': '#a69d91',

    //   'theme3-keybg-1': '#58077d',
    //   'theme3-keybg-2': '#00e0d1',
    //   'theme3-keybg-3': '#341c4f',
    //   'theme3-keyshadow-1': '#bc15f4',
    //   'theme3-keyshadow-2': '#6cf9f2',
    //   'theme3-keyshadow-3': '#871c9c',

    //   // Text
    //   'grayish-blue': '#444b5a',
    //   'grayish-yellow': '#35352c',
    //   'light-yellow': '#ffe53d',
    //   'dark-blue': '#1b2428',
    //   white: '#fff',
    // },

    screens: {
      sm: '640px',
      md: '768px',
      lg: '840px',
      xl: '1280px',
      '2xl': '1440px',
    },
  },
  plugins: [],
};
