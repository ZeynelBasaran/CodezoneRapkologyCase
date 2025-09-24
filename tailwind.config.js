/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    
    extend: {
      colors: {
        black: "#121212",      // Siyah renk
        primary: "#FFFFFF",    // Ana renk
        secondary: "#1C22A2",  // İkincil renk
        accent: "#FF6B6B",     // Vurgu rengi
        neutral: "#F5F5F5",    // Arka plan/neutral renk
        dark: "#0D0D0D",       // Koyu tema rengi
      },
      fontFamily: {
        saira: ["var(--font-saira)"], 
        geist: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
    },
  },
  plugins: [],
};