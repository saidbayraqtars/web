
'use client';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import Head from 'next/head';

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Bayraktar Yazılım 3D",
    "description": "Samsun'da 15 yıllık deneyimimizle bilgisayar tamiri, yazılım geliştirme, akıllı otomasyon sistemleri ve teknik servis hizmetleri.",
    "url": process.env.NEXT_PUBLIC_SITE_URL || "https://example.com",
    "telephone": "+905350786101",
    "email": "saidbayraktar9@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Kılıçdede Mah. Çubukçu Sok. No:3/B",
      "addressLocality": "İlkadım",
      "addressRegion": "Samsun",
      "addressCountry": "TR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "41.2867",
      "longitude": "36.3300"
    },
    "openingHours": "Mo-Fr 09:00-18:00",
    "priceRange": "$$",
    "areaServed": {
      "@type": "City",
      "name": "Samsun"
    },
    "serviceArea": {
      "@type": "City",
      "name": "Samsun"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Bayraktar Yazılım 3D Hizmetleri",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Bilgisayar Tamiri & Teknik Servis",
            "description": "Masaüstü ve laptop bilgisayarlarınızın tüm donanım ve yazılım sorunlarına profesyonel çözüm."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Yazılım Geliştirme & Destek",
            "description": "İşletmeniz için özel yazılım çözümleri ve mevcut sistemleriniz için kapsamlı destek hizmetleri."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Akıllı Otomasyon Sistemleri",
            "description": "Ev ve iş yerleriniz için gelişmiş otomasyon çözümleri ile konforunuzu artırın."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Data Çözümleri & Veri Analizi",
            "description": "Verilerinizi değerli içgörülere dönüştüren profesyonel analiz ve raporlama çözümleri."
          }
        }
      ]
    },
    "sameAs": [
      "https://www.facebook.com/bayraktaryazilim",
      "https://www.instagram.com/bayraktaryazilim"
    ]
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
      <HeroSection />
      <ServicesSection />
      <TestimonialsSection />
      <Footer />
      <FloatingButtons />
    </div>
  );
}
