/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
      "./node_modules/@heroui/theme/dist/components/(card|image|ripple).js"
    ],
    darkMode: 'class',
    theme: {
      extend: {
        // Fixed: Combined all extensions into single extend object
        backgroundImage: {
          'code': "url('/src/assets/img/bgDikr.png')", // Fixed: Relative path
          'light-code': "url('/src/assets/img/BgDarkScreen.png')", // Fixed: Relative path
        },
        keyframes: {
          float: {
            '0%, 100%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-19px)' },
          },
        },
        animation: {
          float: 'float 2.7s ease-in-out infinite',
        },
        spacing: {
          '100': '28rem',
          '110': '30rem',
        },
        width: {
          25: "7rem",
          90: "90px",
          140: "140px",
          150: "150px",
          170: "170px",
          180: "180px",
          190: "190px",
          200: "200px",
          210: "210px",
          220: "220px",
          225: "225px",
          250: "250px",
          275: "275px",
          290: "290px",
          300: "300px",
          340: "340px",
          350: "350px",
          375: "375px",
          460: "460px",
          656: "656px",
          880: "880px",
          508: "508px",
        },
        height: {
          25: "7rem",
          80: "80px",
          150: "150px",
          180: "180px",
          200: "200px",
          210: "210px",
          225: "225px",
          260: "260px",
          290: "290px",
          300: "300px",
          340: "340px",
          370: "370px",
          420: "420px",
          510: "510px",
          600: "600px",
          650: "650px",
          685: "685px",
          800: "800px",
          "90vh": "90vh",
        },
        minWidth: {
          210: "210px",
          350: "350px",
          620: "620px",
        },
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
          "2xl": "1536px",
        },
        
      },
    },
    plugins: [
        require('@tailwindcss/typography'),
        // autres plugins...
      ],
  
  };