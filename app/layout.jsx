import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header/page";
import Footer from "./components/Footer/page";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "AutoQuébec",
  description: "Voitures boutique",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-br from-slate-900 via-black to-slate-800 min-h-screen`}>
        <Header/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
