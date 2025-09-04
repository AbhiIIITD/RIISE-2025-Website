import React from 'react';
import { Facebook, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Bottom Section */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div className="text-slate-400 mb-6 lg:mb-0">
              <p>&copy; 2025 IIIT-Delhi. All rights reserved. | RIISE Research Showcase</p>
            </div>
            
            <div className="flex items-center space-x-6">
              <a href="https://www.facebook.com/RIISE.IIITD" className="text-slate-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/in/riiseiiitd" className="text-slate-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/riise_iiitd" className="text-slate-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;