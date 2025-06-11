
import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';

// IMPORTANT: Replace with your actual deployed domain
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ffreitas.tech';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Felipe Freitas', // Default title for the homepage
    template: '%s | Felipe Freitas', // Template for other pages
  },
  description: 'Personal portfolio of Felipe Freitas, a seasoned Tech Manager, Engineering Manager, and Software Architect. Discover his experience, skills, and insights on software engineering and leadership.',
  keywords: ['Felipe Freitas', 'Tech Manager', 'Engineering Manager', 'Software Architect', 'Portfolio', 'Next.js', 'React', 'Software Development', 'Cloud Architecture', 'Leadership'],
  authors: [{ name: 'Felipe Freitas', url: siteUrl }],
  creator: 'Felipe Freitas',
  publisher: 'Felipe Freitas',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: {
      default: 'Felipe Freitas',
      template: '%s | Felipe Freitas',
    },
    description: 'Personal portfolio of Felipe Freitas, a seasoned Tech Manager, Engineering Manager, and Software Architect.',
    url: siteUrl,
    siteName: 'Felipe Freitas',
    images: [
      {
        url: '/og-image.png', // IMPORTANT: Create this image and place it in /public/og-image.png (1200x630 recommended)
        width: 1200,
        height: 630,
        alt: 'Felipe Freitas - Portfolio',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: {
      default: 'Felipe Freitas',
      template: '%s | Felipe Freitas',
    },
    description: 'Personal portfolio of Felipe Freitas, a seasoned Tech Manager, Engineering Manager, and Software Architect.',
    site: '@felipefreitasffs', // IMPORTANT: Replace with your Twitter handle if you have one
    creator: '@felipefreitasffs', // IMPORTANT: Replace with your Twitter handle if you have one
    images: ['/og-image.png'], // IMPORTANT: Ensure /public/og-image.png exists
  },
  icons: {
    icon: '/icon.svg', // Path to your favicon in /src/app/icon.svg
    apple: '/apple-icon.png', // IMPORTANT: Create an apple-touch-icon.png and place in /public
  },
  manifest: '/site.webmanifest', // IMPORTANT: Create a site.webmanifest file in /public
  alternates: {
    canonical: '/',
  }
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: 'hsl(220 25% 8%)' },
    { media: '(prefers-color-scheme: light)', color: 'hsl(220 25% 8%)' }, // Assuming dark theme only for now
  ],
  colorScheme: 'dark', // Or 'light dark' if you support both
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
