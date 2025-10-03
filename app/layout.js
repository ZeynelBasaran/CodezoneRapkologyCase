import { Saira_Condensed } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/provider/theme-provider";



const saira = Saira_Condensed({
  variable: "--font-saira",
  subsets: ["latin"],
  weight: ["400","500","600", "700"], 

});




export const metadata = {
  title: "Codezone - Rapkology",
  description: "Codezone Case",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${saira.variable} antialiased font-saira`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
