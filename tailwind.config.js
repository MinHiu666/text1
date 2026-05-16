/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#f0fdf4',
        darker: '#ecfdf5',
        neonGreen: '#22c55e',
        neonEmerald: '#10b981',
        neonTeal: '#14b8a6',
        neonCyan: '#06b6d4',
        neonMint: '#34d399',
        cyberGray: '#d1fae5',
        cyberDark: '#a7f3d0',
      },
      fontFamily: {
        sans: ['PingFang SC', 'Microsoft YaHei', 'sans-serif'],
        cyber: ['Orbitron', 'sans-serif'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'scan': 'scan 3s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px currentColor, 0 0 10px currentColor' },
          '100%': { boxShadow: '0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        }
      },
      boxShadow: {
        'neon-green': '0 0 5px #22c55e, 0 0 10px #22c55e, 0 0 20px #22c55e',
        'neon-emerald': '0 0 5px #10b981, 0 0 10px #10b981, 0 0 20px #10b981',
        'neon-teal': '0 0 5px #14b8a6, 0 0 10px #14b8a6, 0 0 20px #14b8a6',
      }
    },
  },
  plugins: [],
}
