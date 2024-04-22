/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./src/**/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      "white": "#FFFFFF",
      "background-dark": "#1E1E1E",
      "navbar-dark": "#252526",
      "sidebar-dark": "#333333",
      "footer-blue": "#387BCA",
      "navbar-gray": "#848484",
    },
    fontFamily: {
      mono: ["Consolas", "Courier New", "monospace"],
    },
  },
};
