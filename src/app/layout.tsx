import './globals.css';
import { Toaster } from '@/components/ui/sonner';
import { Karla, Manrope, Spline_Sans } from 'next/font/google';
import Providers from './providers';
import { Footer, Navigation } from '@/features/shared';

export const metadata = {
  title: 'Eghara Bookings - Premium Futsal Booking Platform',
  description: 'Book premium futsal courts across Nepal with real-time availability',
};

const splineSans = Spline_Sans({
  variable: '--font-spline-sans',
  subsets: ['latin'],
});

const karla = Karla({
  variable: '--font-karla',
  subsets: ['latin'],
});

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`min-h-screen ${splineSans.variable} ${karla.variable} ${manrope.variable} font-manrope antialiased`}
      >
        <Providers>
          <main>{children}</main>
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
