import type { Metadata } from "next";
import { Fraunces, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
  display: "swap",
});

const SITE_URL = "https://how-i-work-with-ai.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "How I Work With AI — Deepak Chauhan",
  description:
    "An interactive showcase of how I use AI across real estate research, analytics, valuation, design and automation.",
  openGraph: {
    title: "How I Work With AI — Deepak Chauhan",
    description:
      "An interactive showcase of how I use AI across real estate research, analytics, valuation, design and automation.",
    url: SITE_URL,
    siteName: "How I Work With AI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "How I Work With AI — Deepak Chauhan",
    description:
      "An interactive showcase of how I use AI across real estate research, analytics, valuation, design and automation.",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable} ${plexMono.variable}`}>
      <body className="font-body bg-ivory text-charcoal antialiased">{children}</body>
    </html>
  );
}
