import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "HASYRA | Smart Feeding Assistant for Kids",
  description:
    "HASYRA, çocukların kendi kendine yemek yeme alışkanlığını destekleyen akıllı yemek asistanıdır.",
  keywords: [
    "HASYRA",
    "smart feeding assistant",
    "kids feeding app",
    "çocuk yemek uygulaması",
    "yemek alışkanlığı",
    "ebeveyn uygulaması",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
