"use client";

import React from "react";
import { motion } from "framer-motion";
import { Phone, MapPin, AlertCircle } from "lucide-react";
import { HOSPITAL_INFO } from "@/lib/constants";

export function EmergencyBanner() {
  return (
    <section
      className="bg-emergency-red py-10 px-4 sm:px-6 lg:px-8"
      aria-label="Emergency contact information"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col lg:flex-row items-center justify-between gap-6 text-white"
        >
          {/* Left: Message */}
          <div className="flex items-center gap-4 text-center lg:text-left">
            <div className="hidden sm:flex w-14 h-14 rounded-full bg-white/20 items-center justify-center flex-shrink-0">
              <AlertCircle className="w-7 h-7 text-white" />
            </div>
            <div>
              <div className="text-sm font-semibold uppercase tracking-widest text-red-100 mb-1">
                Medical Emergency?
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold">
                24/7 Emergency Care Available
              </h2>
              <p className="text-red-100 text-sm mt-1">
                Immediate medical attention — ICU, trauma, and surgical team on
                standby.
              </p>
            </div>
          </div>

          {/* Right: CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <a
              href={HOSPITAL_INFO.phoneHref}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-emergency-red font-bold rounded-sm hover:bg-red-50 transition-colors text-lg"
              aria-label={`Call emergency number ${HOSPITAL_INFO.phone}`}
            >
              <Phone className="w-5 h-5" />
              {HOSPITAL_INFO.phone}
            </a>
            <a
              href={HOSPITAL_INFO.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 border-2 border-white text-white font-semibold rounded-sm hover:bg-white/10 transition-colors"
              aria-label="Get directions to Deep Hospital"
            >
              <MapPin className="w-5 h-5" />
              Get Directions
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default EmergencyBanner;
