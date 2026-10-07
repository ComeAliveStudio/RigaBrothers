import type { Metadata } from "next";
import { Inter, Playfair_Display, Space_Mono, Oswald } from "next/font/google";
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

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

// Closest Google-hosted stand-in for the "D DIN Exp" hero typeface used on the
// original Replit site. Swap for the real D-DINExp-Bold.woff via next/font/local
// once the licensed font file is available in /src/app/fonts.
const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
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
        className={`${inter.variable} ${playfair.variable} ${spaceMono.variable} ${oswald.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
