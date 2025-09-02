'use client';

export default function FloatingButtons() {
  const handleCall = () => {
    window.open('tel:+905551234567', '_self');
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/905551234567?text=Merhaba, hizmetleriniz hakkında bilgi almak istiyorum.', '_blank');
  };

  const handleQuote = () => {
    window.location.href = '/iletisim';
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-3">
      <button
        onClick={handleCall}
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 whitespace-nowrap cursor-pointer"
      >
        <div className="w-5 h-5 flex items-center justify-center">
          <i className="ri-phone-fill text-lg"></i>
        </div>
        <span className="font-semibold">Hemen Ara</span>
      </button>

      <button
        onClick={handleWhatsApp}
        className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 whitespace-nowrap cursor-pointer"
      >
        <div className="w-5 h-5 flex items-center justify-center">
          <i className="ri-whatsapp-fill text-lg"></i>
        </div>
        <span className="font-semibold">WhatsApp</span>
      </button>

      <button
        onClick={handleQuote}
        className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 whitespace-nowrap cursor-pointer"
      >
        <div className="w-5 h-5 flex items-center justify-center">
          <i className="ri-file-text-fill text-lg"></i>
        </div>
        <span className="font-semibold">Teklif Al</span>
      </button>
    </div>
  );
}