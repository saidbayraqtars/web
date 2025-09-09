
'use client';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-6">
            <img 
              src="https://static.readdy.ai/image/06461edf5d9b24c66a3431fe58cc857a/d400a0bd85a6ac7153b53496bdb1a2ea.png" 
              alt="Bayraktar Logo" 
              className="h-16 w-auto"
            />
            <p className="text-gray-400 leading-relaxed">
              15 yıllık deneyimimizle teknoloji alanında güvenilir çözüm ortağınız. 
              Bilgisayar tamiri, yazılım geliştirme ve otomasyon sistemlerinde uzmanız.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61577426884062" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
                <i className="ri-facebook-fill"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors cursor-pointer">
                <i className="ri-twitter-fill"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors cursor-pointer">
                <i className="ri-linkedin-fill"></i>
              </a>
              <a href="https://instagram.com/bayraktaryazilim3d" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors cursor-pointer">
                <i className="ri-instagram-fill"></i>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Hizmetlerimiz</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors cursor-pointer">Bilgisayar Tamiri</a></li>
              <li><a href="#" className="hover:text-white transition-colors cursor-pointer">Yazılım Geliştirme</a></li>
              <li><a href="#" className="hover:text-white transition-colors cursor-pointer">Otomasyon Sistemleri</a></li>
              <li><a href="#" className="hover:text-white transition-colors cursor-pointer">Veri Analizi</a></li>
              <li><a href="#" className="hover:text-white transition-colors cursor-pointer">Mobil Uygulama</a></li>
              <li><a href="#" className="hover:text-white transition-colors cursor-pointer">Güvenlik Sistemleri</a></li>
              <li><a href="#" className="hover:text-white transition-colors cursor-pointer">Web Tasarım</a></li>
            </ul>
          </div>

          <div>
            <div>
              <h3 className="text-white font-semibold mb-4">Kurumsal</h3>
              <ul className="space-y-2">
                <li><Link href="/hakkimizda" className="hover:text-white transition-colors cursor-pointer">Hakkımızda</Link></li>
                <li><Link href="/kariyer" className="hover:text-white transition-colors cursor-pointer">Kariyer</Link></li>
                <li><Link href="/blog" className="hover:text-white transition-colors cursor-pointer">Blog</Link></li>
                <li><Link href="/gizlilik-politikasi" className="hover:text-white transition-colors cursor-pointer">Gizlilik Politikası</Link></li>
                <li><a href="#" className="hover:text-white transition-colors cursor-pointer">Kullanım Şartları</a></li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">İletişim</h3>
            <div className="space-y-4 text-gray-400">
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-phone-fill text-blue-400"></i>
                </div>
                <span>+90 535 078 61 01</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-mail-fill text-blue-400"></i>
                </div>
                <span>saidbayraktar9@gmail.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 flex items-center justify-center mt-0.5">
                  <i className="ri-map-pin-fill text-blue-400"></i>
                </div>
                <div>
                  <p>Kılıçdede Mah. Çubukçu Sok. No:3/B</p>
                  <p>İlkadım, Samsun</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-time-fill text-blue-400"></i>
                </div>
                <div>
                  <p>Pzt-Cmt: 08:00-19:00</p>
                  <p>Pazar: Acil Durum</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-16">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-center md:text-left">
              © 2024 Bayraktar Bilgisayar. Tüm hakları saklıdır.
            </p>
            <div className="flex space-x-6 text-gray-400">
              <a href="#" className="hover:text-white transition-colors cursor-pointer">Gizlilik</a>
              <a href="#" className="hover:text-white transition-colors cursor-pointer">Kullanım Şartları</a>
              <a href="#" className="hover:text-white transition-colors cursor-pointer">KVKK</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
