'use client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import AboutHero from './AboutHero';
import AboutStory from './AboutStory';
import TeamSection from './TeamSection';
import AboutValues from './AboutValues';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
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