
'use client';

export default function FloatingButtons() {
  const handleCall = () => {
    window.open('tel:+905001234567', '_self');
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/905001234567?text=Merhaba, hizmetleriniz hakkında bilgi almak istiyorum.', '_blank');
  };

  return (
    <div className="fixed bottom-4 md:bottom-6 right-4 md:right-6 z-50 flex flex-col space-y-3 md:space-y-4">
      <button
        onClick={handleCall}
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 md:px-8 py-3 md:py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 md:space-x-3 whitespace-nowrap cursor-pointer"
      >
        <div className="w-5 h-5 md:w-6 md:h-6 flex items-center justify-center">
          <i className="ri-phone-fill text-lg md:text-xl"></i>
        </div>
        <span className="font-semibold text-sm md:text-lg">Hemen Ara</span>
      </button>

      <button
        onClick={handleWhatsApp}
        className="bg-green-500 hover:bg-green-600 text-white px-4 md:px-8 py-3 md:py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 md:space-x-3 whitespace-nowrap cursor-pointer"
      >
        <div className="w-5 h-5 md:w-6 md:h-6 flex items-center justify-center">
          <i className="ri-whatsapp-fill text-lg md:text-xl"></i>
        </div>
        <span className="font-semibold text-sm md:text-lg">WhatsApp</span>
      </button>
    </div>
  );
}
