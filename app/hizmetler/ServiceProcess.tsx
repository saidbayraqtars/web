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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Çalışma Sürecimiz
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Profesyonel yaklaşımımızla her projede izlediğimiz sistematik süreç
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.id} className="relative">
              <div className="text-center">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto shadow-lg">
                    <i className={`${step.icon} text-white text-2xl`}></i>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {step.id}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
              
              {/* Connection Arrow */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-full w-full">
                  <div className="w-full flex items-center justify-center">
                    <div className="w-8 h-8 flex items-center justify-center text-blue-400">
                      <i className="ri-arrow-right-line text-2xl"></i>
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