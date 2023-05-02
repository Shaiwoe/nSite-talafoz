/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
    "./node_modules/flowbite.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'dark1': '#0d0e12',
        'dark2': '#13161b',
        'dark3': '#1c1f25',
        'dark4': '#382f82',
        'dark5': '#151f32',
        'dark6': '#294774',
        'box1' : '#16273f',
        'box2' : '#182d4b',
        'text1' : '#68809d',
        'red1' : '#ee5586',
        'yellow1' : '#fdd700',
        'black1' : '#101920',
        'green1' : '#15212a',
        'green2' : '#101920',
        'light' : '#203964',
      },
      borderRadius: {
        '5xl': '6rem',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
