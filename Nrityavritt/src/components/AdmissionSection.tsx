'use client';

import { Award, Sparkles, CheckCircle2 } from 'lucide-react';

export default function AdmissionSection() {
  const certifications = [
    {
      name: "Gandharva Mahavidyalaya",
      board: "Akhil Bharatiya Gandharva Mahavidyalaya Mandal",
      levels: "Prarambhik • Praveshika • Madhyama • Visharad • Alankar",
      desc: "Nationally accredited examination syllabus offering structured classical Kathak grading, theoretical notation (padhant), and recognized stage performance diplomas.",
    },
    {
      name: "Prayag Sangeet Samiti",
      board: "Prayag Sangeet Samiti, Prayagraj",
      levels: "Junior Diploma • Senior Diploma • Sangeet Prabhakar • Praveen",
      desc: "Eminent classical performing arts institution conducting certified annual examinations and awarding nationally recognized classical dance diplomas and degrees.",
    },
  ];

  return (
    <section id="admissions" className="relative py-7 sm:py-9 px-4 sm:px-6 lg:px-8 bg-[#0b0406] overflow-hidden">
      
      {/* Background Accent Gradients */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-rose-900/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-950/80 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Accredited Classical Examinations</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
            Training <span className="gold-text-gradient font-cinzel">Certifications</span>
          </h2>
          <p className="text-stone-300 text-xs sm:text-sm mt-3 font-sans leading-relaxed max-w-2xl mx-auto">
            Nrityavritt prepares students for certified examinations and degree tracks under India&apos;s two premier classical performing arts boards.
          </p>
        </div>

        {/* 2 Certified Boards Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, i) => (
            <div
              key={i}
              className="rounded-3xl p-6 sm:p-8 glass-card border border-amber-500/30 flex flex-col justify-between relative shadow-xl hover:border-amber-400/60 transition-all duration-300 group"
            >
              <div>
                {/* Header Badge & Icon */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider bg-amber-500/15 text-amber-300 border border-amber-500/30">
                    Recognized Examination Board
                  </span>
                  <div className="w-10 h-10 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0 group-hover:scale-105 transition-transform">
                    <Award className="w-5 h-5" />
                  </div>
                </div>

                {/* Certification Name */}
                <h3 className="font-serif font-bold text-white text-2xl sm:text-3xl leading-snug mb-1 group-hover:text-amber-200 transition-colors">
                  {cert.name}
                </h3>
                <p className="text-xs sm:text-sm text-amber-300/90 font-medium mb-4">
                  {cert.board}
                </p>

                {/* Levels & Syllabus */}
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 text-xs text-amber-200 font-semibold mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>{cert.levels}</span>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-sans">
                  {cert.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Gold Divider */}
      <div className="absolute bottom-0 inset-x-0 gold-divider" />
    </section>
  );
}
