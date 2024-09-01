/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      scrollBehavior: ['smooth'],
      fontFamily: {
        // Your custom font family settings can go here
      },
      colors: {
        // 'textcolor': '#FFFFFF',
        'textcolor': '#1A2634',
        // 'blue':'#31346E',
        'blue':'#3b5d50',
        'yellow':'#FFD700',
        // 'yellow':'#F9BF29',
        'lightyellow':'#FFE57D',
        'extralightyellow':'#FFF3B2',
        'background':'#F5F5F5',
        // 'background':'#E5f1E3'
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          md: "3rem",
          lg: "0rem",
        },
      },
    },
  },
  plugins: [],
};
