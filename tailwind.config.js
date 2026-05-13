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
          DEFAULT: '#ffffff',
          dark: '#f8fafc',
          light: '#f1f5f9',
        },
        navy: {
          DEFAULT: '#f0f9ff',
          light: '#e0f2fe',
          lighter: '#c7e9fb',
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