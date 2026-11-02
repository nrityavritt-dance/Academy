'use client';

import React, { useState } from 'react';
import { Sparkles, Instagram, ArrowUpRight, X } from 'lucide-react';
import { VideoPlayerCard, ShowcaseItem } from './VideoPlayerCard';

export default function InstagramShowcaseSection() {
  const [photoLightboxOpen, setPhotoLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState<string>('');
  const [lightboxTitle, setLightboxTitle] = useState<string>('');

  // 4 Authentic Live Auto-Playing Classroom Reels from @nrityavritt & @namitakathak_
  const items: ShowcaseItem[] = [
    {
      id: 'reel-weekend-admissions',
      shortcode: 'DblvliFzexQ',
      type: 'REEL',
      url: 'https://www.instagram.com/nrityavritt/reel/DblvliFzexQ/',
      videoSrc: './media/reel-weekend-admissions.mp4',
      poster: './media/reel-weekend-admissions-poster.jpg',
      account: '@nrityavritt',
      accountUrl: 'https://www.instagram.com/nrityavritt/',
      captionExcerpt: 'Admissions Open for weekend batches! 🌼 Days : Sat, Sun. Time : 6 p.m. DM for more info! #kathak #fyp #instareels',
      likes: 48,
      comments: 10,
    },
    {
      id: 'reel-namita-classes',
      shortcode: 'DbU4xkLNHyP',
      type: 'REEL',
      url: 'https://www.instagram.com/namitakathak_/reel/DbU4xkLNHyP/',
      videoSrc: './media/reel-namita-classes.mp4',
      poster: './media/reel-namita-classes-poster.jpg',
      account: '@namitakathak_',
      accountUrl: 'https://www.instagram.com/namitakathak_/',
      captionExcerpt: 'Kathak Classes @nrityavritt 🌼 DM for more info! #kathak #fyp #instagood',
      likes: 109,
      comments: 8,
    },
    {
      id: 'reel-weekend-sadhana',
      shortcode: 'DbSlG4RgXih',
      type: 'REEL',
      url: 'https://www.instagram.com/nrityavritt/reel/DbSlG4RgXih/',
      videoSrc: './media/reel-weekend-sadhana.mp4',
      poster: './media/reel-weekend-sadhana-poster.jpg',
      account: '@nrityavritt',
      accountUrl: 'https://www.instagram.com/nrityavritt/',
      captionExcerpt: 'Admissions Open for Weekend Kathak Classes. DM for more info. #fyp #kathakclass #jaipurgharana',
      likes: 64,
      comments: 6,
    },
    {
      id: 'reel-weekend-studio-mastery',
      shortcode: 'Db6T1HTT2Ps',
      type: 'REEL',
      url: 'https://www.instagram.com/nrityavritt/reel/Db6T1HTT2Ps/',
      videoSrc: './media/reel-stage-recital.mp4',
      poster: './media/reel-stage-recital-poster.jpg',
      account: '@nrityavritt',
      accountUrl: 'https://www.instagram.com/nrityavritt/',
      captionExcerpt: 'Admissions Open for Weekend Kathak Classes 🌼 #fyp #instareel #danceclasses #kathakclasses',
      likes: 92,
      comments: 8,
    },
  ];

  const openPhotoLightbox = (src: string, title: string) => {
    setLightboxImage(src);
    setLightboxTitle(title);
    setPhotoLightboxOpen(true);
  };

  return (
    <section id="instagram-reels" className="py-8 sm:py-12 bg-[#090305] text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-rose-950/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-6">
          <div className="inline-flex items-center gap-2 mb-2 px-3.5 py-1 rounded-full bg-rose-950/80 border border-amber-500/30 text-amber-300">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-[11px] font-sans tracking-widest uppercase font-bold">
              Live Video Reels & Riyaz
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            Live Academy Reels
          </h2>
          <p className="mt-2 text-xs sm:text-sm font-sans text-stone-300 max-w-xl mx-auto">
            Watch authentic classroom riyaz, training sessions, and classical padhant with Guru Namita Dwivedi. Videos play automatically as you scroll on screen or hover.
          </p>
          <div className="w-16 h-[2px] bg-gradient-to-r from-amber-400 to-rose-400 mx-auto mt-3 rounded-full" />
        </div>

        {/* Video Cards Grid (Direct on-hover and on-scroll auto-playing cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto mb-8">
          {items.map((item) => (
            <VideoPlayerCard
              key={item.id}
              item={item}
              onOpenPhotoLightbox={openPhotoLightbox}
            />
          ))}
        </div>

        {/* Instagram Follow Community Banner */}
        <div className="max-w-2xl mx-auto bg-gradient-to-r from-rose-950/40 via-amber-950/25 to-rose-950/40 border border-amber-500/30 rounded-3xl p-6 sm:p-8 text-center backdrop-blur-md">
          <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-amber-500 to-rose-600 mx-auto flex items-center justify-center text-white font-bold mb-3 shadow-lg">
            <Instagram className="w-6 h-6" />
          </div>
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-2">
            Explore More on Instagram
          </h3>
          <p className="text-xs sm:text-sm text-stone-300 font-light mb-6 max-w-md mx-auto">
            Follow @nrityavritt and @namitakathak_ for daily classroom padhant, tatkar riyaz, and upcoming classical workshops.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://www.instagram.com/nrityavritt"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 text-stone-950 font-bold text-xs uppercase tracking-widest shadow-lg shadow-amber-500/20 hover:scale-105 transition-all inline-flex items-center gap-2"
            >
              <span>Follow @nrityavritt</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href="https://www.instagram.com/namitakathak_"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/15 text-white font-bold text-xs uppercase tracking-widest border border-white/20 hover:scale-105 transition-all inline-flex items-center gap-2"
            >
              <span>Follow @namitakathak_</span>
              <ArrowUpRight className="w-4 h-4 text-rose-300" />
            </a>
          </div>
        </div>

      </div>

      {/* Lightbox Modal for Photo Posts */}
      {photoLightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col items-center justify-center p-4 sm:p-8"
          onClick={() => setPhotoLightboxOpen(false)}
        >
          <div
            className="relative max-w-4xl max-h-[90vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full flex items-center justify-between pb-3 text-white">
              <span className="font-serif text-sm sm:text-base font-bold text-amber-300">
                {lightboxTitle}
              </span>
              <button
                onClick={() => setPhotoLightboxOpen(false)}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Close photo preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <img
              src={lightboxImage}
              alt={lightboxTitle}
              className="max-h-[75vh] w-auto max-w-[90vw] object-contain rounded-2xl shadow-2xl border border-amber-500/30"
            />
          </div>
        </div>
      )}
    </section>
  );
}
