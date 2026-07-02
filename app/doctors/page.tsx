"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, GraduationCap, Award } from "lucide-react";
import { DOCTORS, DEPARTMENTS } from "@/lib/constants";
import { Badge } from "@/components/ui/Badge";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { DoctorAvatar } from "@/components/ui/DoctorAvatar";

export default function DoctorsPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredDoctors =
    activeFilter === "All"
      ? DOCTORS
      : DOCTORS.filter((d) => d.department === activeFilter);

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-deep-navy py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm">
              <li>
                <Link href="/" className="text-slate-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li className="text-slate-600">/</li>
              <li className="text-white font-medium">Our Doctors</li>
            </ol>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 rounded-full border border-teal-heal/40 text-teal-heal text-xs font-semibold uppercase tracking-widest mb-6">
              Meet Our Team
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
              Our Medical Specialists
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed">
              Experienced, board-certified specialists committed to delivering
              the highest standard of care with expertise and compassion.
            </p>
          </div>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-warm-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            label="Our Team"
            title="Find Your Specialist"
            align="center"
          />

          {/* Filter Tabs */}
          <div
            className="flex flex-wrap justify-center gap-2 mt-8 mb-12"
            role="tablist"
            aria-label="Filter doctors by department"
          >
            {DEPARTMENTS.map((dept) => (
              <button
                key={dept}
                onClick={() => setActiveFilter(dept)}
                role="tab"
                aria-selected={activeFilter === dept}
                className={`px-5 py-2 rounded-sm text-sm font-semibold transition-colors duration-150 ${
                  activeFilter === dept
                    ? "bg-medical-blue text-white"
                    : "bg-white border border-soft-grey text-text-muted hover:border-medical-blue hover:text-medical-blue"
                }`}
              >
                {dept}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDoctors.map((doctor) => (
              <div
                key={doctor.slug}
                className="bg-white rounded-lg border border-soft-grey overflow-hidden transition-all duration-300 hover:shadow-md hover:-translate-y-1"
                style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.08)" }}
              >
                {/* Photo */}
                <div className="relative h-72 bg-soft-grey overflow-hidden">
                  <DoctorAvatar doctor={doctor} className="absolute inset-0" />
                  {doctor.experience !== "Consultant" && doctor.experience !== "Senior Consultant" && (
                    <div className="absolute top-3 right-3">
                      <span className="bg-medical-blue text-white text-xs font-bold px-3 py-1 rounded-full">
                        {doctor.experience}
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-2">
                    <Badge variant="teal">{doctor.department}</Badge>
                  </div>
                  <h2 className="font-display text-xl font-bold text-deep-navy mt-3 mb-1">
                    {doctor.name}
                  </h2>
                  <p className="text-text-muted text-sm mb-3">
                    {doctor.designation}
                  </p>
                  <div className="flex items-start gap-2 mb-4">
                    <GraduationCap className="w-4 h-4 text-text-muted flex-shrink-0 mt-0.5" />
                    <span className="text-text-muted text-xs">
                      {doctor.qualifications}
                    </span>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-1 mb-5">
                    {doctor.highlights.slice(0, 3).map((highlight) => (
                      <div key={highlight} className="flex items-center gap-2 text-xs text-text-muted">
                        <Award className="w-3 h-3 text-teal-heal flex-shrink-0" />
                        {highlight}
                      </div>
                    ))}
                    {doctor.highlights.length > 3 && (
                      <div className="text-xs text-text-muted pl-5">
                        +{doctor.highlights.length - 3} more specialities
                      </div>
                    )}
                  </div>

                  <Link
                    href={`/doctors/${doctor.slug}`}
                    className="inline-flex items-center gap-1.5 text-medical-blue text-sm font-semibold hover:gap-2.5 transition-all duration-200"
                    aria-label={`View full profile of ${doctor.name}`}
                  >
                    View Full Profile
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {filteredDoctors.length === 0 && (
            <div className="text-center py-16 text-text-muted">
              No doctors found in this category.
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-medical-blue text-center">
        <div className="max-w-2xl mx-auto text-white">
          <h2 className="font-display text-3xl font-bold mb-4">
            Not Sure Which Doctor to See?
          </h2>
          <p className="text-blue-100 mb-8">
            Call us and our patient coordinator will guide you to the right
            specialist based on your condition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/appointment"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white text-medical-blue font-bold rounded-sm hover:bg-warm-white transition-colors"
            >
              Book an Appointment
            </Link>
            <a
              href="tel:02172727224"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border-2 border-white/40 text-white font-semibold rounded-sm hover:bg-white/10 transition-colors"
            >
              Call 0217-2727224
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
