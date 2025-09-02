'use client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import CareerHero from './CareerHero';
import CareerForm from './CareerForm';

export default function CareerPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <CareerHero />
      <CareerForm />
      <Footer />
      <FloatingButtons />
    </div>
  );
}