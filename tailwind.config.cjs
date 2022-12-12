/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-cyan': '#2BD0D0',
        'light-gray': '#EFF1F7',
        'dark-gray': '#9E9AA8',
        'dark-violet': '#4B3F6B',
        'light-violet': '#3A3054',
        'primary-black': '#34313D',
      },
    },
  },
  plugins: [],
};
