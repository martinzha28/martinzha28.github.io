/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./src/**/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      "white": "#FFFFFF", 
      "background-dark": "#1E1E1E",
      "navbar-dark": "#252526",
      "sidebar-dark": "#333333",
      "navbar-gray": "#848484",
      "hover-dark": "#2A2D2E",

      "gray-text": "#1F1F1F",
      "background-light": "#FFFFFF", 
      "navbar-light": "#F8F8F8", 
      "sidebar-light": "#EAEAEA",
      "navbar-light-gray": "#616161",
      "hover-light": "#E8E8E8",

      "footer-blue": "#387BCA",
      "footer-purple": "#68217A",

      "string-orange" : "#C5927A",
      "comment-green" : "#729757",
      "variable-blue" : "#70C1FD",
      "type-dec-cyan" : "#2596be",
      "let-blue" : "#689CD4",
      "brackets-pink" : "#CF76B1",
      "class-yellow" : "#DBCD82",
      "error-red" : "#E1524F",
      "import-pink" : "#C586C0",
    },
    fontFamily: {
      mono: ["Consolas", "Courier New", "monospace"],
    },
  },
};
