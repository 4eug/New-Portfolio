const { screens, borderRadius } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xxxsm: "200px",
      xxsm: "340px",
      xsm: "480px",
      ...screens,
    },
    extend: {
      colors: {},
      fontSize: {
        "portfolio-xsm": "14px",
        "portfolio-sm": "16px",
        "portfolio-md": "18px",
      },
      height: {
        "portfolio-h-nav": "10%",
        "portfolio-h-heror": "90%",
        "5/2": "40%",
        "portfolio-px-40": "40px",
      },
      width: {
        "portfolio-px-270": "270px",
        "portfolio-px-300": "300px",
        "portfolio-px-350": "350px",
        "portfolio-px-400": "400px",
        "portfolio-px-124": "124px",
      },
      borderRadius: {
        "portfolio-px-20": "20px",
      },
      fontFamily: {
        "portfolio-poppins": "Poppins",
      },
    },
  },
  plugins: [],
};
