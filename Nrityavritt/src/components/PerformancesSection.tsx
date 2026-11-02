'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Sparkles, Trophy, Globe, MapPin, Instagram, ExternalLink } from 'lucide-react';

export default function PerformancesSection() {
  const events = [
    {
      title: "Russian & Indian Women Building Dialogue",
      location: "New Delhi Diplomatic Showcase",
      badge: "International Stage",
      desc: "Ensemble representation exhibiting classical Indian cultural heritage and bilateral artistic exchange.",
      image: "/images/performance_students.jpg",
      date: "Cultural Conclave",
    },
    {
      title: "Nritya Ranjani Edition - 2",
      location: "National Classical Dance Festival",
      badge: "National Festival",
      desc: "Celebrated stage showcase organized by Nrityalaya, featuring pure Jaipur Gharana compositions and intricate tihais.",
      image: "/images/classical_workshop.jpg",
      date: "National Platform",
    },
    {
      title: "Andhra Pradesh Bhavan Celebration",
      location: "New Delhi",
      badge: "Cultural Honor",
      desc: "Special recital by Nrityavritt disciples organized in collaboration with Adi Leela Foundation.",
      image: "/images/stories_in_motion_poster.jpg",
      date: "Special Recital",
    },
  ];

  return (
    <section id="performances" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#0b0406] overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-rose-950/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-950/80 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-widest mb-4">
            <Trophy className="w-3.5 h-3.5 text-amber-400" />
            <span>Stages & National Showcases</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
            Stage Performances & <span className="gold-text-gradient font-cinzel">Artistic Showcases</span>
          </h2>
          <p className="text-stone-300 text-sm sm:text-base mt-4 font-sans leading-relaxed">
            At Nrityavritt, classroom discipline culminates in radiant stage confidence. Our disciples regularly grace renowned festivals, national commemorations, and prestigious cultural assemblies.
          </p>
        </div>

        {/* Featured Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {events.map((ev, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="rounded-2xl overflow-hidden glass-card glass-card-hover border border-amber-500/20 flex flex-col justify-between group"
            >
              <div>
                {/* Image */}
                <div className="relative aspect-[16/11] w-full overflow-hidden">
                  <Image
                    src={ev.image}
                    alt={ev.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e0508] via-transparent to-transparent opacity-80" />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-rose-950/90 text-amber-300 border border-amber-500/30 backdrop-blur-sm">
                      {ev.badge}
                    </span>
                  </div>
                </div>

                {/* Text Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-stone-400 text-xs mb-2">
                    <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>{ev.location}</span>
                  </div>
                  <h3 className="font-serif font-bold text-white text-xl leading-snug mb-3 group-hover:text-amber-300 transition-colors">
                    {ev.title}
                  </h3>
                  <p className="text-xs text-stone-300 leading-relaxed font-sans">
                    {ev.desc}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-white/5 mt-4 flex items-center justify-between text-xs text-stone-400">
                <span>{ev.date}</span>
                <a
                  href="https://www.instagram.com/nrityavritt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400 hover:text-amber-300 font-semibold flex items-center gap-1 transition-colors"
                >
                  <span>Photos & Clips</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Instagram Gallery Banner */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-rose-950/50 via-amber-950/30 to-black/60 border border-amber-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-amber-500 to-rose-600 p-0.5 shrink-0 shadow-lg">
              <div className="w-full h-full bg-[#120508] rounded-[14px] flex items-center justify-center">
                <Instagram className="w-7 h-7 text-rose-400" />
              </div>
            </div>
            <div>
              <h4 className="font-serif font-bold text-white text-xl">
                Follow @nrityavritt on Instagram
              </h4>
              <p className="text-xs sm:text-sm text-stone-300 mt-1">
                Explore 95+ performance reels, student class videos, padhant recitations, and backstage moments.
              </p>
            </div>
          </div>

          <a
            href="https://www.instagram.com/nrityavritt"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-amber-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 hover:from-amber-400 shadow-xl transition-all shrink-0 flex items-center gap-2"
          >
            <span>Visit Instagram Profile</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>

      {/* Gold Divider */}
      <div className="absolute bottom-0 inset-x-0 gold-divider" />
    </section>
  );
}
