import { cn } from '@/shared/utils/string';
import type { Metadata } from 'next';
import { Cormorant, Fleur_De_Leah } from 'next/font/google';

import './globals.css';

const cormorant = Cormorant({
  subsets: ['latin'],
  variable: '--font-cormorant',
  display: 'swap'
});

const fleurDeLeah = Fleur_De_Leah({
  subsets: ['latin'],
  variable: '--font-fleur-de-leah',
  weight: '400',
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'Duong - A slothful creature from Earth',
  description:
    'Personal portfolio of a developer and creative mind. We know very little, but we enjoy the journey of discovery.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn('min-h-screen font-cormorant antialiased', cormorant.variable, fleurDeLeah.variable)}>
        {children}
      </body>
    </html>
  );
}
