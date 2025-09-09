
'use client';

export default function AboutStory() {
  const milestones = [
    {
      year: 'Ağustos 2024',
      title: 'Kuruluş',
      description: 'Güçlü deneyimimizle teknoloji çözümleri sunmaya başladık.'
    },
    {
      year: 'Eylül 2024',
      title: 'Ekip Genişletme',
      description: 'Yazılım geliştirme ve otomasyon uzmanlarını ekibimize kattık.'
    },
    {
      year: 'Ekim 2024',
      title: 'Hizmet Çeşitlendirme',
      description: 'Veri analizi ve akıllı sistem çözümlerini portföyümüze ekledik.'
    },
    {
      year: 'Kasım 2024',
      title: 'Müşteri Odaklılık',
      description: 'Ücretsiz keşif hizmetiyle müşteri memnuniyetini önceledik.'
    },
    {
      year: 'Aralık 2024',
      title: 'Güvenilir Partner',
      description: 'Kısa sürede 50+ başarılı projeye imza attık.'
    }
  ];

  return (
    <section id="our-story" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                Hikayemiz
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Ağustos 2024'te başlayan hikayemiz, güçlü deneyim ve vizyonla 
                  şekillendi. Kısa sürede teknoloji sektöründe kendimizi kanıtladık 
                  ve müşterilerimizin güvenini kazandık.
                </p>
                <p>
                  Teknolojinin hızla geliştiği bu dönemde, en güncel çözümleri 
                  sunmayı ve müşteri memnuniyetini her şeyin üstünde tutmayı 
                  ilke edindik. Bilgisayar tamirinden yazılım geliştirmeye, 
                  otomasyon sistemlerinden veri analizine kadar geniş bir 
                  yelpazede profesyonel hizmet veriyoruz.
                </p>
                <p>
                  4 ay gibi kısa bir sürede 50'den fazla başarılı projeye imza 
                  attık ve yüzlerce müşterinin teknolojik ihtiyaçlarını karşıladık. 
                  Hedefimiz, güvenilir teknoloji ortağınız olmaya devam etmek.
                </p>
              </div>
            </div>
            
            <div>
              <img
                src="https://readdy.ai/api/search-image?query=Professional%20technology%20company%20team%20working%20together%20in%20modern%20office%2C%20diverse%20group%20of%20engineers%20and%20developers%20collaborating%20on%20projects%2C%20contemporary%20workspace%20with%20computers%20and%20technical%20equipment%2C%20inspiring%20teamwork%20atmosphere%20with%20blue%20lighting&width=600&height=500&seq=about-story-1&orientation=landscape"
                alt="Ekibimiz"
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>

          <div className="mt-20">
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
              4 Aylık Yolculuğumuzdaki Önemli Anlar
            </h3>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div
                    key={milestone.year}
                    className={`flex items-center ${
                      index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                    }`}
                  >
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                      <div className="bg-white p-6 rounded-lg shadow-lg">
                        <div className="text-lg font-bold text-blue-600 mb-2">
                          {milestone.year}
                        </div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">
                          {milestone.title}
                        </h4>
                        <p className="text-gray-600">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                    <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}