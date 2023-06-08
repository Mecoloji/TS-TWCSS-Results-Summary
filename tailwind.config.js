/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        HankenG: ["Hanken Grotesk", "sans-serif"],
      },

      colors: {
        Red: "hsl(0, 100%, 67%)",
        Orange: "hsl(39, 100%, 56%)",
        Green: "hsl(166, 100%, 37%)",
        Blue: "hsl(234, 85%, 45%)",
        VioletB: "hsla(256, 72%, 46%, 1)",
        PersianB: "hsla(241, 72%, 46%, 0)",

        White: "hsl(0, 0%, 100%)",
        PaleB: "hsl(221, 100%, 96%)",
        Lavender: "hsl(241, 100%, 89%)",
        DarkGray: "hsl(224, 30%, 27%)",

        LSB: "hsl(252, 100%, 67%)",
        LRB: "hsl(241, 81%, 54%)",
      },
      screens: {
        tablet: "640px",
        tall: { raw: "(min-height:800px)" },
      },
    },
  },
  plugins: [],
};
