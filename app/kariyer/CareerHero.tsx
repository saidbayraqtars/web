'use client';

export default function CareerHero() {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20technology%20office%20environment%20with%20young%20professionals%20working%20on%20computers%2C%20collaborative%20workspace%20atmosphere%2C%20bright%20natural%20lighting%2C%20contemporary%20office%20design%20with%20tech%20equipment%2C%20professional%20career%20development%20setting%2C%20clean%20minimalist%20aesthetic%20with%20blue%20and%20white%20color%20scheme&width=1920&height=1080&seq=career-hero&orientation=landscape')`
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-800/60"></div>
      
      <div className="relative z-10 container mx-auto px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Kariyerinizi
            <span className="block text-blue-300">Bizimle Şekillendirin</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
            Teknoloji alanında yetenekli profesyonellerle birlikte çalışarak, 
            kariyerinizde yeni zirveler keşfedin.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#basvuru-formu"
              className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-4 px-8 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg whitespace-nowrap cursor-pointer"
            >
              Hemen Başvur
            </a>
            <a 
              href="tel:+905350786101"
              className="bg-white/10 backdrop-blur-sm border border-white/20 text-white py-4 px-8 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 whitespace-nowrap cursor-pointer"
            >
              Bilgi Al
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}