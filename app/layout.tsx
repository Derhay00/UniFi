import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileSidebar from "@/components/MobileSideBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "UniFi",
  description: "UniFi is building the future of IT",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        
        <main className="relative overflow-hidden">
        {children}
        </main>
        <Footer />

        </body>
    </html>
  );
}
