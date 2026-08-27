import type { Metadata } from "next";
import { Anton, Inter } from "next/font/google";
import "./globals.css";

// Body / UI text — variable font, excellent at small sizes.
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

// Display / headings — heavy condensed face. Anton ships a single weight (400),
// so never apply font-bold / font-black to it or the browser fakes the bold
// and the letterforms smear.
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
