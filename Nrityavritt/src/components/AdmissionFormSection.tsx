'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, AlertCircle, Sparkles, BellRing, Phone, MapPin, MessageCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

const formSchema = z.object({
  student_name: z.string().min(2, "Student's name must be at least 2 characters"),
  guardian_name: z.string().optional(),
  age: z.number({ invalid_type_error: "Enter a valid age" }).min(4, "Age must be at least 4").max(85, "Enter valid age"),
  phone: z.string().regex(/^\+?[0-9\s-]{10,15}$/, "Enter a valid phone/WhatsApp number (10-15 digits)"),
  experience_level: z.string().min(1, "Select Kathak experience level"),
  preferred_batch: z.string().min(1, "Select preferred batch"),
});

type FormData = z.infer<typeof formSchema>;

export default function AdmissionFormSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submittedData, setSubmittedData] = useState<FormData | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      student_name: '',
      guardian_name: '',
      age: undefined,
      phone: '',
      experience_level: 'Beginner (No prior Kathak training)',
      preferred_batch: 'Weekend Batch (Saturday & Sunday)',
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json().catch(() => null);

      if (response.ok && result?.success) {
        setSubmittedData(data);
        setIsSuccess(true);
        // Trigger celebratory confetti in gold, crimson & ivory
        confetti({
          particleCount: 160,
          spread: 85,
          origin: { y: 0.6 },
          colors: ['#fde047', '#d4af37', '#be123c', '#ffffff', '#f43f5e'],
        });
        reset();
      } else {
        setSubmitError(result?.error || 'Failed to submit admission enquiry. Please try again.');
      }
    } catch (err: any) {
      setSubmitError('Failed to submit enquiry. Please call or WhatsApp the studio directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const generateWhatsAppUrl = (data: FormData) => {
    const text = `Hello Nrityavritt Kathak Academy, I would like to register for Kathak classes:\n\n*Student Name:* ${data.student_name}\n*Guardian Name:* ${data.guardian_name || 'N/A'}\n*Age:* ${data.age}\n*Phone Number:* ${data.phone}\n*Kathak Experience:* ${data.experience_level}\n*Preferred Batch:* ${data.preferred_batch}`;
    return `https://wa.me/917011335616?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="trial-form" className="relative py-8 sm:py-10 px-4 sm:px-6 lg:px-8 bg-[#090305] overflow-hidden">
      
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-rose-950/30 via-amber-900/15 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-950/80 border border-amber-500/40 text-amber-300 text-xs font-semibold uppercase tracking-widest mb-4">
            <BellRing className="w-3.5 h-3.5 text-amber-400" />
            <span>Direct Studio Admissions</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
            Register for <span className="gold-text-gradient font-cinzel">Nrityavritt Kathak Classes</span>
          </h2>
          <p className="text-stone-300 text-sm sm:text-base mt-3 max-w-xl mx-auto font-sans leading-relaxed">
            Fill out the form below to register for classes. Applications are processed directly by our academy.
          </p>
        </div>

        {/* Glassmorphic Admission Form Container */}
        <div className="rounded-3xl glass-card p-6 sm:p-10 md:p-12 border-2 border-amber-500/30 shadow-2xl relative overflow-hidden">
          
          <AnimatePresence mode="wait">
            {!isSuccess ? (
              <motion.form
                key="admission-form"
                onSubmit={handleSubmit(onSubmit)}
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {/* Honeypot field for bot/spam prevention */}
                <input
                  type="text"
                  name="website"
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                {/* Error Banner */}
                {submitError && (
                  <div className="col-span-1 md:col-span-2 bg-red-950/50 border border-red-500/50 rounded-xl p-4 flex items-center gap-3 text-red-200 text-sm">
                    <AlertCircle className="w-5 h-5 text-red-400 shrink-0" />
                    <span>{submitError}</span>
                  </div>
                )}

                {/* 1. Student Name */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-amber-200/90">
                    Student Name <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="text"
                    {...register('student_name')}
                    placeholder="Enter student's name"
                    className="bg-black/40 border border-amber-500/20 focus:border-amber-400 focus:ring-1 focus:ring-amber-400 rounded-xl px-4 py-3 text-white placeholder-stone-500 text-sm outline-none transition-all"
                  />
                  {errors.student_name && (
                    <span className="text-rose-400 text-xs mt-0.5">{errors.student_name.message}</span>
                  )}
                </div>

                {/* 2. Guardian Name */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-amber-200/90">
                    Guardian Name <span className="text-stone-400 text-[10px] font-normal">(Optional / if minor)</span>
                  </label>
                  <input
                    type="text"
                    {...register('guardian_name')}
                    placeholder="Parent / Guardian name"
                    className="bg-black/40 border border-amber-500/20 focus:border-amber-400 focus:ring-1 focus:ring-amber-400 rounded-xl px-4 py-3 text-white placeholder-stone-500 text-sm outline-none transition-all"
                  />
                </div>

                {/* 3. Age */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-amber-200/90">
                    Age <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="number"
                    {...register('age', { valueAsNumber: true })}
                    placeholder="E.g. 14"
                    className="bg-black/40 border border-amber-500/20 focus:border-amber-400 focus:ring-1 focus:ring-amber-400 rounded-xl px-4 py-3 text-white placeholder-stone-500 text-sm outline-none transition-all"
                  />
                  {errors.age && (
                    <span className="text-rose-400 text-xs mt-0.5">{errors.age.message}</span>
                  )}
                </div>

                {/* 4. Phone Number */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-amber-200/90">
                    Phone Number <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="tel"
                    {...register('phone')}
                    placeholder="E.g. +91 98765 43210"
                    className="bg-black/40 border border-amber-500/20 focus:border-amber-400 focus:ring-1 focus:ring-amber-400 rounded-xl px-4 py-3 text-white placeholder-stone-500 text-sm outline-none transition-all"
                  />
                  {errors.phone && (
                    <span className="text-rose-400 text-xs mt-0.5">{errors.phone.message}</span>
                  )}
                </div>

                {/* 5. Kathak Experience */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-amber-200/90">
                    Kathak Experience <span className="text-rose-400">*</span>
                  </label>
                  <select
                    {...register('experience_level')}
                    className="bg-[#1f0910] border border-amber-500/20 focus:border-amber-400 rounded-xl px-4 py-3 text-white text-sm outline-none transition-all cursor-pointer"
                  >
                    <option value="Beginner (No prior Kathak training)">Beginner (No prior Kathak training)</option>
                    <option value="Elementary (Basic Tatkar & Hastak known)">Elementary (Basic Tatkar & Hastak known)</option>
                    <option value="Intermediate (2-4 years / Gandharva or Prayag Sangeet Sameeti)">Intermediate (2-4 years / Gandharva or Prayag Sangeet Sameeti)</option>
                    <option value="Advanced / Transfer Disciple">Advanced / Transfer Disciple</option>
                  </select>
                </div>

                {/* 6. Preferred Batch / Track */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-amber-200/90">
                    Preferred Batch / Track <span className="text-rose-400">*</span>
                  </label>
                  <select
                    {...register('preferred_batch')}
                    className="bg-[#1f0910] border border-amber-500/20 focus:border-amber-400 rounded-xl px-4 py-3 text-white text-sm outline-none transition-all cursor-pointer"
                  >
                    <option value="Weekend Batch (Saturday & Sunday)">
                      Weekend Batch (Saturday & Sunday)
                    </option>
                    <option value="Weekday Evening Batch">
                      Weekday Evening Batch
                    </option>
                    <option value="Junior Classical Foundation (Ages 5-12)">
                      Junior Classical Foundation (Ages 5-12)
                    </option>
                    <option value="Gandharva Mahavidyalaya Certified Exam Track">
                      Gandharva Mahavidyalaya Certified Exam Track
                    </option>
                    <option value="Prayag Sangeet Sameeti Certified Exam Track">
                      Prayag Sangeet Sameeti Certified Exam Track
                    </option>
                  </select>
                </div>

                {/* Submit Button */}
                <div className="col-span-1 md:col-span-2 mt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full relative h-16 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 disabled:opacity-75 text-amber-950 font-bold font-cinzel text-lg tracking-widest rounded-xl transition-all duration-300 shadow-xl shadow-amber-900/40 hover:shadow-amber-500/30 flex items-center justify-center gap-3 cursor-pointer transform hover:-translate-y-0.5"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-5 h-5 border-2 border-amber-950 border-t-transparent rounded-full animate-spin" />
                        <span>DISPATCHING ADMISSION DETAILS...</span>
                      </span>
                    ) : (
                      <span className="flex items-center gap-2.5">
                        <Sparkles className="w-5 h-5 text-amber-950" />
                        <span>SUBMIT ADMISSION REGISTRATION</span>
                      </span>
                    )}
                  </button>
                  <p className="text-center text-[11px] text-stone-400 mt-3 font-sans">
                    ✨ After registration, the instructor will contact you directly on your phone/WhatsApp to confirm batch timings.
                  </p>
                </div>

              </motion.form>
            ) : (
              <motion.div
                key="success-card"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="flex flex-col items-center justify-center text-center py-12 px-4"
              >
                <div className="w-20 h-20 rounded-full bg-amber-500/20 border-2 border-amber-400 flex items-center justify-center mb-6 shadow-xl shadow-amber-900/40">
                  <CheckCircle2 className="w-12 h-12 text-amber-400" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-1">
                  Registration Successful
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-wide">
                  Welcome to Nrityavritt!
                </h3>
                <p className="text-stone-300 max-w-lg text-sm sm:text-base mt-4 font-sans leading-relaxed">
                  Thank you, <strong className="text-amber-300">{submittedData?.student_name}</strong>! Your admission registration has been submitted. Our instructor will reach out to <strong className="text-white">{submittedData?.phone}</strong> to coordinate your batch timings.
                </p>

                {submittedData && (
                  <div className="mt-6 flex flex-col sm:flex-row gap-3 w-full max-w-md justify-center">
                    <a
                      href={generateWhatsAppUrl(submittedData)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-5 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/50 transition-all hover:-translate-y-0.5"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Confirm via WhatsApp</span>
                    </a>
                    <a
                      href="tel:7011335616"
                      className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all hover:-translate-y-0.5"
                    >
                      <Phone className="w-4 h-4 text-amber-400" />
                      <span>Call Studio</span>
                    </a>
                  </div>
                )}

                <div className="mt-8 p-4 rounded-xl bg-white/[0.03] border border-amber-500/30 text-xs text-stone-300 max-w-md w-full text-left space-y-1.5">
                  <div className="flex items-center gap-2 text-amber-300 font-semibold">
                    <MapPin className="w-4 h-4 text-amber-400" />
                    <span>Studio Address:</span>
                  </div>
                  <p className="text-stone-300 pl-6">
                    D-125, 1st Floor, Balaji Bhawan, South Ganesh Nagar, Delhi - 110092
                  </p>
                </div>

                <button
                  onClick={() => setIsSuccess(false)}
                  className="mt-8 px-8 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-xs uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Submit Another Registration
                </button>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>

      {/* Gold Divider */}
      <div className="absolute bottom-0 inset-x-0 gold-divider" />
    </section>
  );
}
