import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import BackToTop from "@/components/back-to-top";
import ClientLayout from "@/components/client-layout";

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bliss Café - Artisan Coffee & Pastries",
  description: "Welcome to Bliss Café, your local haven for artisan coffee, freshly baked pastries, and a cozy atmosphere. Visit us for a delightful experience.",
  keywords: "coffee shop, artisan coffee, pastries, café, Bliss Café, local café",
  authors: [{ name: "Bliss Café Team" }],
  openGraph: {
    title: "Bliss Café - Artisan Coffee & Pastries",
    description: "Welcome to Bliss Café, your local haven for artisan coffee, freshly baked pastries, and a cozy atmosphere.",
    url: "https://blisscafe.bhathiya.dev",
    siteName: "Bliss Café",
    images: [
      {
        url: "/source/logo.png",
        width: 800,
        height: 600,
        alt: "Bliss Café Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bliss Café - Artisan Coffee & Pastries",
    description: "Welcome to Bliss Café, your local haven for artisan coffee and pastries.",
    images: ["/source/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${quicksand.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ClientLayout>
            {children}
            <BackToTop />
          </ClientLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
