
'use client';
import { useState, useEffect } from 'react';

export default function ServiceDetails() {
  const [visibleServices, setVisibleServices] = useState<number[]>([]);

  const services = [
    {
      id: 1,
      title: 'Bilgisayar Tamiri & Teknik Servis',
      description: 'Masaüstü ve laptop bilgisayarlarınızın tüm donanım ve yazılım sorunlarına profesyonel çözüm.',
      features: [
        'Anakart ve işlemci tamiri',
        'Ekran kartı değişimi ve tamiri',
        'SSD/HDD yükseltme ve veri kurtarma',
        'RAM artırma ve optimizasyon',
        'Virus temizleme ve sistem kurulumu',
        'Aynı gün teslimat garantisi'
      ],
      icon: 'ri-computer-line',
      image: 'https://readdy.ai/api/search-image?query=Professional%20computer%20technician%20repairing%20laptop%20motherboard%20with%20precision%20tools%20on%20clean%20workbench%2C%20modern%20repair%20shop%20with%20organized%20electronic%20components%2C%20blue%20lighting%20and%20professional%20atmosphere%2C%20detailed%20circuit%20board%20work&width=600&height=400&seq=service-detail-1&orientation=landscape'
    },
    {
      id: 2,
      title: 'Yazılım Geliştirme & Destek',
      description: 'İşletmeniz için özel yazılım çözümleri ve mevcut sistemleriniz için kapsamlı destek hizmetleri.',
      features: [
        'Web uygulaması geliştirme',
        'Masaüstü yazılım çözümleri',
        'API geliştirme ve entegrasyon',
        'Veritabanı tasarımı ve optimizasyonu',
        'Sistem analizi ve danışmanlık',
        'Sürekli bakım ve güncelleme'
      ],
      icon: 'ri-code-line',
      image: 'https://readdy.ai/api/search-image?query=Software%20developer%20working%20on%20multiple%20monitors%20showing%20modern%20code%20interfaces%2C%20contemporary%20programming%20environment%20with%20clean%20workspace%2C%20professional%20development%20setup%20with%20blue%20accent%20lighting%20and%20modern%20technology&width=600&height=400&seq=service-detail-2&orientation=landscape'
    },
    {
      id: 3,
      title: 'Akıllı Otomasyon Sistemleri',
      description: 'Ev ve iş yerleriniz için gelişmiş otomasyon çözümleri ile konforunuzu artırın.',
      features: [
        'Akıllı ev sistemleri kurulumu',
        'Işık ve perde otomasyonu',
        'Klima ve ısıtma kontrolü',
        'Güvenlik sistemi entegrasyonu',
        'Uzaktan erişim ve kontrol',
        'Sesli komut desteği'
      ],
      icon: 'ri-home-gear-line',
      image: 'https://readdy.ai/api/search-image?query=Modern%20smart%20home%20control%20interface%20with%20automated%20lighting%20and%20climate%20systems%2C%20contemporary%20interior%20design%20with%20intelligent%20devices%2C%20professional%20installation%20with%20sleek%20control%20panels%20and%20blue%20ambient%20lighting&width=600&height=400&seq=service-detail-3&orientation=landscape'
    },
    {
      id: 4,
      title: 'Data Çözümleri & Veri Analizi',
      description: 'Verilerinizi değerli içgörülere dönüştüren profesyonel analiz ve raporlama çözümleri.',
      features: [
        'Büyük veri analizi ve işleme',
        'İş zekası dashboard\'ları',
        'Tahminleme ve modelleme',
        'Veri görselleştirme',
        'Otomatik rapor sistemleri',
        'Real-time veri izleme'
      ],
      icon: 'ri-bar-chart-line',
      image: 'https://readdy.ai/api/search-image?query=Professional%20data%20analytics%20workspace%20with%20large%20monitors%20displaying%20colorful%20charts%20and%20business%20intelligence%20dashboards%2C%20modern%20office%20environment%20with%20data%20visualization%20screens%2C%20clean%20contemporary%20setup%20with%20blue%20lighting&width=600&height=400&seq=service-detail-4&orientation=landscape'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const serviceId = parseInt(entry.target.getAttribute('data-service-id') || '0');
            setVisibleServices(prev => [...new Set([...prev, serviceId])]);
          }
        });
      },
      { threshold: 0.1 }
    );

    services.forEach(service => {
      const element = document.querySelector(`[data-service-id="${service.id}"]`);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="service-details" className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            Detaylı Hizmet Açıklamaları
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2">
            Her hizmetimiz için sunduğumuz kapsamlı çözümleri keşfedin
          </p>
        </div>

        <div className="space-y-12 md:space-y-16">
          {services.map((service, index) => (
            <div
              key={service.id}
              data-service-id={service.id}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 lg:gap-12 ${
                visibleServices.includes(service.id) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              } transition-all duration-700`}
            >
              <div className="w-full lg:w-1/2">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-xl"
                />
              </div>
              
              <div className="w-full lg:w-1/2 space-y-4 md:space-y-6 px-2">
                <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg mx-auto sm:mx-0">
                    <i className={`${service.icon} text-white text-xl sm:text-2xl`}></i>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center sm:text-left">
                    {service.title}
                  </h3>
                </div>
                
                <p className="text-base md:text-lg text-gray-600 leading-relaxed text-center sm:text-left">
                  {service.description}
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2 md:space-x-3">
                      <div className="w-4 h-4 md:w-5 md:h-5 flex items-center justify-center text-green-500 flex-shrink-0">
                        <i className="ri-check-line text-sm md:text-lg"></i>
                      </div>
                      <span className="text-sm md:text-base text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="pt-2">
                  <button 
                    onClick={() => window.open('tel:+905350786101', '_self')}
                    className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-3 px-6 md:px-8 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg whitespace-nowrap cursor-pointer text-sm md:text-base"
                  >
                    Bu Hizmet İçin İletişime Geç
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
