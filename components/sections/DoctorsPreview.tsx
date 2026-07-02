"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, GraduationCap } from "lucide-react";
import { DOCTORS } from "@/lib/constants";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { DoctorAvatar } from "@/components/ui/DoctorAvatar";

export function DoctorsPreview() {
  return (
    <section
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white"
      aria-label="Our medical team"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            label="Our Team"
            title="Meet Our Specialists"
            subtitle="Experienced, compassionate specialists dedicated to your health and wellbeing."
            align="center"
          />
        </motion.div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          {DOCTORS.map((doctor, index) => (
            <motion.div
              key={doctor.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group bg-white rounded-lg border border-soft-grey overflow-hidden transition-all duration-300 hover:shadow-md hover:-translate-y-1"
              style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.08)" }}
            >
              {/* Photo */}
              <div className="relative h-64 bg-soft-grey overflow-hidden">
                <DoctorAvatar
                  doctor={doctor}
                  className="absolute inset-0"
                  imageClassName="group-hover:scale-105 transition-transform duration-500"
                />
                {/* Experience badge overlay */}
                {doctor.experience && doctor.experience !== "Consultant" && doctor.experience !== "Senior Consultant" && (
                  <div className="absolute top-3 right-3">
                    <Badge variant="blue">{doctor.experience}</Badge>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="mb-1">
                  <Badge variant="teal">{doctor.department}</Badge>
                </div>
                <h3 className="font-display text-lg font-bold text-deep-navy mt-3 mb-1">
                  {doctor.name}
                </h3>
                <p className="text-text-muted text-sm mb-2">{doctor.designation}</p>
                <div className="flex items-start gap-1.5 mb-4">
                  <GraduationCap className="w-4 h-4 text-text-muted flex-shrink-0 mt-0.5" />
                  <span className="text-text-muted text-xs">
                    {doctor.qualifications}
                  </span>
                </div>
                <Link
                  href={`/doctors/${doctor.slug}`}
                  className="inline-flex items-center gap-1.5 text-medical-blue text-sm font-semibold hover:gap-2.5 transition-all duration-200"
                  aria-label={`View profile of ${doctor.name}`}
                >
                  View Profile
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-10"
        >
          <Link
            href="/doctors"
            className="inline-flex items-center gap-2 px-8 py-3 border-2 border-medical-blue text-medical-blue font-semibold rounded-sm hover:bg-medical-blue hover:text-white transition-colors duration-200"
          >
            Meet All Doctors
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default DoctorsPreview;
