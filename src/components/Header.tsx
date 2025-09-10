import React, { useEffect, useRef, useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const [isPrevOpenDesktop, setIsPrevOpenDesktop] = useState(false);
  const closeTimeoutRef = useRef<number | null>(null);
  const [isPrevOpenMobile, setIsPrevOpenMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (closeTimeoutRef.current) {
        window.clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  const openPrevDesktop = () => {
    if (closeTimeoutRef.current) {
      window.clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setIsPrevOpenDesktop(true);
  };

  const closePrevDesktopWithDelay = (delay = 150) => {
    if (closeTimeoutRef.current) {
      window.clearTimeout(closeTimeoutRef.current);
    }
    closeTimeoutRef.current = window.setTimeout(() => {
      setIsPrevOpenDesktop(false);
      closeTimeoutRef.current = null;
    }, delay);
  };

  const navClickClose = (closeMenu = true) => {
    if (closeMenu) setIsMenuOpen(false);
    setIsPrevOpenMobile(false);
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
              <p className="text-xs text-slate-600 hidden sm:block">IIIT-Delhi Research Showcase</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#about" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">
              About
            </a>
            <a href="#theme" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">
              Theme
            </a>
            <a href="#schedule" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">
              Schedule
            </a>

            {/* Previous Iterations - desktop */}
            <div
              className="relative"
              onMouseEnter={openPrevDesktop}
              onMouseLeave={() => closePrevDesktopWithDelay(150)}
            >
              <button
                aria-haspopup="true"
                aria-expanded={isPrevOpenDesktop}
                onClick={() => setIsPrevOpenDesktop((s) => !s)}
                className="flex items-center text-slate-700 hover:text-blue-600 transition-colors font-medium focus:outline-none"
                type="button"
              >
                Previous Iterations
                <ChevronDown className="w-4 h-4 ml-2 text-slate-500" />
              </button>

              {isPrevOpenDesktop && (
                <div
                  className="absolute right-0 mt-3 w-44 bg-white rounded-lg shadow-lg border border-slate-100 py-2 z-40"
                  onMouseEnter={openPrevDesktop}
                  onMouseLeave={() => closePrevDesktopWithDelay(150)}
                >
                  <a href="#riise-2024" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50">
                    RIISE 2024
                  </a>
                  <a href="#riise-2023" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50">
                    RIISE 2023
                  </a>
                </div>
              )}
            </div>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <a
              href="#Register"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors hidden sm:block"
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

        {/* Mobile Navigation (simplified) */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-md border-t border-slate-200 z-50">
            <nav className="px-4 py-6 space-y-4">
              <a href="#about" onClick={() => navClickClose()} className="block text-slate-700 hover:text-blue-600 font-medium">
                About
              </a>
              <a href="#theme" onClick={() => navClickClose()} className="block text-slate-700 hover:text-blue-600 font-medium">
                Theme
              </a>
              <a href="#schedule" onClick={() => navClickClose()} className="block text-slate-700 hover:text-blue-600 font-medium">
                Schedule
              </a>

              {/* Previous Iterations - mobile */}
              <div>
                <button
                  onClick={() => setIsPrevOpenMobile((s) => !s)}
                  className="w-full flex items-center justify-between text-slate-700 hover:text-blue-600 font-medium px-2 py-2 rounded-md"
                  aria-expanded={isPrevOpenMobile}
                >
                  <span>Previous Iterations</span>
                  <ChevronDown className={`w-4 h-4 transform transition-transform ${isPrevOpenMobile ? 'rotate-180' : 'rotate-0'}`} />
                </button>

                {isPrevOpenMobile && (
                  <div className="mt-2 space-y-2 pl-4">
                    <a href="#riise-2024" onClick={() => navClickClose()} className="block text-slate-700 hover:text-blue-600 font-medium">
                      RIISE 2024
                    </a>
                    <a href="#riise-2023" onClick={() => navClickClose()} className="block text-slate-700 hover:text-blue-600 font-medium">
                      RIISE 2023
                    </a>
                  </div>
                )}
              </div>

              <a href="#Register" onClick={() => navClickClose()} className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium">
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