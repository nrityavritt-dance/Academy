'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Award, Sparkles, Instagram, Quote, ChevronLeft, ChevronRight, Pause, Play, X, ExternalLink, Phone, ZoomIn } from 'lucide-react';

export default function FounderSection() {
  // All images from assets for continuous changing slider + Best Performance Certificate
  const founderSlides = [
    {
      src: '/images/guru_pt_rajendra_gangani.jpg',
      alt: 'Guru Pt. Rajendra Gangani Ji with Namita Dwivedi',
      caption: 'Guru Pt. Rajendra Gangani Ji',
    },
    {
      src: '/images/guru_aditi_mangaldas.jpg',
      alt: 'Guru Aditi Mangaldas Ji with Namita Dwivedi',
      caption: 'Guru Aditi Mangaldas Ji',
    },
    {
      src: '/images/guru_monisa_nayak.jpg',
      alt: 'Guru Monisa Nayak Ji with Namita Dwivedi',
      caption: 'Guru Monisa Nayak Ji',
    },
    {
      src: '/images/guru_malti_shyam.jpg',
      alt: 'Guru Malti Shyam Ji with Namita Dwivedi',
      caption: 'Guru Malti Shyam Ji',
    },
    {
      src: '/images/guru_hemant_panwar.jpg',
      alt: 'Guru Hemant Panwar Ji with Namita Dwivedi',
      caption: 'Guru Hemant Panwar Ji',
    },
    {
      src: '/images/with_ravi_yadav.jpg',
      alt: 'With Ravi Yadav Ji, Kathak Exponent (Jaipur Gharana)',
      caption: 'With Ravi Yadav Ji, Kathak Exponent (Jaipur Gharana)',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [showCertificateModal, setShowCertificateModal] = useState(false);

  // Continuous auto-sliding effect
  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % founderSlides.length);
    }, 3200);
    return () => clearInterval(timer);
  }, [isAutoPlaying, founderSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % founderSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + founderSlides.length) % founderSlides.length);
  };



  return (
    <section id="founder" className="relative py-7 sm:py-9 px-4 sm:px-6 lg:px-8 bg-[#0e0508] overflow-hidden">
      
      {/* Background Ornamentation */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-rose-950/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-20 right-0 w-80 h-80 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-5 sm:mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-950/70 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Artistic Direction & Living Parampara</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
            Meet our artistic director <span className="gold-text-gradient font-cinzel">Namita Dwivedi</span>
          </h2>
        </div>

        {/* Main Grid: Continuous Slider + Biography & Cultural Achievements */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: Continuously Changing Image Slider (Includes Certificate as slide) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {/* Ambient Backing Glow */}
            <div className="absolute -inset-3 rounded-2xl bg-gradient-to-tr from-amber-600/20 via-rose-900/30 to-amber-400/20 blur-xl opacity-80" />

            {/* Post Slider Card */}
            <div className="relative rounded-2xl overflow-hidden glass-card border border-amber-500/30 shadow-2xl">
              
              {/* Slider Viewport */}
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-black select-none">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.7, ease: 'easeInOut' }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={founderSlides[currentSlide].src}
                      alt={founderSlides[currentSlide].alt}
                      fill
                      className="object-cover object-center"
                      priority={currentSlide === 0}
                    />
                  </motion.div>
                </AnimatePresence>
                
                {/* Overlay Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0608] via-transparent to-transparent opacity-80 pointer-events-none" />

                {/* Top Badge: Slide Counter & Instagram Button */}
                <div className="absolute top-3 inset-x-3 flex items-center justify-between z-20">
                  <span className="px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/10 text-[10px] font-bold text-amber-300 tracking-wider">
                    {currentSlide + 1} / {founderSlides.length} • Slideshow
                  </span>

                  <a
                    href="https://www.instagram.com/nrityavritt/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/10 text-[11px] font-medium text-white hover:text-amber-300 flex items-center gap-1.5 transition-colors shadow-lg"
                  >
                    <Instagram className="w-3.5 h-3.5 text-rose-400" />
                    <span>@nrityavritt</span>
                  </a>
                </div>

                {/* Left / Right Navigation Arrows */}
                <button
                  onClick={prevSlide}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 hover:bg-black/90 border border-white/20 text-white flex items-center justify-center transition-all z-20 hover:scale-110 cursor-pointer"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-5 h-5 text-amber-300" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 hover:bg-black/90 border border-white/20 text-white flex items-center justify-center transition-all z-20 hover:scale-110 cursor-pointer"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-5 h-5 text-amber-300" />
                </button>

                {/* Bottom Caption Overlay */}
                <div className="absolute bottom-3 inset-x-3 p-3 rounded-xl bg-[#14060b]/90 backdrop-blur-md border border-amber-500/30 z-20">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-serif font-bold text-amber-200 text-xs sm:text-sm leading-snug">
                        {founderSlides[currentSlide].caption}
                      </h4>
                    </div>

                    <button
                      onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                      className="p-1.5 rounded-md bg-white/5 hover:bg-white/10 text-stone-300 border border-white/10 transition-colors"
                      title={isAutoPlaying ? "Pause continuous slider" : "Resume slider"}
                    >
                      {isAutoPlaying ? <Pause className="w-3.5 h-3.5 text-amber-300" /> : <Play className="w-3.5 h-3.5 text-amber-300" />}
                    </button>
                  </div>

                  {/* Indicator Dots */}
                  <div className="flex items-center justify-center gap-1.5 mt-2">
                    {founderSlides.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentSlide(idx)}
                        className={`h-1 rounded-full transition-all cursor-pointer ${
                          currentSlide === idx
                            ? 'w-6 bg-amber-400'
                            : 'w-1.5 bg-white/30 hover:bg-white/60'
                        }`}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

          {/* Right Column: In front of the image slideshow */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col gap-4 text-left justify-center"
          >
            <div>
              <span className="text-xs font-bold tracking-widest text-amber-400 uppercase">
                Artistic Director & Educator
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-1">
                Namita Dwivedi
              </h3>
            </div>

            {/* Namita Dwivedi Introduction */}
            <div className="space-y-3 font-sans text-xs sm:text-sm text-stone-300 leading-relaxed bg-white/[0.02] p-5 rounded-2xl border border-amber-500/20 shadow-lg">
              <p>
                Namita Dwivedi is a dedicated Kathak practitioner, performer, and educator rooted in the Jaipur Gharana. A disciple of Smt. Monisa Nayak ji, she holds an Alankar Poorna degree from Gandharva Mahavidyalaya. Seeking to immerse herself fully in the nuances of Kathak, she has been privileged to train under Guru Shri Dheerendra Tiwari ji. Combining her deep artistic training with a strong academic background—holding an MA in English from Jamia Millia Islamia and a B.Ed. from IP University—Namita brings a pedagogical approach to her craft. She founded Nrityavritt, an institute dedicated to the preservation and teaching of Kathak.
              </p>
            </div>

            {/* National Recognition & Certificate Showcase */}
            <div className="rounded-2xl border border-amber-500/30 bg-gradient-to-br from-[#1a0810]/85 via-[#120509]/95 to-[#1f0a14]/85 p-4 sm:p-5 shadow-xl backdrop-blur-sm">
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5">
                {/* Certificate Preview Thumbnail */}
                <div
                  onClick={() => setShowCertificateModal(true)}
                  className="relative w-full sm:w-44 md:w-48 aspect-[1170/833] rounded-xl overflow-hidden border-2 border-amber-500/40 shadow-lg cursor-pointer group shrink-0"
                >
                  <Image
                    src="/images/best_performance_certificate.jpg"
                    alt="Best Performance Certificate - Namita Dwivedi"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                    <span className="px-2.5 py-1 rounded-md bg-black/85 backdrop-blur-sm border border-amber-400/40 text-amber-300 text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5 shadow group-hover:scale-105 transition-transform">
                      <ZoomIn className="w-3.5 h-3.5" /> Enlarge
                    </span>
                  </div>
                </div>

                {/* Certificate Text & Honors */}
                <div className="flex-1 flex flex-col justify-center text-left">
                  <div className="inline-flex items-center gap-1.5 text-amber-400 text-xs font-bold uppercase tracking-wider mb-1">
                    <Award className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Founder Recognition</span>
                  </div>
                  <h4 className="font-serif text-base sm:text-lg font-bold text-white leading-snug">
                    Best Performance Award & Certification
                  </h4>
                  <p className="text-stone-300 text-xs mt-1.5 leading-relaxed font-sans">
                    Conferred upon Ms. Namita Dwivedi in honor of exemplary classical execution, stage choreography, and lifelong dedication to Jaipur Gharana Kathak parampara.
                  </p>
                  <div className="mt-3">
                    <button
                      onClick={() => setShowCertificateModal(true)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-400/15 hover:bg-amber-400/25 border border-amber-400/40 text-amber-300 hover:text-white text-xs font-semibold tracking-wide transition-colors cursor-pointer"
                    >
                      <ZoomIn className="w-3.5 h-3.5" />
                      <span>View Full Certificate</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact & Facebook Bar */}
            <div className="p-3.5 rounded-xl bg-gradient-to-r from-amber-950/30 via-rose-950/20 to-black/40 border border-amber-500/30 flex flex-wrap items-center justify-between gap-3 text-xs mt-1">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span className="text-stone-300 font-medium">Direct Inquiries:</span>
                <a href="tel:7011335616" className="text-amber-300 hover:text-white font-semibold">
                  7011335616
                </a>
                <span className="text-white/20">/</span>
                <a href="tel:8860256229" className="text-amber-300 hover:text-white font-semibold">
                  8860256229
                </a>
              </div>

              <a
                href="https://www.facebook.com/share/18Jd9s24cC/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-amber-300 hover:text-white font-semibold underline text-xs"
              >
                <span>Visit Facebook Page</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

          </motion.div>

        </div>

      </div>

      {/* Lightbox Modal for Certificate (Takes 0 page height until opened) */}
      <AnimatePresence>
        {showCertificateModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowCertificateModal(false)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-3xl w-full bg-[#14060b] rounded-2xl border-2 border-amber-500/40 p-4 sm:p-6 shadow-2xl overflow-hidden"
            >
              <div className="flex items-center justify-between pb-3 border-b border-amber-500/20 mb-4">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-amber-400" />
                  <h3 className="font-serif font-bold text-white text-base sm:text-lg">
                    National Recognition: Best Performance Award & Certification
                  </h3>
                </div>
                <button
                  onClick={() => setShowCertificateModal(false)}
                  className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="relative aspect-[1170/833] w-full rounded-xl overflow-hidden border border-amber-500/30 bg-black shadow-lg">
                <Image
                  src="/images/best_performance_certificate.jpg"
                  alt="Best Performance Certificate - Nrityavritt"
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              <p className="text-center text-xs text-stone-300 mt-4 font-sans">
                Honoring exemplary classical execution, stage choreography, and adherence to Jaipur Gharana Kathak parampara.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Gold Divider */}
      <div className="absolute bottom-0 inset-x-0 gold-divider" />
    </section>
  );
}
