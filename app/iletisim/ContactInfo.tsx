
'use client';

export default function ContactInfo() {
  const contactMethods = [
    {
      id: 1,
      title: 'Telefon',
      icon: 'ri-phone-fill',
      value: '+90 555 123 45 67',
      description: '7/24 acil destek hattı',
      action: () => window.open('tel:+905551234567', '_self'),
      color: 'blue'
    },
    {
      id: 2,
      title: 'WhatsApp',
      icon: 'ri-whatsapp-fill',
      value: '+90 555 123 45 67',
      description: 'Anında mesajlaşma',
      action: () => window.open('https://wa.me/905551234567', '_blank'),
      color: 'green'
    },
    {
      id: 3,
      title: 'E-posta',
      icon: 'ri-mail-fill',
      value: 'info@bayraktarbilgisayar.com',
      description: 'Detaylı projeler için',
      action: () => window.open('mailto:info@bayraktarbilgisayar.com', '_self'),
      color: 'purple'
    },
    {
      id: 4,
      title: 'Ofis Adresi',
      icon: 'ri-map-pin-fill',
      value: 'Kılıçdede Mah. Çubukçu Sok. No:3/B',
      description: 'İlkadım, Samsun',
      action: () => document.getElementById('map-section')?.scrollIntoView({ behavior: 'smooth' }),
      color: 'orange'
    }
  ];

  const workingHours = [
    { day: 'Pazartesi - Cuma', hours: '09:00 - 18:00' },
    { day: 'Cumartesi', hours: '10:00 - 16:00' },
    { day: 'Pazar', hours: 'Acil durumlar için' }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700',
      green: 'from-green-500 to-green-600 hover:from-green-600 hover:to-green-700',
      purple: 'from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700',
      orange: 'from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            İletişim Bilgileri
          </h2>
          
          <div className="space-y-6 mb-12">
            {contactMethods.map((method) => (
              <div
                key={method.id}
                onClick={method.action}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer group"
              >
                <div className="flex items-center space-x-4">
                  <div className={`w-14 h-14 bg-gradient-to-r ${getColorClasses(method.color)} rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                    <i className={`${method.icon} text-white text-xl`}></i>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      {method.title}
                    </h3>
                    <p className="text-blue-600 font-semibold mb-1">
                      {method.value}
                    </p>
                    <p className="text-gray-600 text-sm">
                      {method.description}
                    </p>
                  </div>
                  <div className="w-6 h-6 flex items-center justify-center text-gray-400 group-hover:text-blue-600 transition-colors">
                    <i className="ri-arrow-right-line text-lg"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <div className="w-8 h-8 flex items-center justify-center text-blue-600 mr-3">
                <i className="ri-time-line text-xl"></i>
              </div>
              Çalışma Saatleri
            </h3>
            <div className="space-y-4">
              {workingHours.map((schedule, index) => (
                <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                  <span className="text-gray-700 font-medium">{schedule.day}</span>
                  <span className="text-blue-600 font-semibold">{schedule.hours}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-6 bg-blue-50 rounded-lg p-4">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 flex items-center justify-center text-blue-600">
                  <i className="ri-information-line text-lg"></i>
                </div>
                <div>
                  <p className="text-blue-800 font-medium text-sm">
                    Acil durumlar için 7/24 destek hattımız aktif
                  </p>
                  <p className="text-blue-600 text-sm">
                    Kritik sistem arızalarında anında destek alabilirsiniz
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                <i className="ri-store-2-line text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                Samsun Ofisimiz
              </h3>
            </div>
            <p className="text-gray-700 mb-2">
              Bilgisayar tamiri ve teknik destek hizmetlerimiz için Samsun'da fiziksel ofisimiz bulunmaktadır.
            </p>
            <p className="text-green-700 font-medium">
              Randevu alarak ofisimizi ziyaret edebilirsiniz.
            </p>
          </div>

          <div className="mt-8 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Sosyal Medyada Takip Edin
            </h3>
            <div className="flex justify-center space-x-4">
              <a href="#" className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
                <i className="ri-facebook-fill text-white"></i>
              </a>
              <a href="#" className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors cursor-pointer">
                <i className="ri-twitter-fill text-white"></i>
              </a>
              <a href="#" className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors cursor-pointer">
                <i className="ri-linkedin-fill text-white"></i>
              </a>
              <a href="#" className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors cursor-pointer">
                <i className="ri-instagram-fill text-white"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
