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
        'seconary': '#F5F5F5',
        // 'primary': '#ED165F',
        
      },
      spacing: {
        '2': '2px',
        '4': '4px',
        '6': '6px',
        '8': '8px',
        '10': '10px',
        '12': '12px',
        '14': '14px',
        '15': '15px',
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
        'mobile': {'max':'360px'},
    // => @media (max-width: 360px) { ... }

    'mobile530': {'max':'530px'},
    // => @media (max-width: 530px) { ... }
    
    'mobil640': {'max':'640px'},
    // => @media (max-width: 640px) { ... }
   
    'mobil670': {'max':'670px'},
    // => @media (max-width: 670px) { ... }
   
    'mobil675': {'max':'675px'},
    // => @media (max-width: 670px) { ... }

    'mobile786': {'max': '768px'},
    // => @media (max-width: 768px) { ... }
    
    'table845': {'max': '845px'},
    // => @media (max-width: 845px) { ... }
    
    'table945': {'max': '945px'},
    // => @media (max-width: 945px) { ... }

    'table1005': {'max':'1005px'} ,
    // => @media (max-width: 1005px) { ... }

    'table': {'max':'1024px'} ,
    // => @media (max-width: 1024px) { ... }
   
    'table1080': {'max':'1080px'} ,
    // => @media (max-width: 1080px) { ... }
    
    'table1170': {'max':'1170px'} ,
    // => @media (max-width: 1170px) { ... }

    'desktop1220': {'max':'1220px'} ,
    // => @media (max-width: 1220px) { ... }

    'desktop': {'max':'1280px'} ,
    // => @media (max-width: 1280px) { ... }
   
    'desktop1370': {'max':'1370px'} ,
    // => @media (max-width: 1370px) { ... }
      }
     
     
  },
  
  },
  plugins: [],
};
