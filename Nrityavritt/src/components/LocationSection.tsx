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
                  href="https://www.google.com/maps/place/Nrityavritt/@28.62249,77.2832195,405m/data=!3m1!1e3!4m6!3m5!1s0x390ce32c9f043ab5:0x137708007591b3!8m2!3d28.6224211!4d77.2846633!16s%2Fg%2F11z5b66ssv"
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
                  <span className="text-stone-300 text-[11px]">Mandawali West Vinod Nagar</span>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10">
                  <span className="text-amber-400 font-bold block mb-0.5">Parking</span>
                  <span className="text-stone-300 text-[11px]">Available around Balaji Bhawan</span>
                </div>
              </div>
            </div>

            {/* Visual Map Embed container */}
            <div className="w-full h-64 sm:h-72 rounded-2xl overflow-hidden border border-amber-500/30 relative bg-[#17080e] shadow-xl">
              <iframe
                title="Nrityavritt Studio Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1763.6348004979968!2d77.2832195!3d28.62249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce32c9f043ab5%3A0x137708007591b3!2sNrityavritt!5e0!3m2!1sen!2sin!4v1714800000000!5m2!1sen!2sin"
                className="w-full h-full border-0 filter contrast-[1.05] brightness-[0.92]"
                loading="lazy"
                allowFullScreen
              />
              <div className="absolute bottom-3 right-3 z-10">
                <a
                  href="https://www.google.com/maps/place/Nrityavritt/@28.62249,77.2832195,405m/data=!3m1!1e3!4m6!3m5!1s0x390ce32c9f043ab5:0x137708007591b3!8m2!3d28.6224211!4d77.2846633!16s%2Fg%2F11z5b66ssv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-amber-950 font-bold text-xs uppercase tracking-wider transition-all shadow-xl flex items-center gap-1.5"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
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
                    (Close to Laxmi Nagar, Nirman Vihar & Mandawali West Vinod Nagar Metro)
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
                  <div className="flex items-center gap-3.5 pt-2.5">
                    <a
                      href="https://www.facebook.com/share/18Jd9s24cC/?mibextid=wwXIfr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-stone-400 hover:text-blue-400 transition-colors"
                      title="Facebook Page"
                      aria-label="Facebook"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </a>
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

            {/* Studio Facility & Practice Highlights (Fills whitespace & balances height) */}
            <div className="p-5 sm:p-6 rounded-3xl glass-card border border-amber-500/20 bg-gradient-to-br from-[#18060e]/80 via-[#120509]/90 to-[#1e0712]/80 shadow-xl">
              <div className="flex items-center gap-2 mb-2.5">
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                <h4 className="font-serif font-bold text-white text-sm sm:text-base">
                  Studio Highlights & Environment
                </h4>
              </div>
              <p className="text-stone-300 text-xs font-sans leading-relaxed mb-3">
                Equipped specifically for classical Kathak riyaaz, tatkar footwork practice, and individual attention:
              </p>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10 flex items-center gap-2">
                  <span className="text-amber-400 font-bold">✦</span>
                  <span className="text-stone-200">Resonant Wooden Floor</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10 flex items-center gap-2">
                  <span className="text-amber-400 font-bold">✦</span>
                  <span className="text-stone-200">Rehearsal Wall Mirrors</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10 flex items-center gap-2">
                  <span className="text-amber-400 font-bold">✦</span>
                  <span className="text-stone-200">Hi-Fi Audio Acoustics</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10 flex items-center gap-2">
                  <span className="text-amber-400 font-bold">✦</span>
                  <span className="text-stone-200">Serene Ambience</span>
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
