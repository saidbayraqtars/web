
'use client';
import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0);
  const [particles, setParticles] = useState<Array<{
    id: number;
    left: string;
    top: string;
    animationDelay: string;
    animationDuration: string;
  }>>([]);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Client-side'da parçacıkları oluştur
    const particleArray = [...Array(20)].map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 5}s`,
      animationDuration: `${3 + Math.random() * 2}s`
    }));
    setParticles(particleArray);
  }, []);

  const handleWhatsApp = () => {
    window.open('https://wa.me/905350786101?text=Merhaba, hizmetleriniz hakkında bilgi almak istiyorum.', '_blank');
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20technology%20workspace%20with%20blue%20circuit%20board%20patterns%2C%20digital%20network%20connections%2C%20futuristic%20data%20visualization%2C%20professional%20tech%20environment%20with%20glowing%20blue%20lights%20and%20geometric%20patterns%2C%20clean%20minimalist%20design%20with%20subtle%20parallax%20effects%2C%20high-tech%20atmosphere&width=1920&height=1080&seq=hero-bg-1&orientation=landscape')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Animated Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-800/70 to-indigo-900/80"></div>
      
      {/* Animated Particles */}
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-2 h-2 bg-blue-400/30 rounded-full animate-pulse"
            style={{
              left: particle.left,
              top: particle.top,
              animationDelay: particle.animationDelay,
              animationDuration: particle.animationDuration
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
            style={{ transform: `translateY(${scrollY * 0.2}px)` }}
          >
            Teknolojiyle Tanışın
          </h1>
          <h2 className="text-2xl md:text-3xl text-blue-200 mb-8 font-light">
            Tüm Çözümler Tek Adreste
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-12 leading-relaxed max-w-3xl mx-auto">
            15 yıllık deneyimimizle bilgisayar tamiri, yazılım geliştirme, otomasyon sistemleri ve 
            teknolojik çözümlerinizde güvenilir partneriniz. Hızlı, kaliteli ve uygun fiyatlı hizmet garantisi.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
            <button 
              onClick={() => window.location.href = '/hizmetler'}
              className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-5 rounded-full text-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 whitespace-nowrap cursor-pointer"
            >
              Hizmetlerimizi Keşfedin
            </button>
            <button 
              onClick={handleWhatsApp}
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-12 py-5 rounded-full text-xl font-semibold transition-all duration-300 transform hover:scale-105 whitespace-nowrap cursor-pointer flex items-center space-x-3"
            >
              <div className="w-6 h-6 flex items-center justify-center">
                <i className="ri-whatsapp-fill text-2xl"></i>
              </div>
              <span>WhatsApp</span>
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}