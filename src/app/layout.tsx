import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import Navigation from "@/components/Navigation";
// import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Our Wedding Journey | Vijay & [Partner Name]",
  description: "Join us in celebrating our special day on November 25, 2025 at 12:35 PM. Counting down to our wedding!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {/* Navigation commented out for wedding landing page */}
        {/* <Navigation /> */}
        <main className="min-h-screen">
          {children}
        </main>
        {/* Footer commented out for wedding landing page */}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
