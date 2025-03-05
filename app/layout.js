import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Shortified - Link Shortener",
  description: "The only URL shortener you'll ever need",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased lg:h-screen bg-gradient-to-bl from-blue-600 to-black text-white flex flex-col`}
      >
        <Navbar navClassName={"h-1/8"} />
        <section className="h-6/8">{children}</section>
      </body>
    </html>
  );
}