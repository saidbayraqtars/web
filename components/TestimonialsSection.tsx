'use client';
import { useState, useEffect } from 'react';

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Mehmet Yılmaz',
      company: 'TechnoMart A.Ş.',
      role: 'IT Müdürü',
      content: 'Bayraktar Bilgisayar ile çalışmak gerçekten keyifli. Özellikle acil durumlar için hızlı destek vermeleri ve sorunları kısa sürede çözmeleri bizim için çok değerli. Kesinlikle tavsiye ederim.',
      rating: 5,
      image: 'https://readdy.ai/api/search-image?query=Professional%20IT%20manager%20in%20modern%20office%20environment%2C%20confident%20business%20person%20in%20contemporary%20workplace%2C%20clean%20office%20setting%20with%20technology%20background%2C%20professional%20headshot%20style%20portrait&width=100&height=100&seq=testimonial-1&orientation=squarish'
    },
    {
      id: 2,
      name: 'Ayşe Kara',
      company: 'Digital Solutions Ltd.',
      role: 'Genel Müdür',
      content: 'Yazılım geliştirme konusundaki profesyonellikleri ve zamanında teslimat yapmaları harika. Projemizi planladığımızdan daha iyi bir şekilde tamamladılar. Teşekkürler!',
      rating: 5,
      image: 'https://readdy.ai/api/search-image?query=Professional%20female%20business%20manager%20in%20modern%20corporate%20office%2C%20confident%20executive%20in%20contemporary%20workplace%2C%20clean%20professional%20environment%2C%20business%20portrait%20style&width=100&height=100&seq=testimonial-2&orientation=squarish'
    },
    {
      id: 3,
      name: 'Can Demir',
      company: 'SmartHome Pro',
      role: 'Proje Koordinatörü',
      content: 'Akıllı ev sistemlerimizi kurdukları zaman gerçekten etkilendik. Hem teknik bilgileri hem de müşteri ilişkileri konusunda çok başarılılar. Sürekli çalıştığımız bir firma.',
      rating: 5,
      image: 'https://readdy.ai/api/search-image?query=Professional%20project%20coordinator%20in%20modern%20tech%20office%2C%20young%20business%20professional%20in%20contemporary%20workspace%2C%20clean%20office%20environment%20with%20technology%20elements%2C%20confident%20portrait&width=100&height=100&seq=testimonial-3&orientation=squarish'
    },
    {
      id: 4,
      name: 'Zeynep Öztürk',
      company: 'DataFlow Analytics',
      role: 'Veri Analisti',
      content: 'Veri analizi projemizde çok detaylı ve özenli çalıştılar. Karmaşık verileri anlamlı raporlara dönüştürme konusundaki uzmanlıkları gerçekten takdire şayan.',
      rating: 5,
      image: 'https://readdy.ai/api/search-image?query=Professional%20female%20data%20analyst%20in%20modern%20office%20with%20computer%20screens%2C%20confident%20tech%20professional%20in%20contemporary%20workplace%2C%20clean%20office%20setting%20with%20data%20visualization%20background&width=100&height=100&seq=testimonial-4&orientation=squarish'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Müşterilerimiz Ne Diyor?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Yıllardır birlikte çalıştığımız değerli müşterilerimizin deneyimleri
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl p-8 md:p-12 shadow-xl">
            <div className="text-center">
              <div className="mb-8">
                <img
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-white shadow-lg object-cover"
                />
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <div key={i} className="w-5 h-5 flex items-center justify-center text-yellow-400">
                      <i className="ri-star-fill"></i>
                    </div>
                  ))}
                </div>
              </div>

              <blockquote className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed italic">
                "{testimonials[currentTestimonial].content}"
              </blockquote>

              <div>
                <h4 className="text-xl font-bold text-gray-900">
                  {testimonials[currentTestimonial].name}
                </h4>
                <p className="text-blue-600 font-medium">
                  {testimonials[currentTestimonial].role}
                </p>
                <p className="text-gray-600">
                  {testimonials[currentTestimonial].company}
                </p>
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                    index === currentTestimonial ? 'bg-blue-600' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Tamamlanan Proje</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">15</div>
              <div className="text-gray-600">Yıllık Deneyim</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">%98</div>
              <div className="text-gray-600">Müşteri Memnuniyeti</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600">Teknik Destek</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}