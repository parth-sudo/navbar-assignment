module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      cream: {
        light: "#fffef4",
        DEFAULT: "#5c6ac4",
        dark: "#f7f4dc",
      },
    },
    keyframes: {
      "fade-in-down": {
        "0%": {
          opacity: "0",
          transform: "translateY(-10px)",
        },
        "100%": {
          opacity: "1",
          transform: "translateY(0)",
        },
      },
    },
    'fade-in-up': {
      '0%': {
          opacity: '0',
          transform: 'translateY(10px)'
      },
      '100%': {
          opacity: '1',
          transform: 'translateY(0)'
      },
  },
    animation: {
      "fade-in-down": "fade-in-down 0.5s ease-out",
      "fade-in-up": "fade-in-up 0.5s ease-out",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
