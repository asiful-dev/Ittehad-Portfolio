import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import { AppProvider } from "@/context/AppContext";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Ittehad Bin Rahim - Full Stack Developer",
  description: "Portfolio of Ittehad Bin Rahim, a Full Stack Developer specializing in building scalable and efficient web applications using PHP, Laravel, MySQL, HTML, CSS, and Bootstrap.",
  keywords: [
    "Ittehad Bin Rahim",
    "Full Stack Developer",
    "Web Developer",
    "PHP Developer",
    "Laravel Developer",
    "MySQL",
    "HTML",
    "CSS",
    "Bootstrap"
  ],
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-black text-white`}>
        <Suspense fallback={null}>
          <AppProvider>{children}</AppProvider>
        </Suspense>

      </body>
    </html>
  );
}
