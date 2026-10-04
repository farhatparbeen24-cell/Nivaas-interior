import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Inter } from 'next/font/google';
import './globals.css';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  weight: ['500', '600', '700'],
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Nivaas Interiors | Interior Design Studio Bhubaneswar',
  description:
    'A design-led interior studio that turns homes into stories, with fixed timelines, itemised costs, and a 10-year warranty. Based in Patia, Bhubaneswar.',
  keywords: [
    'Interior Designer Bhubaneswar',
    'Modular Kitchen Bhubaneswar',
    '3 BHK Interior Cost Bhubaneswar',
    'Home Renovation Patia Cuttack',
    'Nivaas Interiors',
    'Turnkey Interior Studio Odisha',
  ],
  authors: [{ name: 'Nivaas Interiors' }],
  openGraph: {
    title: 'Nivaas Interiors | Design-Led Homes in Bhubaneswar',
    description:
      'From first sketch to final handover: fixed timelines, itemised costs, and 10-year warranty on woodwork.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Nivaas Interiors',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nivaas Interiors | Interior Design Studio Bhubaneswar',
    description:
      'From first sketch to final handover: fixed timelines, itemised costs, and 10-year warranty on woodwork.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jakarta.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'HomeAndConstructionBusiness',
              name: 'Nivaas Interiors',
              image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0',
              '@id': 'https://nivaasinteriors.com',
              url: 'https://nivaasinteriors.com',
              telephone: '+919437012345',
              priceRange: '₹₹₹',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Plot 412, Infocity Road, Patia',
                addressLocality: 'Bhubaneswar',
                addressRegion: 'Odisha',
                postalCode: '751024',
                addressCountry: 'IN',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 20.3588,
                longitude: 85.8166,
              },
              openingHoursSpecification: {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: [
                  'Monday',
                  'Tuesday',
                  'Wednesday',
                  'Thursday',
                  'Friday',
                  'Saturday',
                ],
                opens: '10:00',
                closes: '19:30',
              },
            }),
          }}
        />
      </head>
      <body className="antialiased selection:bg-[#E5FF6E] selection:text-[#111111] bg-[#111111] text-white">
        {children}
      </body>
    </html>
  );
}
