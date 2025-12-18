import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

<link
  href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700&display=swap"
  rel="stylesheet"
/>;

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
  // themeColor and viewport moved to correct exports below
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

// Next.js viewport export
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
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
        {/* Inter font is loaded via next/font/google at the top of this file */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        {/* theme-color can be set here or with CSS variables */}
        <meta
          name="theme-color"
          content="#f8fafc"
          media="(prefers-color-scheme: light)"
        />
        <meta
          name="theme-color"
          content="#0f172a"
          media="(prefers-color-scheme: dark)"
        />
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
