import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Archivo } from "next/font/google";



export const metadata: Metadata = {
  title: 'Junior Mobile Detailing - Premium Car Care at Your Door',
  description: 'Experience professional mobile car detailing services. Explore our convenient packages, add-ons, and easily schedule your next detail for a showroom shine.',
  keywords: ["mobile detailing, car wash, auto detailing, interior car cleaning, exterior car cleaning, car care, scheduling, vehicle cleaning, car detailing packages, add-on services"],
  openGraph: {
    "title": "Junior Mobile Detailing - Premium Car Care at Your Door",
    "description": "Experience professional mobile car detailing services. Explore our convenient packages, add-ons, and easily schedule your next detail for a showroom shine.",
    "url": "https://www.juniormobiledetailing.com",
    "siteName": "Junior Mobile Detailing",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/close-up-car-care-process_23-2149193167.jpg",
        "alt": "Shining car after mobile detailing"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Junior Mobile Detailing - Premium Car Care at Your Door",
    "description": "Experience professional mobile car detailing services. Explore our convenient packages, add-ons, and easily schedule your next detail for a showroom shine.",
    "images": [
      "http://img.b2bpic.net/free-photo/close-up-car-care-process_23-2149193167.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${archivo.variable} antialiased`}>
          
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
