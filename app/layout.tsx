import type { Metadata } from "next";
import "./globals.css";
import ThemeRegistry from "@/components/ThemeRegistry";
import Navbar from "@/components/Navbar";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Ziyarah Travels - Hajj, Umrah & Islamic Pilgrimage Packages",
  description: "Experience the spiritual journey of a lifetime with Ziyarah Travels. We offer comprehensive Hajj, Umrah, and Ziyarah packages with expert guidance and exceptional service.",
  keywords: "hajj, umrah, ziyarah, islamic travel, pilgrimage, mecca, medina, muslim travel",
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    title: "Ziyarah Travels - Hajj, Umrah & Islamic Pilgrimage Packages",
    description: "Experience the spiritual journey of a lifetime with Ziyarah Travels.",
    images: ['/logo.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Ziyarah Travels - Hajj, Umrah & Islamic Pilgrimage Packages",
    description: "Experience the spiritual journey of a lifetime with Ziyarah Travels.",
    images: ['/logo.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <Navbar />
          {children}
          <WhatsAppButton />
        </ThemeRegistry>
      </body>
    </html>
  );
}
