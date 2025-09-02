
'use client';

export default function TeamSection() {
  const values = [
    {
      id: 1,
      title: 'Kalite & Güvenilirlik',
      description: 'Her projede en yüksek kalite standartlarını uyguluyoruz',
      icon: 'ri-shield-check-line'
    },
    {
      id: 2,
      title: 'Müşteri Odaklılık',
      description: 'Müşteri memnuniyeti bizim en önemli önceliğimizdir',
      icon: 'ri-customer-service-2-line'
    },
    {
      id: 3,
      title: 'Yenilikçilik',
      description: 'En güncel teknolojileri takip ederek çözümler geliştiriyoruz',
      icon: 'ri-lightbulb-line'
    },
    {
      id: 4,
      title: 'Hızlı Destek',
      description: '7/24 destek hattımızla yanınızdayız',
      icon: 'ri-time-line'
    }
  ];

  const handleCall = () => {
    window.open('tel:+905551234567', '_self');
  };

  return (
    <section id="our-team" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Değerlerimiz
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              İş anlayışımızı şekillendiren temel değerler
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.id}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-4">
                  <i className={`${value.icon} text-white text-xl`}></i>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">
                  {value.title}
                </h4>
                <p className="text-gray-600 text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Projeniz İçin Görüşelim
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            15 yıllık deneyimimle projenizi en iyi şekilde hayata geçirebiliriz. 
            Ücretsiz keşif hizmetimizden faydalanın.
          </p>
          <button 
            onClick={handleCall}
            className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg whitespace-nowrap cursor-pointer"
          >
            Ücretsiz Keşif Talep Et
          </button>
        </div>
      </div>
    </section>
  );
}
