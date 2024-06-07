/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "selector",
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./src/**/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      "white": "#FFFFFF",
      "gray-text": "#1F1F1F",

      "background": {
        dark: "#1E1E1E",
        DEFAULT: "#1E1E1E",
        light: "#FFFFFF",
      },
      "navbar": {
        dark: "#252526",
        DEFAULT: "#252526",
        light: "#F8F8F8",
      }, 
      "sidebar": {
        dark: "#333333",
        DEFAULT: "#333333",
        light: "#EAEAEA",
      },
      "hover": {
        dark: "#2A2D2E",
        DEFAULT: "#2A2D2E",
        light: "#E8E8E8",
      }, 
      "navbar-gray": {
        dark: "#848484",
        default: "#848484",
        light: "#616161",
      },

      "footer-blue": "#387BCA",
      "footer-purple": "#68217A",

      "string-orange": {
        dark: "#C5927A",
        DEFAULT: "#C5927A",
        light: "#971E1A",
      },
      "comment-green": {
        dark: "#729757",
        DEFAULT: "#729757",
        light: "#317E0F",
      },
      "variable-blue": {
        dark: "#70C1FD",
        DEFAULT: "#70C1FD",
        light: "#0477C3",
      },
      "type-dec-cyan": {
        dark: "#2596BE",
        DEFAULT: "#2596BE",
        light: "#417F98",
      },
      "let-blue": {
        dark: "#689CD4",
        DEFAULT: "#689CD4",
        light: "#2724FC",
      },
      "brackets-pink": {
        dark: "#CF76B1",
        DEFAULT: "#CF76B1",
        light: "#2B3DF7",
      },
      "class-yellow": {
        dark: "#DBCD82",
        DEFAULT: "#DBCD82",
        light: "#755E2A",
      },
      "error-red": {
        dark: "#E1524F",
        DEFAULT: "#E1524F",
        light: "#D42A16",
      },
      "import-pink": {
        dark: "#C586C0",
        DEFAULT: "#C586C0",
        light: "#A526D9",
      },
    },
    fontFamily: {
      mono: ["Consolas", "Courier New", "monospace"],
    },
  },
};
