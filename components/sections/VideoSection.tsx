"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

interface VideoSectionProps {
  label?: string;
  title?: string;
  subtitle?: string;
}

export function VideoSection({
  label = "Inside Deep Hospital",
  title = "Care, Built Around You",
  subtitle = "A short look at the experience patients and families find at Deep Superspeciality Hospital — from first consultation to recovery.",
}: VideoSectionProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  return (
    <section
      className="py-20 px-4 sm:px-6 lg:px-8 bg-deep-navy"
      aria-label="Hospital introduction video"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-teal-heal/40 text-teal-heal text-xs font-semibold uppercase tracking-widest mb-5">
            {label}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            {title}
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative rounded-lg overflow-hidden border border-white/10 group"
          style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.4)" }}
        >
          <div className="relative aspect-video bg-black">
            <video
              ref={videoRef}
              poster="/images/hospital-intro-poster.jpg"
              muted={isMuted}
              loop
              playsInline
              preload="metadata"
              className="w-full h-full object-cover"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            >
              <source src="/videos/hospital-intro.mp4" type="video/mp4" />
            </video>

            {/* Center play button */}
            <button
              type="button"
              onClick={togglePlay}
              aria-label={isPlaying ? "Pause video" : "Play video"}
              className={`absolute inset-0 flex items-center justify-center bg-deep-navy/30 transition-opacity duration-300 ${
                isPlaying ? "opacity-0 group-hover:opacity-100" : "opacity-100"
              }`}
            >
              <span className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/90 hover:bg-white transition-colors">
                {isPlaying ? (
                  <Pause className="w-7 h-7 sm:w-8 sm:h-8 text-deep-navy" />
                ) : (
                  <Play className="w-7 h-7 sm:w-8 sm:h-8 text-deep-navy ml-1" />
                )}
              </span>
            </button>

            {/* Mute toggle */}
            <button
              type="button"
              onClick={toggleMute}
              aria-label={isMuted ? "Unmute video" : "Mute video"}
              className="absolute bottom-4 right-4 flex items-center justify-center w-10 h-10 rounded-full bg-deep-navy/60 hover:bg-deep-navy/80 transition-colors text-white"
            >
              {isMuted ? (
                <VolumeX className="w-4 h-4" />
              ) : (
                <Volume2 className="w-4 h-4" />
              )}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default VideoSection;
