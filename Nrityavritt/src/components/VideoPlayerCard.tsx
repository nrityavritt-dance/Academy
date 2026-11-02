'use client';

import React, { useRef, useState, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Eye, Instagram, ArrowUpRight, Heart, MessageCircle } from 'lucide-react';

export interface ShowcaseItem {
  id: string;
  type: 'REEL' | 'POST';
  shortcode: string;
  url: string;
  account: string;
  accountUrl: string;
  captionExcerpt: string;
  likes: number;
  comments: number;
  title?: string;
  category?: string;
  badge?: string;
  details?: string;
  videoSrc?: string;
  poster?: string;
  image?: string;
}

interface VideoPlayerCardProps {
  item: ShowcaseItem;
  onOpenPhotoLightbox?: (src: string, title: string) => void;
}

export const VideoPlayerCard: React.FC<VideoPlayerCardProps> = ({ item, onOpenPhotoLightbox }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const isVideo = item.type === 'REEL' && Boolean(item.videoSrc);

  // Initialize video settings for mobile & desktop autoplay compliance
  useEffect(() => {
    if (!isVideo || !videoRef.current) return;
    const video = videoRef.current;
    video.defaultMuted = true;
    video.muted = true;
    video.playsInline = true;
    video.setAttribute('playsinline', 'true');
    video.setAttribute('webkit-playsinline', 'true');
  }, [isVideo]);

  // Auto-play when scrolled onto screen (Mobile & Desktop)
  useEffect(() => {
    if (!isVideo || !cardRef.current || !videoRef.current) return;

    const videoElement = videoRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const playPromise = videoElement.play();
            if (playPromise !== undefined) {
              playPromise
                .then(() => {
                  setIsPlaying(true);
                })
                .catch(() => {
                  // Silent fallback if browser restricts immediate autoplay
                });
            }
          } else {
            videoElement.pause();
            setIsPlaying(false);
          }
        });
      },
      {
        threshold: 0.25, // Play when 25% visible in viewport
        rootMargin: '20px 0px 20px 0px',
      }
    );

    observer.observe(cardRef.current);

    return () => {
      observer.disconnect();
    };
  }, [isVideo]);

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch(() => {});
      }
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    const nextMuted = !isMuted;
    videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (isVideo && videoRef.current && videoRef.current.paused) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.then(() => setIsPlaying(true)).catch(() => {});
      }
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  // 1. Photo Post Layout
  if (!isVideo) {
    return (
      <div className="group bg-[#14060b] rounded-2xl overflow-hidden border border-amber-500/25 hover:border-amber-400/50 transition-all duration-300 flex flex-col justify-between shadow-2xl hover:-translate-y-1">
        {/* Top Header */}
        <div className="p-3 bg-[#1a080e] border-b border-amber-500/15 flex items-center justify-between gap-2">
          <a
            href={item.accountUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-bold text-xs text-amber-300 hover:text-white transition-colors"
          >
            <Instagram className="w-3.5 h-3.5 text-rose-400 shrink-0" />
            <span className="truncate">{item.account}</span>
          </a>
          <span className="px-2.5 py-0.5 rounded-full bg-amber-400/15 border border-amber-400/30 text-[10px] font-bold uppercase tracking-wider text-amber-300 shrink-0">
            {item.badge}
          </span>
        </div>

        {/* Photo Box */}
        <div
          onClick={() => item.image && onOpenPhotoLightbox?.(item.image, item.title || item.account)}
          className="relative aspect-[9/15] overflow-hidden bg-black cursor-pointer group/photo flex items-center justify-center select-none"
        >
          {item.image && (
            <img
              src={item.image}
              alt={item.title || item.account}
              loading="lazy"
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover/photo:scale-105"
            />
          )}

          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/photo:opacity-100 backdrop-blur-[2px] transition-opacity duration-300 flex items-center justify-center p-4">
            <span className="px-4 py-2 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-stone-950 font-bold text-xs uppercase tracking-wider inline-flex items-center gap-1.5 shadow-lg shadow-amber-500/30">
              <Eye className="w-3.5 h-3.5" />
              <span>Expand Photo</span>
            </span>
          </div>
        </div>

        {/* Bottom Metadata */}
        <div className="p-4 bg-[#14060b] border-t border-white/10 text-left flex-1 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between gap-2 mb-1.5">
              <h4
                onClick={() => item.image && onOpenPhotoLightbox?.(item.image, item.title || item.account)}
                className="font-serif text-sm sm:text-base font-bold text-white hover:text-amber-300 transition-colors cursor-pointer truncate"
              >
                {item.title || item.account}
              </h4>
              <span className="text-[10px] font-bold uppercase text-stone-400 bg-white/5 px-2 py-0.5 rounded-full border border-white/10 shrink-0">
                Post
              </span>
            </div>

            <p className="text-xs text-amber-200/90 italic font-serif bg-amber-950/20 border-l-2 border-amber-400/60 pl-2.5 py-1 my-2 rounded-r leading-relaxed">
              &ldquo;{item.captionExcerpt}&rdquo;
            </p>

            <p className="text-xs text-stone-300 leading-relaxed font-sans line-clamp-2 mb-3">
              {item.details}
            </p>
          </div>

          <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs text-stone-400">
            <div className="flex items-center gap-3 text-[11px]">
              <span className="flex items-center gap-1 text-rose-300 font-medium">
                <Heart className="w-3.5 h-3.5 fill-rose-500/30 text-rose-400" />
                <span>{item.likes}</span>
              </span>
              <span className="flex items-center gap-1 text-amber-200 font-medium">
                <MessageCircle className="w-3.5 h-3.5 text-amber-400" />
                <span>{item.comments}</span>
              </span>
            </div>

            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-300 hover:text-white font-semibold text-[11px] inline-flex items-center gap-1 transition-colors"
            >
              <span>View Post</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    );
  }

  // 2. Interactive Live Video Player (Exact architecture from Model Portfolio site)
  return (
    <div
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group bg-[#14060b] rounded-2xl overflow-hidden border border-amber-500/25 hover:border-amber-400/60 transition-all duration-300 flex flex-col justify-between shadow-2xl hover:-translate-y-1.5"
    >
      {/* Top Header */}
      <div className="p-3 bg-[#1a080e] border-b border-amber-500/15 flex items-center justify-between gap-2">
        <a
          href={item.accountUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 font-bold text-xs text-amber-300 hover:text-white transition-colors"
        >
          <Instagram className="w-3.5 h-3.5 text-rose-400 shrink-0" />
          <span className="truncate">{item.account}</span>
        </a>

        <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/15 px-2.5 py-0.5 rounded-full border border-emerald-400/30">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
          <span>Live Reel</span>
        </span>
      </div>

      {/* Video Box (9:15 Aspect Ratio with direct on-screen / on-hover auto-playback) */}
      <div
        onClick={togglePlay}
        className="relative aspect-[9/15] overflow-hidden bg-black cursor-pointer group/video flex items-center justify-center select-none"
      >
        <video
          ref={videoRef}
          src={item.videoSrc}
          poster={item.poster}
          muted={isMuted}
          loop
          playsInline
          autoPlay
          preload="metadata"
          className="w-full h-full object-cover object-center pointer-events-none"
        />

        {/* Play/Pause Center Indicator */}
        {(!isPlaying || isHovered) && (
          <div className="absolute inset-0 bg-black/25 flex items-center justify-center pointer-events-none transition-opacity">
            <div className="w-12 h-12 rounded-full bg-black/75 backdrop-blur-md border border-amber-400/30 text-white flex items-center justify-center shadow-lg transition-transform group-hover/video:scale-110">
              {isPlaying ? (
                <Pause className="w-5 h-5 text-amber-300 fill-amber-300" />
              ) : (
                <Play className="w-5 h-5 text-amber-400 fill-amber-400 ml-0.5" />
              )}
            </div>
          </div>
        )}

        {/* Unmute / Sound Control Button */}
        <button
          onClick={toggleMute}
          className="absolute bottom-3 right-3 p-2 rounded-full bg-black/80 hover:bg-stone-900 border border-amber-400/30 text-white transition-all shadow-md z-20 hover:scale-110"
          title={isMuted ? "Tap to Unmute Sound" : "Mute Sound"}
        >
          {isMuted ? (
            <VolumeX className="w-4 h-4 text-stone-300" />
          ) : (
            <Volume2 className="w-4 h-4 text-amber-400 animate-bounce" />
          )}
        </button>

        {/* Live Status Badge */}
        <div className="absolute bottom-3 left-3 z-20 pointer-events-none">
          <span className="px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/15 text-[9px] font-bold text-stone-200 tracking-wider uppercase">
            {isPlaying ? "● Playing" : "Tap to Play"}
          </span>
        </div>
      </div>

      {/* Bottom Metadata */}
      <div className="p-4 bg-[#14060b] border-t border-white/10 text-left flex-1 flex flex-col justify-between">
        <div>
          {item.title ? (
            <div className="flex items-center justify-between gap-2 mb-1.5">
              <h4 className="font-serif text-sm sm:text-base font-bold text-white truncate">
                {item.title}
              </h4>
              {item.badge && (
                <span className="text-[10px] font-bold uppercase text-amber-300 bg-amber-400/15 px-2 py-0.5 rounded-full border border-amber-400/30 shrink-0">
                  {item.badge}
                </span>
              )}
            </div>
          ) : null}

          <p className="text-xs text-amber-200/90 italic font-serif bg-amber-950/20 border-l-2 border-amber-400/60 pl-2.5 py-1.5 my-2 rounded-r leading-relaxed">
            &ldquo;{item.captionExcerpt}&rdquo;
          </p>

          {item.details && (
            <p className="text-xs text-stone-300 leading-relaxed font-sans line-clamp-2 mb-3">
              {item.details}
            </p>
          )}
        </div>

        <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs text-stone-400">
          <div className="flex items-center gap-3 text-[11px]">
            <span className="flex items-center gap-1 text-rose-300 font-medium">
              <Heart className="w-3.5 h-3.5 fill-rose-500/30 text-rose-400" />
              <span>{item.likes}</span>
            </span>
            <span className="flex items-center gap-1 text-amber-200 font-medium">
              <MessageCircle className="w-3.5 h-3.5 text-amber-400" />
              <span>{item.comments}</span>
            </span>
          </div>

          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-300 hover:text-white font-semibold text-[11px] inline-flex items-center gap-1 transition-colors"
          >
            <span>Instagram Reel</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
};
