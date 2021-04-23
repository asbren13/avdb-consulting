module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        lg: ['19px', '22.8px'],
        '2xl': ['27px', '32.4px'],
        '3xl': ['40px', '54.4px'],
        '4xl': ['50px', '68px'],
      },
      height: {
      	200: '200px',
      	300: '300px',
      	375: '375px',
        510: '510px',
      },
      width: {
      	'40p': '40%',
      	'44p': '44%',
      	'46p': '46%',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
