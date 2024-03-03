import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {Footer,Navbar} from '@/components'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cars",
  description: "Discover the best of cars",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
      <Navbar/>  
      {children}
      <Footer/>
      </body>
    </html>
  );
}
