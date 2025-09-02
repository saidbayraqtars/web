'use client';
import { useEffect, useState } from 'react';

export default function ServicesHero() {
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
        backgroundImage: `url('https://readdy.ai/api/search-image?query=Professional%20technology%20services%20workspace%20with%20multiple%20computer%20screens%20showing%20various%20tech%20solutions%2C%20modern%20office%20environment%20with%20blue%20lighting%2C%20technical%20equipment%20and%20tools%20organized%20professionally%2C%20clean%20contemporary%20design%20with%20digital%20interfaces%20and%20circuit%20patterns&width=1920&height=1080&seq=services-hero-1&orientation=landscape')`,
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
            Teknoloji Hizmetlerimiz
          </h1>
          <p className="text-xl md:text-2xl text-blue-200 mb-8 leading-relaxed max-w-3xl mx-auto">
            15 yıllık deneyimimizle sunduğumuz kapsamlı teknoloji çözümleri. 
            Her ihtiyacınız için uzman ekibimizle yanınızdayız.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button 
              onClick={() => document.getElementById('service-details')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 whitespace-nowrap cursor-pointer"
            >
              Detayları İncele
            </button>
            <button 
              onClick={() => window.location.href = '/iletisim'}
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 whitespace-nowrap cursor-pointer"
            >
              Hemen İletişime Geç
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}