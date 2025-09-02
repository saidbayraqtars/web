'use client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import Link from 'next/link';

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "2024'te Siber Güvenlik Trendleri",
      excerpt: "Siber güvenlik alanındaki en son gelişmeler ve işletmelerin dikkat etmesi gereken noktalar...",
      category: "Güvenlik",
      author: "Ahmet Bayraktar",
      date: "15 Mart 2024",
      readTime: "5 dk",
      image: "https://readdy.ai/api/search-image?query=cybersecurity%20trends%202024%20modern%20digital%20protection%20technology%20blue%20dark%20theme%20professional%20business%20security%20systems&width=400&height=250&seq=blog1&orientation=landscape"
    },
    {
      id: 2,
      title: "Yapay Zeka ile İş Süreçlerini Optimize Etme",
      excerpt: "AI teknolojilerinin işletmelerdeki verimliliği nasıl artırdığı ve pratik uygulama örnekleri...",
      category: "Yapay Zeka",
      author: "Mehmet Kaya",
      date: "12 Mart 2024",
      readTime: "7 dk",
      image: "https://readdy.ai/api/search-image?query=artificial%20intelligence%20business%20optimization%20modern%20technology%20robots%20automation%20futuristic%20blue%20professional%20workplace&width=400&height=250&seq=blog2&orientation=landscape"
    },
    {
      id: 3,
      title: "Bulut Bilişim: Küçük İşletmeler İçin Rehber",
      excerpt: "Küçük ve orta ölçekli işletmelerin bulut teknolojilerinden nasıl faydalanabileceği...",
      category: "Bulut Teknolojisi",
      author: "Fatma Özkan",
      date: "10 Mart 2024",
      readTime: "6 dk",
      image: "https://readdy.ai/api/search-image?query=cloud%20computing%20small%20business%20guide%20modern%20servers%20data%20storage%20technology%20blue%20professional%20digital%20transformation&width=400&height=250&seq=blog3&orientation=landscape"
    },
    {
      id: 4,
      title: "Mobil Uygulama Geliştirme Süreçleri",
      excerpt: "Başarılı bir mobil uygulama geliştirmek için izlenmesi gereken adımlar ve dikkat edilecek noktalar...",
      category: "Mobil Geliştirme",
      author: "Can Demir",
      date: "8 Mart 2024",
      readTime: "8 dk",
      image: "https://readdy.ai/api/search-image?query=mobile%20app%20development%20process%20smartphones%20tablets%20coding%20programming%20modern%20technology%20blue%20professional%20software%20engineering&width=400&height=250&seq=blog4&orientation=landscape"
    },
    {
      id: 5,
      title: "Veri Analitiği ile Karar Verme",
      excerpt: "Büyük veri analizinin işletme kararlarındaki rolü ve başarılı veri analizi stratejileri...",
      category: "Veri Analizi",
      author: "Ayşe Yılmaz",
      date: "5 Mart 2024",
      readTime: "9 dk",
      image: "https://readdy.ai/api/search-image?query=data%20analytics%20business%20intelligence%20charts%20graphs%20statistics%20modern%20technology%20blue%20professional%20dashboard%20visualization&width=400&height=250&seq=blog5&orientation=landscape"
    },
    {
      id: 6,
      title: "Web Sitesi Performans Optimizasyonu",
      excerpt: "Web sitenizin hızını artırmak ve kullanıcı deneyimini iyileştirmek için pratik yöntemler...",
      category: "Web Geliştirme",
      author: "Emre Şen",
      date: "3 Mart 2024",
      readTime: "6 dk",
      image: "https://readdy.ai/api/search-image?query=website%20performance%20optimization%20speed%20loading%20fast%20modern%20web%20development%20technology%20blue%20professional%20coding&width=400&height=250&seq=blog6&orientation=landscape"
    }
  ];

  const categories = ["Tümü", "Güvenlik", "Yapay Zeka", "Bulut Teknolojisi", "Mobil Geliştirme", "Veri Analizi", "Web Geliştirme"];

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Teknoloji Blogu
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Teknoloji dünyasındaki son gelişmeler, uzman görüşleri ve pratik rehberler
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full border border-gray-300 text-gray-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-colors cursor-pointer whitespace-nowrap"
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer">
                <div className="relative">
                  <img 
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover object-top"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <i className="ri-user-line mr-1"></i>
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center">
                        <i className="ri-time-line mr-1"></i>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <span>{post.date}</span>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <Link 
                      href={`/blog/${post.id}`}
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium cursor-pointer"
                    >
                      Devamını Oku
                      <i className="ri-arrow-right-line ml-2"></i>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Blog Güncellemelerini Kaçırmayın
              </h3>
              <p className="text-gray-600 mb-6">
                Yeni yazılarımızdan haberdar olmak için e-posta listemize katılın
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="E-posta adresiniz"
                  className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                />
                <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium cursor-pointer whitespace-nowrap">
                  Abone Ol
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
      <FloatingButtons />
    </div>
  );
}