import type { Config } from 'tailwindcss'

export default {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          red: '#FF1414',
          orange: '#FF6B00',
          pink: '#FF0080',
        },
        dark: {
          DEFAULT: '#000000',
          100: '#0D0D0D',
          200: '#111111',
          300: '#1A1A1A',
          400: '#222222',
        },
      },
      fontFamily: {
        sans: ['Space Grotesk', 'Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      backgroundImage: {
        'neon-gradient': 'linear-gradient(135deg, #FF1414, #FF6B00)',
        'dark-gradient': 'linear-gradient(180deg, #000000 0%, #0D0D0D 100%)',
      },
      boxShadow: {
        'neon-red': '0 0 20px rgba(255,20,20,0.5), 0 0 40px rgba(255,20,20,0.2)',
        'neon-orange': '0 0 20px rgba(255,107,0,0.5), 0 0 40px rgba(255,107,0,0.2)',
        'neon-sm': '0 0 10px rgba(255,20,20,0.4)',
        'glass': '0 8px 32px rgba(0,0,0,0.6)',
      },
      animation: {
        'pulse-neon': 'pulseNeon 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        pulseNeon: {
          '0%, 100%': { textShadow: '0 0 10px #FF1414, 0 0 20px #FF1414, 0 0 40px #FF1414' },
          '50%': { textShadow: '0 0 20px #FF1414, 0 0 40px #FF1414, 0 0 80px #FF1414' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 10px rgba(255,20,20,0.3)' },
          '100%': { boxShadow: '0 0 30px rgba(255,20,20,0.8), 0 0 60px rgba(255,107,0,0.4)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
} satisfies Config
