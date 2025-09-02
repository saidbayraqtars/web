'use client';
import { useEffect, useState } from 'react';

export default function AboutHero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      className="relative min-h-[70vh] flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url('https://readdy.ai/api/search-image?query=Professional%20technology%20company%20office%20interior%20with%20modern%20workstations%2C%20team%20collaboration%20spaces%2C%20contemporary%20design%20with%20blue%20accent%20lighting%2C%20clean%20organized%20workspace%20with%20multiple%20computer%20setups%20and%20tech%20equipment%2C%20inspiring%20corporate%20environment&width=1920&height=1080&seq=about-hero-1&orientation=landscape')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/85 via-indigo-800/80 to-blue-900/85"></div>
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 
            className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
            style={{ transform: `translateY(${scrollY * 0.1}px)` }}
          >
            Hakkımızda
          </h1>
          <p className="text-xl md:text-2xl text-blue-200 mb-8 leading-relaxed max-w-3xl mx-auto">
            15 yıldır teknoloji dünyasında güvenilir çözüm ortağınız. 
            İnovasyon ve kalite odaklı yaklaşımımızla fark yaratıyoruz.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button 
              onClick={() => document.getElementById('our-story')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 whitespace-nowrap cursor-pointer"
            >
              Hikayemizi Keşfet
            </button>
            <button 
              onClick={() => document.getElementById('our-team')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 whitespace-nowrap cursor-pointer"
            >
              Ekibimizi Tanı
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}