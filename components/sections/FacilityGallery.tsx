"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Expand } from "lucide-react";
import { FACILITY_GALLERY } from "@/lib/constants";

export function FacilityGallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = () => setActiveIndex(null);
  const showPrev = () =>
    setActiveIndex((i) =>
      i === null ? null : (i - 1 + FACILITY_GALLERY.length) % FACILITY_GALLERY.length
    );
  const showNext = () =>
    setActiveIndex((i) => (i === null ? null : (i + 1) % FACILITY_GALLERY.length));

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {FACILITY_GALLERY.map((img, index) => (
          <motion.button
            key={img.src}
            type="button"
            onClick={() => setActiveIndex(index)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="group relative aspect-[4/3] rounded-lg overflow-hidden border border-soft-grey text-left"
            aria-label={`View larger image: ${img.caption}`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-between">
              <span className="text-white text-sm font-semibold">{img.caption}</span>
              <Expand className="w-4 h-4 text-white" />
            </div>
          </motion.button>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-deep-navy/95 flex items-center justify-center px-4 py-10"
            role="dialog"
            aria-modal="true"
            aria-label="Image viewer"
            onClick={close}
          >
            <button
              type="button"
              onClick={close}
              aria-label="Close image viewer"
              className="absolute top-5 right-5 text-white/80 hover:text-white transition-colors"
            >
              <X className="w-7 h-7" />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                showPrev();
              }}
              aria-label="Previous image"
              className="absolute left-3 sm:left-6 text-white/70 hover:text-white transition-colors"
            >
              <ChevronLeft className="w-9 h-9" />
            </button>

            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25 }}
              className="relative max-w-3xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                <Image
                  src={FACILITY_GALLERY[activeIndex].src}
                  alt={FACILITY_GALLERY[activeIndex].alt}
                  fill
                  className="object-cover"
                  sizes="100vw"
                  priority
                />
              </div>
              <p className="text-center text-white font-medium mt-4">
                {FACILITY_GALLERY[activeIndex].caption}
              </p>
            </motion.div>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                showNext();
              }}
              aria-label="Next image"
              className="absolute right-3 sm:right-6 text-white/70 hover:text-white transition-colors"
            >
              <ChevronRight className="w-9 h-9" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default FacilityGallery;
