import React, { useState } from "react";
import { ArrowRight, ClipboardList, Rocket, Layers, Beaker, FilePlus } from "lucide-react";

const tabs = [
  { id: "poster", label: "Poster", icon: ClipboardList },
  { id: "demo", label: "Product Demo", icon: Layers },
  { id: "startup", label: "Startup Showcase", icon: Rocket },
  { id: "tank", label: "Research Shark Tank", icon: Beaker },
  { id: "interest", label: "Interest Form", icon: FilePlus },
];

const Registration: React.FC = () => {
  const [activeTab, setActiveTab] = useState("poster");

  return (
    <section id = "Register" className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-100 overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-emerald-400/20 rounded-full blur-2xl animate-bounce" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Hero / Intro */}
        <div className="bg-slate-800/60 backdrop-blur-xl border border-white/10 rounded-2xl p-8 mb-12 shadow-xl">
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <span className="bg-blue-500 text-slate-900 text-sm font-semibold px-3 py-1 rounded-full">
              RIISE 2025
            </span>
            <span className="bg-emerald-400 text-slate-900 text-sm font-semibold px-3 py-1 rounded-full">
              13 Sept • IIIT-Delhi
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Registration & Submissions
          </h1>
          <p className="text-slate-300 max-w-3xl">
            Showcase your work at IIIT-Delhi&apos;s Annual Research & Innovation Showcase. 
            Use the tabs to submit posters, demos, startup entries, or pitch for the Research Shark Tank grants.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Tabs & Panels */}
          <div className="lg:col-span-2">
            {/* Tabs */}
            <div className="flex flex-wrap gap-3 mb-6">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all ${
                      activeTab === tab.id
                        ? "bg-blue-600 text-white shadow-lg"
                        : "bg-slate-700/60 hover:bg-slate-600"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* Panels */}
            <div className="bg-slate-800/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-lg">
              {activeTab === "poster" && (
                <>
                  <h3 className="text-xl font-semibold mb-2">Submit Your Poster</h3>
                  <p className="text-slate-400 mb-4">
                    Share your research in portrait or landscape poster format. Selected posters will also feature in Flash Talks.
                  </p>
                  <ul className="space-y-2 text-slate-300 mb-4">
                    <li>Theme: <span className="px-2 py-1 bg-slate-700 rounded-full text-sm">Building in the Times of AI</span></li>
                    <li>Deadline: <strong>September 8, 2025, 11:59 PM</strong></li>
                    <li>Template: Portrait / Landscape (customisation allowed)</li>
                  </ul>
                  <a
                    href="https://riise.accubate.app/ext/form/8510/1/apply"
                    target="_blank"
                    rel="noopener"
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl font-semibold transition-all"
                  >
                    Submit Poster <ArrowRight className="w-4 h-4" />
                  </a>
                </>
              )}

              {activeTab === "demo" && (
                <>
                  <h3 className="text-xl font-semibold mb-2">Submit Your Product Demo Showcase</h3>
                  <p className="text-slate-400 mb-4">
                    Present a live prototype/product in a dedicated demo zone. Great for applied research & translational projects.
                  </p>
                  <ul className="space-y-2 text-slate-300 mb-4">
                    <li>Space: Table, power, and basic furniture provided</li>
                    <li>Audience: Researchers, industry, investors, and media</li>
                  </ul>
                  <a
                    href="https://riise.accubate.app/ext/form/8345/1/apply"
                    target="_blank"
                    rel="noopener"
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl font-semibold transition-all"
                  >
                    Submit Product Demo <ArrowRight className="w-4 h-4" />
                  </a>
                </>
              )}

              {activeTab === "startup" && (
                <>
                  <h3 className="text-xl font-semibold mb-2">Submit for Startup Showcase</h3>
                  <p className="text-slate-400 mb-4">
                    Pitch your student-led, faculty-led, or incubated startup. Engage with VCs, mentors, and potential partners.
                  </p>
                  <ul className="space-y-2 text-slate-300 mb-4">
                    <li>Format: Short pitch + live/recorded demo</li>
                    <li>Focus: Deep-tech, AI, and high-impact innovations</li>
                  </ul>
                  <a
                    href="https://riise.accubate.app/ext/form/8576/1/apply"
                    target="_blank"
                    rel="noopener"
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl font-semibold transition-all"
                  >
                    Submit Startup Entry <ArrowRight className="w-4 h-4" />
                  </a>
                </>
              )}

              {activeTab === "tank" && (
                <>
                  <h3 className="text-xl font-semibold mb-2">Apply to Research Shark Tank</h3>
                  <p className="text-slate-400 mb-4">
                    Competitive pitching for seed grants (₹50,000 – ₹1.5 Lakh) in front of an expert jury—with audience voting.
                  </p>
                  <ul className="space-y-2 text-slate-300 mb-4">
                    <li>What to submit: Abstract + expected impact + quick budget</li>
                    <li>Who can apply: Students, faculty, and research teams</li>
                  </ul>
                  <a
                    href="https://riise.accubate.app/ext/form/8477/1/apply"
                    target="_blank"
                    rel="noopener"
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl font-semibold transition-all"
                  >
                    Submit to Shark Tank <ArrowRight className="w-4 h-4" />
                  </a>
                </>
              )}

              {activeTab === "interest" && (
                <>
                  <h3 className="text-xl font-semibold mb-2">Interest Form</h3>
                  <p className="text-slate-400 mb-4">
                    Still preparing your poster or demo? Tell us about your idea now and upload the final version later.
                  </p>
                  <ul className="space-y-2 text-slate-300 mb-4">
                    <li>Use for: Posters, Demos, and Startup Showcase</li>
                    <li>Helps the team plan logistics and slots</li>
                  </ul>
                  <a
                    href="https://riise.accubate.app/ext/form/8445/1/apply"
                    target="_blank"
                    rel="noopener"
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl font-semibold transition-all"
                  >
                    Submit Interest <ArrowRight className="w-4 h-4" />
                  </a>
                </>
              )}
            </div>
          </div>

          {/* Registration Info */}
          <aside className="bg-slate-800/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-lg">
            <h2 className="text-2xl font-semibold mb-3">Register for RIISE 2025</h2>
            <p className="text-slate-300 mb-4">
              Join us on <strong>13 Sept 2025</strong> at IIIT-Delhi. Open to students, faculty, researchers, industry, and ecosystem partners.
            </p>
            <a
              href="https://rzp.io/rzp/LKy3uZa8"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-slate-900 px-5 py-3 rounded-xl font-bold transition-all mb-6"
            >
              Register Now <ArrowRight className="w-4 h-4" />
            </a>
            <p className="text-slate-400 text-sm mb-4">
              <strong>Heads-up:</strong> Finalists in Posters & Demos may be invited for Flash Talks. Please keep a 3–5 min deck ready.
            </p>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li>📍 Venue: IIIT-Delhi Campus</li>
              <li>🎯 Theme: Building in the Times of AI</li>
              <li>📧 Contact: <a href="mailto:riise@iiitd.ac.in" className="text-blue-400 hover:underline">riise@iiitd.ac.in</a></li>
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Registration;