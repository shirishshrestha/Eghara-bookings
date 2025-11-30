import type { Metadata } from "next";
import { Manrope, Schibsted_Grotesk } from "next/font/google";
import "./globals.css";
import { Providers } from "@/lib/providers";

const schibstedGrotesk = Schibsted_Grotesk({
  variable: "--font-schibsted-grotesk",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope ",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Eghara Bookings",
  description: "Sports booking and management platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${schibstedGrotesk.variable} ${manrope.variable} font-manrope antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
