import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const PitchCafe: React.FC = () => {
  return (
    <section id="pitchcafe" className="py-20 lg:py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-slate-800 mb-6">
            Pitch Cafe 9.0
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            The flagship event of the E-Cell at IIIT Delhi, bringing together innovators, entrepreneurs, 
            and visionaries to present groundbreaking ideas.
          </p>
        </div>

        {/* Grid: Focus Areas & Pitching Round */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Focus Areas */}
          <div className="bg-white p-8 rounded-2xl shadow-lg transform transition hover:shadow-xl">
            <h3 className="text-2xl font-serif font-bold text-slate-800 mb-4">Focus Areas</h3>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mb-6"></div>
            
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 mr-2 flex-shrink-0" />
                <p className="text-slate-600">Innovation in domains such as AI, Cybersecurity, Data Science, Robotics, etc.</p>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 mr-2 flex-shrink-0" />
                <p className="text-slate-600">Recognition of creativity and problem-solving skills.</p>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 mr-2 flex-shrink-0" />
                <p className="text-slate-600">Support in transforming ideas into viable business ventures.</p>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 mr-2 flex-shrink-0" />
                <p className="text-slate-600">Refinement of business models and pitching strategies.</p>
              </li>
            </ul>
          </div>

          {/* Pitching Round */}
          <div className="bg-gradient-to-br from-slate-50 to-emerald-50 p-8 rounded-2xl shadow-lg transform transition hover:shadow-xl">
            <h3 className="text-2xl lg:text-3xl font-serif font-bold text-slate-800 mb-2 text-center">
              Pitching Round (at IIIT Delhi)
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-emerald-600 mx-auto mb-8"></div>
            
            <p className="text-slate-700 mb-4 text-center">
              Startups pitched their ideas to venture capitalists and investors.
            </p>
            <ul className="space-y-2 mb-4 max-w-lg mx-auto">
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 mr-2"></span>
                <p className="text-slate-600"><strong>Date:</strong> 13th Sept 2025</p>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 mr-2"></span>
                <p className="text-slate-600"><strong>Timings:</strong> 3PM to 5:20 PM</p>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 mr-2"></span>
                <p className="text-slate-600"><strong>Pitch Duration:</strong> 15 minutes (including Q&A)</p>
              </li>
            </ul>
            <p className="text-slate-600 text-sm text-center">
              A distinguished panel of investors and VCs served as judges, actively looking for promising startups to fund. 
              Funding decisions were made entirely by them, based on their interest in the idea and investment capacity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PitchCafe;
