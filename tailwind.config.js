/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490',
        },
        secondary: {
          400: '#d946ef',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7e22ce',
        },
        dark: {
          50: '#f9fafb',
          100: '#f3f4f6',
          800: '#1a202c',
          850: '#0f1419',
          900: '#0a0e27',
          950: '#050812',
        },
        accent: {
          cyan: '#06b6d4',
          purple: '#a855f7',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
