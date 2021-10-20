module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      'font-family': {
        'heading': ['Raleway', 'serif'],
        'body': ['Open Sans', 'serif'],
      },
      colors: {
        primary: '#FF5968',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
