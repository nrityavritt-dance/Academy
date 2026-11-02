'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Sparkles } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden pt-4 pb-7 sm:pt-6 sm:pb-9 px-4 sm:px-6 lg:px-8 mandala-bg">
      
      {/* Ambient Royal Crimson & Gold Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-gradient-to-tr from-rose-950/40 via-amber-900/20 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-rose-900/20 rounded-full blur-3xl pointer-events-none" />

      {/* Decorative Traditional Mandala Lines in Corner */}
      <div className="absolute top-0 left-0 w-64 h-64 border-l border-t border-amber-500/20 rounded-tl-3xl pointer-events-none opacity-40 m-6 hidden md:block" />
      <div className="absolute bottom-0 right-0 w-64 h-64 border-r border-b border-amber-500/20 rounded-br-3xl pointer-events-none opacity-40 m-6 hidden md:block" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Main 2-Column Grid: Left (Title & Bio), Right (Picture) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start"
          >
            {/* Top Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-950/80 border border-amber-500/40 text-amber-200 text-xs font-semibold uppercase tracking-wider mb-3 sm:mb-4 shadow-inner">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
              <span>Jaipur Gharana Kathak • New Delhi</span>
            </div>

            {/* Main Sanskrit & English Title */}
            <h1 className="font-cinzel tracking-tight leading-[1.15] mb-3 sm:mb-4">
              <span className="block font-bold text-3xl sm:text-5xl xl:text-6xl text-white">
                Nrityavritt
              </span>
              <span className="block font-semibold text-lg sm:text-2xl xl:text-3xl gold-text-gradient mt-1 sm:mt-2 tracking-wide">
                Stories in Motion
              </span>
            </h1>

            {/* Complete Detail of Academy */}
            <div className="space-y-2.5 max-w-2xl text-stone-300 text-xs sm:text-sm leading-relaxed font-sans">
              <p>
                <strong className="text-amber-300 font-serif text-sm sm:text-base">Nrityavritt:</strong> Established in 2019 with a vision to promote Indian classical dance and nurture young minds with the beauty of Kathak.
              </p>
              <p>
                Founded by <strong className="text-white">Ms. Namita Dwivedi</strong>, a dedicated Kathak practitioner, performer, and teacher.
              </p>
              <p>
                Nrityavritt has performed at various prestigious cultural events, including the Palash Festival organized by DDA, Narthaki at Muktadhara Auditorium, Teej Mahotsav organized by the Rajasthani Academy, Cultural Dance Evening at Russian House, New Delhi, Footprint Film Festival at IGNCA (supported by the Ministry of Culture and Ministry of Information and Broadcasting), National Authors&apos; Day at India International Centre, Shilp Samagam Mela at Dilli Haat, INA (supported by the Ministry of Social Justice and Empowerment), Akshar Mahotsav at the National Museum, New Delhi (supported by the Ministry of Culture), Samvidhaan Mahotsav 2.0 organized by COHAS, and many more.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Hero Showcase Visual (Picture) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="lg:col-span-5 relative flex justify-center mt-3 lg:mt-0"
          >
            {/* Framed Classical Card */}
            <div className="relative w-full max-w-md">
              
              {/* Outer Decorative Ring */}
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-amber-600/30 via-rose-700/20 to-amber-400/30 blur-lg opacity-70 animate-pulse-slow" />
              
              <div className="relative rounded-2xl overflow-hidden glass-card border-2 border-amber-500/40 shadow-2xl">
                
                {/* Main Visual Image (Intro First top image) */}
                <div className="relative aspect-[4/5] w-full overflow-hidden group">
                  <Image
                    src="/images/intro_hero_main.jpeg"
                    alt="Guru Namita Dwivedi - Nrityavritt Kathak Academy"
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    priority
                  />

                  {/* Gradient Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d0608] via-transparent to-transparent opacity-90" />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-transparent" />

                  {/* Top Badge */}
                  <div className="absolute top-4 left-4">
                    <div className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-amber-500/30 text-[11px] font-medium text-amber-200 flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3 text-amber-400" />
                      <span>Founder & Choreographer</span>
                    </div>
                  </div>

                  {/* Bottom Caption Pill */}
                  <div className="absolute bottom-4 inset-x-4 p-3.5 rounded-xl bg-black/75 backdrop-blur-md border border-amber-500/30">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-serif text-base sm:text-lg font-bold text-white leading-tight">
                          Namita Dwivedi
                        </h3>
                        <p className="text-xs text-amber-300/90 font-medium">
                          Alankar Poorna • Jaipur Gharana
                        </p>
                      </div>
                      <a
                        href="https://www.instagram.com/namitakathak_"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 rounded-lg bg-rose-900/60 hover:bg-rose-800 text-rose-200 text-xs font-semibold transition-colors border border-rose-500/30"
                      >
                        @namitakathak_
                      </a>
                    </div>
                    <p className="text-[11px] text-stone-300 mt-1.5 italic font-serif leading-relaxed line-clamp-2">
                      &ldquo;Dedicated practitioner, performer & educator bringing a classical approach to the sacred art of Kathak.&rdquo;
                    </p>
                  </div>
                </div>

              </div>

            </div>
          </motion.div>

        </div>

        {/* Boxed Details BELOW the Picture: Compact, Responsive, Center-aligned Chunks */}
        <div className="mt-5 sm:mt-7 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 w-full max-w-4xl mx-auto px-1">
          <div className="px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl bg-white/[0.04] border border-amber-500/30 backdrop-blur-sm shadow-md flex items-center justify-center text-center hover:border-amber-400/50 transition-colors">
            <h4 className="text-white text-xs sm:text-sm font-serif font-bold leading-snug text-center">
              Certified Courses
            </h4>
          </div>

          <div className="px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl bg-white/[0.04] border border-amber-500/30 backdrop-blur-sm shadow-md flex items-center justify-center text-center hover:border-amber-400/50 transition-colors">
            <h4 className="text-white text-xs sm:text-sm font-serif font-bold leading-snug text-center">
              Performance Opportunities
            </h4>
          </div>

          <div className="px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl bg-white/[0.04] border border-amber-500/30 backdrop-blur-sm shadow-md flex items-center justify-center text-center hover:border-amber-400/50 transition-colors">
            <h4 className="text-white text-xs sm:text-sm font-serif font-bold leading-snug text-center">
              Weekday & Weekend Batches Available
            </h4>
          </div>
        </div>

      </div>

      {/* Elegant Bottom Gold Divider */}
      <div className="absolute bottom-0 inset-x-0 gold-divider" />
    </section>
  );
}
