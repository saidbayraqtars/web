
'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="container mx-auto px-4 py-3 md:py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <img 
              src="https://static.readdy.ai/image/06461edf5d9b24c66a3431fe58cc857a/d400a0bd85a6ac7153b53496bdb1a2ea.png" 
              alt="Bayraktar Logo" 
              className="h-12 md:h-16 w-auto"
            />
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium">
              Ana Sayfa
            </Link>
            <Link href="/hizmetler" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium">
              Hizmetler
            </Link>
            <Link href="/hakkimizda" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium">
              Hakkımızda
            </Link>
            <Link href="/iletisim" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium">
              İletişim
            </Link>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <div className="w-5 h-5 md:w-6 md:h-6 flex items-center justify-center">
              <i className={`text-lg md:text-xl ${isMenuOpen ? 'ri-close-line' : 'ri-menu-line'}`}></i>
            </div>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-3">
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium py-2" onClick={() => setIsMenuOpen(false)}>
                Ana Sayfa
              </Link>
              <Link href="/hizmetler" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium py-2" onClick={() => setIsMenuOpen(false)}>
                Hizmetler
              </Link>
              <Link href="/hakkimizda" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium py-2" onClick={() => setIsMenuOpen(false)}>
                Hakkımızda
              </Link>
              <Link href="/iletisim" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium py-2" onClick={() => setIsMenuOpen(false)}>
                İletişim
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
