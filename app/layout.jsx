import { Outfit } from "next/font/google";
import "./globals.css";

// components
import Header from "../components/Header";
import Footer from "../components/Footer";

// theme provider
import { ThemeProvider } from "../components/ThemeProvider";
import { Toaster } from "react-hot-toast";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio | Lucas",
  description: "My portfolio || TypeScript | React | NextJS | Stripe | MongoDB",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body className={outfit.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Toaster toastOptions={{ duration: 3000 }}/>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
