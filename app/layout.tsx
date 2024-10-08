import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Toaster } from "react-hot-toast";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Developer Portfolio",
  description: "Developer portfolio built with next.js and tailwind css",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light" className="overflow-x-hidden">
      <body className={spaceGrotesk.className}>
        <Toaster position="top-center" reverseOrder={false} />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
