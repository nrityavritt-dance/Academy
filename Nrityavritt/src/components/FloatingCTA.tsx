'use client';

import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowUpRight, MessageCircle } from 'lucide-react';

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show after scrolling down 100px or immediately after 1s
    const handleScroll = () => {
      if (window.scrollY > 120) {
        setIsVisible(true);
      }
    };
    
    // Initial timer to show
    const timer = setTimeout(() => setIsVisible(true), 1200);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const scrollToRegistration = (e: React.MouseEvent) => {
    e.preventDefault();
    const formElement = document.getElementById('trial-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
      // Add a subtle highlight flash to draw the user's eye to the form
      formElement.classList.add('ring-2', 'ring-amber-400/80', 'transition-all');
      setTimeout(() => {
        formElement.classList.remove('ring-2', 'ring-amber-400/80');
      }, 2000);
    }
  };

  return (
    <aside
      aria-label="Floating Quick Actions"
      className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col sm:flex-row items-end sm:items-center gap-2.5 transition-all duration-500 ease-out pointer-events-auto ${
        isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95 pointer-events-none'
      }`}
    >
      {/* 1. WhatsApp Chat Floating CTA */}
      <a
        href="https://wa.me/917011335616?text=Hello%20Nrityavritt%20Academy%2C%20I%20would%20like%20to%20inquire%20about%20Kathak%20admissions%20and%20batch%20timings."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Nrityavritt Academy on WhatsApp"
        className="group relative flex items-center gap-2.5 px-4 py-2.5 sm:px-4 sm:py-3 rounded-full bg-[#128C7E] hover:bg-[#25D366] text-white font-medium text-xs sm:text-sm shadow-xl shadow-emerald-950/40 hover:shadow-emerald-500/30 border border-white/20 hover:-translate-y-1 transition-all duration-300"
      >
        {/* Pulsing online indicator */}
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-100" />
        </span>

        {/* Official WhatsApp SVG Icon */}
        <svg
          className="w-4 h-4 sm:w-4.5 sm:h-4.5 fill-current shrink-0"
          viewBox="0 0 24 24"
        >
          <path d="M12.031 2C6.495 2 2 6.495 2 12.031c0 1.97.57 3.81 1.558 5.372L2 22l4.755-1.527a9.98 9.98 0 005.276 1.503c5.536 0 10.031-4.495 10.031-10.031S17.567 2 12.031 2zm0 18.286a8.217 8.217 0 01-4.238-1.171l-.304-.18-2.82.905.905-2.753-.198-.314A8.204 8.204 0 013.745 12.03c0-4.57 3.716-8.286 8.286-8.286 4.57 0 8.286 3.716 8.286 8.286 0 4.57-3.716 8.286-8.286 8.286zm4.542-6.208c-.249-.124-1.472-.726-1.7-.809-.228-.083-.394-.124-.56.124-.166.249-.643.809-.788.975-.145.166-.29.187-.539.062-.249-.124-1.05-.387-2-1.234-.739-.659-1.238-1.473-1.383-1.722-.145-.249-.015-.383.109-.507.112-.111.249-.29.373-.435.124-.145.166-.249.249-.415.083-.166.041-.311-.021-.435-.062-.124-.56-1.349-.768-1.848-.202-.486-.408-.42-.56-.428l-.477-.008c-.166 0-.435.062-.663.311-.228.249-.871.851-.871 2.075 0 1.224.892 2.407 1.016 2.573.124.166 1.754 2.679 4.249 3.755.594.256 1.058.409 1.42.524.597.19 1.14.163 1.57.099.479-.071 1.472-.602 1.68-1.183.208-.581.208-1.079.145-1.183-.062-.104-.228-.166-.477-.29z" />
        </svg>

        <span className="font-semibold tracking-wide">WhatsApp Chat</span>
      </a>

      {/* 2. Registration Floating CTA */}
      <button
        onClick={scrollToRegistration}
        aria-label="Scroll to Admission Registration Form"
        className="group relative flex items-center gap-2 px-4 py-2.5 sm:px-5 sm:py-3 rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-rose-600 hover:from-amber-300 hover:to-rose-500 text-stone-950 font-bold text-xs sm:text-sm shadow-xl shadow-amber-900/40 hover:shadow-amber-500/30 border border-amber-200/40 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
      >
        <Sparkles className="w-4 h-4 text-stone-950 animate-spin-slow shrink-0" />
        <span className="tracking-wide">Register for Classes</span>
        <ArrowUpRight className="w-3.5 h-3.5 text-stone-950 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />

        {/* Ambient subtle ping badge */}
        <span className="hidden md:inline-flex items-center px-1.5 py-0.5 rounded-full bg-stone-950/80 text-[10px] text-amber-300 font-bold uppercase tracking-wider ml-0.5">
          Open
        </span>
      </button>
    </aside>
  );
}
