"use client";

import React from "react";
import { motion } from "framer-motion";
import { CounterAnimation } from "@/components/ui/CounterAnimation";

interface Stat {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  description?: string;
}

const stats: Stat[] = [
  {
    value: 15,
    suffix: "+",
    label: "Years of Excellence",
    description: "Serving Solapur since 2009",
  },
  {
    value: 5000,
    suffix: "+",
    label: "IVF Success Stories",
    description: "Babies born through our IVF centre",
  },
  {
    value: 10000,
    suffix: "+",
    label: "Patients Treated",
    description: "Across all specialities",
  },
  {
    value: 26,
    suffix: "+ Yrs",
    label: "Urology Expertise",
    description: "Dr. Harshit Shah's experience",
  },
];

export function StatsBar() {
  return (
    <section
      className="py-16 px-4 sm:px-6 lg:px-8 bg-deep-navy"
      aria-label="Hospital statistics"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="font-display text-4xl lg:text-5xl font-bold text-white mb-2">
                <CounterAnimation
                  end={stat.value}
                  suffix={stat.suffix || ""}
                  prefix={stat.prefix || ""}
                  duration={2000}
                />
              </div>
              <div className="text-teal-heal font-semibold text-sm uppercase tracking-wide mb-1">
                {stat.label}
              </div>
              {stat.description && (
                <div className="text-slate-500 text-xs">{stat.description}</div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StatsBar;
