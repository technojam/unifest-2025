/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}", // Include if using Next.js App Router
  ],
  darkMode: "class", // Enable dark mode (can be 'media' or 'class')
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"], 
        montserrat: ["Montserrat", "sans-serif"],
      },
      spacing: {
        18: "4.5rem", // Custom spacing
        22: "5.5rem",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"), // For better form styling
    require("@tailwindcss/typography"), // For better text rendering
    require("@tailwindcss/aspect-ratio"), // Aspect ratio utilities
  ],
};
