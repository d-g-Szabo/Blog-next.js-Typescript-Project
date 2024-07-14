import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The best blog ever",
  description: "The best blog ever made in human history with Next.js",
  // openGraph is used by social media like Facebook and Twitter to display the right information when sharing a link through the chat
  openGraph: {
    title: "The best blog ever",
    description: "The best blog ever made in human history with Next.js",
    type: "website",
    locale: "en_US",
    url: "https://blog-next-js-typescript-project.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
