import type { Metadata, Viewport } from "next";
import { Archivo, Hanken_Grotesk, Libre_Caslon_Text } from "next/font/google";
import "./globals.css";

// Headlines: Archivo (variable, with width axis for the athletic expanded feel)
const display = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--f-display",
  display: "swap",
});

// Body + UI: Hanken Grotesk
const body = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--f-body",
  display: "swap",
});

// Emphasis accent: Libre Caslon Text italic
const accent = Libre_Caslon_Text({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--f-accent",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AthleteOS — Double your revenue in 60 days or you don't pay",
  description:
    "The done-for-you acquisition system built exclusively for fitness coaches and influencers. We fix the leaks in your ads, funnel, and follow up. Double your revenue in 60 days or you don't pay.",
  metadataBase: new URL("https://athleteos.co"),
  openGraph: {
    title:
      "AthleteOS — The acquisition system for fitness coaches and influencers",
    description:
      "We install a done-for-you acquisition system across your ads, funnels, and workflows. Double your revenue in 60 days or you don't pay.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#f7f4f1",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${accent.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
