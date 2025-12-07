/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        primary: {
          50: '#fdfcf8', // Paper White
          100: '#f4f3ef', // Subtle Sand
          200: '#e6e4dd', // Clay
          300: '#d0684f', // Terracotta (Accent)
          400: '#8fa398', // Sage
          500: '#666666', // Stone
          600: '#333333', // Charcoal
          700: '#2d3b3b', // Forest
          800: '#191919', // Ink Black
          900: '#000000',
        },
        paper: '#f0f4f8',
        ink: '#1e293b', // Slate 800
        sand: '#e2e8f0', // Slate 200
        terracotta: '#2563eb', // Now a Solid Blue (Primary Accent)
        forest: '#334155', // Slate 700
        clay: '#cbd5e1', // Slate 300
        sage: '#64748b', // Slate 500
        stone: '#475569', // Slate 600
        charcoal: '#1e293b', // Slate 800
        ice: '#f0f4f8', // New Light Blue-Gray Background
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-mesh': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'gradient-sunset': 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        'gradient-ocean': 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'gradient': 'gradient 15s ease infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 3s infinite',
        'spin-slow': 'spin 8s linear infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
    },
  },
  plugins: [],
}

