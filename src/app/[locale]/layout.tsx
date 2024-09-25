import { Outfit } from "next/font/google";
import "./globals.css";
import type { Metadata } from 'next';

// components
import Header from "../../components/Header";
import Footer from "../../components/Footer";

// theme provider
import { ThemeProvider } from "../../components/ThemeProvider";
import { Toaster } from "react-hot-toast";
import { NextIntlClientProvider, useMessages } from "next-intl";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio | Lucas",
  description: "My portfolio || TypeScript | React | NextJS | Stripe | MongoDB | Wordpress",
};
interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}
export default function LocaleLayout({
  children,
  params: { locale },
}: Readonly<RootLayoutProps>) {

  const messages = useMessages();
  return (
    <html lang={locale} >
      <body className={outfit.className}>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider attribute="class" defaultTheme="light">
            <Toaster toastOptions={{ duration: 3000 }} />
            <Header />
            {children}
            <Footer />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}