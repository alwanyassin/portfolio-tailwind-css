module.exports = {
  content: ['index.html',
    './node_modules/flowbite/**/*.js'
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#349B68',
        secondary: '#64748b',
        dark: '#0f172a',
        navcolor: '#A17C6B',
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [
    require('tailwindcss-animated'),
    require('flowbite/plugin')
  ],
};
