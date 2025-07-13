'use client';

// components/Navbar.tsx
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      setIsVisible(scrolled > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 glass backdrop-blur-md py-4 px-6 transition-all duration-500 ${
      isVisible ? 'navbar-visible' : 'navbar-hidden'
    }`}>
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-white drop-shadow-lg futuristic-font tracking-wider">
          zac
        </Link>
        <div className="flex space-x-8">
          <Link href="#home" className="text-white/90 hover:text-white transition-colors duration-300 font-medium">
            Home
          </Link>
          <Link href="#about" className="text-white/90 hover:text-white transition-colors duration-300 font-medium">
            About
          </Link>
          <Link href="#projects" className="text-white/90 hover:text-white transition-colors duration-300 font-medium">
            Projects
          </Link>
          <Link href="#contact" className="text-white/90 hover:text-white transition-colors duration-300 font-medium">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
