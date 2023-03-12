/* eslint-env node */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#FFFFFF',
      primary: {
        dark: '#060B27',
        'dark-blue': '#4478FF',
        'jordy-blue': '#92BAFB',
        orange: '#F29E61',
      },
      gray: {
        25: '#FCFCFD',
        50: '#F9FAFB',
        100: '#F2F4F7',
        200: '#EAECF0',
        300: '#D0D5DD',
        400: '#98A2B3',
        500: '#667085',
        600: '#475467',
        700: '#344054',
        800: '#1D2939',
        900: '#101828',
      },
      purple: {
        25: '#FCFAFF',
        50: '#F9F5FF',
        100: '#F4EBFF',
        200: '#E9D7FE',
        300: '#D6BBFB',
        400: '#B692F6',
        500: '#9E77ED',
        600: '#7F56D9',
        700: '#6941C6',
        800: '#53389E',
        900: '#42307D',
      },
      blue: {
        700: '#175CD3',
      },
      green: {
        300: '#6CE9A6',
        400: '#32D583',
        500: '#12B76A',
      },
      orange: {
        300: '#FEB273',
        400: '#FD853A',
      },
      red: {
        300: '#FDA29B',
        400: '#F97066',
        500: '#FF6565',
      },
      indigo: {
        600: '#444CE7',
        800: '#2D31A6',
      },
    },
  },
  plugins: [],
};
