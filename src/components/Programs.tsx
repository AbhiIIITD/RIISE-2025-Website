import React from 'react';
import { GraduationCap, Users, Clock, Award } from 'lucide-react';

const Programs: React.FC = () => {
  const programs = [
    {
      type: "PhD Program",
      title: "Doctoral Research in AI",
      duration: "4-6 years",
      students: "120 students",
      description: "Comprehensive doctoral program focusing on cutting-edge AI research with personalized mentorship and access to state-of-the-art facilities.",
      highlights: ["Research Assistantships", "International Conferences", "Industry Collaborations"]
    },
    {
      type: "Master's Program",
      title: "MS in Machine Learning",
      duration: "2 years",
      students: "200 students", 
      description: "Advanced master's program combining theoretical foundations with practical applications in machine learning and data science.",
      highlights: ["Thesis Track", "Professional Track", "Industry Projects"]
    },
    {
      type: "Certificate",
      title: "AI Leadership Certificate",
      duration: "1 year",
      students: "150 professionals",
      description: "Executive education program for professionals seeking to lead AI transformation in their organizations.",
      highlights: ["Weekend Format", "Executive Networking", "Capstone Project"]
    }
  ];

  return (
    <section id="programs" className="py-20 lg:py-32 bg-white/50 backdrop-blur-sm relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-slate-800 mb-6">
            Academic Programs
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            World-class education programs designed to cultivate the next generation of AI leaders, 
            researchers, and innovators across all career stages.
          </p>
        </div>

        <div className="space-y-8">
          {programs.map((program, index) => (
            <div 
              key={index}
              className="group bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] border border-slate-200/50 overflow-hidden"
            >
              <div className="p-8 lg:p-12">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div>
                    <div className="text-blue-600 font-semibold text-sm uppercase tracking-wide mb-2">
                      {program.type}
                    </div>
                    <h3 className="text-3xl font-serif font-bold text-slate-800 mb-4 group-hover:text-blue-600 transition-colors">
                      {program.title}
                    </h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-6 text-slate-600">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-5 h-5 text-blue-600" />
                      <span className="font-medium">{program.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-5 h-5 text-blue-600" />
                      <span className="font-medium">{program.students}</span>
                    </div>
                  </div>
                </div>

                <p className="text-slate-600 leading-relaxed mb-8 text-lg">
                  {program.description}
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex flex-wrap gap-3 mb-6 sm:mb-0">
                    {program.highlights.map((highlight, highlightIndex) => (
                      <span 
                        key={highlightIndex}
                        className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium border border-blue-200"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                  
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center space-x-2">
                    <GraduationCap className="w-5 h-5" />
                    <span>Apply Now</span>
                  </button>
                </div>
              </div>
              
              {/* Accent border */}
              <div className="h-1 bg-gradient-to-r from-blue-600 to-emerald-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </div>
          ))}
        </div>

        {/* QR Code Section */}
        <div className="mt-16 text-center">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-slate-200/50 inline-block">
            <h3 className="text-2xl font-serif font-bold text-slate-800 mb-4">
              Quick Access
            </h3>
            <div className="w-32 h-32 bg-slate-800 rounded-xl mx-auto mb-4 flex items-center justify-center">
              <div className="w-24 h-24 bg-white rounded-lg flex items-center justify-center">
                <div className="grid grid-cols-8 gap-1">
                  {Array.from({ length: 64 }).map((_, i) => (
                    <div 
                      key={i} 
                      className={`w-1 h-1 ${Math.random() > 0.5 ? 'bg-slate-800' : 'bg-white'}`}
                    />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-slate-600">Scan for program details</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;