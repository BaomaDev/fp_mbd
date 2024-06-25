import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        poppins: ['var(--font-poppins)'],
        lemonMilk: ['var(--font-lemonMilk)'],
      },
      colors: {
        blue: {
          1: '#EFFCFE',
          2: '#D3F9FF',
          3: '#00487C',
          card: '#D3DDF1'
        },
        
        minHeight: {
          '900': '972px',
        },
      },
    },
  },
  plugins: [],
};
export default config;
