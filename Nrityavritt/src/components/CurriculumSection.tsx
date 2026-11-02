'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Award, CheckCircle2, Music, Sparkles } from 'lucide-react';

export default function CurriculumSection() {
  const [activeTab, setActiveTab] = useState<'prarambhik' | 'praveshika' | 'madhyama' | 'theory'>('prarambhik');

  const curricula = {
    prarambhik: {
      title: "Level 1: Prarambhik (Foundational)",
      subtitle: "1st Year • Rhythmic Initiation & Posture",
      practical: [
        "Tatkar in Teentaal (16 matras) in Vilambit (slow) and Madhya (medium) Laya",
        "Elementary Hastaks (hand movements) and coordination with footwork",
        "Basic Chakkars (spins): 5-step and 8-step technique with balance control",
        "Padhant (recitation) of basic Bols with accurate hand claps (Tali) and waves (Khali)",
        "Introduction to simple Tukras and Tihais in Teentaal",
      ],
      theory: [
        "Origin and mythology of Kathak dance from ancient temple storytellers",
        "Understanding core rhythmic vocabulary: Matra, Laya, Vibhag, Sam, Tali, Khali",
        "24 Asamyuta Hasta Mudras (Single hand gestures) from Abhinaya Darpana",
        "Significance of Ghungroos and traditional prayer ritual (Rangmanch Pranam)",
      ],
    },
    praveshika: {
      title: "Level 2: Praveshika (Intermediate)",
      subtitle: "2nd - 3rd Year • Repertoire & Taals",
      practical: [
        "Elaboration of Teentaal repertoire: Uthaan, Thaat, Aamad, Torda, and Salami",
        "Introduction to Jhaptal (10 beats) and Roopak (7 beats)",
        "Gat Nikas: Graceful gait walks portraying flute, pitcher (Matki), and veil (Ghoonghat)",
        "Spirited pirouettes (Chakkars) with single-leg spin technique",
        "Speed work (Drut Laya) in Tatkar with crisp ghungroo resonance",
      ],
      theory: [
        "Comparative study of Jaipur, Lucknow, and Banaras Gharanas",
        "Detailed study of the Navarasas (9 Classical Emotions in Indian art)",
        "13 Samyuta Hasta Mudras (Combined hand gestures) and practical usage",
        "Notation writing of bols in Gandharva Mahavidyalaya and Prayag Sangeet Sameeti examination formats",
      ],
    },
    madhyama: {
      title: "Level 3: Madhyama & Visharad (Advanced)",
      subtitle: "4th Year & Beyond • Abhinaya & Complex Layakaari",
      practical: [
        "Complex Tala structures: Dhamar (14 beats), Pancham Sawari (15 beats), Ektaal (12 beats)",
        "Intricate Layakaari mastery: Dugun (2x), Tigun (3x), Chaugun (4x), and Athgun (8x)",
        "Poetic Abhinaya: Interpretation of Thumris, Bhajans, and classical Ghazals",
        "Gat Bhav: Solo dramatic depiction of epics without vocal lyrics",
        "Tarana and fast-paced crescendo compositions for stage recitals",
      ],
      theory: [
        "Deep exploration of Bharata Muni's Natya Shastra and Abhinaya Darpana shlokas",
        "Study of Nayaka-Nayika Bhed (Hero and Heroine classifications in classical lore)",
        "The history of percussion accompaniment (Pakhawaj and Tabla dynamics)",
        "Solo stage presentation principles and choreography aesthetics",
      ],
    },
    theory: {
      title: "Classical Shlokas & Theory Curriculum",
      subtitle: "Intellectual & Spiritual Foundations",
      practical: [
        "Oral recitation of ancient Sanskrit shlokas with clear diction",
        "Anga, Pratyanga, and Upanga movement understanding for holistic body alignment",
        "Vocal recitation of Padhant while clapping the exact tala cycle with precision",
        "Stage etiquette, rangmanch aesthetics, and musical awareness",
      ],
      theory: [
        "Angikam Bhuvanam Yasya Vachikam Sarva Vangmayam (Natya invocation)",
        "Yato Hasta Stato Drishti, Yato Drishtis Tato Mana (The fundamental shloka of expression)",
        "Life and contributions of Jaipur Gharana legends and Sangeet Natak Akademi maestros",
        "Annual Gandharva Mahavidyalaya and Prayag Sangeet Sameeti exam pattern and mock viva preparation",
      ],
    },
  };

  const tabs = [
    { key: 'prarambhik', label: 'Level 1: Prarambhik' },
    { key: 'praveshika', label: 'Level 2: Praveshika' },
    { key: 'madhyama', label: 'Level 3: Madhyama / Advanced' },
    { key: 'theory', label: 'Classical Theory & Shlokas' },
  ];

  const current = curricula[activeTab];

  return (
    <section id="curriculum" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#0d0508] overflow-hidden">
      
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-rose-950/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-950/80 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-widest mb-4">
            <BookOpen className="w-3.5 h-3.5 text-amber-400" />
            <span>Structured Learning Pathway</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
            Academic & Artistic <span className="gold-text-gradient font-cinzel">Curriculum</span>
          </h2>
          <p className="text-stone-300 text-sm sm:text-base mt-4 font-sans leading-relaxed">
            Our syllabus integrates Gandharva Mahavidyalaya and Prayag Sangeet Sameeti degree certifications with rich practical stage repertoire, taking students step-by-step from foundational footwork to confident classical stage mastery.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key as any)}
              className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                activeTab === tab.key
                  ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-amber-950 shadow-lg shadow-amber-900/40 scale-105'
                  : 'bg-white/[0.04] text-stone-300 hover:text-white hover:bg-white/[0.08] border border-white/10'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content Box */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="rounded-3xl glass-card p-6 sm:p-10 border border-amber-500/30 shadow-2xl max-w-5xl mx-auto"
          >
            {/* Header in Card */}
            <div className="border-b border-amber-500/20 pb-6 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
                  {current.subtitle}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-1">
                  {current.title}
                </h3>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/30 text-xs text-amber-300">
                <Award className="w-4 h-4 text-amber-400" />
                <span>Certification Grade</span>
              </div>
            </div>

            {/* Grid of Practical and Theory */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Practical Repertoire */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-amber-300 font-serif font-bold text-lg border-b border-white/10 pb-2">
                  <Music className="w-5 h-5 text-amber-400" />
                  <span>Practical Technique (Kriyatmak)</span>
                </div>
                <ul className="space-y-3">
                  {current.practical.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-stone-300 leading-relaxed font-sans">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Theoretical Study */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-rose-300 font-serif font-bold text-lg border-b border-white/10 pb-2">
                  <BookOpen className="w-5 h-5 text-rose-400" />
                  <span>Theory & Aesthetics (Shastriya)</span>
                </div>
                <ul className="space-y-3">
                  {current.theory.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-stone-300 leading-relaxed font-sans">
                      <Sparkles className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Bottom Enrolment CTA in Curriculum */}
            <div className="mt-10 pt-6 border-t border-amber-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-stone-400 text-center sm:text-left">
                Looking to enroll in this specific level? We conduct an initial placement assessment for all experienced dancers.
              </span>
              <a
                href="#trial-form"
                className="px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-amber-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 shadow-md hover:from-amber-400 shrink-0"
              >
                Apply for Batch
              </a>
            </div>

          </motion.div>
        </AnimatePresence>

      </div>

      {/* Gold Divider */}
      <div className="absolute bottom-0 inset-x-0 gold-divider" />
    </section>
  );
}
