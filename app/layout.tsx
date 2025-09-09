
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Pacifico } from "next/font/google";
import "./globals.css";

const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-pacifico',
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Bayraktar Yazılım 3D - Bilgisayar Tamiri & Yazılım Geliştirme Samsun",
    template: "%s | Bayraktar Yazılım 3D"
  },
  description: "Samsun'da 15 yıllık deneyimimizle bilgisayar tamiri, yazılım geliştirme, akıllı otomasyon sistemleri ve teknik servis hizmetleri. Profesyonel çözümler için hemen arayın!",
  keywords: "bilgisayar tamiri, yazılım geliştirme, teknik servis, akıllı otomasyon, web tasarım, mobil uygulama, veri analizi, Samsun, Bayraktar Yazılım",
  authors: [{ name: "Bayraktar Yazılım 3D" }],
  creator: "Bayraktar Yazılım 3D",
  publisher: "Bayraktar Yazılım 3D",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Bayraktar Yazılım 3D - Bilgisayar Tamiri & Yazılım Geliştirme",
    description: "Samsun'da 15 yıllık deneyimimizle bilgisayar tamiri, yazılım geliştirme ve teknik servis hizmetleri. Profesyonel çözümler için hemen arayın!",
    url: '/',
    siteName: 'Bayraktar Yazılım 3D',
    locale: 'tr_TR',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Bayraktar Yazılım 3D - Bilgisayar Tamiri & Yazılım Geliştirme',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Bayraktar Yazılım 3D - Bilgisayar Tamiri & Yazılım Geliştirme",
    description: "Samsun'da 15 yıllık deneyimimizle bilgisayar tamiri, yazılım geliştirme ve teknik servis hizmetleri.",
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" suppressHydrationWarning={true}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${pacifico.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
