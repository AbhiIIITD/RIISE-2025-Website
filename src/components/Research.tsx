import React from 'react';
import { Brain, Database, Cpu, Network, ArrowRight } from 'lucide-react';

const Research: React.FC = () => {
  const researchAreas = [
    {
      icon: Brain,
      title: "Neural Networks & Deep Learning",
      description: "Advanced architectures for computer vision, natural language processing, and reinforcement learning applications.",
      publications: 42,
      gradient: "from-blue-600 to-blue-800"
    },
    {
      icon: Database,
      title: "Data Science & Analytics",
      description: "Large-scale data processing, predictive modeling, and statistical analysis for scientific research.",
      publications: 38,
      gradient: "from-emerald-600 to-emerald-800"
    },
    {
      icon: Cpu,
      title: "Computational Intelligence",
      description: "Evolutionary algorithms, swarm intelligence, and bio-inspired computing for optimization problems.",
      publications: 29,
      gradient: "from-purple-600 to-purple-800"
    },
    {
      icon: Network,
      title: "Distributed AI Systems",
      description: "Federated learning, edge computing, and distributed machine learning across multiple devices.",
      publications: 31,
      gradient: "from-cyan-600 to-cyan-800"
    }
  ];

  return (
    <section id="research" className="py-20 lg:py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-slate-800 mb-6">
            Research Excellence
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Our interdisciplinary research spans the full spectrum of artificial intelligence, 
            from theoretical foundations to practical applications that transform industries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {researchAreas.map((area, index) => {
            const IconComponent = area.icon;
            return (
              <div 
                key={index}
                className="group bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-slate-200/50"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${area.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-serif font-semibold text-slate-800 mb-4 group-hover:text-blue-600 transition-colors">
                  {area.title}
                </h3>
                
                <p className="text-slate-600 leading-relaxed mb-6">
                  {area.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="text-sm text-slate-500">
                    <span className="font-medium text-blue-600">{area.publications}</span> publications
                  </div>
                  <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center space-x-2 group-hover:translate-x-2 transition-transform">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Research Impact */}
        <div className="bg-gradient-to-r from-blue-600 to-emerald-600 rounded-3xl p-8 lg:p-12 text-white text-center">
          <h3 className="text-3xl lg:text-4xl font-serif font-bold mb-6">
            Research Impact & Recognition
          </h3>
          <div className="grid sm:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold mb-2">Top 5%</div>
              <div className="text-blue-100">Global University Rankings</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">$8.5M</div>
              <div className="text-blue-100">Annual Research Funding</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">25+</div>
              <div className="text-blue-100">Industry Partnerships</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;