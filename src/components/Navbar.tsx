'use client';

// components/Navbar.tsx
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

const Navbar = () => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 navbar-visible">
      <div className="glass backdrop-blur-md rounded-full py-3 px-8 shadow-2xl">
        <div className="flex items-center gap-8">
          <Link href="/" className="text-xl font-bold text-white drop-shadow-lg futuristic-font tracking-wider">
            zac
          </Link>
          <div className="flex items-center space-x-6">
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
            
            {/* Language Switcher - Show all 3 flags */}
            <div className="ml-2 flex items-center gap-1 p-1 glass-dark rounded-full">
              {/* English Flag */}
              <button
                onClick={() => setLanguage('en')}
                className={`p-1.5 rounded-full transition-all duration-300 ${
                  language === 'en' ? 'bg-white/20 scale-110' : 'hover:bg-white/10'
                }`}
                aria-label="Switch to English"
              >
                <svg className={`w-5 h-5 transition-colors duration-300 ${
                  language === 'en' ? 'text-white' : 'text-white/60'
                }`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="M3 7L21 17M21 7L3 17" strokeWidth="2.5" />
                  <path d="M3 12H21M12 5V19" strokeWidth="3" />
                </svg>
              </button>

              {/* French Flag */}
              <button
                onClick={() => setLanguage('fr')}
                className={`p-1.5 rounded-full transition-all duration-300 ${
                  language === 'fr' ? 'bg-white/20 scale-110' : 'hover:bg-white/10'
                }`}
                aria-label="Switch to French"
              >
                <svg className={`w-5 h-5 transition-colors duration-300 ${
                  language === 'fr' ? 'text-white' : 'text-white/60'
                }`} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 5C3 3.89543 3.89543 3 5 3H8V21H5C3.89543 21 3 20.1046 3 19V5Z"/>
                  <path d="M16 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H16V3Z"/>
                  <path d="M8 3H16V21H8V3Z" opacity="0.5"/>
                </svg>
              </button>

              {/* Spanish Flag */}
              <button
                onClick={() => setLanguage('es')}
                className={`p-1.5 rounded-full transition-all duration-300 ${
                  language === 'es' ? 'bg-white/20 scale-110' : 'hover:bg-white/10'
                }`}
                aria-label="Switch to Spanish"
              >
                <svg className={`w-5 h-5 transition-colors duration-300 ${
                  language === 'es' ? 'text-white' : 'text-white/60'
                }`} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V8H3V5Z"/>
                  <path d="M3 16H21V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V16Z"/>
                  <path d="M3 8H21V16H3V8Z" opacity="0.3"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
