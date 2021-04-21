module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        lg: ['19x', '22.8px'],
        '2xl': ['27px', '32.4px'],
        '3xl': ['40px', '54.4px'],
        '4xl': ['50px', '68px'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
