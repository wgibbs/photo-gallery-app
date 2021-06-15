const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    screens: {
      'sm': '480px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1200px',
      '2xl': '1300px',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.coolGray,
    },
    extend: {
      fontFamily: {
        'noto-sans': ['Noto Sans TC', 'monospace'],
        'open-sans': ['Open Sans', 'sans-serif'],
      },
      outline: {
        custom: '2px solid #000000',
        custom2: '2px solid #FFFFFF',
      },
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
