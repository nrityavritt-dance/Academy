'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Instagram, Youtube, Mail, Phone, MapPin, Heart, Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#080204] text-stone-300 border-t border-amber-500/30 pt-8 pb-8 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      
      {/* Ambient background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-rose-950/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-6 border-b border-white/10">
          
          {/* Brand & Overview */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-amber-500/60 shadow-lg shrink-0">
                <Image
                  src="/images/academy_logo.jpg"
                  alt="Nrityavritt Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-devanagari text-2xl text-amber-400">
                    नृत्यवृत्त
                  </span>
                  <span className="font-cinzel text-lg font-bold text-white tracking-wider">
                    NRITYAVRITT
                  </span>
                </div>
                <p className="text-[10px] tracking-[0.2em] uppercase text-amber-200/60 font-sans">
                  Academy of Classical Kathak Dance
                </p>
              </div>
            </div>

            <p className="text-xs text-stone-400 leading-relaxed font-sans max-w-sm">
              Founded by <strong>Namita Dwivedi</strong> (Alankar Poorna, Gandharva Mahavidyalaya), Nrityavritt is dedicated to the preservation and teaching of Jaipur Gharana Kathak with structured classical excellence.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.facebook.com/share/18Jd9s24cC/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Page"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-blue-900/60 border border-white/10 flex items-center justify-center text-stone-300 hover:text-blue-300 transition-colors"
                title="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/nrityavritt"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Academy"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-rose-900/60 border border-white/10 flex items-center justify-center text-stone-300 hover:text-rose-300 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/namitakathak_"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Founder"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-rose-900/60 border border-white/10 flex items-center justify-center text-stone-300 hover:text-rose-300 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.youtube.com/@NrityaVritt"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube Channel"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-red-950/60 border border-white/10 flex items-center justify-center text-stone-300 hover:text-red-400 transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif font-bold text-white text-sm tracking-wider uppercase border-b border-amber-500/30 pb-2">
              Academy
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#founder" className="hover:text-amber-300 transition-colors">Artistic Director: Namita Dwivedi</a>
              </li>
              <li>
                <a href="#admissions" className="hover:text-amber-300 transition-colors">Training Certifications</a>
              </li>
              <li>
                <a href="#instagram-reels" className="hover:text-amber-300 transition-colors">Live Reels & Showcases</a>
              </li>
              <li>
                <a href="#trial-form" className="hover:text-amber-300 transition-colors">Admission Registration</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-300 transition-colors">Studio Location & Contact</a>
              </li>
            </ul>
          </div>

          {/* Certifications */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif font-bold text-white text-sm tracking-wider uppercase border-b border-amber-500/30 pb-2">
              Certifications
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#admissions" className="hover:text-amber-300 transition-colors">
                  Gandharva Mahavidyalaya
                </a>
              </li>
              <li>
                <a href="#admissions" className="hover:text-amber-300 transition-colors">
                  Prayag Sangeet Sameeti
                </a>
              </li>
              <li>
                <a href="#admissions" className="hover:text-amber-300 transition-colors">
                  Diploma & Degree Exam Syllabus
                </a>
              </li>
              <li>
                <a href="#admissions" className="hover:text-amber-300 transition-colors">
                  Prarambhik to Visharad & Prabhakar
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif font-bold text-white text-sm tracking-wider uppercase border-b border-amber-500/30 pb-2">
              Studio & Inquiries
            </h4>
            <div className="space-y-2.5 text-xs text-stone-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>D-125, 1st Floor, Balaji Bhawan, South Ganesh Nagar, Delhi - 110092</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href="mailto:nrityavritt@gmail.com" className="hover:text-amber-300 transition-colors">
                  nrityavritt@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div className="flex flex-col gap-0.5">
                  <a href="tel:7011335616" className="hover:text-amber-300 transition-colors">
                    +91 7011335616
                  </a>
                  <a href="tel:8860256229" className="hover:text-amber-300 transition-colors">
                    +91 8860256229
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#trial-form"
                className="inline-block px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-amber-950 font-bold text-xs uppercase tracking-wider transition-colors shadow-md"
              >
                Apply For Admission
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Rights Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>
            &copy; {new Date().getFullYear()} Nrityavritt Dance Academy (नृत्यवृत्त). All rights reserved.
          </p>
          <p className="flex items-center gap-1.5 text-stone-400">
            <span>Preserving Jaipur Gharana Kathak with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>in New Delhi</span>
          </p>
        </div>

      </div>

    </footer>
  );
}
