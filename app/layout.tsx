import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "Hari Tech - Enterprise Software Solutions That Scale",
  description:
    "Hari Tech delivers enterprise-grade software solutions for Fortune 500 companies and high-growth startups. We specialize in scalable web applications, mobile development, AI solutions, and cloud infrastructure with guaranteed performance and security.",
  keywords:
    "enterprise software development, custom software solutions, web applications, mobile apps, AI development, cloud infrastructure, Fortune 500, startup solutions, scalable software, enterprise security",
  authors: [{ name: "Hari Tech" }],
  creator: "Hari Tech",
  publisher: "Hari Tech",
  metadataBase: new URL("https://haritech.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Hari Tech - Enterprise Software Solutions That Scale",
    description:
      "Hari Tech delivers enterprise-grade software solutions for Fortune 500 companies and high-growth startups. We specialize in scalable applications with guaranteed performance and security.",
    url: "https://haritech.vercel.app",
    siteName: "Hari Tech",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Hari Tech - Enterprise Software Solutions That Scale",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hari Tech - Enterprise Software Solutions That Scale",
    description:
      "Hari Tech delivers enterprise-grade software solutions for Fortune 500 companies and high-growth startups. We specialize in scalable applications with guaranteed performance and security.",
    images: ["/og-image.png"],
    creator: "@haritech",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "X2kFv1J397jTur9AxkAED_pIqsdLVu-_7qJteIkRTvw",
    yandex: "367cbb79bad959fa",
  },
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head suppressHydrationWarning>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>
         <Toaster />
         {children}</body>
    </html>
  );
}
