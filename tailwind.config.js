/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  // Force RGB color format for html2pdf.js compatibility
  corePlugins: {
    // This ensures Tailwind generates RGB values instead of oklch
  },
}
