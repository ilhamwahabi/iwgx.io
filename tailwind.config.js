module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#1F292E',
        secondary: '#4A90E2',
        tertiary: '#E23636',
        quarternary: '#F7F7F7',
        quinary: '#C8CDD0',
      },
      minHeight: {
        6: '1.5rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
