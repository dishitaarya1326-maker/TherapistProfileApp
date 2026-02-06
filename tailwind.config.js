module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '475px',      // Extra small: 475px+
        'sm': '640px',      // Small: 640px+
        'md': '768px',      // Medium: 768px+
        'lg': '1024px',     // Large: 1024px+
        'xl': '1280px',     // Extra large: 1280px+
        '2xl': '1536px',    // 2X large: 1536px+
      },
    },
  },
  plugins: [],
};