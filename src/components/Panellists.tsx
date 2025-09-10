import React from 'react';

const panels = [
  {
    title: "AI and Cybersecurity: Defending Innovation in the Digital Era",
    moderator: {
      name: 'Dr. Sambuddho Chakravarty',
      title: 'Head (CSE) & Associate Professor (CSE), IIIT-Delhi',
      imgSrc: '/riise2025/p1-sambuddho-chakravarty.png',
    },
    panellists: [
      {
        name: 'Mr. B Shankar Jaiswal',
        title: 'Joint Commissioner of Delhi Police',
        imgSrc: '/riise2025/p1-b-shankar-jaiswal.png',
      },
      {
        name: 'Mr. Saikat Datta',
        title: 'CEO & Co-Founder, DeepStrat Strategic Adviser to NullCona',
        imgSrc: '/riise2025/p1-saikat-datta.png',
      },
      {
        name: 'Mr. Surendra Pal Singh',
        title: 'Founder, Tranquility Cybersecurity',
        imgSrc: '/riise2025/p1-surendra-pal-singh.png',
      },
    ],
  },
  {
    title: "AI and Defence Tech: Securing Tomorrow's Frontlines",
    moderator: {
      name: 'To Be Announced',
      title: 'Moderator',
      imgSrc: 'https://placehold.co/800x400/000000/FFFFFF/png?text=TBA',
    },
    panellists: [
      {
        name: 'Mr. Praveen Pandey',
        title: 'Director & CEO of Psitech Consultancy Services',
        imgSrc: '/riise2025/p2-praveen-pandey.png',
      },
      {
        name: 'Group Captain (Dr.) Rajiv Kumar Narang',
        title: 'Vayu Sena Medal (Retd.), Senior Fellow at MP-IDSA, a former IAF helicopter pilot, flight safety expert, and author specializing in aviation, drones, and defence strategy.',
        imgSrc: '/riise2025/p2-rajiv-kumar-narang.png',
      },
      {
        name: 'To Be Announced',
        title: 'Panellist',
        imgSrc: 'https://placehold.co/800x400/000000/FFFFFF/png?text=TBA',
      },
    ],
  },
  {
    title: "The Next Decade: Building a Society Ready for AI-First Futures",
    moderator: {
      name: 'Tilak Mishra',
      title: 'Wharton alum, coach, mentor, entrepreneur, and seasoned M&A professional',
      imgSrc: '/riise2025/p3-tilak-mishra.png',
    },
    panellists: [
      {
        name: 'Ms. Anuka Kumar',
        title: 'GM Public Affairs @ OPPO, Ex-IBM',
        imgSrc: '/riise2025/p3-anuka-kumar.png',
      },
      {
        name: 'Ms. Maya Sherman',
        title: 'Senior AI researcher, Ethicist, Policy Expert, Innovation Israel',
        imgSrc: '/riise2025/p3-maya-sherman.png',
      },
      {
        name: 'Ms. Neha Mishra',
        title: 'Panellist',
        imgSrc: '/riise2025/p3-neha-mishra.png',
      },
    ],
  },
];

type Person = { name: string; title: string; imgSrc: string };

const PanellistCard: React.FC<{ person: Person; }> = ({ person }) => (
  <div className="bg-white rounded-xl shadow-md overflow-hidden transform hover:-translate-y-1 transition-transform duration-300 group">
    {/* Image area: use flex center + object-contain so the whole image fits without vertical cropping */}
    <div className="relative h-40 md:h-44 lg:h-48 flex items-center justify-center bg-gray-50">
      <img
        src={person.imgSrc}
        alt={person.name}
        loading="lazy"
        decoding="async"
        onError={(e) => {
          // small fallback to placeholder if image fails
          const target = e.currentTarget as HTMLImageElement;
          if (!target.dataset.fallback) {
            target.dataset.fallback = 'true';
            target.src = 'https://placehold.co/800x400/efefef/666666/png?text=No+Image';
          }
        }}
        className="max-h-full max-w-full object-contain"
      />
      {/* <div
        className={`absolute top-2 right-2 px-2 py-1 text-xs font-bold text-white rounded-full ${role === 'Moderator' ? 'bg-blue-600' : 'bg-emerald-600'}`}
      >
        {role}
      </div> */}
    </div>

    <div className="p-4">
      <h4 className="text-lg font-bold text-slate-800">{person.name}</h4>
      <p className="text-sm text-slate-600">{person.title}</p>
    </div>
  </div>
);

const Panellists: React.FC = () => {
  return (
    <section id="panellists" className="py-20 lg:py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-slate-800 mb-6">Panel Discussions</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Engage with experts debating the most pressing topics in AI and technology.
          </p>
        </div>

        <div className="space-y-20">
          {panels.map((panel, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl lg:text-3xl font-serif font-bold text-slate-800 mb-2 text-center">{panel.title}</h3>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-emerald-600 mx-auto mb-8"></div>

              <div className="mb-8 text-center">
                <h4 className="text-xl font-semibold text-slate-700 mb-4">Panellists</h4>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {panel.panellists.map((panellist, pIndex) => (
                    <PanellistCard key={pIndex} person={panellist} />
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-slate-700 mb-4 text-center">Moderator</h4>
                <div className="max-w-xs mx-auto">
                  <PanellistCard person={panel.moderator} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Panellists;
