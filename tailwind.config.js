/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        second: "var(--second)",
        primary: "var(--primary)",
      },
      boxShadow: {
        "3xl": "#304ffe4a 0px 4px 15px ",
      },
      animation:{
 "rotate-but": 'rotate_key 0.3s ease-in '
      },
      keyframes:{
        rotate_key:{
          "to":{
            "transform":"rotate(0deg)"
          },
          "from":{
            "transform":"rotate(180deg)"
          }
        }
      }
     
    },
  },
  plugins: [],
};
