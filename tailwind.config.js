/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        midnight: '#05070d',
        navy: '#0a1228',
        electric: '#00b4ff',
        neonred: '#ff2d55',
        glass: 'rgba(255,255,255,0.05)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
      },
      backgroundImage: {
        'hero-grid': 'radial-gradient(circle at 50% 0%, rgba(0,180,255,0.15), transparent 60%)',
      },
      boxShadow: {
        'neon-blue': '0 0 20px rgba(0,180,255,0.5)',
        'neon-red': '0 0 20px rgba(255,45,85,0.5)',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        gradientBorder: {
          '0%,100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        fadeUp: 'fadeUp 0.8s ease-out forwards',
        gradientBorder: 'gradientBorder 4s ease infinite',
      },
    },
  },
  plugins: [],
};