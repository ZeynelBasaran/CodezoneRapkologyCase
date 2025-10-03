/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      screen8: "800px",
      screen11: "1100px",
      screen12: "1200px",
      screen13: "1300px",
      sm: "640px",   
      md: "768px",   
      lg: "1024px",  
      xl: "1440px", 
  
    },
    extend: {
      rotate: {
        '4': '-4deg', 
      },
      letterSpacing: {
        'tight-2': '-0.02em',
        'letter15': '1.5%',
        'letter20': '2.0%',
        
      },
      colors: {
        black: "#121212",      // Siyah renk
       
        white: "#FFFFFF",    // Ana renk
        yellow:"#F0E74D",   // Sarı renk
        secondary: "#1C22A2",  // İkincil renk
        accent: "#FF6B6B",     // Vurgu rengi
        neutral: "#F5F5F5",    // Arka plan/neutral renk
        dark: "#0D0D0D",       // Koyu tema rengi

      },
      fontFamily: {
        saira: ["var(--font-saira)"], 
        geist: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
        helvetica: ["var(--font-helvetica)"],
      },
    },
  },
  plugins: [],
};