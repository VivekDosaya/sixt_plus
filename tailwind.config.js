module.exports = {
  // purge: ["./src/**/*.html", "./src/**/*.jsx"],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        backgroundColor: "#E5E5E5",
        themeLightBlue: "#3886FA",
        themeDarkBlue: "#092D63",
        metamaskStart: "#FF5D01",
        metmaskEnd: "#FFDA23",
        brandRed: "#E22127",
        themeOrange: "#FF5F00",
      },
      fontFamily: {
        sans: [
          "Dosis",
          "HelveticaNeue",
          "Futura",
          "Impact",
          "Arial",
          "sans-serif",
        ],
        helvetica: ["HelveticaNeue", "Futura", "Impact", "Arial", "sans-serif"],

        futura: ["Futura", "HelveticaNeue", "Impact", "Arial", "sans-serif"],

        impact: ["Impact", "HelveticaNeue", "Futura", "Arial", "sans-serif"],
      },

      height: {
        bannerHeightLandingPage: "33.5rem",
        bannerHeightLandingPageMobileView: "35rem",
        trenidngProperyCardHeight: "18rem",
        newlyListedProperyCardHeight: "19rem",
        blogCardHeight: "23rem",
        propertyProductDescriptionHeight: "35rem",
        mapCircle: "35rem",
        sellAskModal: "33rem",
        aboutHighlightMembersHeigh: "27rem",
        floatingButtonHeightFromTop: "18rem",
        searchResultCardHeight: "15rem",
        houseLandingPageHeight: "33rem",
      },
      width: {
        bannerWidthLandingPage: "30rem",
        trenidngProperyCardWidth: "28rem",
        newlyListedProperyCardWidth: "21rem",
        blogCardWidth: "23rem",
        propertyProductDescriptionWidth: "50rem",
        mapCircle: "35rem",
        houseLandingPageWidth: "33rem",
        sellAskModal: "33rem",
        searchResultCardWidth: "20rem",
        auctionCardWidth: "42rem",
      },
      boxShadow: {
        lg: "5px 10px 30px #e5e7eb",
        xl: "10px 25px 20px #e5e7eb",
        dark: "5px 10px 30px #1F2937",
      },
      fontSize: {
        lg: "1.25rem",
        xl: "1.4rem",
        "3xl": "2rem",
      },
      width: {
        148: "37rem",
      },

      lineHeight: {
        banner: "5rem",
      },
    },
  },
  variants: {
    extend: {
      boxShadow: ["dark"],
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("daisyui"),
    require("@tailwindcss/forms"),
  ],
  daisyui: {
    styled: true,
    themes: false,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
};
