import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Hari Tech - Enterprise Software Solutions That Scale",
  description:
    "Hari Tech delivers enterprise-grade software solutions for Fortune 500 companies and high-growth startups. We specialize in scalable web applications, mobile development, AI solutions, and cloud infrastructure with guaranteed performance and security.",
  keywords:
    "enterprise software development, custom software solutions, web applications, mobile apps, AI development, cloud infrastructure, Fortune 500, startup solutions, scalable software, enterprise security, software consulting, digital transformation",
  authors: [{ name: "Haritechnology" }],
  creator: "Haritechnology",
  publisher: "Haritechnology",
  metadataBase: new URL("https://www.haritechnology.com.et/"),
  alternates: {
    canonical: "/",
  },
  category: "Technology",
  classification: "Business",
  referrer: "origin-when-cross-origin",
  openGraph: {
    title: "Hari Tech - Enterprise Software Solutions That Scale",
    description:
      "Hari Tech delivers enterprise-grade software solutions for Fortune 500 companies and high-growth startups. We specialize in scalable applications with guaranteed performance and security.",
    url: "https://www.haritechnology.com.et/",
    siteName: "Hari Tech",
    images: [
      {
        url: "https://www.haritechnology.com.et/og-image.png",
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
    images: ["https://www.haritechnology.com.et/og-image.png"],
    creator: "@haritechnology",
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
  generator: "Next.js",
  applicationName: "haritechnology",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "haritechnology",
  },
  formatDetection: {
    telephone: false,
  },
};

const inter = Inter({ subsets: ["latin"] });

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
  font-family: ${inter.style.fontFamily};
}
        `}</style>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Hari Tech",
              "url": "https://www.haritechnology.com.et",
              "logo": "https://www.haritechnology.com.et/logo.jpg",
              "description": "Enterprise-grade software solutions for Fortune 500 companies and high-growth startups",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "ET"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "availableLanguage": "English"
              },
              "sameAs": [
                "https://twitter.com/haritechnology",
                "https://linkedin.com/company/haritechnology"
              ]
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Toaster />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
