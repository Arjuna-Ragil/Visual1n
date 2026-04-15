import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://v1sualin.com'),
  title: {
    default: "V1SUALIN | Premium Design & Engineering Agency",
    template: "%s | V1SUALIN"
  },
  description: "Visualin exists at the intersection of creative design and engineering. We build high-performance, precision-crafted digital architecture, websites, and brand identities tailored to your specific DNA.",
  keywords: ["Visualin", "Digital Agency", "Web Design", "Frontend Engineering", "UI/UX Design", "Brand Identity", "Portfolio", "Visualin Design"],
  authors: [{ name: "Visualin" }],
  creator: "Visualin",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://v1sualin.com",
    title: "V1SUALIN | Premium Design & Engineering Agency",
    description: "Visualin exists at the intersection of creative design and engineering. We build high-performance, precision-crafted digital architecture.",
    siteName: "V1SUALIN",
    images: [{
      url: "/icon.png",
      width: 800,
      height: 800,
      alt: "V1SUALIN Icon"
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "V1SUALIN | Premium Design & Engineering Agency",
    description: "Visualin exists at the intersection of creative design and engineering. We build high-performance digital architecture.",
    images: ["/icon.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
