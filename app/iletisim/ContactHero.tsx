'use client';
import { useEffect, useState } from 'react';

export default function ContactHero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      className="relative min-h-[60vh] flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20customer%20service%20and%20communication%20center%20with%20professional%20staff%20at%20work%2C%20contemporary%20office%20environment%20with%20technology%20equipment%2C%20clean%20workspace%20with%20blue%20lighting%20and%20communication%20devices%2C%20professional%20contact%20center%20atmosphere&width=1920&height=1080&seq=contact-hero-1&orientation=landscape')`,
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
            İletişim
          </h1>
          <p className="text-xl md:text-2xl text-blue-200 mb-8 leading-relaxed max-w-3xl mx-auto">
            Size nasıl yardımcı olabiliriz? Projeleriniz ve sorularınız için 
            7/24 ulaşabilirsiniz.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
            <a 
              href="tel:+905551234567"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center space-x-3 whitespace-nowrap cursor-pointer"
            >
              <div className="w-6 h-6 flex items-center justify-center">
                <i className="ri-phone-fill text-xl"></i>
              </div>
              <span>+90 555 123 45 67</span>
            </a>
            <a 
              href="https://wa.me/905551234567"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center space-x-3 whitespace-nowrap cursor-pointer"
            >
              <div className="w-6 h-6 flex items-center justify-center">
                <i className="ri-whatsapp-fill text-xl"></i>
              </div>
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}