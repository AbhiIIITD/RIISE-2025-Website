import React from "react";
import { ArrowRight, UserRound, Users } from "lucide-react";

const Registration: React.FC = () => {
  return (
    <section
      id="Register"
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-100 overflow-hidden"
    >
      {/* Decorative blobs */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-emerald-400/20 rounded-full blur-2xl animate-bounce" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Participant Registration */}
          <div className="bg-slate-800/60 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-xl h-full transform transition hover:translate-y-[-4px]">
            {/* Tags */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <span className="bg-blue-500 text-slate-900 text-sm font-semibold px-3 py-1 rounded-full">
                RIISE 2025
              </span>
              <span className="bg-emerald-400 text-slate-900 text-sm font-semibold px-3 py-1 rounded-full">
                13 Sept • IIIT-Delhi
              </span>
            </div>

            {/* Participant Icon */}
            <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
              <Users className="w-8 h-8 text-white" />
            </div>

            {/* Registration Info */}
            <h3 className="text-2xl font-semibold mb-3 text-center">Register as Participant</h3>
            <p className="text-slate-300 mb-4">
              Join us on <strong>13 Sept 2025</strong> at IIIT-Delhi. Open to students, faculty, researchers, industry, and ecosystem partners.
            </p>
            <div className="flex justify-center mb-6">
              <a
                href="https://rzp.io/rzp/LKy3uZa8"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-slate-900 px-5 py-3 rounded-xl font-bold transition-all"
              >
                Register Now <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <p className="text-slate-400 text-sm mb-4">
              <strong>Heads-up:</strong> Finalists in Posters & Demos may be invited for Flash Talks (3–5 min deck).
              <br />
              <strong>Perks included:</strong> Lunch, refreshments, event merchandise, and a registration kit — along with access to all demos, posters, and keynotes.  
            </p>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li>📍 Venue: IIIT-Delhi Campus</li>
              <li>🎯 Theme: Building in the Times of AI</li>
              <li>
                📧 Contact:{" "}
                <a
                  href="mailto:riise@iiitd.ac.in"
                  className="text-blue-400 hover:underline"
                >
                  riise@iiitd.ac.in
                </a>
              </li>
            </ul>
          </div>

          {/* Visitor Registration */}
          <div className="bg-slate-800/60 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-xl h-full transform transition hover:translate-y-[-4px]">
            {/* Tags */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <span className="bg-blue-500 text-slate-900 text-sm font-semibold px-3 py-1 rounded-full">
                Visitors Welcome
              </span>
              <span className="bg-emerald-400 text-slate-900 text-sm font-semibold px-3 py-1 rounded-full">
                Free Entry
              </span>
            </div>

            {/* Visitor Icon */}
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-600 to-cyan-800 rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
              <UserRound className="w-8 h-8 text-white" />
            </div>

            {/* Visitor Registration Info */}
            <h3 className="text-2xl font-semibold mb-3 text-center">Join us as Visitor</h3>
            <p className="text-slate-300 mb-4">
              Experience cutting-edge research and innovation at RIISE 2025. Connect with researchers, industry experts, and fellow tech enthusiasts in an inspiring environment.
            </p>
            <div className="flex justify-center mb-6">
              <a
                href="https://forms.gle/SK9bztyd4NqzqPSFA"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl transition-all"
              >
                Register as Visitor <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <p className="text-slate-400 text-sm mb-4">
              <strong>Note:</strong> Visitors will have access to demos, posters, and keynotes with light refreshments.  
              Full perks such as lunch, merchandise, and registration kits are reserved for paid participants.
            </p>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li>🕒 Timings: 9:30 AM - 5:30 PM</li>
              <li>💼 Perfect for: Students, professionals, technology enthusiasts</li>
              <li>🎟️ Entry: Free with registration</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;
