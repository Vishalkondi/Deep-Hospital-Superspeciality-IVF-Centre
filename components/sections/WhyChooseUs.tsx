"use client";

import React from "react";
import { motion } from "framer-motion";
import { Building2, UserCheck, HeartHandshake } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

const reasons = [
  {
    icon: Building2,
    title: "Advanced Infrastructure",
    description:
      "Modern ICU with ventilator support, digital operation theatres, in-house diagnostics, and round-the-clock monitoring systems — all under one roof in Solapur.",
    features: [
      "Multi-bed ICU with continuous monitoring",
      "Advanced laparoscopic OT",
      "In-house pathology & imaging",
      "State-of-the-art embryology lab",
    ],
    color: "text-medical-blue",
    bg: "bg-blue-50",
  },
  {
    icon: UserCheck,
    title: "Expert Specialists",
    description:
      "Our team includes experienced surgeons, fertility specialists, urologists, and anaesthesiologists who bring decades of combined expertise to every case.",
    features: [
      "26+ years urology experience",
      "Lead IVF & fertility specialist",
      "Expert anaesthesiology team",
      "Continuous medical education",
    ],
    color: "text-teal-heal",
    bg: "bg-teal-50",
  },
  {
    icon: HeartHandshake,
    title: "Compassionate Care",
    description:
      "Patient-first approach at every step. Our team communicates in Marathi, Hindi, and English, ensuring you always feel heard, respected, and cared for.",
    features: [
      "Marathi & Hindi communication",
      "Dedicated patient counselling",
      "Transparent treatment plans",
      "Family-centred care approach",
    ],
    color: "text-gold-trust",
    bg: "bg-amber-50",
  },
];

export function WhyChooseUs() {
  return (
    <section
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white"
      aria-label="Why choose Deep Hospital"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            label="Why Deep Hospital"
            title="Expertise You Can Trust"
            subtitle="Three pillars that make Deep Superspeciality Hospital the most trusted healthcare destination in Solapur."
            align="center"
          />
        </motion.div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="flex flex-col"
              >
                <div
                  className={`w-14 h-14 rounded-lg ${reason.bg} flex items-center justify-center mb-5`}
                >
                  <Icon className={`w-7 h-7 ${reason.color}`} />
                </div>
                <h3 className="font-display text-xl font-bold text-deep-navy mb-3">
                  {reason.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed mb-5">
                  {reason.description}
                </p>
                <ul className="space-y-2 mt-auto">
                  {reason.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-text-muted"
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${reason.color} mt-2 flex-shrink-0 bg-current`} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
