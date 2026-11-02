'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, RotateCcw, Sparkles, Volume2, Music2 } from 'lucide-react';

export default function TaalVisualizer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentMatra, setCurrentMatra] = useState<number>(0);
  const [tempo, setTempo] = useState<number>(90); // BPM

  // 16 beats of Teentaal with Vibhag, Bol, and Notation (Sam X, Tali 2, Khali 0, Tali 3)
  const teentaalBeats = [
    { matra: 1, bol: 'धा (Dha)', sign: 'X (सम / Sam)', vibhag: 1, isSam: true },
    { matra: 2, bol: 'धिं (Dhin)', sign: '', vibhag: 1, isSam: false },
    { matra: 3, bol: 'धिं (Dhin)', sign: '', vibhag: 1, isSam: false },
    { matra: 4, bol: 'धा (Dha)', sign: '', vibhag: 1, isSam: false },
    { matra: 5, bol: 'धा (Dha)', sign: '२ (ताली / Tali)', vibhag: 2, isSam: false },
    { matra: 6, bol: 'धिं (Dhin)', sign: '', vibhag: 2, isSam: false },
    { matra: 7, bol: 'धिं (Dhin)', sign: '', vibhag: 2, isSam: false },
    { matra: 8, bol: 'धा (Dha)', sign: '', vibhag: 2, isSam: false },
    { matra: 9, bol: 'धा (Dha)', sign: '० (खाली / Khali)', vibhag: 3, isSam: false },
    { matra: 10, bol: 'तिं (Tin)', sign: '', vibhag: 3, isSam: false },
    { matra: 11, bol: 'तिं (Tin)', sign: '', vibhag: 3, isSam: false },
    { matra: 12, bol: 'ता (Ta)', sign: '', vibhag: 3, isSam: false },
    { matra: 13, bol: 'ता (Ta)', sign: '३ (ताली / Tali)', vibhag: 4, isSam: false },
    { matra: 14, bol: 'धिं (Dhin)', sign: '', vibhag: 4, isSam: false },
    { matra: 15, bol: 'धिं (Dhin)', sign: '', vibhag: 4, isSam: false },
    { matra: 16, bol: 'धा (Dha)', sign: '', vibhag: 4, isSam: false },
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isPlaying) {
      const intervalMs = (60 / tempo) * 1000;
      interval = setInterval(() => {
        setCurrentMatra((prev) => (prev + 1) % 16);
      }, intervalMs);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPlaying, tempo]);

  return (
    <section id="taal" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0305] overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-950/80 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-widest mb-4">
            <Music2 className="w-3.5 h-3.5 text-amber-400" />
            <span>Interactive Classical Metronome</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
            Experience <span className="gold-text-gradient font-cinzel">Teentaal (तीनताल)</span>
          </h2>
          <p className="text-stone-300 text-xs sm:text-sm mt-3 font-sans leading-relaxed">
            Teentaal is the king of North Indian rhythmic cycles—16 beats divided into 4 equal vibhags (4-4-4-4). Press play below to witness the pulse that every Kathak dancer commands through footwork (Tatkar).
          </p>
        </div>

        {/* Visualizer Card */}
        <div className="rounded-3xl glass-card p-6 sm:p-10 border border-amber-500/30 shadow-2xl">
          
          {/* Controls Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-amber-500/20">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-amber-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 hover:from-amber-400 flex items-center gap-2 shadow-lg cursor-pointer"
              >
                {isPlaying ? (
                  <>
                    <Pause className="w-4 h-4 fill-amber-950" />
                    <span>Pause Taal</span>
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 fill-amber-950" />
                    <span>Start Teentaal Cycle</span>
                  </>
                )}
              </button>

              <button
                onClick={() => {
                  setIsPlaying(false);
                  setCurrentMatra(0);
                }}
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-stone-300 border border-white/10 transition-colors"
                title="Reset to Sam (Beat 1)"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>

            {/* Current Beat Badge */}
            <div className="flex items-center gap-4">
              <div className="text-right">
                <span className="text-[10px] uppercase font-bold text-stone-400 tracking-wider block">
                  Current Beat / मात्रा
                </span>
                <span className="font-serif text-2xl font-bold text-amber-300">
                  Matra {teentaalBeats[currentMatra].matra} / 16
                </span>
              </div>
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold font-serif text-lg border ${
                teentaalBeats[currentMatra].isSam
                  ? 'bg-rose-900 border-rose-400 text-white shadow-lg shadow-rose-900/50 scale-110'
                  : 'bg-amber-500/20 border-amber-400/40 text-amber-300'
              } transition-all duration-150`}>
                {teentaalBeats[currentMatra].sign || teentaalBeats[currentMatra].matra}
              </div>
            </div>

            {/* Tempo Slider */}
            <div className="flex items-center gap-3 text-xs text-stone-300">
              <span>Laya:</span>
              <button
                onClick={() => setTempo(60)}
                className={`px-2.5 py-1 rounded-md text-[11px] font-semibold ${tempo === 60 ? 'bg-amber-500 text-amber-950' : 'bg-white/5 text-stone-300'}`}
              >
                Vilambit (60)
              </button>
              <button
                onClick={() => setTempo(90)}
                className={`px-2.5 py-1 rounded-md text-[11px] font-semibold ${tempo === 90 ? 'bg-amber-500 text-amber-950' : 'bg-white/5 text-stone-300'}`}
              >
                Madhya (90)
              </button>
              <button
                onClick={() => setTempo(130)}
                className={`px-2.5 py-1 rounded-md text-[11px] font-semibold ${tempo === 130 ? 'bg-amber-500 text-amber-950' : 'bg-white/5 text-stone-300'}`}
              >
                Drut (130)
              </button>
            </div>

          </div>

          {/* 16 Beats Grid (4 Vibhags) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 lg:grid-cols-16 gap-2">
            {teentaalBeats.map((b, idx) => {
              const isActive = currentMatra === idx;
              return (
                <div
                  key={b.matra}
                  onClick={() => setCurrentMatra(idx)}
                  className={`p-3 rounded-xl border flex flex-col items-center justify-between text-center transition-all duration-200 cursor-pointer min-h-[90px] ${
                    isActive
                      ? b.isSam
                        ? 'bg-gradient-to-b from-rose-800 to-rose-950 border-rose-400 text-white shadow-xl shadow-rose-900/50 -translate-y-1.5'
                        : 'bg-gradient-to-b from-amber-500/40 to-amber-900/60 border-amber-400 text-white shadow-lg shadow-amber-900/40 -translate-y-1'
                      : 'bg-white/[0.02] border-white/10 hover:border-amber-500/30 text-stone-400'
                  }`}
                >
                  <span className="text-[10px] font-semibold opacity-70">
                    {b.matra}
                  </span>
                  <span className={`font-devanagari text-xs sm:text-sm font-bold my-1 ${
                    isActive ? 'text-amber-200 font-extrabold' : 'text-stone-200'
                  }`}>
                    {b.bol}
                  </span>
                  <span className="text-[10px] font-bold text-amber-400">
                    {b.sign || '•'}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Vibhag Division Explanation */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center text-xs">
            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
              <span className="text-rose-400 font-bold block mb-1">Vibhag 1 (Matra 1–4)</span>
              <p className="text-stone-300 font-mono text-[11px]">Dha Dhin Dhin Dha</p>
              <span className="text-[10px] text-stone-400">Begins on Sam (X)</span>
            </div>
            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
              <span className="text-amber-400 font-bold block mb-1">Vibhag 2 (Matra 5–8)</span>
              <p className="text-stone-300 font-mono text-[11px]">Dha Dhin Dhin Dha</p>
              <span className="text-[10px] text-stone-400">Tali 2 (Clap)</span>
            </div>
            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
              <span className="text-purple-400 font-bold block mb-1">Vibhag 3 (Matra 9–12)</span>
              <p className="text-stone-300 font-mono text-[11px]">Dha Tin Tin Ta</p>
              <span className="text-[10px] text-stone-400">Khali 0 (Wave)</span>
            </div>
            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
              <span className="text-amber-400 font-bold block mb-1">Vibhag 4 (Matra 13–16)</span>
              <p className="text-stone-300 font-mono text-[11px]">Ta Dhin Dhin Dha</p>
              <span className="text-[10px] text-stone-400">Tali 3 (Clap)</span>
            </div>
          </div>

        </div>

      </div>

      {/* Gold Divider */}
      <div className="absolute bottom-0 inset-x-0 gold-divider" />
    </section>
  );
}
