import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

// Single brand typeface (Brand Guidelines v2): Montserrat across display, body,
// and accent. Weights 400 body / 600 labels+UI / 700 headings / 900 display.
const sans = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  style: ["normal", "italic"],
  variable: "--f-sans",
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
    <html lang="en" className={sans.variable}>
      <body>{children}</body>
    </html>
  );
}
