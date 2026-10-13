import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'TRUST CODE SYSTEM | Modular Event Perimeter Infrastructure',
  description:
    'Discover TRUST CODE SYSTEM’s modular event perimeter concept, designed to integrate commercial pods, sponsorship, retail, hospitality, and event services into flexible infrastructure.',
  keywords: [
    'Modular Event Perimeter System',
    'Event Infrastructure Solutions',
    'Festival Commercial Infrastructure',
    'Modular Event Pods',
    'Event Sponsorship Activation',
    'Temporary Retail and Hospitality Infrastructure',
    'Event Revenue Optimization',
  ],
  authors: [{ name: 'TRUST CODE SYSTEM' }],
  openGraph: {
    title: 'TRUST CODE SYSTEM | Modular Event Perimeter Infrastructure',
    description:
      'Transforming event perimeters into revenue-generating infrastructure. Modular pods, connected panels, commercial integration, and scalable revenue streams.',
    type: 'website',
    url: 'https://trustcodesystem.com',
    siteName: 'TRUST CODE SYSTEM',
    images: [
      {
        url: '/images/hero_festival_perimeter.jpg',
        width: 1200,
        height: 630,
        alt: 'TRUST CODE SYSTEM - Modular Event Perimeter Infrastructure',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TRUST CODE SYSTEM | Modular Event Perimeter Infrastructure',
    description:
      'Every Inch Matters. Transforming event perimeters into revenue-generating infrastructure for major festivals and temporary venues.',
    images: ['/images/hero_festival_perimeter.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: '#FFFFFF',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Corporation',
    name: 'TRUST CODE SYSTEM',
    alternateName: 'TRUST CODE',
    description:
      'Modular Event Perimeter System transforming underutilized venue boundaries into high-revenue commercial, sponsorship, and hospitality infrastructure.',
    url: 'https://trustcodesystem.com',
    logo: 'https://trustcodesystem.com/images/hero_festival_perimeter.jpg',
    slogan: 'Every Inch Matters.',
    knowsAbout: [
      'Modular Event Infrastructure',
      'Festival Commercial Concessions',
      'Event Perimeter Security and Space Monetization',
      'Turnkey Retail and VIP Hospitality Pods',
    ],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-white text-[#14243A] antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
