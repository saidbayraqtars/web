
'use client';

export default function ContactMap() {
  return (
    <section id="map-section" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Samsun Ofisimiz
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Randevu alarak ofisimizi ziyaret edebilir, bilgisayar tamiri ve projelerinizi yüz yüze görüşebiliriz.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-lg h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.4027281947777!2d36.33099157622625!3d41.28653370223455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x408871b7a0f0c0c1%3A0x1e1e1e1e1e1e1e1e!2sK%C4%B1l%C4%B1%C3%A7dede%2C%20%C3%87ubuk%C3%A7u%20Sk.%2C%20%C4%B0lkad%C4%B1m%2FSamsun!5e0!3m2!1str!2str!4v1629999999999!5m2!1str!2str"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Bayraktar Bilgisayar Samsun Ofis Konumu"
              ></iframe>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <div className="w-6 h-6 flex items-center justify-center text-blue-600 mr-3">
                  <i className="ri-map-pin-fill text-lg"></i>
                </div>
                Adres Bilgileri
              </h3>
              <div className="space-y-3 text-gray-700">
                <p className="font-semibold">Bayraktar Bilgisayar</p>
                <p>Kılıçdede Mahallesi</p>
                <p>Çubukçu Sokak No: 3/B</p>
                <p>İlkadım / SAMSUN</p>
                <p className="text-sm text-gray-600 mt-3">
                  Merkezi konumumuzla kolayca ulaşabilirsiniz
                </p>
              </div>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <div className="w-6 h-6 flex items-center justify-center text-green-600 mr-3">
                  <i className="ri-car-line text-lg"></i>
                </div>
                Ulaşım Bilgileri
              </h3>
              <div className="space-y-3 text-gray-700">
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 flex items-center justify-center text-blue-500 mt-0.5">
                    <i className="ri-bus-line text-sm"></i>
                  </div>
                  <div>
                    <p className="font-medium">Toplu Taşıma</p>
                    <p className="text-sm text-gray-600">İlkadım merkez hatları</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 flex items-center justify-center text-green-500 mt-0.5">
                    <i className="ri-taxi-line text-sm"></i>
                  </div>
                  <div>
                    <p className="font-medium">Taksi</p>
                    <p className="text-sm text-gray-600">Merkezi konum, kolay erişim</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 flex items-center justify-center text-orange-500 mt-0.5">
                    <i className="ri-parking-line text-sm"></i>
                  </div>
                  <div>
                    <p className="font-medium">Otopark</p>
                    <p className="text-sm text-gray-600">Sokak üzeri park imkanı</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                <div className="w-6 h-6 flex items-center justify-center text-green-600 mr-2">
                  <i className="ri-calendar-check-line text-lg"></i>
                </div>
                Randevu Önerileri
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center space-x-2">
                  <i className="ri-check-line text-green-500"></i>
                  <span>Önceden randevu alın</span>
                </li>
                <li className="flex items-center space-x-2">
                  <i className="ri-check-line text-green-500"></i>
                  <span>Bilgisayarınızı getirmeyi unutmayın</span>
                </li>
                <li className="flex items-center space-x-2">
                  <i className="ri-check-line text-green-500"></i>
                  <span>Arıza açıklamasını hazırlayın</span>
                </li>
              </ul>
            </div>

            <button 
              onClick={() => window.open('https://www.google.com/maps/dir//K%C4%B1l%C4%B1%C3%A7dede%2C%20%C3%87ubuk%C3%A7u%20Sk.%2C%20%C4%B0lkad%C4%B1m%2FSamsun/', '_blank')}
              className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-4 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-3 whitespace-nowrap cursor-pointer"
            >
              <div className="w-5 h-5 flex items-center justify-center">
                <i className="ri-navigation-line text-lg"></i>
              </div>
              <span>Yol Tarifi Al</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
