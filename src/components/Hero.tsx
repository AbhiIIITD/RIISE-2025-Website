import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import WavePattern from './WavePattern';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Campus Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: "url('/riise2025/bg.jpg')",
        }}
      />
      
      {/* Wave Pattern Overlay */}
      <div className="absolute inset-0">
        <WavePattern />
      </div>

      {/* Geometric Overlays */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-600/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-emerald-500/10 rounded-lg rotate-45 blur-lg animate-bounce"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-blue-800/10 rounded-full blur-md animate-ping"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <h1 className="flex flex-col items-center text-center font-bold mb-6 leading-tight">
            {/* Logo */}
            <img 
              src="/riise2025/logo.png" 
              alt="RIISE Logo" 
              className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 mb-4"
            />

            {/* Main Title */}
            <span className="font-lucidity-expand text-slate-800 text-5xl sm:text-6xl lg:text-7xl">
              RIISE
            </span>

            {/* Subtitle */}
            <span className="font-serif bg-blue-800 bg-clip-text text-transparent text-3xl sm:text-4xl lg:text-5xl mt-2">
              Research Innovation and Incubation ShowcasE
            </span>
          </h1>
          <div className="mb-6">
            <p className="text-2xl sm:text-3xl font-serif font-semibold text-blue-800 mb-2">IIIT-Delhi Research Showcase</p>
            <p className="text-lg text-slate-600">September 13, 2025 | IIIT-Delhi Campus</p>
          </div>
          <p className="text-xl sm:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
            Join us for a day of groundbreaking research presentations, innovative product showcases, 
            and startup exhibitions that are shaping the future of technology.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
          <a href = "#Register" className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center space-x-3">
            <span>Register Now</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          
          {/* <button className="group border-2 border-slate-300 hover:border-blue-600 text-slate-700 hover:text-blue-600 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center space-x-3">
            <QrCode className="w-5 h-5" />
            <span>Event Brochure</span>
          </button> */}
        </div>

        {/* Stats */}
        {/* <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">200+</div>
            <div className="text-slate-600 font-medium">Research Presentations</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">50+</div>
            <div className="text-slate-600 font-medium">Startup Showcases</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">30+</div>
            <div className="text-slate-600 font-medium">Product Demos</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">1000+</div>
            <div className="text-slate-600 font-medium">Attendees Expected</div>
          </div>
        </div> */}

        {/* Scroll Indicator */}
        <div className="animate-bounce">
          <a href="#about"><ChevronDown className="w-6 h-6 text-slate-400 mx-auto" /></a>
        </div>
      </div>
    </section>
  );
};

export default Hero;