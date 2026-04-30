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
          gold: '#FFD700',
          green: '#00B550',
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
        'neon-gradient': 'linear-gradient(135deg, #FF1414, #FFD700)',
        'flag-gradient': 'linear-gradient(180deg, #FF1414 0%, #FFD700 50%, #00B550 100%)',
        'dark-gradient': 'linear-gradient(180deg, #000000 0%, #0D0D0D 100%)',
      },
      boxShadow: {
        'neon-red': '0 0 20px rgba(255,20,20,0.5), 0 0 40px rgba(255,20,20,0.2)',
        'neon-orange': '0 0 20px rgba(255,107,0,0.5), 0 0 40px rgba(255,107,0,0.2)',
        'neon-gold': '0 0 20px rgba(255,215,0,0.5), 0 0 40px rgba(255,215,0,0.2)',
        'neon-green': '0 0 20px rgba(0,181,80,0.5), 0 0 40px rgba(0,181,80,0.2)',
        'neon-sm': '0 0 10px rgba(255,215,0,0.4)',
        'glass': '0 8px 32px rgba(0,0,0,0.6)',
      },
      animation: {
        'pulse-neon': 'pulseNeon 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        pulseNeon: {
          '0%, 100%': { textShadow: '0 0 10px #FFD700, 0 0 20px #FFD700, 0 0 40px #FFD700' },
          '50%': { textShadow: '0 0 20px #FFD700, 0 0 40px #FFD700, 0 0 80px #FFD700' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 10px rgba(255,215,0,0.3)' },
          '100%': { boxShadow: '0 0 30px rgba(255,215,0,0.8), 0 0 60px rgba(0,181,80,0.4)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
} satisfies Config
