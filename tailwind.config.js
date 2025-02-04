module.exports = {
  mode: "jit", // Enable JIT mode
  content: ["./src/**/*.{js,css,liquid}"],
  theme: {
    screens: {
      xxs: "420px",
      xs: "576px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1600px",
    },
    extend: {},
  },
  plugins: [],
};
