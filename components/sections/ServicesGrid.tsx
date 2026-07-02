"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Activity,
  Heart,
  Users,
  Shield,
  ArrowRight,
} from "lucide-react";
import { SERVICES } from "@/lib/constants";
import { SectionHeader } from "@/components/ui/SectionHeader";

const iconMap: Record<string, React.ElementType> = {
  activity: Activity,
  heart: Heart,
  users: Users,
  shield: Shield,
};

export function ServicesGrid() {
  return (
    <section
      className="py-20 px-4 sm:px-6 lg:px-8 bg-warm-white"
      aria-label="Our services"
      id="services"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            label="What We Offer"
            title="Specialised Medical Services"
            subtitle="Comprehensive care across critical care, fertility, and urology — delivered by experienced specialists in a state-of-the-art facility."
            align="center"
          />
        </motion.div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon] || Activity;
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white rounded-lg border border-soft-grey p-6 transition-all duration-300 hover:shadow-md overflow-hidden"
                style={{
                  boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
                  borderLeft: "3px solid transparent",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderLeftColor =
                    "#0D9488";
                  (e.currentTarget as HTMLDivElement).style.transform =
                    "translateX(2px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderLeftColor =
                    "transparent";
                  (e.currentTarget as HTMLDivElement).style.transform =
                    "translateX(0)";
                }}
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-lg bg-teal-heal/10 flex items-center justify-center mb-4 group-hover:bg-teal-heal/20 transition-colors">
                  <Icon className="w-6 h-6 text-teal-heal" />
                </div>

                {/* Title */}
                <h3 className="font-display text-lg font-bold text-deep-navy mb-2 leading-snug">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-text-muted text-sm leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Learn More */}
                <Link
                  href={`/services#${service.slug}`}
                  className="inline-flex items-center gap-1.5 text-medical-blue text-sm font-semibold hover:gap-2.5 transition-all duration-200"
                  aria-label={`Learn more about ${service.title}`}
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ServicesGrid;
