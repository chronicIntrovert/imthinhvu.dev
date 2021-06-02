module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    minWidth: {
      0: '0',
      '1/4': '24rem',
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/forms')],
};
