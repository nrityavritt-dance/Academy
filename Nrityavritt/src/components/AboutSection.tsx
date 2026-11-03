'use client';

import { motion } from 'framer-motion';
import { Sparkles, Compass, Shield, Feather, Music2, BookOpen } from 'lucide-react';

export default function AboutSection() {
  const pillars = [
    {
      sanskrit: "नृत्त • NRITTA",
      english: "Pure Rhythm & Technique",
      desc: "Abstract, geometric body movements, lightning-fast chakkars (spins), and crisp footwork (tatkar) synchronized to classical Taals like Teentaal and Jhaptal.",
      icon: Sparkles,
      color: "from-amber-500/20 to-amber-900/10",
      accent: "text-amber-400",
    },
    {
      sanskrit: "नृत्य • NRITYA",
      english: "Expression & Abhinaya",
      desc: "Evocative storytelling through facial expressions (Bhava & Rasa), hand gestures (Hasta Mudras), and expressive portrayal of Thumris, Bhajans, and classical poetry.",
      icon: Feather,
      color: "from-rose-500/20 to-rose-900/10",
      accent: "text-rose-400",
    },
    {
      sanskrit: "नाट्य • NATYA",
      english: "Dramatic Portrayal",
      desc: "The theatrical narrative art bringing mythological, celestial, and human stories to life through stage presence, dramatic timing, and ensemble synergy.",
      icon: Music2,
      color: "from-purple-500/20 to-purple-900/10",
      accent: "text-purple-400",
    },
  ];

  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#0c0507] overflow-hidden mandala-bg">
      
      {/* Ambient background glows */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-rose-950/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-950/70 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-widest mb-4">
            <Compass className="w-3.5 h-3.5 text-amber-400" />
            <span>The Sacred Art of Kathak</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
            The Soul of <span className="gold-text-gradient font-cinzel">Nrityavritt</span>
          </h2>
          <p className="text-stone-300 text-sm sm:text-base mt-4 font-sans leading-relaxed">
            &lsquo;Nrityavritt&rsquo; translates to the perpetual cycle of dance and storytelling. Founded in New Delhi, our academy is committed to cultivating artists who embody technical brilliance and deep spiritual sensitivity.
          </p>
        </div>

        {/* Story & Philosophy Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="p-8 rounded-3xl glass-card border border-amber-500/20">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-4">
                Preserving the Purity of Jaipur Gharana
              </h3>
              <p className="text-stone-300 text-sm sm:text-base leading-relaxed font-sans mb-4">
                Originating in the temples and princely courts of Rajasthan, the <strong className="text-amber-300">Jaipur Gharana</strong> is renowned across the classical world for its technical virtuosity, formidable speed, complex rhythmic variations (<em>Layakaari</em>), and spirited footwork executed with ankle-bells (<em>Ghungroos</em>).
              </p>
              <p className="text-stone-300 text-sm sm:text-base leading-relaxed font-sans mb-6">
                Under the guidance of <strong className="text-white">Guru Namita Dwivedi</strong>, students not only master the physical dexterity of the dance but also study the oral traditions of <em>Padhant</em> (reciting rhythmic syllables), Tabla accompaniment, and the aesthetics codified in the ancient treatise <em>Natya Shastra</em>.
              </p>

              {/* Certification Callout */}
              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-start gap-3">
                <BookOpen className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif font-bold text-amber-200 text-sm">
                    Affiliated Syllabi & Examinations
                  </h4>
                  <p className="text-xs text-stone-300 mt-0.5 leading-relaxed">
                    Nrityavritt prepares students for the accredited annual examination syllabi of <strong>Akhil Bharatiya Gandharva Mahavidyalaya Mandal</strong> and <strong>Prayag Sangeet Samiti</strong>, awarding nationally recognized diplomas and certificates from foundational to advanced degrees.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-2xl glass-card border border-amber-500/20">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400">Our Vision</span>
              <h4 className="font-serif text-xl font-bold text-white mt-1 mb-2">Artistry For Every Generation</h4>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                Whether a 5-year-old taking their very first rhythmic steps or a working professional discovering balance and peace through weekend sessions, Nrityavritt embraces every student with warmth, structure, and respect.
              </p>
            </div>

            <div className="p-6 rounded-2xl glass-card border border-amber-500/20">
              <span className="text-xs font-bold uppercase tracking-widest text-rose-400">Guru-Shishya Parampara</span>
              <h4 className="font-serif text-xl font-bold text-white mt-1 mb-2">Sacred Tradition, Modern Guidance</h4>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                We bridge classical reverence with an encouraging, supportive learning atmosphere where discipline is fostered through love for the art form, not intimidation.
              </p>
            </div>
          </div>

        </div>

        {/* The Triad: Nritta, Nritya, Natya */}
        <div className="mb-8">
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400">Foundational Pillars</span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-1">
              The Three Elements of Classical Mastery
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div
                  key={idx}
                  className="rounded-2xl p-6 glass-card glass-card-hover border border-amber-500/20 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center mb-4">
                      <Icon className={`w-6 h-6 ${p.accent}`} />
                    </div>
                    <span className="font-devanagari text-base font-bold text-amber-300 block mb-1">
                      {p.sanskrit}
                    </span>
                    <h4 className="font-serif text-lg font-bold text-white mb-3">
                      {p.english}
                    </h4>
                    <p className="text-xs text-stone-300 leading-relaxed font-sans">
                      {p.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* Gold Divider */}
      <div className="absolute bottom-0 inset-x-0 gold-divider" />
    </section>
  );
}
