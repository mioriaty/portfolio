import { TanstackProvider } from '@/libs/providers/tanstack-query';
import { cn } from '@/libs/utils/string';
import { baseOpenGraph } from '@/shared/metadata';
import type { Metadata } from 'next';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { Cormorant, Fleur_De_Leah, Inter } from 'next/font/google';
import NextjsTopLoader from 'nextjs-toploader';
import { Suspense } from 'react';

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

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
});

export const metadata: Metadata = {
  title: "It's Duong To",
  description:
    'Personal portfolio of a developer and creative mind. We know very little, but we enjoy the journey of discovery.',
  openGraph: {
    ...baseOpenGraph
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body
        className={cn(
          'min-h-screen font-cormorant antialiased',
          cormorant.variable,
          fleurDeLeah.variable,
          inter.variable
        )}
      >
        <NextjsTopLoader height={2} showSpinner={false} color="hsl(var(--primary))" />
        <Suspense fallback={null}>
          <TanstackProvider>
            <NextThemesProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
              {children}
            </NextThemesProvider>
          </TanstackProvider>
        </Suspense>
      </body>
    </html>
  );
}
