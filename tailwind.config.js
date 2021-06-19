module.exports = {
  mode: 'jit',
  purge: ['./**/*.html'],
  darkMode: false,
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms'), require('@tailwindcss/line-clamp'), require('@tailwindcss/aspect-ratio')],
}
