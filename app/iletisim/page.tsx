
'use client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import ContactHero from './ContactHero';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import ContactMap from './ContactMap';
import Head from 'next/head';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "İletişim - Bize Ulaşın",
  description: "Bayraktar Yazılım 3D ile iletişime geçin. Samsun İlkadım'da ofisimizi ziyaret edin veya telefon, e-posta ile bize ulaşın. Hızlı çözüm için hemen arayın!",
  keywords: "iletişim, bayraktar yazılım, samsun, adres, telefon, e-posta, ofis, randevu",
  openGraph: {
    title: "İletişim - Bayraktar Yazılım 3D",
    description: "Samsun İlkadım'da ofisimizi ziyaret edin veya telefon, e-posta ile bize ulaşın.",
    url: "/iletisim",
  },
  alternates: {
    canonical: "/iletisim",
  },
};

export default function ContactPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "İletişim - Bayraktar Yazılım 3D",
    "description": "Bayraktar Yazılım 3D ile iletişime geçin. Samsun'da bulunan ofisimizi ziyaret edin.",
    "url": `${process.env.NEXT_PUBLIC_SITE_URL || "https://example.com"}/iletisim`,
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": "Bayraktar Yazılım 3D",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Kılıçdede Mah. Çubukçu Sok. No:3/B",
        "addressLocality": "İlkadım",
        "addressRegion": "Samsun",
        "postalCode": "55200",
        "addressCountry": "TR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "41.2867",
        "longitude": "36.3300"
      },
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+905350786101",
          "contactType": "customer service",
          "availableLanguage": "Turkish"
        },
        {
          "@type": "ContactPoint",
          "email": "saidbayraktar9@gmail.com",
          "contactType": "customer service",
          "availableLanguage": "Turkish"
        }
      ],
      "openingHours": "Mo-Fr 09:00-18:00"
    }
  };

  return (
    <div className="min-h-screen">
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      <Header />
      <ContactHero />
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <ContactForm />
        <ContactInfo />
      </div>
      <ContactMap />
      <Footer />
      <FloatingButtons />
    </div>
  );
}
