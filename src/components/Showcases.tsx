import React from 'react';
import { FileText, Package, Rocket, Lightbulb, ArrowRight, Calendar } from 'lucide-react';

const Showcases: React.FC = () => {
  const showcases = [
    {
      icon: FileText,
      title: "Call for Posters",
      description: "Submit your research findings and innovative ideas through compelling poster presentations.",
      details: ["Research Posters", "Innovation Displays", "Interactive Demos"],
      deadline: "September 5, 2025",
      gradient: "from-blue-600 to-blue-800",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      link: "https://riise.accubate.app/ext/form/8510/1/apply"
    },
    {
      icon: Package,
      title: "Product Showcase",
      description: "Demonstrate cutting-edge products and prototypes that emerged from research initiatives.",
      details: ["Live Demonstrations", "Technical Presentations", "User Experience"],
      deadline: "September 5, 2025",
      gradient: "from-emerald-600 to-emerald-800",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-200",
      link: "https://riise.accubate.app/ext/form/8345/1/apply"
    },
    {
      icon: Rocket,
      title: "Startup Showcase",
      description: "Present your startup journey, business model, and growth potential to investors and mentors.",
      details: ["Pitch Presentations", "Business Models", "Investment Opportunities"],
      deadline: "September 5, 2025",
      gradient: "from-purple-600 to-purple-800",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      link: "https://riise.accubate.app/ext/form/8576/1/apply"
    },
    {
      icon: Lightbulb,
      title: "Research Tank",
      description: "Shark Tank-style competition where researchers pitch their innovations to expert panels.",
      details: ["5-Minute Pitches", "Expert Evaluation", "Funding Opportunities"],
      deadline: "September 5, 2025",
      gradient: "from-cyan-600 to-cyan-800",
      bgColor: "bg-cyan-50",
      borderColor: "border-cyan-200",
      link: "https://riise.accubate.app/ext/form/8477/1/apply"
    }
  ];

  return (
    <section id="showcases" className="py-20 lg:py-32 bg-white/50 backdrop-blur-sm relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-slate-800 mb-6">
            Showcase Opportunities
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Multiple platforms to present your research, innovations, and entrepreneurial ventures 
            to a diverse audience of academics, industry experts, and investors.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {showcases.map((showcase, index) => {
            const IconComponent = showcase.icon;
            return (
              <div 
                key={index}
                className={`group ${showcase.bgColor} p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border ${showcase.borderColor}`}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${showcase.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-serif font-semibold text-slate-800 mb-4 group-hover:text-blue-600 transition-colors">
                  {showcase.title}
                </h3>
                
                <p className="text-slate-600 leading-relaxed mb-6">
                  {showcase.description}
                </p>
                
                <div className="space-y-2 mb-6">
                  {showcase.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-slate-600 text-sm">{detail}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-sm text-slate-500">
                    <Calendar className="w-4 h-4 inline mr-1" />
                    Deadline: <span className="font-medium text-red-600">{showcase.deadline}</span>
                  </div>
                 <a
                    href={showcase.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 shadow-md"
                  >
                    <span>Submit</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Schedule Preview */}
        <div id="schedule" className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-xl border border-slate-200/50">
          <img src = "/riise2025/schedule.jpg" />
        </div>
      </div>
    </section>
  );
};

export default Showcases;