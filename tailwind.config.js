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

    colors: {
      // Backgrounds
      'main-1': '#3a4764',
      'main-2': '#e6e6e6',
      'main-3': '#160628',

      'toggle-1': '#232c43',
      'toggle-2': '#d1cccc',
      'toggle-3': '#1d0934',

      'screen-1': '#182034',
      'screen-2': '#ededed',
      'screen-3': '#1d0934',

      // Keys
      'key1-bg-1': '#637097',
      'key1-bg-2': '#377f86',
      'key1-bg-3': '#58077d',

      'key1-shadow-1': '#404e72',
      'key1-shadow-2': '#1b5f65',
      'key1-shadow-3': '#bc15f4',

      'key2-bg-1': '#d03f2f',
      'key2-bg-2': '#ca5502',
      'key2-bg-3': '#00e0d1',

      'key2-shadow-1': '#93261a',
      'key2-shadow-2': '#893901',
      'key2-shadow-3': '#6cf9f2',

      'key3-bg-1': '#eae3dc',
      'key3-bg-2': '#e5e4e1',
      'key3-bg-3': '#341c4f',

      'key3-shadow-1': '#b4a597',
      'key3-shadow-2': '#a69d91',
      'key3-shadow-3': '#871c9c',

      // Text
      'grayish-blue': '#444b5a',
      'grayish-yellow': '#35352c',
      'light-yellow': '#ffe53d',
      'dark-blue': '#1b2428',
      white: '#fff',
    },

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
