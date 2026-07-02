"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Baby } from "lucide-react";
import { CounterAnimation } from "@/components/ui/CounterAnimation";

export function IVFSpotlight() {
  return (
    <section
      className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0D9488 0%, #0A1628 60%, #0A1628 100%)",
      }}
      aria-label="IVF Centre spotlight"
    >
      {/* Decorative circle */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, #0D9488 0%, transparent 70%)",
          transform: "translate(30%, -30%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-teal-heal/40 text-teal-heal text-xs font-semibold uppercase tracking-widest mb-6">
              Solapur Test Tube Baby Centre
            </span>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Begin Your Journey
              <br />
              to{" "}
              <span className="text-teal-heal">Parenthood</span>
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8">
              With over 5,000 successful IVF cycles and a team of dedicated
              fertility specialists, Deep Hospital has helped thousands of
              couples across Maharashtra experience the joy of parenthood.
              Our personalised protocols and state-of-the-art embryology lab
              give you the best chance of success.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { label: "Personalised treatment protocols" },
                { label: "Advanced embryology lab" },
                { label: "Experienced fertility specialists" },
                { label: "Emotional support throughout" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-teal-heal mt-2 flex-shrink-0" />
                  <span className="text-slate-300 text-sm">{item.label}</span>
                </div>
              ))}
            </div>

            <Link
              href="/ivf-centre"
              className="inline-flex items-center gap-2 px-8 py-4 bg-teal-heal text-white font-semibold rounded-sm hover:bg-teal-700 transition-colors duration-200"
            >
              Talk to Our Fertility Expert
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>

          {/* Right: Photo + Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col items-center justify-center"
          >
            <div className="relative">
              {/* Decorative embryology photo, offset behind the stat circle */}
              <div
                className="hidden sm:block absolute -top-10 -left-14 w-44 h-44 rounded-full overflow-hidden border-4 border-white/10"
                style={{ boxShadow: "0 12px 40px rgba(0,0,0,0.35)" }}
                aria-hidden="true"
              >
                <Image
                  src="/images/ivf/ivf-embryo-cluster.jpg"
                  alt=""
                  fill
                  className="object-cover"
                  sizes="176px"
                />
              </div>

              {/* Main circle stat */}
              <div className="relative w-64 h-64 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex flex-col items-center justify-center text-center p-8 mx-auto">
                <Baby className="w-10 h-10 text-teal-heal mb-3" />
                <div className="font-display text-5xl font-bold text-white">
                  <CounterAnimation end={5000} suffix="+" duration={2500} />
                </div>
                <p className="text-teal-heal font-semibold text-sm mt-1 uppercase tracking-wide">
                  Babies Born
                </p>
                <p className="text-slate-400 text-xs mt-1">
                  Through IVF at Deep Hospital
                </p>
              </div>

              {/* Supporting stats */}
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center border border-white/10">
                  <div className="font-display text-2xl font-bold text-white">
                    <CounterAnimation end={15} suffix="+" duration={1500} />
                  </div>
                  <div className="text-slate-400 text-xs mt-1">Years Experience</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center border border-white/10">
                  <div className="font-display text-2xl font-bold text-white">
                    High
                  </div>
                  <div className="text-slate-400 text-xs mt-1">Success Rate</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default IVFSpotlight;
