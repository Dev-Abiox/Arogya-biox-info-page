/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}" // Keeping this just in case, though structure seems flat
  ],
  theme: {
    extend: {
      colors: {
        // Add any custom colors from the original design if needed, 
        // strictly speaking standard tailwind colors + dark mode might suffice 
        // but let's check if we need to extend anything specific from the provided css.
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'], // Keep as default/heading
        heading: ['"Plus Jakarta Sans"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
