'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Sparkles, Instagram, Youtube, Phone } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Artistic Director', href: '#founder' },
    { name: 'Certifications', href: '#admissions' },
    { name: 'Live Reels', href: '#instagram-reels' },
    { name: 'Admission Form', href: '#trial-form' },
    { name: 'Location & Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Top micro banner */}
      <div className="bg-gradient-to-r from-[#340512] via-[#560e22] to-[#340512] border-b border-amber-500/20 py-1.5 px-4 text-xs text-amber-200/90 text-center flex flex-wrap items-center justify-center gap-3 relative z-50">
        <span className="inline-flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
          <strong className="font-semibold text-amber-300">Admissions Open:</strong> Weekdays & Weekend Batches Available
        </span>
        <span className="hidden md:inline text-amber-400/40">|</span>
        <div className="hidden sm:inline-flex items-center gap-2 text-stone-200">
          <span>Call:</span>
          <a href="tel:7011335616" className="text-amber-300 hover:text-white font-semibold underline">
            7011335616
          </a>
          <span>/</span>
          <a href="tel:8860256229" className="text-amber-300 hover:text-white font-semibold underline">
            8860256229
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0f0508]/95 backdrop-blur-md shadow-2xl border-b border-amber-500/20 py-2.5'
            : 'bg-[#0f0508]/80 backdrop-blur-sm py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          
          {/* Left Brand + Navigation Group */}
          <div className="flex items-center gap-8 lg:gap-10 xl:gap-14 min-w-0">
            {/* Logo & Brand */}
            <Link href="/" className="flex items-center gap-3 group shrink-0">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-amber-500/60 shadow-lg shadow-amber-900/30 group-hover:border-amber-400 transition-colors shrink-0">
                <Image
                  src="/images/academy_logo.jpg"
                  alt="Nrityavritt Logo"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="flex flex-col justify-center">
                <span className="font-cinzel text-base sm:text-lg font-bold tracking-wider text-white group-hover:text-amber-300 transition-colors leading-tight">
                  NRITYAVRITT
                </span>
                <span className="font-devanagari text-xs sm:text-sm text-amber-400 leading-tight">
                  नृत्यवृत्त
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-5 xl:gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-[11px] xl:text-xs uppercase tracking-wider font-semibold text-stone-300 hover:text-amber-300 transition-colors py-1 whitespace-nowrap"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-2 lg:gap-2.5 shrink-0">
            {/* Facebook Link */}
            <a
              href="https://www.facebook.com/share/18Jd9s24cC/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="p-1.5 lg:p-2 text-stone-400 hover:text-blue-400 transition-colors rounded-full hover:bg-blue-950/40 border border-white/5"
              title="Nrityavritt on Facebook"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>

            {/* Instagram Link */}
            <a
              href="https://www.instagram.com/nrityavritt"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="p-1.5 lg:p-2 text-stone-400 hover:text-rose-400 transition-colors rounded-full hover:bg-rose-950/40 border border-white/5"
              title="Nrityavritt on Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>

            {/* YouTube Link */}
            <a
              href="https://www.youtube.com/@NrityaVritt"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="p-1.5 lg:p-2 text-stone-400 hover:text-red-400 transition-colors rounded-full hover:bg-red-950/40 border border-white/5"
              title="Nrityavritt on YouTube"
            >
              <Youtube className="w-4 h-4" />
            </a>

            <a
              href="#trial-form"
              className="px-3.5 py-1.5 lg:px-4 lg:py-2 rounded-full text-[11px] lg:text-xs font-semibold uppercase tracking-wider text-amber-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 shadow-md transition-all duration-300 whitespace-nowrap"
            >
              Book Trial
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-stone-300 hover:text-amber-400 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="lg:hidden bg-[#120609]/98 border-b border-amber-500/30 px-6 py-5 transition-all">
            <nav className="flex flex-col gap-3.5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-xs uppercase tracking-wider text-stone-200 hover:text-amber-300 py-1 font-medium border-b border-white/5"
                >
                  {link.name}
                </a>
              ))}

              {/* Mobile Phone Numbers */}
              <div className="py-2 flex flex-col gap-1 text-xs text-stone-300 border-b border-white/5">
                <span className="text-[11px] text-stone-400">Direct Inquiries:</span>
                <div className="flex items-center gap-3">
                  <a href="tel:7011335616" className="text-amber-300 hover:text-white font-semibold">
                    📞 7011335616
                  </a>
                  <span>•</span>
                  <a href="tel:8860256229" className="text-amber-300 hover:text-white font-semibold">
                    📞 8860256229
                  </a>
                </div>
              </div>

              <div className="pt-2 flex flex-col gap-2.5">
                <a
                  href="#trial-form"
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center py-2.5 rounded-md text-xs font-semibold uppercase tracking-wider text-amber-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 shadow-lg"
                >
                  Book Free Trial Class
                </a>
                <div className="flex items-center justify-center gap-4 pt-1 text-xs text-stone-400">
                  <a
                    href="https://www.facebook.com/share/18Jd9s24cC/?mibextid=wwXIfr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 hover:text-blue-400"
                    title="Facebook"
                  >
                    <svg className="w-3.5 h-3.5 fill-current text-blue-400" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    <span>Facebook</span>
                  </a>
                  <span>•</span>
                  <a
                    href="https://www.instagram.com/nrityavritt"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 hover:text-amber-300"
                  >
                    <Instagram className="w-3.5 h-3.5 text-rose-400" /> @nrityavritt
                  </a>
                  <span>•</span>
                  <a
                    href="https://www.youtube.com/@NrityaVritt"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 hover:text-amber-300"
                  >
                    <Youtube className="w-3.5 h-3.5 text-red-400" /> YouTube
                  </a>
                </div>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
