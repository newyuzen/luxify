import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "LUXIFY AI",
  description: "Discover Your Luxury Aesthetic Identity",

  openGraph: {
    title: "LUXIFY AI",
    description: "AI Beauty Analysis & Luxury Brand Matching",
    url: "https://luxify-two.vercel.app",
    siteName: "LUXIFY AI",

    images: [
      {
        url: "/logo.png.png",
        width: 1200,
        height: 1200,
      },
    ],

    locale: "en_US",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
