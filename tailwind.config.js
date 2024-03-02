/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
        "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'primary': '#ED165F',
        
      },
     
      extend: {
        spacing: {
          '2': '2px',
          '4': '4px',
          '6': '6px',
          '8': '8px',
          '10': '10px',
          '12': '12px',
          '14': '14px',
          '16': '16px',
          '18': '18px',
          '20': '20px',
          '22': '22px',
          '24': '24px',
          '26': '26px',
          '28': '28px',
          '30': '30px',
          '32': '32px',
          '34': '34px',
          '36': '36px',
          '38': '38px',
          '40': '40px',
          '42': '42px',
          '44': '44px',
          '46': '46px',
          '48': '48px',
          '50': '50px',
          '52': '52px',
          '54': '54px',
          '56': '56px',
          '58': '58px',
          '60': '60px',

          '100': '100px',
          '120': '120px',
          '150': '150px',
          '200': '200px',
          
        },
        borderRadius: {
          '2': '2px',
          '4': '4px',
          '6': '6px',
          '8': '8px',
          '12': '12px',
          '14': '14px',
          '16': '16px',
        },
        screens: {
          '2xl': {'max': '1440px'},
          // => @media (max-width: 1535px) { ... }
    
          'xl': {'max': '1279px'},
          // => @media (max-width: 1279px) { ... }
    
          'lg': {'max': '1023px'},
          // => @media (max-width: 1023px) { ... }
    
          'md': {'max': '767px'},
          // => @media (max-width: 767px) { ... }
    
          'sm': {'max': '639px'},
          // => @media (max-width: 639px) { ... }
        }
    },
  },
  
  },
  plugins: [],
};
