import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#171F32',
        secondary: '#DAB25B',
        background: '#F5F5DC', // Beige color for the background
        border: 'hsl(var(--border))',
        foreground: 'hsl(var(--foreground))',
      },
      textColor: {
        foreground: 'hsl(var(--foreground))',
      },
      borderColor: {
        DEFAULT: 'hsl(var(--border))',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;