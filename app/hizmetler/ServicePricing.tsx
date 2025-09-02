
'use client';

export default function ServicePricing() {
  const services = [
    {
      id: 1,
      title: 'Ücretsiz Keşif Hizmeti',
      icon: 'ri-search-line',
      description: 'Tüm projeleriniz için detaylı keşif ve analiz hizmetimiz completamente ücretsizdir',
      features: [
        'Proje ihtiyaç analizi',
        'Teknik fizibilite raporu',
        'Detaylı maliyet hesaplaması',
        'Zaman planlaması',
        'Risk değerlendirmesi',
        'Alternatif çözüm önerileri'
      ]
    },
    {
      id: 2,
      title: 'Bilgisayar Tamiri',
      icon: 'ri-computer-line',
      description: 'Samsun ofisimizde profesyonel bilgisayar tamir hizmetleri',
      features: [
        'Donanım arıza tespiti',
        'Anakart ve işlemci tamiri',
        'Ekran kartı değişimi',
        'SSD/HDD değişimi',
        'Virus temizleme',
        'Sistem kurulumu ve optimizasyon'
      ]
    },
    {
      id: 3,
      title: 'Yazılım & Otomasyon',
      icon: 'ri-code-line',
      description: 'Özelleştirilmiş yazılım ve otomasyon çözümleri',
      features: [
        'Web uygulaması geliştirme',
        'Masaüstü yazılım',
        'Akıllı ev sistemleri',
        'Güvenlik kameraları',
        'Veri analizi çözümleri',
        'Mobil uygulama geliştirme'
      ]
    }
  ];

  const handleCall = () => {
    window.open('tel:+905350786101', '_self');
  };

  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            Hizmetlerimiz
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2">
            Tüm projeleriniz için ücretsiz keşif hizmeti sunuyoruz. Detaylı analiz sonrası size en uygun çözümü öneriyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`relative rounded-2xl border-2 p-6 md:p-8 transition-all duration-300 hover:transform hover:scale-105 ${
                index === 0
                  ? 'border-blue-500 bg-gradient-to-br from-blue-50 to-indigo-100 shadow-xl transform scale-100 md:scale-105'
                  : 'border-gray-200 bg-white shadow-lg hover:shadow-xl'
              }`}
            >
              {index === 0 && (
                <div className="absolute -top-3 md:-top-4 left-1/2 transform -translate-x-1/2 px-4 md:px-6 py-1 md:py-2 bg-blue-500 text-white rounded-full text-xs md:text-sm font-semibold">
                  ÜCRETSİZ
                </div>
              )}

              <div className="text-center mb-4 md:mb-6">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 shadow-lg">
                  <i className={`${service.icon} text-white text-xl md:text-2xl`}></i>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">
                  {service.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600">
                  {service.description}
                </p>
              </div>

              <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-2 md:space-x-3">
                    <div className="w-4 h-4 md:w-5 md:h-5 flex items-center justify-center text-green-500 flex-shrink-0">
                      <i className="ri-check-line text-sm md:text-lg"></i>
                    </div>
                    <span className="text-sm md:text-base text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={handleCall}
                className={`w-full py-3 px-4 md:px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg whitespace-nowrap cursor-pointer text-sm md:text-base ${
                  index === 0
                    ? 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white'
                    : 'bg-gray-600 hover:bg-gray-700 text-white'
                }`}
              >
                {index === 0 ? 'Ücretsiz Keşif Talep Et' : 'Bilgi Al'}
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 md:mt-16 bg-white rounded-2xl p-6 md:p-8 shadow-lg">
          <div className="flex flex-col sm:flex-row items-center justify-center mb-4 md:mb-6">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mb-3 sm:mb-0 sm:mr-4">
              <i className="ri-gift-line text-white text-lg md:text-xl"></i>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 text-center sm:text-left">
              Neden Ücretsiz Keşif?
            </h3>
          </div>
          <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6 max-w-2xl mx-auto px-2">
            Her proje farklıdır. Size en doğru çözümü sunabilmek için önce ihtiyaçlarınızı anlamamız gerekir. 
            Keşif hizmetimiz tamamen ücretsizdir ve herhangi bir yükümlülüğünüz yoktur.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 text-xs md:text-sm">
            <div className="flex items-center justify-center space-x-2">
              <i className="ri-time-line text-blue-600 text-sm md:text-base"></i>
              <span>24 saat içinde geri dönüş</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <i className="ri-shield-check-line text-green-600 text-sm md:text-base"></i>
              <span>Yükümlülük yok</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <i className="ri-user-heart-line text-purple-600 text-sm md:text-base"></i>
              <span>Kişiselleştirilmiş çözüm</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
