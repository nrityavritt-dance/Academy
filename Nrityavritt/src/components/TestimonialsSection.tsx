'use client';

import { motion } from 'framer-motion';
import { Quote, Star, Heart } from 'lucide-react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Learning Kathak has its own challenges and milestones. But when your Guru never gives up on you no matter what, you begin to grasp true contentment in attainment of art. Thank you Guru Namita for your constant belief in us!",
      author: "Shradha Soni",
      role: "Disciple, Nrityavritt",
      batch: "Weekend Intermediate Batch",
    },
    {
      quote: "To Namita ma'am: Thank you for teaching my feet to dance and my soul to express. Your discipline, your grace, and your unconditional encouragement make every rehearsal unforgettable. Proud to learn Jaipur Gharana under you.",
      author: "Prachi Sharma",
      role: "Kathak Student & Performer",
      batch: "Senior Enrolment",
    },
    {
      quote: "As a working professional, I joined the weekend batch hoping to reconnect with Indian classical dance after 10 years. Guru Namita's pedagogy is so encouraging, patient, and precise. The 6 PM weekend batch is now the highlight of my week!",
      author: "Dr. Mansi Jain",
      role: "Adult Practitioner",
      batch: "Weekend Batch (Sat & Sun 6 PM)",
    },
    {
      quote: "Enrolling our 7-year-old daughter at Nrityavritt has been the best decision. Her posture, coordination, and reverence for Indian culture have blossomed under Guru Namita's caring guidance.",
      author: "Kajal & Family",
      role: "Parent Review",
      batch: "Junior Classical Foundation",
    },
  ];

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#0c0507] overflow-hidden mandala-bg">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-950/80 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-widest mb-4">
            <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400" />
            <span>Voice of our Shishyas</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
            Words of <span className="gold-text-gradient font-cinzel">Gratitude & Growth</span>
          </h2>
          <p className="text-stone-300 text-sm sm:text-base mt-4 font-sans leading-relaxed">
            The bond between Guru and Shishya is the beating heart of classical dance. Hear what our dancers and parents have to say about their journey at Nrityavritt.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="p-8 rounded-3xl glass-card glass-card-hover border border-amber-500/20 flex flex-col justify-between relative"
            >
              <div>
                <div className="flex items-center gap-1 mb-4 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-amber-500/30 mb-2" />
                <p className="text-stone-200 text-sm sm:text-base italic font-serif leading-relaxed mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="border-t border-white/10 pt-4 flex items-center justify-between">
                <div>
                  <h4 className="font-serif font-bold text-white text-base">
                    {t.author}
                  </h4>
                  <p className="text-xs text-amber-300 font-medium">
                    {t.role}
                  </p>
                </div>
                <span className="text-[11px] text-stone-400 bg-white/5 px-3 py-1 rounded-full border border-white/5">
                  {t.batch}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Gold Divider */}
      <div className="absolute bottom-0 inset-x-0 gold-divider" />
    </section>
  );
}
