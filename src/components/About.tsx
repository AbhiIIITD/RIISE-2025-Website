import React from 'react';
import { Target, Users, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-slate-800 mb-6">
            About RIISE
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            RIISE is IIIT-Delhi's premier research showcase, bringing together brilliant minds to showcase 
            cutting-edge innovations, foster collaboration, and accelerate the translation of research into real-world impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-slate-800 mb-3">Innovation Focus</h3>
            <p className="text-slate-600 leading-relaxed">
              Highlighting breakthrough research and innovative solutions across multiple domains.
            </p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-slate-800 mb-3">Collaboration</h3>
            <p className="text-slate-600 leading-relaxed">
              Connecting researchers, industry leaders, and entrepreneurs for meaningful partnerships.
            </p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-600 to-cyan-800 rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-slate-800 mb-3">Recognition</h3>
            <p className="text-slate-600 leading-relaxed">
              Awards and recognition for outstanding research contributions and innovations.
            </p>
          </div>
        </div>

        {/* Event Theme */}
        <div id="theme" className="bg-blue-900 rounded-3xl p-8 lg:p-12 text-white text-center">
          <h3 className="text-3xl lg:text-4xl font-serif font-bold mb-6">
            Event Theme: Building in the times of AI
          </h3>
          <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            In an era where Artificial Intelligence is reshaping every aspect of human endeavor, RIISE 2025 explores how we can build, innovate, and create in this transformative landscape. From breakthrough research to practical applications, from ethical considerations to future possibilities, this theme encompasses the multifaceted journey of building meaningful solutions in the AI revolution.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;