
const colors = require('tailwindcss/colors')


module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      // Build your palette here
      transparent: 'transparent',
      juejinbg: '#f4f5f5',
      juejinnav: '#86909c',
      gray: colors.trueGray,
      red: colors.red,
      blue: colors.sky,
      yellow: colors.amber,
    },
    fontFamily: {
      'juejin': ["-apple-system","system-ui","Segoe UI","Roboto","Ubuntu","Cantarell","Noto Sans","sans-serif","BlinkMacSystemFont","Helvetica Neue","PingFang SC","Hiragino Sans GB","Microsoft YaHei","Arial"]
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
