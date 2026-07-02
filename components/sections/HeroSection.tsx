"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { HOSPITAL_INFO } from "@/lib/constants";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: "easeOut" },
  }),
};

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "5000+", label: "Successful IVF Cycles" },
  { value: "24/7", label: "Critical Care" },
];

export function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center bg-deep-navy overflow-hidden"
      aria-label="Hero section"
    >
      {/* Breathing ambient circle */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="breathing-circle w-[600px] h-[600px] rounded-full bg-teal-heal opacity-10"
          style={{ filter: "blur(80px)" }}
        />
      </div>

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-[1fr_400px] gap-12 items-center">
        <div className="max-w-4xl">
          {/* Label */}
          <motion.div
            initial="hidden"
            animate="visible"
            custom={0.1}
            variants={fadeUp}
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-teal-heal/40 text-teal-heal text-xs font-semibold uppercase tracking-widest mb-8">
              Solapur&apos;s Premier Superspeciality Centre
            </span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            initial="hidden"
            animate="visible"
            custom={0.25}
            variants={fadeUp}
            className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-6"
          >
            Healing with{" "}
            <span className="text-teal-heal">Expertise,</span>
            <br />
            Technology &amp;
            <br />
            Compassion
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial="hidden"
            animate="visible"
            custom={0.4}
            variants={fadeUp}
            className="text-lg sm:text-xl text-slate-300 leading-relaxed mb-10 max-w-2xl"
          >
            Solapur&apos;s premier destination for Advanced Critical Care, IVF
            &amp; Urology — where world-class medical expertise meets
            compassionate, patient-first care.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial="hidden"
            animate="visible"
            custom={0.55}
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/appointment"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-medical-blue text-white font-semibold rounded-sm hover:bg-blue-700 transition-colors duration-200 text-base"
            >
              Book Appointment
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/50 text-white font-semibold rounded-sm hover:bg-white hover:text-deep-navy transition-colors duration-200 text-base"
            >
              Explore Services
            </Link>
          </motion.div>

          {/* Emergency line */}
          <motion.div
            initial="hidden"
            animate="visible"
            custom={0.7}
            variants={fadeUp}
            className="mt-8"
          >
            <a
              href={HOSPITAL_INFO.phoneHref}
              className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm"
            >
              <div className="flex h-2 w-2">
                <span className="animate-ping absolute h-2 w-2 rounded-full bg-teal-heal opacity-75" />
                <span className="relative h-2 w-2 rounded-full bg-teal-heal" />
              </div>
              <Phone className="w-4 h-4 text-teal-heal" />
              24/7 Emergency: {HOSPITAL_INFO.phone}
            </a>
          </motion.div>
        </div>

        {/* Visual panel — large screens only */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
          className="hidden lg:block relative"
        >
          <div
            className="relative aspect-[4/5] rounded-lg overflow-hidden border border-white/10"
            style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.45)" }}
          >
            <Image
              src="/images/hero/patient-family-care.jpg"
              alt="A multi-generation family with their doctor at Deep Superspeciality Hospital"
              fill
              priority
              className="object-cover"
              sizes="400px"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(0deg, rgba(10,22,40,0.55) 0%, rgba(10,22,40,0) 45%)",
              }}
              aria-hidden="true"
            />
          </div>
          {/* Floating stat chip */}
          <div
            className="absolute -bottom-6 -left-6 bg-white rounded-lg px-5 py-4 border border-soft-grey"
            style={{ boxShadow: "0 12px 30px rgba(0,0,0,0.18)" }}
          >
            <div className="font-display text-2xl font-bold text-deep-navy">5000+</div>
            <div className="text-xs text-text-muted mt-0.5">IVF Babies Born</div>
          </div>
        </motion.div>
        </div>
      </div>

      {/* Stats Band */}
      <div className="relative z-10 w-full bg-white/5 backdrop-blur-sm border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-3 gap-4 sm:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial="hidden"
                animate="visible"
                custom={0.8 + index * 0.1}
                variants={fadeUp}
                className="text-center"
              >
                <div className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
