import React from 'react';
import { Star } from 'lucide-react';

const keynoteSpeakers = [
    {
        name: 'Mr. Anshuman Tripathi',
        accolade: "Former Member of India's National Security Advisory Board",
        imgSrc: '/riise2025/keynote_speakers/kn-anshuman-tripathi.png',
    },
    {
        name: 'Mr. Ravindran Ramamurthy',
        accolade: 'Electrical Engineer, 40+ years of global experience in DCS, software engineering, identity management, and biometric solutions across Siemens, HCL, and major banks and airlines.',
        imgSrc: '/riise2025/keynote_speakers/kn-ravindran-ramamurthy.png',
    },
];

type Speaker = { name: string; accolade?: string; imgSrc: string };

const KeynoteSpeakers: React.FC = () => {
    return (
        <section id="keynote-speakers" className="py-16 bg-slate-50 relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-serif font-bold text-slate-800 mb-6">Keynote Speakers</h2>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Hear from the visionaries shaping the future of technology and society.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2">
                    {keynoteSpeakers.map((speaker: Speaker, index: number) => (
                        <article
                            key={index}
                            className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300"
                            aria-labelledby={`kn-speaker-${index}-name`}
                        >
                            <div className="flex flex-col md:flex-row items-center md:items-start p-6 gap-6">
                                <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden bg-gray-50 flex-shrink-0 flex items-center justify-center">
                                    <img
                                        src={speaker.imgSrc}
                                        alt={speaker.name + " photo"}
                                        loading="lazy"
                                        decoding="async"
                                        className="max-w-full max-h-full object-contain"
                                        onError={(e) => {
                                            const t = e.currentTarget as HTMLImageElement;
                                            if (!t.dataset.fallback) {
                                                t.dataset.fallback = 'true';
                                                t.src = 'https://placehold.co/400x400/efefef/666666/png?text=No+Image';
                                            }
                                        }}
                                    />
                                </div>

                                <div className="flex-1 min-w-0">
                                    <h3 id={`kn-speaker-${index}-name`} className="text-xl font-semibold text-slate-800 font-serif">
                                        {speaker.name}
                                    </h3>

                                    {speaker.accolade && (
                                        <div className="mt-3 flex items-start text-slate-600">
                                            <div className="flex-shrink-0 mt-1">
                                                <Star className="w-5 h-5 text-amber-500" />
                                            </div>

                                            <p className="ml-3 text-sm italic leading-tight whitespace-normal break-words">
                                                {speaker.accolade}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default KeynoteSpeakers;