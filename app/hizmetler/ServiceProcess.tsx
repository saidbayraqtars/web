
'use client';

export default function ServiceProcess() {
  const steps = [
    {
      id: 1,
      title: 'İletişim & Analiz',
      description: 'İhtiyacınızı dinler, detaylı analiz yapar ve size en uygun çözümü sunarız.',
      icon: 'ri-phone-line'
    },
    {
      id: 2,
      title: 'Teklif & Planlama',
      description: 'Şeffaf fiyatlandırma ile teklifimizi sunar ve proje planını oluşturuz.',
      icon: 'ri-file-text-line'
    },
    {
      id: 3,
      title: 'Uygulama & Test',
      description: 'Uzman ekibimizle hızlı uygulama yapар ve kapsamlı testlerden geçiririz.',
      icon: 'ri-tools-line'
    },
    {
      id: 4,
      title: 'Teslimat & Destek',
      description: 'Projenizi teslim eder ve sürekli destek hizmeti sağlarız.',
      icon: 'ri-customer-service-line'
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            Çalışma Sürecimiz
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2">
            Profesyonel yaklaşımımızla her projede izlediğimiz sistematik süreç
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {steps.map((step, index) => (
            <div key={step.id} className="relative">
              <div className="text-center">
                <div className="relative mb-4 md:mb-6">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto shadow-lg">
                    <i className={`${step.icon} text-white text-xl md:text-2xl`}></i>
                  </div>
                  <div className="absolute -top-1 md:-top-2 -right-1 md:-right-2 w-6 h-6 md:w-8 md:h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xs md:text-sm">
                    {step.id}
                  </div>
                </div>
                
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3 px-2">
                  {step.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed px-2">
                  {step.description}
                </p>
              </div>
              
              {/* Connection Arrow - only visible on large screens */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 md:top-10 left-full w-full">
                  <div className="w-full flex items-center justify-center">
                    <div className="w-6 h-6 md:w-8 md:h-8 flex items-center justify-center text-blue-400">
                      <i className="ri-arrow-right-line text-xl md:text-2xl"></i>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
