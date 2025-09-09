
'use client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import CareerHero from './CareerHero';
import CareerForm from './CareerForm';
import Head from 'next/head';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Kariyer - İş Fırsatları",
  description: "Bayraktar Yazılım 3D ekibine katılın! Yazılım geliştirme, bilgisayar tamiri ve teknik servis alanlarında kariyer fırsatları. Stajyer ve deneyimli pozisyonlar için başvurun.",
  keywords: "kariyer, iş fırsatları, bayraktar yazılım, staj, yazılım geliştirici, teknik servis, samsun, iş başvurusu",
  openGraph: {
    title: "Kariyer - Bayraktar Yazılım 3D",
    description: "Ekibimize katılın! Yazılım geliştirme ve teknik servis alanlarında kariyer fırsatları.",
    url: "/kariyer",
  },
  alternates: {
    canonical: "/kariyer",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function CareerPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": "Yazılım Geliştirici & Teknik Servis Uzmanı",
    "description": "Bayraktar Yazılım 3D ekibine katılmak için stajyer ve deneyimli pozisyonlarda iş fırsatları",
    "datePosted": new Date().toISOString().split('T')[0],
    "validThrough": new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    "employmentType": ["FULL_TIME", "PART_TIME", "INTERN"],
    "hiringOrganization": {
      "@type": "Organization",
      "name": "Bayraktar Yazılım 3D",
      "sameAs": `${process.env.NEXT_PUBLIC_SITE_URL || "https://example.com"}`,
      "logo": `${process.env.NEXT_PUBLIC_SITE_URL || "https://example.com"}/logo.png`
    },
    "jobLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Kılıçdede Mah. Çubukçu Sok. No:3/B",
        "addressLocality": "İlkadım",
        "addressRegion": "Samsun",
        "addressCountry": "TR"
      }
    },
    "baseSalary": {
      "@type": "MonetaryAmount",
      "currency": "TRY",
      "value": {
        "@type": "QuantitativeValue",
        "minValue": 15000,
        "maxValue": 35000,
        "unitText": "MONTH"
      }
    },
    "responsibilities": [
      "Yazılım geliştirme projeleri",
      "Bilgisayar tamiri ve teknik servis",
      "Müşteri destek hizmetleri",
      "Sistem analizi ve optimizasyon"
    ],
    "qualifications": [
      "Bilgisayar Mühendisliği, Yazılım Mühendisliği veya ilgili bölümlerden mezun",
      "Programlama dilleri konusunda bilgi sahibi",
      "Takım çalışmasına uygun",
      "Öğrenmeye açık ve gelişime odaklı"
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
      <CareerHero />
      <CareerForm />
      <Footer />
      <FloatingButtons />
    </div>
  );
}
