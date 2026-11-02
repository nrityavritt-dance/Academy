'use client';

import { MapPin, Phone, Mail, Clock, Instagram, Youtube, ExternalLink } from 'lucide-react';

export default function LocationSection() {
  return (
    <section id="contact" className="relative py-8 sm:py-10 px-4 sm:px-6 lg:px-8 bg-[#0b0406] overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-rose-950/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-950/80 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-widest mb-4">
            <MapPin className="w-3.5 h-3.5 text-amber-400" />
            <span>Studio Location & Timings</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
            Visit Our <span className="gold-text-gradient font-cinzel">Delhi Studio</span>
          </h2>
          <p className="text-stone-300 text-sm sm:text-base mt-4 font-sans leading-relaxed">
            Conveniently located in East Delhi near Nirman Vihar and Mayur Vihar connectivity. Drop in for a studio walkthrough or schedule your weekend trial session.
          </p>
        </div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Swapped to Left on Desktop (lg:col-span-7): Directions & Surroundings */}
          <div className="lg:col-span-7 rounded-3xl glass-card border border-amber-500/30 overflow-hidden relative flex flex-col justify-between p-6 sm:p-8">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
                  Directions & Surroundings
                </span>
                <a
                  href="https://maps.google.com/?q=Balaji+Bhawan+South+Ganesh+Nagar+Delhi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-amber-300 hover:text-white flex items-center gap-1 font-semibold transition-colors"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              <h3 className="font-serif text-2xl font-bold text-white mb-3">
                Easy Accessibility Across Delhi NCR
              </h3>
              <p className="text-stone-300 text-xs sm:text-sm font-sans leading-relaxed mb-6">
                Situated in South Ganesh Nagar, our studio features traditional wooden flooring optimal for tatkar resonance, mirrored rehearsal walls, professional sound systems, and a serene spiritual ambience suited for classical practice.
              </p>

              {/* Landmark badges */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6 text-xs">
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10">
                  <span className="text-amber-400 font-bold block mb-0.5">Blue Line Metro</span>
                  <span className="text-stone-300 text-[11px]">Laxmi Nagar & Nirman Vihar</span>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10">
                  <span className="text-amber-400 font-bold block mb-0.5">Pink Line Metro</span>
                  <span className="text-stone-300 text-[11px]">Mandawli West Vinod Nagar</span>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10">
                  <span className="text-amber-400 font-bold block mb-0.5">Parking</span>
                  <span className="text-stone-300 text-[11px]">Available around Balaji Bhawan</span>
                </div>
              </div>
            </div>

            {/* Visual Map Mockup / Embed container */}
            <div className="w-full h-64 sm:h-72 rounded-2xl overflow-hidden border border-amber-500/30 relative bg-[#17080e] flex items-center justify-center p-6 text-center">
              {/* Stylized Map Backdrop */}
              <div className="absolute inset-0 opacity-30 mandala-bg" />
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-rose-900 border-2 border-amber-400 flex items-center justify-center shadow-2xl mb-3 animate-bounce">
                  <MapPin className="w-7 h-7 text-amber-300" />
                </div>
                <h4 className="font-serif font-bold text-white text-lg">
                  Balaji Bhawan • South Ganesh Nagar
                </h4>
                <p className="text-xs text-stone-300 mt-1 max-w-sm">
                  1st Floor, D-125, South Ganesh Nagar, Delhi - 110092
                </p>
                <a
                  href="https://maps.google.com/?q=D-125+Balaji+Bhawan+South+Ganesh+Nagar+Delhi+110092"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 px-5 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-amber-950 font-bold text-xs uppercase tracking-wider transition-colors shadow-lg"
                >
                  Get Driving Directions
                </a>
              </div>
            </div>

          </div>

          {/* Swapped to Right on Desktop (lg:col-span-5): Studio Details & Contacts */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            
            {/* Studio Address Box */}
            <div className="p-6 sm:p-8 rounded-3xl glass-card border border-amber-500/30 shadow-xl space-y-6">
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-white text-lg">
                    Nrityavritt Studio
                  </h4>
                  <p className="text-stone-300 text-xs sm:text-sm mt-1 leading-relaxed">
                    D-125, 1st Floor, Balaji Bhawan,<br />
                    South Ganesh Nagar, Delhi - 110092
                  </p>
                  <p className="text-[11px] text-amber-300/80 mt-1">
                    (Close to Laxmi Nagar, Nirman Vihar & Mandawli West Vinod Nagar Metro)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-white text-lg">
                    Studio & Inquiries
                  </h4>
                  <p className="text-stone-300 text-xs sm:text-sm mt-1 leading-relaxed">
                    Weekdays & Weekend Batches Available
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-white text-lg">
                    Admissions Email
                  </h4>
                  <a
                    href="mailto:nrityavritt@gmail.com"
                    className="text-amber-300 hover:text-white text-xs sm:text-sm mt-1 block font-medium underline underline-offset-4 transition-colors"
                  >
                    nrityavritt@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-white text-lg">
                    Call / WhatsApp
                  </h4>
                  <div className="flex flex-col gap-1 mt-1 text-xs sm:text-sm font-medium">
                    <a
                      href="tel:7011335616"
                      className="text-amber-300 hover:text-white transition-colors"
                    >
                      +91 7011335616
                    </a>
                    <a
                      href="tel:8860256229"
                      className="text-amber-300 hover:text-white transition-colors"
                    >
                      +91 8860256229
                    </a>
                  </div>
                  <div className="flex items-center gap-3 pt-2">
                    <a
                      href="https://www.facebook.com/share/18Jd9s24cC/?mibextid=wwXIfr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-amber-300 hover:text-white underline inline-flex items-center gap-1"
                    >
                      Facebook Page &rarr;
                    </a>
                    <span className="text-stone-600">•</span>
                    <a
                      href="https://www.instagram.com/nrityavritt"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-stone-400 hover:text-rose-400 transition-colors"
                      title="Instagram @nrityavritt"
                      aria-label="Instagram"
                    >
                      <Instagram className="w-4 h-4" />
                    </a>
                    <a
                      href="https://www.youtube.com/@NrityaVritt"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-stone-400 hover:text-red-400 transition-colors"
                      title="YouTube @NrityaVritt"
                      aria-label="YouTube"
                    >
                      <Youtube className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Bottom Academy Note */}
        <div className="mt-14 pt-8 border-t border-white/10 text-center text-xs text-stone-400">
          <p>© {new Date().getFullYear()} Nrityavritt Classical Academy of Kathak. Dedicated to Jaipur Gharana Kathak Excellence.</p>
        </div>

      </div>

      {/* Gold Divider */}
      <div className="absolute bottom-0 inset-x-0 gold-divider" />
    </section>
  );
}
