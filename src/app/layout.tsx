// app/layout.tsx
import './globals.css';
import Navbar from '@/components/Navbar';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { Analytics } from '@vercel/analytics/next';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Abdul Zacky - AI/ML Engineer & Full-Stack Developer",
  description: "Award-winning AI/ML engineer specializing in machine learning, deep learning, and full-stack web development. Winner of Digital Innovation Challenge Bank Indonesia with expertise in Python, Next.js, and modern AI technologies.",
  keywords: [
    "Abdul Zacky",
    "AI Engineer",
    "Machine Learning",
    "Deep Learning",
    "Full-Stack Developer",
    "Next.js Developer",
    "Python Developer",
    "Portfolio",
    "University of Indonesia",
    "AI ML Engineer",
    "Web Developer",
    "Software Engineer"
  ],
  authors: [{ name: "Abdul Zacky" }],
  creator: "Abdul Zacky",
  publisher: "Abdul Zacky",

  // Open Graph (Facebook, LinkedIn, WhatsApp, etc.)
  openGraph: {
    title: "Abdul Zacky - AI/ML Engineer & Full-Stack Developer",
    description: "Award-winning AI/ML engineer with expertise in machine learning, deep learning, and full-stack development. Winner of Digital Innovation Challenge Bank Indonesia.",
    url: "https://www.abdulzacky.dev",
    siteName: "Abdul Zacky Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Abdul Zacky - AI/ML Engineer Portfolio"
      }
    ],
    locale: "en_US",
    type: "website",
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Abdul Zacky - AI/ML Engineer",
    description: "Award-winning AI/ML engineer specializing in machine learning and full-stack development",
    images: ["/og-image.png"],
    creator: "@abdulzacky", // Add your Twitter handle if you have one
  },

  // Robots
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

  // Additional
  metadataBase: new URL('https://www.abdulzacky.dev'),
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          <Navbar />
          <main>{children}</main>
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  );
}
