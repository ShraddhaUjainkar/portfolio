import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const space = Space_Grotesk({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Shraddha Ujainkar | Software Engineer",
  description:
    "Software Engineer focused on scalable web applications with Laravel, React, and Node.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${space.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        {children}
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || ""} />
      </body>
    </html>
  );
}
