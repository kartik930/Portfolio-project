/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0B1220',
        surface: '#111827',
        accent: '#7C3AED',
        muted: '#94A3B8'
      },
      boxShadow: {
        glow: '0 20px 60px rgba(124, 58, 237, 0.18)'
      }
    }
  },
  plugins: []
};
