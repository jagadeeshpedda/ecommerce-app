/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // Includes the main HTML file
    "./src/**/*.{js,ts,jsx,tsx}", // Includes all JavaScript/TypeScript files in src/ (including JSX and TSX)
  ],
  theme: {
    extend: {}, // Place to add custom theme extensions like colors, fonts, spacing, etc.
  },
  plugins: [], // You can add Tailwind plugins here (e.g., typography, forms, etc.)
};
