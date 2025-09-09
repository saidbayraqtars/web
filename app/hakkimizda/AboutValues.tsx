'use client';

export default function AboutValues() {
  const values = [
    {
      id: 1,
      title: 'Kalite',
      description: 'Her projede en yüksek kalite standartlarını uygular, müşteri beklentilerini aşmaya odaklanırız.',
      icon: 'ri-award-line',
      color: 'blue'
    },
    {
      id: 2,
      title: 'Güvenilirlik',
      description: 'Sözümüzün arkasında durur, zamanında teslimat ve sürekli destek sağlarız.',
      icon: 'ri-shield-check-line',
      color: 'green'
    },
    {
      id: 3,
      title: 'İnovasyon',
      description: 'Teknolojideki gelişmeleri yakından takip eder, yenilikçi çözümler geliştiririz.',
      icon: 'ri-lightbulb-line',
      color: 'purple'
    },
    {
      id: 4,
      title: 'Müşteri Odaklılık',
      description: 'Müşterilerimizin ihtiyaçlarını anlayarak özelleştirilmiş çözümler sunarız.',
      icon: 'ri-customer-service-2-line',
      color: 'orange'
    },
    {
      id: 5,
      title: 'Şeffaflık',
      description: 'Açık iletişim kurar, tüm süreçlerde şeffaf bir yaklaşım benimseriz.',
      icon: 'ri-eye-line',
      color: 'teal'
    },
    {
      id: 6,
      title: 'Sürekli Gelişim',
      description: 'Kendimizi ve hizmetlerimizi sürekli geliştirerek sektörde öncü olmaya devam ederiz.',
      icon: 'ri-arrow-up-line',
      color: 'indigo'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'from-blue-500 to-blue-600',
      green: 'from-green-500 to-green-600',
      purple: 'from-purple-500 to-purple-600',
      orange: 'from-orange-500 to-orange-600',
      teal: 'from-teal-500 to-teal-600',
      indigo: 'from-indigo-500 to-indigo-600'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Değerlerimiz
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            İş yapma biçimimizi şekillendiren ve başarımızın temelini oluşturan değerlerimiz
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={value.id}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${getColorClasses(value.color)} rounded-full flex items-center justify-center mb-6 shadow-lg`}>
                <i className={`${value.icon} text-white text-2xl`}></i>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {value.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-12 text-center text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Sizin İçin Fark Yaratmaya Hazırız
          </h3>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            15 yıllık deneyimimizi ve değerlerimizi projenizin hizmetine sunmaya hazırız. 
            Teknolojik ihtiyaçlarınız için güvenilir çözüm ortağınız olalım.
          </p>
          <button 
            onClick={() => window.open('tel:+905350786101', '_self')}
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg whitespace-nowrap cursor-pointer"
          >
            İletişime Geçin
          </button>
        </div>
      </div>
    </section>
  );
}