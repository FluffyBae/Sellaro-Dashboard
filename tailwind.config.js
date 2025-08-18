/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./successful-payment.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0480FE',
          50: '#f0f8ff',
          100: '#e0f1fe',
          500: '#0480FE',
          600: '#0366d6',
        },
        secondary: {
          DEFAULT: '#0BC4EE',
          50: '#f0fdff',
          100: '#ccf7fe',
          500: '#0BC4EE',
          600: '#0891b2',
        },
        dark: {
          bg: '#0B0F1A',
          card: 'rgba(255, 255, 255, 0.1)',
          border: 'rgba(255, 255, 255, 0.2)',
        }
      },
      fontFamily: {
        heading: ['Space Grotesk', 'sans-serif'],
        body: ['Manrope', 'sans-serif'],
      },
      backdropBlur: {
        '20': '20px',
        '25': '25px',
      },
      borderRadius: {
        '50': '50px',
        '32': '32px',
        '24': '24px',
        '20': '20px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'slide-up': 'slideUp 0.8s ease-out',
        'fade-in': 'fadeIn 0.5s ease-out',
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'modal-slide-in': 'modalSlideIn 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%) translateY(-100%) rotate(45deg)' },
          '50%': { transform: 'translateX(-50%) translateY(-50%) rotate(45deg)' },
          '100%': { transform: 'translateX(100%) translateY(100%) rotate(45deg)' }
        },
        modalSlideIn: {
          '0%': { opacity: '0', transform: 'translateY(20px) scale(0.95)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' }
        }
      },
      boxShadow: {
        'glass': '0 8px 32px rgba(0, 0, 0, 0.3)',
        'glass-hover': '0 12px 40px rgba(0, 0, 0, 0.4)',
        'modal': '0 20px 80px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.05)',
        'button': '0 4px 20px rgba(4, 128, 254, 0.3)',
        'button-hover': '0 8px 30px rgba(4, 128, 254, 0.4)',
      }
    },
  },
  plugins: [],
}