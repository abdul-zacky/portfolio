'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { useState } from 'react';

const Navbar = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 navbar-visible w-[90%] max-w-5xl">
      <div className="glass backdrop-blur-md rounded-full py-3 px-4 md:px-8 shadow-2xl">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="text-xl font-bold text-white drop-shadow-lg futuristic-font tracking-wider">
            zac
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="#home" className="text-white/90 hover:text-white transition-colors duration-300 font-medium text-sm">
              {t('nav.home')}
            </Link>
            <Link href="#about" className="text-white/90 hover:text-white transition-colors duration-300 font-medium text-sm">
              {t('nav.about')}
            </Link>
            <Link href="#projects" className="text-white/90 hover:text-white transition-colors duration-300 font-medium text-sm">
              {t('nav.projects')}
            </Link>
            <Link href="#experience" className="text-white/90 hover:text-white transition-colors duration-300 font-medium text-sm">
              {t('nav.experience')}
            </Link>
            <Link href="#awards" className="text-white/90 hover:text-white transition-colors duration-300 font-medium text-sm">
              {t('nav.awards')}
            </Link>
            <Link href="#contact" className="text-white/90 hover:text-white transition-colors duration-300 font-medium text-sm">
              {t('nav.contact')}
            </Link>

            {/* Desktop Language Switcher */}
            <div className="ml-2 flex items-center gap-1 p-1 glass-dark rounded-full">
              <button
                onClick={() => setLanguage('en')}
                className={`p-1.5 rounded-full transition-all duration-300 ${language === 'en' ? 'bg-white/20 scale-110' : 'hover:bg-white/10'
                  }`}
                aria-label="Switch to English"
              >
                <svg className={`w-5 h-5 transition-colors duration-300 ${language === 'en' ? 'text-white' : 'text-white/60'
                  }`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="M3 7L21 17M21 7L3 17" strokeWidth="2.5" />
                  <path d="M3 12H21M12 5V19" strokeWidth="3" />
                </svg>
              </button>

              <button
                onClick={() => setLanguage('fr')}
                className={`p-1.5 rounded-full transition-all duration-300 ${language === 'fr' ? 'bg-white/20 scale-110' : 'hover:bg-white/10'
                  }`}
                aria-label="Switch to French"
              >
                <svg className={`w-5 h-5 transition-colors duration-300 ${language === 'fr' ? 'text-white' : 'text-white/60'
                  }`} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 5C3 3.89543 3.89543 3 5 3H8V21H5C3.89543 21 3 20.1046 3 19V5Z" />
                  <path d="M16 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H16V3Z" />
                  <path d="M8 3H16V21H8V3Z" opacity="0.5" />
                </svg>
              </button>

              <button
                onClick={() => setLanguage('es')}
                className={`p-1.5 rounded-full transition-all duration-300 ${language === 'es' ? 'bg-white/20 scale-110' : 'hover:bg-white/10'
                  }`}
                aria-label="Switch to Spanish"
              >
                <svg className={`w-5 h-5 transition-colors duration-300 ${language === 'es' ? 'text-white' : 'text-white/60'
                  }`} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  {/* Red stripes - now grayscale */}
                  <path d="M3 5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V8H3V5Z" fill="currentColor" opacity="0.7" />
                  <path d="M3 16H21V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V16Z" fill="currentColor" opacity="0.7" />
                  {/* Yellow stripe - now lighter gray */}
                  <path d="M3 8H21V16H3V8Z" fill="currentColor" opacity="0.3" />
                  {/* Simplified coat of arms */}
                  <ellipse cx="12" cy="12" rx="3" ry="3.5" fill="currentColor" opacity="0.5" />
                  <rect x="10.5" y="10" width="3" height="4" rx="0.5" fill="currentColor" opacity="0.6" />
                  <circle cx="11.2" cy="11.5" r="0.4" fill="currentColor" opacity="0.3" />
                  <circle cx="12.8" cy="11.5" r="0.4" fill="currentColor" opacity="0.3" />
                  <rect x="11" y="13" width="2" height="0.8" fill="currentColor" opacity="0.3" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu Button & Language Switcher */}
          <div className="flex md:hidden items-center gap-2">
            {/* Mobile Language Switcher - Compact */}
            <div className="flex items-center gap-1 p-1 glass-dark rounded-full">
              <button
                onClick={() => setLanguage('en')}
                className={`p-1 rounded-full transition-all duration-300 ${language === 'en' ? 'bg-white/20' : 'hover:bg-white/10'
                  }`}
                aria-label="EN"
              >
                <svg className={`w-4 h-4 ${language === 'en' ? 'text-white' : 'text-white/60'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="M3 7L21 17M21 7L3 17" strokeWidth="2.5" />
                  <path d="M3 12H21M12 5V19" strokeWidth="3" />
                </svg>
              </button>

              <button
                onClick={() => setLanguage('fr')}
                className={`p-1 rounded-full transition-all duration-300 ${language === 'fr' ? 'bg-white/20' : 'hover:bg-white/10'
                  }`}
                aria-label="FR"
              >
                <svg className={`w-4 h-4 ${language === 'fr' ? 'text-white' : 'text-white/60'}`} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 5C3 3.89543 3.89543 3 5 3H8V21H5C3.89543 21 3 20.1046 3 19V5Z" />
                  <path d="M16 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H16V3Z" />
                  <path d="M8 3H16V21H8V3Z" opacity="0.5" />
                </svg>
              </button>

              <button
                onClick={() => setLanguage('es')}
                className={`p-1 rounded-full transition-all duration-300 ${language === 'es' ? 'bg-white/20' : 'hover:bg-white/10'
                  }`}
                aria-label="ES"
              >
                <svg className={`w-4 h-4 ${language === 'es' ? 'text-white' : 'text-white/60'
                  }`} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  {/* Red stripes - now grayscale */}
                  <path d="M3 5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V8H3V5Z" fill="currentColor" opacity="0.7" />
                  <path d="M3 16H21V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V16Z" fill="currentColor" opacity="0.7" />
                  {/* Yellow stripe - now lighter gray */}
                  <path d="M3 8H21V16H3V8Z" fill="currentColor" opacity="0.3" />
                  {/* Simplified coat of arms */}
                  <ellipse cx="12" cy="12" rx="2.5" ry="3" fill="currentColor" opacity="0.5" />
                  <rect x="11" y="10.5" width="2" height="3" rx="0.3" fill="currentColor" opacity="0.6" />
                  <circle cx="11.6" cy="11.5" r="0.3" fill="currentColor" opacity="0.3" />
                  <circle cx="12.4" cy="11.5" r="0.3" fill="currentColor" opacity="0.3" />
                  <rect x="11.3" y="12.8" width="1.4" height="0.5" fill="currentColor" opacity="0.3" />
                </svg>
              </button>
            </div>

            {/* Hamburger Menu Button */}
            <button
              onClick={toggleMenu}
              className="p-2 rounded-full glass-dark hover:bg-white/10 transition-all duration-300"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-white/10 space-y-3 animate-fadeIn">
            <Link
              href="#home"
              onClick={closeMenu}
              className="block text-white/90 hover:text-white transition-colors duration-300 font-medium text-sm py-2"
            >
              {t('nav.home')}
            </Link>
            <Link
              href="#about"
              onClick={closeMenu}
              className="block text-white/90 hover:text-white transition-colors duration-300 font-medium text-sm py-2"
            >
              {t('nav.about')}
            </Link>
            <Link
              href="#projects"
              onClick={closeMenu}
              className="block text-white/90 hover:text-white transition-colors duration-300 font-medium text-sm py-2"
            >
              {t('nav.projects')}
            </Link>
            <Link
              href="#experience"
              onClick={closeMenu}
              className="block text-white/90 hover:text-white transition-colors duration-300 font-medium text-sm py-2"
            >
              {t('nav.experience')}
            </Link>
            <Link
              href="#awards"
              onClick={closeMenu}
              className="block text-white/90 hover:text-white transition-colors duration-300 font-medium text-sm py-2"
            >
              {t('nav.awards')}
            </Link>
            <Link
              href="#contact"
              onClick={closeMenu}
              className="block text-white/90 hover:text-white transition-colors duration-300 font-medium text-sm py-2"
            >
              {t('nav.contact')}
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
