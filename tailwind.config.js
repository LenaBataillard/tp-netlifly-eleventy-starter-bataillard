// const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.{njk,md,js}'],
  darkMode: false, // or 'media' or 'class'
  mode: 'jit',
  theme: {
        fontFamily: {

          display: ['Oswald', "sans-serif"],

          body: ['"Open Sans"', "system-ui", "sans-serif"],
        }
      }
    }
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: 'inherit',
          },
        },
      }),
      colors: {
        rouge: '#46100e',
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
