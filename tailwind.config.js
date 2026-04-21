/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Space Grotesk', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        accent: '#64ffda',
        'accent-dim': 'rgba(100, 255, 218, 0.1)',
        surface: {
          DEFAULT: '#0a0f24',
          dark: '#050816',
          light: '#111936',
        },
        navy: {
          DEFAULT: '#0a192f',
          light: '#112240',
          lighter: '#233554',
        },
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 5s ease-in-out infinite',
        'orb': 'orbFloat 12s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};