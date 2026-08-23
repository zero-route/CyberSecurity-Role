import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cyber Security Roles & Spectrum",
  description:
    "Panduan interaktif memahami divisi tim cyber security — White, Red, Blue, Purple, Yellow, Green, dan Orange Team — beserta profesi di dalamnya.",
  keywords: [
    "cyber security",
    "red team",
    "blue team",
    "purple team",
    "security careers",
    "cyber security roles",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
