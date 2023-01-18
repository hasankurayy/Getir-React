/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
        colors: {
            "brand-color": "#4c3398",
            "primary-brand-color": "#5d3ebc",
            "secondary-brand-color": "#7849f7",
            "getirYellow": "#ffd300",
            "gray-storm": "#697488"
        },
        backgroundImage: {
            "purple-kampanya" : "url('https://cdn.getir.com/getirweb-images/common/illustration/doodle.png')"
        },
        boxShadow: {
            '3xl': '0 35px 60px rgba(0, 0, 0, 0.7)',
          },
        fontFamily: {
            lecker: "Leckerli One"
        }
    },
  },
  plugins: [],
}
