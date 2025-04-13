// app/layout.js
import { cookies } from 'next/headers';
import Navbar from "@/components/Navbar";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FooterComponent from "@/components/Footer";
import { ThemeProvider } from "../context/ThemeContext";

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata = {
  title: "7currencies | Fardin Mohammadi",
  description: "Check live cryptocurrency prices and track your favorite digital currencies in real-time.",
  openGraph: {
    title: "7currencies | Fardin Mohammadi",
    description: "Check live cryptocurrency prices and track your favorite digital currencies in real-time.",
    siteName: '7currencies',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  const theme = cookies().get('theme')?.value || 'light';

  return (
    <html lang="en" data-theme={theme}>
      <body style={{ backgroundColor: "var(--background)" }}>
        <ThemeProvider initialTheme={theme}>
          <Navbar />
          <main >
            {children}
            <FooterComponent />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
