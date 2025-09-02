'use client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import ServicesHero from './ServicesHero';
import ServiceDetails from './ServiceDetails';
import ServiceProcess from './ServiceProcess';
import ServicePricing from './ServicePricing';

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
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