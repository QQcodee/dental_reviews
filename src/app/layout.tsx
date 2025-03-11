import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/react";

const geistSans = localFont({
  src: "/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const clashDisplay = localFont({
  src: [
    { path: "/fonts/ClashDisplay-Bold.woff2", weight: "700", style: "normal" },
    {
      path: "/fonts/ClashDisplay-Extralight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "/fonts/ClashDisplay-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "/fonts/ClashDisplay-Variable.woff2",
      weight: "100 900",
      style: "normal",
    }, // If it's a variable font
  ],
  variable: "--font-clash-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dental Reviews",
  description:
    "Aumenta tus reseñas de Google de forma automática y sin esfuerzo",
  icons: {
    icon: "/Logo_Dental_Reviews.png", // Correct relative path from the public folder
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
        className={`${geistSans.variable} ${geistMono.variable} ${clashDisplay.variable} antialiased`}
      >
        <Analytics />
        <Toaster />
        {children}
      </body>
    </html>
  );
}
