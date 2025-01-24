// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.{html,js}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"], // Adjust the content path as needed
  theme: {
    extend: {
      fontFamily: {
        righteous: ["Righteous", "cursive"], // Add the Righteous font
      },
    },
  },
  plugins: [],
};
