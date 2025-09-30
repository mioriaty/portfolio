import { cn } from '@/shared/utils/string';
import type { Metadata } from 'next';
import { Cormorant } from 'next/font/google';

import './globals.css';

const cormorant = Cormorant({
  subsets: ['latin'],
  variable: '--font-cormorant'
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
      <body className={cn('min-h-screen font-cormorant antialiased', cormorant.variable)}>{children}</body>
    </html>
  );
}
