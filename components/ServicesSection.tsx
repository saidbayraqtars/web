
'use client';
import { useState, useEffect } from 'react';

export default function ServicesSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const services = [
    {
      id: 1,
      title: 'Bilgisayar Tamiri & Teknik Servis',
      description: 'Tüm marka bilgisayar, laptop ve donanım sorunlarınıza hızlı çözüm. Aynı gün teslimat imkanı.',
      icon: 'ri-computer-line',
      color: 'blue',
      image: 'https://readdy.ai/api/search-image?query=Professional%20computer%20repair%20technician%20working%20on%20laptop%20motherboard%20with%20precision%20tools%2C%20clean%20workspace%20with%20electronic%20components%2C%20modern%20tech%20repair%20shop%20environment%20with%20blue%20lighting%2C%20detailed%20circuit%20board%20repair%2C%20professional%20service%20atmosphere&width=400&height=300&seq=service-1&orientation=landscape'
    },
    {
      id: 2,
      title: 'Yazılım Geliştirme & Destek',
      description: 'Özel yazılım çözümleri, web uygulamaları ve mevcut sistemleriniz için profesyonel destek.',
      icon: 'ri-code-line',
      color: 'indigo',
      image: 'https://readdy.ai/api/search-image?query=Software%20developer%20coding%20on%20multiple%20monitors%2C%20modern%20programming%20workspace%20with%20clean%20code%20on%20screens%2C%20professional%20development%20environment%2C%20blue%20and%20purple%20lighting%2C%20contemporary%20office%20setup%20with%20modern%20technology&width=400&height=300&seq=service-2&orientation=landscape'
    },
    {
      id: 3,
      title: 'Akıllı Otomasyon Sistemleri',
      description: 'Ev ve iş yerleriniz için akıllı otomasyon, IoT çözümleri ve uzaktan kontrol sistemleri.',
      icon: 'ri-home-gear-line',
      color: 'green',
      image: 'https://readdy.ai/api/search-image?query=Smart%20home%20automation%20control%20panel%20with%20modern%20interface%2C%20intelligent%20lighting%20and%20climate%20control%20systems%2C%20sleek%20contemporary%20interior%20with%20automated%20devices%2C%20professional%20installation%2C%20blue%20accent%20lighting&width=400&height=300&seq=service-3&orientation=landscape'
    },
    {
      id: 4,
      title: 'Data Çözümleri & Veri Analizi',
      description: 'Büyük veri analizi, iş zekası çözümleri ve verilerinizi değerli bilgiye dönüştürme.',
      icon: 'ri-bar-chart-line',
      color: 'purple',
      image: 'https://readdy.ai/api/search-image?query=Data%20analytics%20dashboard%20with%20colorful%20charts%20and%20graphs%20on%20large%20monitors%2C%20professional%20data%20scientist%20workspace%2C%20modern%20business%20intelligence%20visualization%2C%20clean%20office%20environment%20with%20blue%20and%20purple%20data%20displays&width=400&height=300&seq=service-4&orientation=landscape'
    },
    {
      id: 5,
      title: 'Mobil Uygulama Geliştirme',
      description: 'iOS ve Android platformları için kullanıcı dostu, performanslı mobil uygulamalar.',
      icon: 'ri-smartphone-line',
      color: 'teal',
      image: 'https://readdy.ai/api/search-image?query=Mobile%20app%20development%20workspace%20with%20smartphones%20and%20tablets%20displaying%20modern%20app%20interfaces%2C%20clean%20development%20environment%2C%20professional%20mobile%20UI%20design%20on%20screens%2C%20contemporary%20office%20with%20blue%20lighting&width=400&height=300&seq=service-5&orientation=landscape'
    },
    {
      id: 6,
      title: 'Güvenlik Kamerası & Uydu Kurulumu',
      description: 'Profesyonel güvenlik kamera sistemleri, uydu kurulumu ve izleme çözümleri.',
      icon: 'ri-camera-line',
      color: 'red',
      image: 'https://readdy.ai/api/search-image?query=Professional%20security%20camera%20installation%20on%20modern%20building%2C%20technician%20installing%20surveillance%20system%2C%20high-quality%20security%20equipment%2C%20professional%20installation%20service%2C%20clean%20contemporary%20architecture&width=400&height=300&seq=service-6&orientation=landscape'
    },
    {
      id: 7,
      title: 'Web Tasarım',
      description: 'Modern, responsive ve SEO uyumlu web siteleri. Profesyonel tasarım ve kullanıcı deneyimi.',
      icon: 'ri-palette-line',
      color: 'orange',
      image: 'https://readdy.ai/api/search-image?query=Web%20designer%20working%20on%20modern%20website%20layouts%20on%20large%20monitors%2C%20creative%20workspace%20with%20design%20tools%2C%20contemporary%20web%20design%20interface%2C%20clean%20professional%20environment%20with%20colorful%20UI%20elements%20on%20screens&width=400&height=300&seq=service-7&orientation=landscape'
    }
  ];

  const servicesPerSlide = 3;
  const totalSlides = Math.ceil(services.length / servicesPerSlide);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 4000);

    return () => clearInterval(timer);
  }, [totalSlides, isAutoPlaying]);

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700',
      indigo: 'from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700',
      green: 'from-green-500 to-green-600 hover:from-green-600 hover:to-green-700',
      purple: 'from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700',
      teal: 'from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700',
      red: 'from-red-500 to-red-600 hover:from-red-600 hover:to-red-700',
      orange: 'from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    setIsAutoPlaying(false);
  };

  const getCurrentServices = () => {
    const startIndex = currentSlide * servicesPerSlide;
    return services.slice(startIndex, startIndex + servicesPerSlide);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Teknolojik Çözümlerimiz
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            15 yıllık deneyimimizle sunduğumuz kapsamlı teknoloji hizmetleri. 
            Her projede kalite, hız ve müşteri memnuniyeti önceliğimiz.
          </p>
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center text-blue-600 hover:bg-blue-50 cursor-pointer"
          >
            <i className="ri-arrow-left-line text-xl"></i>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center text-blue-600 hover:bg-blue-50 cursor-pointer"
          >
            <i className="ri-arrow-right-line text-xl"></i>
          </button>

          {/* Carousel Container */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
                    {services
                      .slice(slideIndex * servicesPerSlide, (slideIndex + 1) * servicesPerSlide)
                      .map((service) => (
                        <div
                          key={service.id}
                          className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:scale-105"
                        >
                          <div className="relative h-48 overflow-hidden">
                            <img
                              src={service.image}
                              alt={service.title}
                              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                            />
                            <div className={`absolute top-4 left-4 w-12 h-12 bg-gradient-to-r ${getColorClasses(service.color)} rounded-full flex items-center justify-center shadow-lg`}>
                              <i className={`${service.icon} text-white text-xl`}></i>
                            </div>
                          </div>
                          
                          <div className="p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                              {service.title}
                            </h3>
                            <p className="text-gray-600 mb-4 leading-relaxed">
                              {service.description}
                            </p>
                            <button 
                              onClick={() => window.location.href = '/iletisim'}
                              className={`w-full bg-gradient-to-r ${getColorClasses(service.color)} text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg whitespace-nowrap cursor-pointer`}
                            >
                              Detaylı Bilgi Al
                            </button>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentSlide(index);
                  setIsAutoPlaying(false);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                  index === currentSlide ? 'bg-blue-600 w-8' : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          {/* Auto-play Control */}
          <div className="flex justify-center mt-4">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                isAutoPlaying 
                  ? 'bg-blue-600 text-white hover:bg-blue-700' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {isAutoPlaying ? (
                <>
                  <i className="ri-pause-line mr-1"></i>
                  Duraklat
                </>
              ) : (
                <>
                  <i className="ri-play-line mr-1"></i>
                  Otomatik Oynat
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
