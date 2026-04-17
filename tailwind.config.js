/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#1b1b1b',
        page: '#f6f4ee',
        brand: '#1f5c4a',
        brandDark: '#0f3d31',
        mutedText: '#6f6f68',
        overdue: '#f3b1ad',
        almost: '#fde09d',
        track: '#cfe7cc',
        card: '#fffdf8'
      },
      boxShadow: {
        soft: '0 16px 40px rgba(17, 24, 39, 0.08)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        grid: 'radial-gradient(circle at 1px 1px, rgba(31,92,74,0.08) 1px, transparent 0)',
      },
    },
  },
  plugins: [],
};
