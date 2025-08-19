import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SessionProviderWrapper from "@/components/SessionProviderWrapper";
import SessionTimer from "@/components/SessionTimer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  metadataBase: new URL('https://bsicanadabank.com'),
  title: {
    default: 'Royal Investment Bank',
    template: 'Home | Royal Investment Bank',
  },
  description: 'Royal Investment Bank, Personal Banking, Online Banking Services -  RIBC ... Canada Bank offers a range of personal banking services including online banking, loans, and investment options. Experience secure and convenient banking with us.',
  openGraph: {
    type: 'website',
    url: 'https://bsicanadabank.com',
    siteName: 'Royal Investment Bank',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        
 
        {children}
       
       
      </body>
    </html>
  );
}
