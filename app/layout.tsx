import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Scam Sense | Report Online Scams & Cyber Fraud Awareness Platform",
  description:
    "Identify and report online scams with Scam Sense. Learn cyber safety, fraud prevention, and protect yourself from digital fraud.",

  robots: {
    index: true,
    follow: true,
  },

  verification: {
    google: "tIYX7I7NY-w94obHjXrmnz0acAhZspuEl8FdWhf6bDU",
  },

  openGraph: {
    title: "Scam Sense – Online Scam Reporting & Cyber Safety",
    description:
      "A trusted platform to report scams, learn fraud prevention, and stay safe online.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
