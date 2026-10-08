import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

// The actual hero typeface from the original Replit site.
const dDinExp = localFont({
  src: "./fonts/D-DINExp-Bold.woff",
  variable: "--font-d-din-exp",
  weight: "700",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Riga Brothers — Crowdfunding",
  description:
    "Support Riga Brothers, a documentary 30 years in the making. Back the project and claim your reward.",
  openGraph: {
    title: "Riga Brothers — Crowdfunding",
    description:
      "Support Riga Brothers, a documentary 30 years in the making. Back the project and claim your reward.",
    type: "website",
    images: ["/riga-brothers-poster.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Riga Brothers — Crowdfunding",
    description:
      "Support Riga Brothers, a documentary 30 years in the making. Back the project and claim your reward.",
    images: ["/riga-brothers-poster.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} ${dDinExp.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
