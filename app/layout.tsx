import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ClerkProvider } from '@clerk/nextjs'

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Awais Niaz | MERN Stack & Agentic AI Developer",
  description: "Professional portfolio of Awais Niaz, a MERN Stack and Agentic AI Developer based in Karachi, Pakistan. Specialized in React, Next.js, Node.js, MongoDB, TypeScript, AI integration, and modern web applications with 10+ live projects.",
  keywords: ["MERN Stack Developer", "Agentic AI", "React Developer", "Next.js", "Node.js", "MongoDB", "TypeScript", "AI Developer", "Karachi", "Pakistan", "Web Development", "E-commerce", "LMS"],
  authors: [{ name: "Awais Niaz" }],
  creator: "Awais Niaz",
  icons: {
    icon: '/portfolio.jpg',
    shortcut: '/portfolio.jpg',
    apple: '/portfolio.jpg',
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://awais-niaz-portfolio.vercel.app",
    title: "Awais Niaz | MERN Stack & Agentic AI Developer",
    description: "Building innovative web applications and AI-powered platforms with MERN Stack - from Karachi, Pakistan to global markets",
    siteName: "Awais Niaz Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Awais Niaz | MERN Stack & Agentic AI Developer",
    description: "Building innovative web applications and AI-powered platforms with MERN Stack",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${inter.variable} font-sans antialiased`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
