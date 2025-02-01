import { Metadata } from 'next';
import * as React from 'react';

import '@/styles/globals.css';

import { siteConfig } from '@/constant/config';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  robots: { index: true, follow: true },
  icons: {
    icon: '/favicon/favicon.ico',
    shortcut: '/favicon/favicon-16x16.png',
    apple: '/favicon/apple-touch-icon.png',
  },
  manifest: `/favicon/site.webmanifest`,
  openGraph: {
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.title,
    images: [`${siteConfig.url}/images/og.jpg`],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [`${siteConfig.url}/images/og.jpg`],
  },
  authors: [
    {
      name: 'Christopher Robin Wible Jr.',
      url: 'https://chriswiblejr.com',
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='h-full scroll-smooth bg-gray-900 text-white'>
      <body className='flex min-h-screen flex-col'>
        <Navbar />
        <main className='flex-1 container mx-auto px-4 py-6'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

function Navbar() {
  return (
    <nav className='w-full border-b border-gray-800 bg-gray-950 px-6 py-4'>
      <div className='container mx-auto flex items-center justify-between'>
        <a href='/' className='text-xl font-bold text-white'>
          {siteConfig.title}
        </a>
        <div className='flex gap-4'>
          <a href='/about' className='hover:text-gray-400'>
            About
          </a>
          <a href='/example' className='hover:text-gray-400'>
            Example
          </a>
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className='w-full border-t border-gray-800 bg-gray-950 px-6 py-4 text-center text-sm text-gray-400'>
      © {new Date().getFullYear()} {siteConfig.title}. All rights reserved.
    </footer>
  );
}
