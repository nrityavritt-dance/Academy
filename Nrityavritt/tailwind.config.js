/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        maroon: {
          50: '#fdf2f4',
          100: '#fce7eb',
          200: '#f9d2d9',
          300: '#f4aebc',
          400: '#ec7f96',
          500: '#dc4e6f',
          600: '#c52e53',
          700: '#a52142',
          800: '#8b1d3a',
          900: '#560e22',
          950: '#340512',
        },
        gold: {
          50: '#fbf9eb',
          100: '#f6f1cc',
          200: '#ede199',
          300: '#e3cc62',
          400: '#d7b436',
          500: '#c59d24',
          600: '#aa7d1b',
          700: '#875d19',
          800: '#6f4a1b',
          900: '#5e3e1c',
          950: '#36210b',
        },
        sand: {
          50: '#fdfcf9',
          100: '#faf6f0',
          200: '#f4ece0',
          300: '#ecdcc8',
          400: '#dfc5a7',
          500: '#cea782',
          600: '#ba8e68',
          700: '#9b7152',
          800: '#7f5c45',
          900: '#684b39',
        }
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Cinzel', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        devanagari: ['var(--font-devanagari)', 'Rozha One', 'serif'],
      },
      animation: {
        'spin-slow': 'spin 30s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
