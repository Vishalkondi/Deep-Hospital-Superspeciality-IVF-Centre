"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ClipboardList,
  Activity,
  CircleDot,
  Dna,
  MoveRight,
  HeartPulse,
} from "lucide-react";
import { IVF_STEPS } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  "clipboard-list": ClipboardList,
  activity: Activity,
  "circle-dot": CircleDot,
  dna: Dna,
  "move-right": MoveRight,
  "heart-pulse": HeartPulse,
};

export function IVFProcess() {
  return (
    <section
      className="py-20 px-4 sm:px-6 lg:px-8 bg-warm-white"
      aria-label="IVF treatment process"
    >
      <div className="max-w-7xl mx-auto">
        {/* Desktop: horizontal timeline */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-6 gap-0 relative">
            {/* Connecting line */}
            <div
              className="absolute top-8 left-0 right-0 h-0.5 bg-soft-grey z-0"
              style={{ marginLeft: "8.33%", marginRight: "8.33%" }}
              aria-hidden="true"
            />

            {IVF_STEPS.map((step, index) => {
              const Icon = iconMap[step.icon] || Activity;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative z-10 flex flex-col items-center text-center px-2"
                >
                  {/* Step circle */}
                  <div className="w-16 h-16 rounded-full bg-white border-2 border-teal-heal flex items-center justify-center mb-4 shadow-sm">
                    <Icon className="w-7 h-7 text-teal-heal" />
                  </div>
                  {/* Step number */}
                  <span className="text-xs font-bold uppercase tracking-widest text-text-muted mb-1">
                    Step {step.step}
                  </span>
                  <h3 className="font-display text-base font-bold text-deep-navy mb-2 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-text-muted text-xs leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile: vertical list */}
        <div className="lg:hidden space-y-6">
          {IVF_STEPS.map((step, index) => {
            const Icon = iconMap[step.icon] || Activity;
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-4"
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-teal-heal/10 border-2 border-teal-heal flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-teal-heal" />
                  </div>
                  {index < IVF_STEPS.length - 1 && (
                    <div className="w-0.5 h-full bg-soft-grey mt-2" aria-hidden="true" />
                  )}
                </div>
                <div className="pb-6">
                  <span className="text-xs font-bold uppercase tracking-widest text-text-muted">
                    Step {step.step}
                  </span>
                  <h3 className="font-display text-lg font-bold text-deep-navy mt-1 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default IVFProcess;
