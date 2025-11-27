import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mh Haque - Portfolio",
  description: "Personal portfolio of Mh Haque - Web Developer & Designer",
  keywords: [
    "portfolio",
    "web development",
    "frontend",
    "react",
    "next.js",
    "typescript",
  ],
  authors: [{ name: "Mh Haque" }],
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mhhaque.github.io",
    title: "Mh Haque - Portfolio",
    description: "Personal portfolio of Mh Haque - Web Developer & Designer",
    siteName: "Mh Haque",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mh Haque - Portfolio",
    description: "Personal portfolio of Mh Haque - Web Developer & Designer",
    creator: "@yourtwitter",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="theme-color" content="#3b82f6" />
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
