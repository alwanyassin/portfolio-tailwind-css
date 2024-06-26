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
        primary: '#14b8a6',
        secondary: '#64748b',
        dark: '#0f172a',
      },
      screens: {
        '2xl': '1320px',
      },
      backgroundImage: {
        'hero-pattern': "url('/dist/img/bg_top.jpg')",
      },
    },
  },
  plugins: [
    require('tailwindcss-animated'),
    require('flowbite/plugin')
  ],
};
