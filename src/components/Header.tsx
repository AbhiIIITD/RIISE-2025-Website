import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center">
              <img src = "/riise2025/logo.png" />
            </div>
            <div>
              <h1 className="text-lg font-semibold text-slate-800">RIISE</h1>
              <p className="text-xs text-slate-600 hidden sm:block">IIIT-Delhi Research Showcase</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#about" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">About</a>
            <a href="#theme" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">Theme</a>
            <a href="#schedule" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">Schedule</a>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <a href="#Register" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors hidden sm:block">
              Register Now
            </a>
            
            {/* Mobile menu button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-slate-600 hover:text-blue-600 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-lg">
            <nav className="px-4 py-6 space-y-4">
              <a href="#about" className="block text-slate-700 hover:text-blue-600 transition-colors font-medium">About</a>
              <a href="#theme" className="block text-slate-700 hover:text-blue-600 transition-colors font-medium">Theme</a>
              <a href="#schedule" className="block text-slate-700 hover:text-blue-600 transition-colors font-medium">Schedule</a>
              <a href="#Register" className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors mt-4">
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