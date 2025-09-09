'use client';
import { useState } from 'react';

export default function CareerForm() {
  const [formData, setFormData] = useState({
    position: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    birthDate: '',
    education: '',
    university: '',
    department: '',
    graduationYear: '',
    experience: '',
    skills: '',
    previousJobs: '',
    languages: '',
    certificates: '',
    portfolio: '',
    salary: '',
    startDate: '',
    workType: '',
    militaryStatus: '',
    driverLicense: '',
    coverLetter: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const positions = [
    'Stajyer',
    'Genel Kadro'
  ];

  const educationLevels = [
    'Lise',
    'Ön Lisans',
    'Lisans',
    'Yüksek Lisans',
    'Doktora'
  ];

  const experienceLevels = [
    'Yeni Mezun',
    '1-2 Yıl',
    '3-5 Yıl',
    '6-10 Yıl',
    '10+ Yıl'
  ];

  const workTypes = [
    'Tam Zamanlı',
    'Yarı Zamanlı',
    'Staj',
    'Proje Bazlı'
  ];

  const militaryOptions = [
    'Yapıldı',
    'Muaf',
    'Tecilli',
    'Yapılmadı'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });

      const response = await fetch('https://readdy.ai/api/form/submit/kariyer-basvuru', {
        method: 'POST',
        body: new URLSearchParams(formDataToSend as any),
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          position: '',
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          birthDate: '',
          education: '',
          university: '',
          department: '',
          graduationYear: '',
          experience: '',
          skills: '',
          previousJobs: '',
          languages: '',
          certificates: '',
          portfolio: '',
          salary: '',
          startDate: '',
          workType: '',
          militaryStatus: '',
          driverLicense: '',
          coverLetter: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  return (
    <section id="basvuru-formu" className="py-20 bg-gray-50">
      <div className="container mx-auto px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Kariyer Başvuru Formu
            </h2>
            <p className="text-xl text-gray-600">
              Ekibimize katılmak için aşağıdaki formu detaylı şekilde doldurun
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <form data-readdy-form id="kariyer-basvuru" onSubmit={handleSubmit} className="space-y-8">
              {/* Pozisyon Seçimi */}
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Başvuru Bilgileri</h3>
                <div>
                  <label htmlFor="position" className="block text-sm font-semibold text-gray-700 mb-2">
                    Başvurduğunuz Pozisyon *
                  </label>
                  <div className="relative">
                    <select
                      id="position"
                      name="position"
                      value={formData.position}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm appearance-none pr-8"
                    >
                      <option value="">Pozisyon seçin</option>
                      {positions.map((pos) => (
                        <option key={pos} value={pos}>
                          {pos}
                        </option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <i className="ri-arrow-down-s-line text-gray-400"></i>
                    </div>
                  </div>
                </div>
              </div>

              {/* Kişisel Bilgiler */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Kişisel Bilgiler</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">
                      Ad *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm"
                      placeholder="Adınız"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">
                      Soyad *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm"
                      placeholder="Soyadınız"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      E-posta *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm"
                      placeholder="ornek@email.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Telefon *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm"
                      placeholder="+90 555 123 45 67"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="birthDate" className="block text-sm font-semibold text-gray-700 mb-2">
                      Doğum Tarihi
                    </label>
                    <input
                      type="date"
                      id="birthDate"
                      name="birthDate"
                      value={formData.birthDate}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm"
                    />
                  </div>
                </div>
              </div>

              {/* Eğitim Bilgileri */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Eğitim Bilgileri</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="education" className="block text-sm font-semibold text-gray-700 mb-2">
                      Eğitim Seviyesi *
                    </label>
                    <div className="relative">
                      <select
                        id="education"
                        name="education"
                        value={formData.education}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm appearance-none pr-8"
                      >
                        <option value="">Eğitim seviyesi seçin</option>
                        {educationLevels.map((level) => (
                          <option key={level} value={level}>
                            {level}
                          </option>
                        ))}
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <i className="ri-arrow-down-s-line text-gray-400"></i>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="university" className="block text-sm font-semibold text-gray-700 mb-2">
                      Üniversite/Okul
                    </label>
                    <input
                      type="text"
                      id="university"
                      name="university"
                      value={formData.university}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm"
                      placeholder="Üniversite/okul adı"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="department" className="block text-sm font-semibold text-gray-700 mb-2">
                      Bölüm/Alan
                    </label>
                    <input
                      type="text"
                      id="department"
                      name="department"
                      value={formData.department}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm"
                      placeholder="Okuduğunuz bölüm"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="graduationYear" className="block text-sm font-semibold text-gray-700 mb-2">
                      Mezuniyet Yılı
                    </label>
                    <input
                      type="number"
                      id="graduationYear"
                      name="graduationYear"
                      value={formData.graduationYear}
                      onChange={handleChange}
                      min="1980"
                      max="2030"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm"
                      placeholder="2024"
                    />
                  </div>
                </div>
              </div>

              {/* Deneyim ve Yetenekler */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Deneyim ve Yetenekler</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="experience" className="block text-sm font-semibold text-gray-700 mb-2">
                      Deneyim Süresi
                    </label>
                    <div className="relative">
                      <select
                        id="experience"
                        name="experience"
                        value={formData.experience}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm appearance-none pr-8"
                      >
                        <option value="">Deneyim sürenizi seçin</option>
                        {experienceLevels.map((exp) => (
                          <option key={exp} value={exp}>
                            {exp}
                          </option>
                        ))}
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <i className="ri-arrow-down-s-line text-gray-400"></i>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="workType" className="block text-sm font-semibold text-gray-700 mb-2">
                      Çalışma Şekli Tercihi
                    </label>
                    <div className="relative">
                      <select
                        id="workType"
                        name="workType"
                        value={formData.workType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm appearance-none pr-8"
                      >
                        <option value="">Çalışma şekli seçin</option>
                        {workTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <i className="ri-arrow-down-s-line text-gray-400"></i>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 gap-6 mt-6">
                  <div>
                    <label htmlFor="skills" className="block text-sm font-semibold text-gray-700 mb-2">
                      Teknik Yetenekler ve Bilgiler *
                    </label>
                    <textarea
                      id="skills"
                      name="skills"
                      value={formData.skills}
                      onChange={handleChange}
                      required
                      maxLength={500}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm resize-none"
                      placeholder="Sahip olduğunuz teknik yetenekleri, programlama dilleri, yazılımlar vb. detaylı şekilde yazın..."
                    ></textarea>
                    <div className="text-right text-xs text-gray-500 mt-1">
                      {formData.skills.length}/500 karakter
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="previousJobs" className="block text-sm font-semibold text-gray-700 mb-2">
                      Önceki İş Deneyimleri
                    </label>
                    <textarea
                      id="previousJobs"
                      name="previousJobs"
                      value={formData.previousJobs}
                      onChange={handleChange}
                      maxLength={500}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm resize-none"
                      placeholder="Daha önce çalıştığınız yerler, pozisyonlar ve süreleri yazın..."
                    ></textarea>
                    <div className="text-right text-xs text-gray-500 mt-1">
                      {formData.previousJobs.length}/500 karakter
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="languages" className="block text-sm font-semibold text-gray-700 mb-2">
                      Yabancı Dil Bilgisi
                    </label>
                    <input
                      type="text"
                      id="languages"
                      name="languages"
                      value={formData.languages}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm"
                      placeholder="Örn: İngilizce (İleri), Almanca (Başlangıç)"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="certificates" className="block text-sm font-semibold text-gray-700 mb-2">
                      Sertifikalar ve Kurslar
                    </label>
                    <textarea
                      id="certificates"
                      name="certificates"
                      value={formData.certificates}
                      onChange={handleChange}
                      maxLength={300}
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm resize-none"
                      placeholder="Sahip olduğunuz sertifikalar, aldığınız kurslar..."
                    ></textarea>
                    <div className="text-right text-xs text-gray-500 mt-1">
                      {formData.certificates.length}/300 karakter
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="portfolio" className="block text-sm font-semibold text-gray-700 mb-2">
                      Portföy/Projeler (Varsa)
                    </label>
                    <input
                      type="url"
                      id="portfolio"
                      name="portfolio"
                      value={formData.portfolio}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm"
                      placeholder="GitHub, LinkedIn, portföy siteniz vb."
                    />
                  </div>
                </div>
              </div>

              {/* Diğer Bilgiler */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Diğer Bilgiler</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="salary" className="block text-sm font-semibold text-gray-700 mb-2">
                      Maaş Beklentisi (TL)
                    </label>
                    <input
                      type="number"
                      id="salary"
                      name="salary"
                      value={formData.salary}
                      onChange={handleChange}
                      min="0"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm"
                      placeholder="15000"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="startDate" className="block text-sm font-semibold text-gray-700 mb-2">
                      İşe Başlama Tarihi
                    </label>
                    <input
                      type="date"
                      id="startDate"
                      name="startDate"
                      value={formData.startDate}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="militaryStatus" className="block text-sm font-semibold text-gray-700 mb-2">
                      Askerlik Durumu
                    </label>
                    <div className="relative">
                      <select
                        id="militaryStatus"
                        name="militaryStatus"
                        value={formData.militaryStatus}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm appearance-none pr-8"
                      >
                        <option value="">Askerlik durumu seçin</option>
                        {militaryOptions.map((status) => (
                          <option key={status} value={status}>
                            {status}
                          </option>
                        ))}
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <i className="ri-arrow-down-s-line text-gray-400"></i>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="driverLicense" className="block text-sm font-semibold text-gray-700 mb-2">
                      Ehliyet
                    </label>
                    <input
                      type="text"
                      id="driverLicense"
                      name="driverLicense"
                      value={formData.driverLicense}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm"
                      placeholder="Örn: B sınıfı, Motor"
                    />
                  </div>
                </div>
              </div>

              {/* Ön Yazı */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Ön Yazı</h3>
                <div>
                  <label htmlFor="coverLetter" className="block text-sm font-semibold text-gray-700 mb-2">
                    Neden bu pozisyona başvuruyorsunuz? *
                  </label>
                  <textarea
                    id="coverLetter"
                    name="coverLetter"
                    value={formData.coverLetter}
                    onChange={handleChange}
                    required
                    maxLength={500}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm resize-none"
                    placeholder="Kendinizi tanıtın, neden bu pozisyona uygun olduğunuzu ve şirketimizde çalışmak istediğinizi açıklayın..."
                  ></textarea>
                  <div className="text-right text-xs text-gray-500 mt-1">
                    {formData.coverLetter.length}/500 karakter
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting || formData.skills.length > 500 || formData.previousJobs.length > 500 || formData.certificates.length > 300 || formData.coverLetter.length > 500}
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 disabled:from-gray-400 disabled:to-gray-500 text-white py-4 px-8 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 disabled:transform-none shadow-lg whitespace-nowrap cursor-pointer disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center space-x-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Başvuru Gönderiliyor...</span>
                  </span>
                ) : (
                  'Başvurumu Gönder'
                )}
              </button>
              
              {submitStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center space-x-3">
                  <div className="w-5 h-5 flex items-center justify-center text-green-500">
                    <i className="ri-check-line text-lg"></i>
                  </div>
                  <span className="text-green-700">Başvurunuz başarıyla gönderildi! En kısa sürede size dönüş yapacağız.</span>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center space-x-3">
                  <div className="w-5 h-5 flex items-center justify-center text-red-500">
                    <i className="ri-error-warning-line text-lg"></i>
                  </div>
                  <span className="text-red-700">Başvuru gönderilirken bir hata oluştu. Lütfen tekrar deneyin.</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}