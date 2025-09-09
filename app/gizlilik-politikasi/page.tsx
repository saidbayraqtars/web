'use client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import Head from 'next/head';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Gizlilik Politikası - KVKK Uyumluluğu",
  description: "Bayraktar Yazılım 3D gizlilik politikası. Kişisel verilerinizi nasıl topladığımız, kullandığımız ve koruduğumuz hakkında bilgiler. KVKK uyumlu politika.",
  keywords: "gizlilik politikası, kvkk, kişisel veri, veri güvenliği, gizlilik, bayraktar yazılım",
  openGraph: {
    title: "Gizlilik Politikası - Bayraktar Yazılım 3D",
    description: "Kişisel verilerinizi nasıl topladığımız, kullandığımız ve koruduğumuz hakkında bilgiler.",
    url: "/gizlilik-politikasi",
  },
  alternates: {
    canonical: "/gizlilik-politikasi",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Gizlilik Politikası",
    "description": "Bayraktar Yazılım 3D gizlilik politikası ve kişisel veri koruma uygulamaları",
    "url": `${process.env.NEXT_PUBLIC_SITE_URL || "https://example.com"}/gizlilik-politikasi`,
    "isPartOf": {
      "@type": "WebSite",
      "name": "Bayraktar Yazılım 3D",
      "url": process.env.NEXT_PUBLIC_SITE_URL || "https://example.com"
    },
    "dateModified": new Date().toISOString(),
    "publisher": {
      "@type": "Organization",
      "name": "Bayraktar Yazılım 3D"
    }
  };

  return (
    <div className="min-h-screen">
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      <Header />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
              Gizlilik Politikası
            </h1>
            
            <div className="bg-white rounded-2xl shadow-lg p-8 space-y-8">
              <div className="border-b border-gray-200 pb-6">
                <p className="text-gray-600 text-lg leading-relaxed">
                  Bu gizlilik politikası, Bayraktar İnşaat olarak kişisel verilerinizi nasıl topladığımız, 
                  kullandığımız ve koruduğumuz konusunda sizi bilgilendirmek amacıyla hazırlanmıştır.
                </p>
                <p className="text-sm text-gray-500 mt-4">
                  Son güncelleme: {new Date().toLocaleDateString('tr-TR')}
                </p>
              </div>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                    <i className="ri-information-line text-blue-600"></i>
                  </div>
                  Toplanan Bilgiler
                </h2>
                <div className="bg-gray-50 rounded-lg p-6">
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <i className="ri-checkbox-circle-fill text-blue-600 mt-1 mr-3"></i>
                      <span><strong>Kişisel Bilgiler:</strong> Ad, soyad, e-posta adresi, telefon numarası</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-checkbox-circle-fill text-blue-600 mt-1 mr-3"></i>
                      <span><strong>İletişim Bilgileri:</strong> Adres, posta kodu, şehir bilgileri</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-checkbox-circle-fill text-blue-600 mt-1 mr-3"></i>
                      <span><strong>Teknik Bilgiler:</strong> IP adresi, tarayıcı türü, cihaz bilgileri</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-checkbox-circle-fill text-blue-600 mt-1 mr-3"></i>
                      <span><strong>Kullanım Bilgileri:</strong> Site kullanım verileri, tercih bilgileri</span>
                    </li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                    <i className="ri-settings-3-line text-green-600"></i>
                  </div>
                  Bilgilerin Kullanım Amaçları
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6">
                    <h3 className="font-semibold text-gray-900 mb-3">Hizmet Sunumu</h3>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• Proje tekliflerinin hazırlanması</li>
                      <li>• Müşteri hizmetlerinin sağlanması</li>
                      <li>• Sözleşme işlemlerinin yürütülmesi</li>
                    </ul>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6">
                    <h3 className="font-semibold text-gray-900 mb-3">İletişim</h3>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• Müşteri taleplerine yanıt verme</li>
                      <li>• Bilgilendirme e-postaları gönderme</li>
                      <li>• Pazarlama faaliyetleri (onay dahilinde)</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                    <i className="ri-shield-check-line text-purple-600"></i>
                  </div>
                  Veri Güvenliği
                </h2>
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6">
                  <p className="text-gray-700 mb-4">
                    Kişisel verilerinizin güvenliği bizim için önceliktir. Bu kapsamda:
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                        <i className="ri-lock-line text-purple-600 text-lg"></i>
                      </div>
                      <h4 className="font-medium text-gray-900 mb-1">SSL Şifreleme</h4>
                      <p className="text-sm text-gray-600">Tüm veri transferleri şifrelenir</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                        <i className="ri-server-line text-purple-600 text-lg"></i>
                      </div>
                      <h4 className="font-medium text-gray-900 mb-1">Güvenli Sunucular</h4>
                      <p className="text-sm text-gray-600">Veriler güvenli sunucularda saklanır</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                        <i className="ri-user-line text-purple-600 text-lg"></i>
                      </div>
                      <h4 className="font-medium text-gray-900 mb-1">Erişim Kontrolü</h4>
                      <p className="text-sm text-gray-600">Sınırlı personel erişimi</p>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
                    <i className="ri-user-settings-line text-orange-600"></i>
                  </div>
                  Haklarınız
                </h2>
                <div className="bg-orange-50 rounded-lg p-6">
                  <p className="text-gray-700 mb-4">
                    KVKK kapsamında aşağıdaki haklara sahipsiniz:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <i className="ri-eye-line text-orange-600 mr-3"></i>
                        <span className="text-gray-700">Verilerinizi görme hakkı</span>
                      </div>
                      <div className="flex items-center">
                        <i className="ri-edit-line text-orange-600 mr-3"></i>
                        <span className="text-gray-700">Düzeltme talep etme hakkı</span>
                      </div>
                      <div className="flex items-center">
                        <i className="ri-delete-bin-line text-orange-600 mr-3"></i>
                        <span className="text-gray-700">Silme talep etme hakkı</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <i className="ri-forbid-line text-orange-600 mr-3"></i>
                        <span className="text-gray-700">İşlemeyi durdurma hakkı</span>
                      </div>
                      <div className="flex items-center">
                        <i className="ri-share-line text-orange-600 mr-3"></i>
                        <span className="text-gray-700">Veri taşınabilirliği hakkı</span>
                      </div>
                      <div className="flex items-center">
                        <i className="ri-question-line text-orange-600 mr-3"></i>
                        <span className="text-gray-700">İtiraz etme hakkı</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mr-3">
                    <i className="ri-share-forward-line text-red-600"></i>
                  </div>
                  Üçüncü Taraf Paylaşımı
                </h2>
                <div className="bg-red-50 rounded-lg p-6">
                  <p className="text-gray-700 mb-4">
                    Kişisel verilerinizi üçüncü taraflarla paylaşmıyoruz. İstisna durumlar:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <i className="ri-arrow-right-s-line text-red-600 mt-1 mr-2"></i>
                      <span>Yasal yükümlülükler gereği resmi makamlarla</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-arrow-right-s-line text-red-600 mt-1 mr-2"></i>
                      <span>Hizmet sağlayıcılar (hosting, e-posta servisleri)</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-arrow-right-s-line text-red-600 mt-1 mr-2"></i>
                      <span>Açık rızanızın bulunduğu durumlar</span>
                    </li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <div className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center mr-3">
                    <i className="ri-time-line text-teal-600"></i>
                  </div>
                  Veri Saklama Süresi
                </h2>
                <div className="bg-teal-50 rounded-lg p-6">
                  <p className="text-gray-700 mb-4">
                    Kişisel verileriniz aşağıdaki süreler boyunca saklanır:
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-white rounded-lg p-4 border border-teal-200">
                      <h4 className="font-semibold text-gray-900 mb-2">Müşteri Verileri</h4>
                      <p className="text-sm text-gray-600">Sözleşme süresi + 10 yıl</p>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-teal-200">
                      <h4 className="font-semibold text-gray-900 mb-2">İletişim Verileri</h4>
                      <p className="text-sm text-gray-600">Talep sonrası 3 yıl</p>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-teal-200">
                      <h4 className="font-semibold text-gray-900 mb-2">Web Verileri</h4>
                      <p className="text-sm text-gray-600">Maksimum 2 yıl</p>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center mr-3">
                    <i className="ri-mail-line text-indigo-600"></i>
                  </div>
                  İletişim
                </h2>
                <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg p-6">
                  <p className="text-gray-700 mb-4">
                    Gizlilik politikamız hakkında sorularınız için bizimle iletişime geçebilirsiniz:
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">İletişim Bilgileri</h4>
                      <div className="space-y-2 text-gray-700">
                        <div className="flex items-center">
                          <i className="ri-mail-line text-indigo-600 mr-3"></i>
                          <span>saidbayraktar9@gmail.com</span>
                        </div>
                        <div className="flex items-center">
                          <i className="ri-phone-line text-indigo-600 mr-3"></i>
                          <span>+90 535 078 61 01</span>
                        </div>
                        <div className="flex items-center">
                          <i className="ri-map-pin-line text-indigo-600 mr-3"></i>
                          <span>Kılıçdede Mah. Çubukçu Sok. No:3/B, İlkadım, Samsun</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">KVKK Başvuru</h4>
                      <p className="text-sm text-gray-600 mb-3">
                        Kişisel veri işleme faaliyetlerimiz hakkında başvurularınızı 
                        aşağıdaki adrese gönderebilirsiniz:
                      </p>
                      <div className="bg-white rounded-lg p-3 border border-indigo-200">
                        <p className="text-sm text-gray-700 font-medium">
                          saidbayraktar9@gmail.com
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <div className="bg-gray-100 rounded-lg p-6 text-center">
                <p className="text-gray-600 text-sm">
                  Bu gizlilik politikası değişiklik gösterebilir. Güncellemeler web sitemizde yayınlanacaktır.
                </p>
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