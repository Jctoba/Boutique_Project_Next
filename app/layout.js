import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header/page";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Cars",
  description: "Voitures boutique",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header className="w-100"/>
        {children}
      </body>
    </html>
  );
}
