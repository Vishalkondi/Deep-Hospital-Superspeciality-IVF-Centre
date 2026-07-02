"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const scrollAmount = 340;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section
      className="py-20 px-4 sm:px-6 lg:px-8 bg-warm-white"
      aria-label="Patient testimonials"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeader
              label="Patient Stories"
              title="Real Journeys, Real Hope"
              subtitle="Thousands of families trust Deep Hospital. Here are some of their stories."
              align="left"
            />
          </motion.div>

          {/* Navigation Buttons (desktop) */}
          <div className="flex gap-3 flex-shrink-0">
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 rounded-full border border-soft-grey bg-white flex items-center justify-center hover:bg-soft-grey transition-colors"
              aria-label="Scroll testimonials left"
            >
              <ChevronLeft className="w-5 h-5 text-text-muted" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 rounded-full border border-soft-grey bg-white flex items-center justify-center hover:bg-soft-grey transition-colors"
              aria-label="Scroll testimonials right"
            >
              <ChevronRight className="w-5 h-5 text-text-muted" />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
          role="list"
          aria-label="Patient testimonials carousel"
        >
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex-shrink-0 w-[300px] sm:w-[340px] bg-white rounded-lg border border-soft-grey p-6 snap-start"
              style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.08)" }}
              role="listitem"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4" aria-label={`${testimonial.rating} out of 5 stars`}>
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-gold-trust text-gold-trust"
                  />
                ))}
              </div>

              {/* Quote icon */}
              <Quote className="w-6 h-6 text-teal-heal/30 mb-3" aria-hidden="true" />

              {/* Quote text */}
              <blockquote className="text-text-muted text-sm leading-relaxed mb-5 italic">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Patient info */}
              <div className="border-t border-soft-grey pt-4">
                <div className="font-semibold text-text-primary text-sm">
                  {testimonial.name}
                </div>
                <div className="text-teal-heal text-xs font-medium mt-0.5 uppercase tracking-wide">
                  {testimonial.treatment}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
