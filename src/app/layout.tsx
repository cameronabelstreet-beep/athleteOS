import type { Metadata, Viewport } from "next";
import { Libre_Caslon_Text } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

// Trial: TT Runs as the site sans (display + body), replacing Archivo/Hanken.
// NOTE: only the Regular (400) weight ships in the trial file, so bold headings
// are synthesized by the browser (faux bold). Libre Caslon italic stays as the
// emphasis-word accent inside headlines.
const runs = localFont({
  src: "./fonts/TTRunsTrial-Regular.ttf",
  variable: "--f-runs",
  display: "swap",
});

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
    <html lang="en" className={`${runs.variable} ${accent.variable}`}>
      <body>{children}</body>
    </html>
  );
}
