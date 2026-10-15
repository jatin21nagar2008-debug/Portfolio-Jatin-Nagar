/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          900: '#020205',
          800: '#070712',
          700: '#0f0f23',
        },
        neon: {
          purple: '#b347ea',
          cyan: '#00e5ff',
          blue: '#4fc3f7',
        }
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'neon-purple': '0 0 25px rgba(179, 71, 234, 0.45)',
        'neon-cyan': '0 0 25px rgba(0, 229, 255, 0.45)',
        'neon-blue': '0 0 25px rgba(79, 195, 247, 0.45)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.5)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        }
      }
    },
  },
  plugins: [],
}

