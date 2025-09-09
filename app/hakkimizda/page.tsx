
'use client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import AboutHero from './AboutHero';
import AboutStory from './AboutStory';
import TeamSection from './TeamSection';
import AboutValues from './AboutValues';
import Head from 'next/head';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Hakkımızda - 15 Yıllık Deneyimimiz",
  description: "Bayraktar Yazılım 3D olarak 15 yıldır Samsun'da bilgisayar tamiri, yazılım geliştirme ve teknik servis alanında hizmet veriyoruz. Ekibimizi ve hikayemizi keşfedin.",
  keywords: "hakkımızda, bayraktar yazılım, ekip, deneyim, samsun, bilgisayar tamiri, yazılım geliştirme",
  openGraph: {
    title: "Hakkımızda - Bayraktar Yazılım 3D",
    description: "15 yıldır Samsun'da bilgisayar tamiri, yazılım geliştirme ve teknik servis alanında hizmet veriyoruz.",
    url: "/hakkimizda",
  },
  alternates: {
    canonical: "/hakkimizda",
  },
};

export default function AboutPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "Hakkımızda - Bayraktar Yazılım 3D",
    "description": "Bayraktar Yazılım 3D olarak 15 yıldır Samsun'da bilgisayar tamiri, yazılım geliştirme ve teknik servis alanında hizmet veriyoruz.",
    "url": `${process.env.NEXT_PUBLIC_SITE_URL || "https://example.com"}/hakkimizda`,
    "mainEntity": {
      "@type": "Organization",
      "name": "Bayraktar Yazılım 3D",
      "foundingDate": "2009",
      "founder": {
        "@type": "Person",
        "name": "Said Bayraktar"
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Kılıçdede Mah. Çubukçu Sok. No:3/B",
        "addressLocality": "İlkadım",
        "addressRegion": "Samsun",
        "addressCountry": "TR"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+905350786101",
        "email": "saidbayraktar9@gmail.com",
        "contactType": "customer service"
      }
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
      <AboutHero />
      <AboutStory />
      <AboutValues />
      <TeamSection />
      <Footer />
      <FloatingButtons />
    </div>
  );
}
