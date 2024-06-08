/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "20px",
        xl: "25px", // extra large devices, large laptops, desktops
        xxl: "30px", // xxl devices, large desktops
        "2xl": "35px", // Full HD screens
        "3xl": "40px", // QHD screens
        "4xl": "45px", // 4K screens
        "5xl": "50px", // covers everything above
      },
    },
    extend: {
      colors: {
        firstColor: "	#66b3ff",
        bodyColor: "hsl(228, 15%, 20%)",
        containerColor: "hsl(228, 15%, 15%)",
      },
    },
  },
  plugins: [],
};
