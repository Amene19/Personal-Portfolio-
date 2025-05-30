/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        pixel: ['"Press Start 2P"', 'cursive'],
      },
      colors: {
        primary: {
          DEFAULT: '#ff7e5f',
          light: '#ff9f85',
          dark: '#e65c3b',
        },
        secondary: {
          DEFAULT: '#feb47b',
          light: '#fec89a',
          dark: '#e9a069',
        },
        accent: {
          DEFAULT: '#7cffcb',
          light: '#a5ffd9',
          dark: '#58d9a9',
        },
        success: {
          DEFAULT: '#4ade80',
          light: '#86efac',
          dark: '#22c55e',
        },
        warning: {
          DEFAULT: '#facc15',
          light: '#fde047',
          dark: '#eab308',
        },
        error: {
          DEFAULT: '#f87171',
          light: '#fca5a5',
          dark: '#ef4444',
        },
      },
      animation: {
        'pixel-dust': 'pixelDust 1s ease-in-out',
        'jiggle': 'jiggle 0.5s ease-in-out',
        'pulse': 'pulse 1s infinite',
        'blink': 'blink 2s infinite',
        'bounce': 'bounce 1s infinite',
      },
    },
  },
  plugins: [],
};