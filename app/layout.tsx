import type { Metadata } from "next";
import { Anton, Inter } from "next/font/google";
import "./globals.css";
import React from "react";


const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pizza Place Go | Hot Pizza Deals & Delivery in Sri Lanka",
  description:
      "Handcrafted wood-fired pizzas made with premium ingredients. Order online for delivery in Hingurakgoda and Habarana.",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html
          lang="en"
          className={`${inter.variable} ${anton.variable} h-full antialiased`}
      >
      <body className="min-h-full flex flex-col">{children}</body>
      </html>
  );
}
