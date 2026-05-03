import type { Config } from 'tailwindcss';

export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        bg: '#F8F6F2',
        surface: '#EFE7DC',
        text: '#1F1F1F',
        muted: '#6B6257',
        accent: '#7A5230',
        leather: '#4A2F1B',
        border: '#DDD3C7'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Playfair Display"', 'serif']
      },
      boxShadow: {
        luxe: '0 10px 35px rgba(74, 47, 27, 0.14)'
      }
    }
  },
  plugins: []
} satisfies Config;
