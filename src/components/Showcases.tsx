import React from 'react';
import { FileText, Package, Rocket, Lightbulb, Eye } from 'lucide-react';

const Showcases: React.FC = () => {
  const showcases = [
    {
      icon: Lightbulb,
      title: "Research Tank",
      description: "Watch researchers pitch their bold ideas to panels in a Shark Tank-style session full of energy and insights.",
      details: ["5-Minute Pitches", "Expert Feedback", "Funding Opportunities"],
      gradient: "from-cyan-600 to-cyan-800",
      bgColor: "bg-cyan-50",
      borderColor: "border-cyan-200",
    },
    {
      icon: Package,
      title: "Product Showcase",
      description: "Discover cutting-edge products and prototypes that bring research ideas into real-world impact.",
      details: ["Live Demonstrations", "Technical Insights", "User Experience"],
      gradient: "from-emerald-600 to-emerald-800",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-200",
    },
    {
      icon: Rocket,
      title: "Startup Showcase",
      description: "Meet startups and founders who are transforming their research into scalable ventures with real potential.",
      details: ["Pitch Sessions", "Business Models", "Growth Journeys"],
      gradient: "from-purple-600 to-purple-800",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
    },
    {
      icon: FileText,
      title: "Posters & Demos",
      description: "Explore innovative research findings and creative ideas through visually engaging posters and interactive demos.",
      details: ["Research Posters", "Innovation Displays", "Interactive Demos"],
      gradient: "from-blue-600 to-blue-800",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
    },
  ];

  return (
    <section id="showcases" className="py-20 lg:py-32 bg-white/50 backdrop-blur-sm relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-slate-800 mb-6">
            Witness the Showcases
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Experience groundbreaking research, cutting-edge products, and bold startup ideas — 
            all presented live at <strong>RIISE 2025</strong>. 
            Join us for an inspiring day of innovation and technology in action.
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
                
                <div className="flex items-center text-blue-700 font-medium text-sm">
                  <Eye className="w-4 h-4 mr-2" />
                  Live at RIISE 2025 on September 13, 2025
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Showcases;
