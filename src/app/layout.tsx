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

export const metadata: Metadata = {
  title: "WebbyWolf - Premium Web Development Services",
  description: "Transform your digital presence with WebbyWolf's expert web development services. Responsive design, modern frameworks, and exceptional user experiences.",
  keywords: "web development, responsive design, Next.js, React, TypeScript, Tailwind CSS, UI/UX design",
  authors: [{ name: "WebbyWolf Team" }],
  creator: "WebbyWolf",
  publisher: "WebbyWolf",
  openGraph: {
    title: "WebbyWolf - Premium Web Development Services",
    description: "Transform your digital presence with WebbyWolf's expert web development services.",
    type: "website",
    locale: "en_US",
    siteName: "WebbyWolf",
  },
  twitter: {
    card: "summary_large_image",
    title: "WebbyWolf - Premium Web Development Services",
    description: "Transform your digital presence with WebbyWolf's expert web development services.",
    creator: "@webbywolf",
  },
  robots: "index, follow",
};

export function generateViewport() {
  return {
    width: 'device-width',
    initialScale: 1,
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
