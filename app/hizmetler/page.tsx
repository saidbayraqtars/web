
'use client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import ServicesHero from './ServicesHero';
import ServiceDetails from './ServiceDetails';
import ServiceProcess from './ServiceProcess';
import ServicePricing from './ServicePricing';
import Head from 'next/head';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Hizmetlerimiz - Bilgisayar Tamiri & Yazılım Geliştirme",
  description: "Bilgisayar tamiri, yazılım geliştirme, akıllı otomasyon sistemleri, veri analizi ve mobil uygulama geliştirme hizmetlerimizi keşfedin. Ücretsiz keşif hizmeti!",
  keywords: "bilgisayar tamiri, yazılım geliştirme, akıllı otomasyon, veri analizi, mobil uygulama, web tasarım, teknik servis, samsun",
  openGraph: {
    title: "Hizmetlerimiz - Bayraktar Yazılım 3D",
    description: "Bilgisayar tamiri, yazılım geliştirme, akıllı otomasyon sistemleri ve daha fazlası. Ücretsiz keşif hizmeti!",
    url: "/hizmetler",
  },
  alternates: {
    canonical: "/hizmetler",
  },
};

export default function ServicesPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Bayraktar Yazılım 3D Hizmetleri",
    "description": "Bilgisayar tamiri, yazılım geliştirme, akıllı otomasyon sistemleri ve veri analizi hizmetlerimiz",
    "url": `${process.env.NEXT_PUBLIC_SITE_URL || "https://example.com"}/hizmetler`,
    "itemListElement": [
      {
        "@type": "Service",
        "position": 1,
        "name": "Bilgisayar Tamiri & Teknik Servis",
        "description": "Masaüstü ve laptop bilgisayarlarınızın tüm donanım ve yazılım sorunlarına profesyonel çözüm.",
        "provider": {
          "@type": "LocalBusiness",
          "name": "Bayraktar Yazılım 3D"
        },
        "areaServed": "Samsun",
        "serviceType": "Bilgisayar Tamiri"
      },
      {
        "@type": "Service",
        "position": 2,
        "name": "Yazılım Geliştirme & Destek",
        "description": "İşletmeniz için özel yazılım çözümleri ve mevcut sistemleriniz için kapsamlı destek hizmetleri.",
        "provider": {
          "@type": "LocalBusiness",
          "name": "Bayraktar Yazılım 3D"
        },
        "areaServed": "Samsun",
        "serviceType": "Yazılım Geliştirme"
      },
      {
        "@type": "Service",
        "position": 3,
        "name": "Akıllı Otomasyon Sistemleri",
        "description": "Ev ve iş yerleriniz için gelişmiş otomasyon çözümleri ile konforunuzu artırın.",
        "provider": {
          "@type": "LocalBusiness",
          "name": "Bayraktar Yazılım 3D"
        },
        "areaServed": "Samsun",
        "serviceType": "Otomasyon Sistemleri"
      },
      {
        "@type": "Service",
        "position": 4,
        "name": "Data Çözümleri & Veri Analizi",
        "description": "Verilerinizi değerli içgörülere dönüştüren profesyonel analiz ve raporlama çözümleri.",
        "provider": {
          "@type": "LocalBusiness",
          "name": "Bayraktar Yazılım 3D"
        },
        "areaServed": "Samsun",
        "serviceType": "Veri Analizi"
      }
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
      <ServicesHero />
      <ServiceDetails />
      <ServiceProcess />
      <ServicePricing />
      <Footer />
      <FloatingButtons />
    </div>
  );
}
