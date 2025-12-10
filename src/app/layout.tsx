import "./globals.css";
import { Navigation } from "@/features/public/home/components/Navigation";
import { Footer } from "@/features/public/home/components/Footer";
import { ThemeProvider } from "@/features/public/home/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { Karla, Manrope, Spline_Sans } from "next/font/google";

export const metadata = {
  title: "Eghara Bookings - Premium Futsal Booking Platform",
  description:
    "Book premium futsal courts across Nepal with real-time availability",
};

const splineSans = Spline_Sans({
  variable: "--font-spline-sans",
  subsets: ["latin"],
});

const karla = Karla({
  variable: "--font-karla",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`min-h-screen ${splineSans.variable} ${karla.variable} ${manrope.variable} font-manrope antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          <main>{children}</main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
