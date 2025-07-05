/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./assets/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: '#14213d',
          gold: '#fca311',
          'blue-dark': '#0f2027',
          'blue-light': '#2b6cb0',
          'gold-light': '#f6e05e',
          'gold-dark': '#b7791f',
        },
        neutral: {
          50: '#f8f9fa',
          100: '#f1f3f4',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        }
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #14213d 0%, #0f2027 100%)',
        'gradient-gold': 'linear-gradient(135deg, #fca311 0%, #b7791f 100%)',
        'gradient-hero': 'linear-gradient(135deg, #14213d 0%, #2b6cb0 50%, #fca311 100%)',
      },
      boxShadow: {
        'glass': '0 8px 32px rgba(20,33,61,0.18)',
        'card': '0 4px 24px rgba(20,33,61,0.08)',
        'card-hover': '0 8px 32px rgba(20,33,61,0.13)',
      },
      animation: {
        'fade-in': 'fadeIn 1.2s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
} 