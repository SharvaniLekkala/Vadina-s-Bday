/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        coquette: {
          50: '#fff5f7',
          100: '#ffe8ed',
          200: '#ffd1dc', // classic coquette pink
          300: '#ffb3c4',
          400: '#ff85a1',
          500: '#f75985',
          600: '#e33568',
        },
        blush: {
          light: '#fdf6f7',
          DEFAULT: '#fedfe5',
          dark: '#e8b4bd',
        },
        lavender: {
          soft: '#f3e8ff',
          pastel: '#ede9fe',
        },
        champagne: {
          light: '#faf6ee',
          DEFAULT: '#f3e5c8',
          gold: '#e6c88b',
          accent: '#c9a85c',
        },
        baby: {
          pink: '#ffd5e2',
          rose: '#fca5b8',
          cream: '#fffdfa',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Poppins"', 'system-ui', 'sans-serif'],
        handwriting: ['"Dancing Script"', '"Caveat"', 'cursive'],
        script: ['"Caveat"', 'cursive'],
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-medium': 'float 4s ease-in-out infinite',
        'float-reverse': 'floatRev 5s ease-in-out infinite',
        'heartbeat': 'heartbeat 1.8s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
        'sparkle': 'sparkle 2s ease-in-out infinite',
        'sway': 'sway 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(2deg)' },
        },
        floatRev: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(10px) rotate(-2deg)' },
        },
        heartbeat: {
          '0%, 100%': { transform: 'scale(1)' },
          '14%': { transform: 'scale(1.15)' },
          '28%': { transform: 'scale(1)' },
          '42%': { transform: 'scale(1.18)' },
          '70%': { transform: 'scale(1)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.85', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.03)' },
        },
        sparkle: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(0.8) rotate(0deg)' },
          '50%': { opacity: '1', transform: 'scale(1.2) rotate(15deg)' },
        },
        sway: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
      boxShadow: {
        'soft-pink': '0 10px 30px -5px rgba(255, 182, 193, 0.35)',
        'coquette': '0 15px 35px -5px rgba(247, 89, 133, 0.2), 0 5px 15px rgba(255, 209, 220, 0.4)',
        'glow-pink': '0 0 25px rgba(255, 133, 161, 0.45)',
        'envelope': '0 20px 40px -10px rgba(232, 180, 189, 0.4), 0 2px 8px rgba(0,0,0,0.05)',
      }
    },
  },
  plugins: [],
}

