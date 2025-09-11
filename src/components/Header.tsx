import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navClickClose = (closeMenu = true) => {
    if (closeMenu) setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center">
              <img src="/riise2025/logo.png" alt="RIISE logo" />
            </div>
            <div>
              <h1 className="text-lg font-semibold text-slate-800">RIISE</h1>
              <p className="text-xs text-slate-600 hidden sm:block">
                IIIT-Delhi Research Showcase
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a
              href="#about"
              className="text-slate-700 hover:text-blue-600 transition-colors font-medium"
            >
              About
            </a>
            <a
              href="#theme"
              className="text-slate-700 hover:text-blue-600 transition-colors font-medium"
            >
              Theme
            </a>
            <a
              href="#schedule"
              className="text-slate-700 hover:text-blue-600 transition-colors font-medium"
            >
              Schedule
            </a>
            <a
              href="#pitchcafe"
              className="text-slate-700 hover:text-blue-600 transition-colors font-medium"
            >
              Pitch Cafe
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <a
              href="#Register"
              className="bg-blue-900 hover:bg-blue-900/80 text-white px-4 py-2 rounded-lg font-medium transition-colors hidden sm:block"
            >
              Register Now
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-slate-600 hover:text-blue-600 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-md border-t border-slate-200 z-50">
            <nav className="px-4 py-6 space-y-4">
              <a
                href="#about"
                onClick={() => navClickClose()}
                className="block text-slate-700 hover:text-blue-600 font-medium"
              >
                About
              </a>
              <a
                href="#theme"
                onClick={() => navClickClose()}
                className="block text-slate-700 hover:text-blue-600 font-medium"
              >
                Theme
              </a>
              <a
                href="#schedule"
                onClick={() => navClickClose()}
                className="block text-slate-700 hover:text-blue-600 font-medium"
              >
                Schedule
              </a>
              
              <a
                href="#pitchcafe"
                onClick={() => navClickClose()}
                className="block text-slate-700 hover:text-blue-600 font-medium"
              >
                Pitch Cafe
              </a>

              <a
                href="#Register"
                onClick={() => navClickClose()}
                className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium"
              >
                Register Now
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
