/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{tsx,mdx}',
    './components/**/*.{tsx,mdx}',
    './app/**/*.{tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    screens: {
      '2xl': { max: '1535px' },
      // => @media (max-width: 1535px) { ... }
      xl: { max: '1279px' },
      lg: { max: '1023px' },
      md: { max: '767px' },
      sm: { max: '639px' },
    },
    colors: {
      white: '#FFFFFF',
      bgDark: '#131315',
      borderGray: '#242428',
      purple: '#8273F7',
      textWhite: '#F1F1F3',
      textGrey: '#908F99',
    },
    extend: {
      backgroundImage: (theme) => ({
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-pattern': "url('/images/bg.png')",
      }),
      // that is animation class
      animation: {
        fadeOut: 'fadeOut 5s ease-in-out',
        flicker: 'flicker 0.4s infinite',
      },
      // that is actual animation
      keyframes: (theme) => ({
        fadeOut: {
          '0%': { backgroundColor: theme('colors.purple') },
          '100%': { backgroundColor: theme('colors.transparent') },
        },
        flicker: {
          '0%': { opacity: 0 },
          '50%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
      }),
    },
  },
  plugins: [],
}
