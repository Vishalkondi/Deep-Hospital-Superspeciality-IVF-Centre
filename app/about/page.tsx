import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Building2,
  Award,
  Target,
  Eye,
  CheckCircle2,
  Users,
  Microscope,
  HeartPulse,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { MapEmbed } from "@/components/ui/MapEmbed";
import { FacilityGallery } from "@/components/sections/FacilityGallery";
import { HOSPITAL_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us | Deep Superspeciality Hospital Solapur",
  description:
    "Learn about Deep Superspeciality Hospital & Solapur Test Tube Baby Centre — our story, vision, infrastructure, and commitment to world-class healthcare in Solapur, Maharashtra.",
};

const infrastructure = [
  { icon: Building2, stat: "12+", label: "ICU Beds", desc: "Advanced monitoring & ventilator support" },
  { icon: Microscope, stat: "2", label: "Operation Theatres", desc: "Fully equipped, sterile surgical suites" },
  { icon: HeartPulse, stat: "24/7", label: "Emergency Care", desc: "Round-the-clock specialist availability" },
  { icon: Users, stat: "50+", label: "Medical Staff", desc: "Doctors, nurses & paramedical team" },
];

const accreditations = [
  "Registered under Maharashtra Medical Council",
  "IVF Lab with Quality Certification",
  "CGHS & ESI Empanelled",
  "Member — Indian Society for Assisted Reproduction (ISAR)",
  "Member — Urological Society of India (USI)",
];

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Page Hero */}
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
              <li className="text-white font-medium">About Us</li>
            </ol>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 rounded-full border border-teal-heal/40 text-teal-heal text-xs font-semibold uppercase tracking-widest mb-6">
              Our Story
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
              About Deep Superspeciality Hospital
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed">
              For over 15 years, we have been Solapur&apos;s most trusted healthcare
              partner — combining world-class medical expertise with genuine
              compassion for every patient.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader
                label="Our Journey"
                title="A Legacy of Care in Solapur"
                align="left"
              />
              <div className="mt-6 space-y-4 text-text-muted leading-relaxed">
                <p>
                  Deep Superspeciality Hospital was founded with a singular
                  mission: to bring the standard of care available in Mumbai and
                  Pune to patients in Solapur and the surrounding districts of
                  Maharashtra.
                </p>
                <p>
                  Over the years, we have grown from a small clinical practice
                  into a full-fledged superspeciality hospital, offering advanced
                  critical care, IVF & fertility treatments, urology, and
                  surgical services — all under one roof.
                </p>
                <p>
                  The Solapur Test Tube Baby Centre, our dedicated IVF wing, has
                  helped over 5,000 couples experience the joy of parenthood. We
                  believe every couple deserves access to world-class fertility
                  care regardless of geography.
                </p>
                <p>
                  Our team of specialists — led by Dr. Archana S. Shah, Dr.
                  Harshit Shah, and Dr. Sonia Gandhi — brings decades of
                  experience and a shared commitment to patient-first care.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/facility/facility-reception.jpg"
                alt="Reception and lobby at Deep Superspeciality Hospital, Bhavani Peth, Solapur"
                width={600}
                height={500}
                className="rounded-lg w-full object-cover aspect-[6/5]"
              />
              <div className="absolute -bottom-4 -left-4 bg-deep-navy text-white rounded-lg p-5 shadow-lg">
                <div className="font-display text-3xl font-bold text-teal-heal">15+</div>
                <div className="text-sm text-slate-300 mt-1">Years of excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-warm-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            label="Our Purpose"
            title="Vision & Mission"
            align="center"
          />
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <Card padding="lg">
              <div className="w-12 h-12 rounded-lg bg-medical-blue/10 flex items-center justify-center mb-5">
                <Eye className="w-6 h-6 text-medical-blue" />
              </div>
              <h3 className="font-display text-xl font-bold text-deep-navy mb-3">
                Our Vision
              </h3>
              <p className="text-text-muted leading-relaxed">
                To be the most trusted superspeciality healthcare centre in
                Marathwada and beyond — where every patient, regardless of
                background, receives world-class medical care with dignity and
                compassion.
              </p>
            </Card>
            <Card padding="lg">
              <div className="w-12 h-12 rounded-lg bg-teal-heal/10 flex items-center justify-center mb-5">
                <Target className="w-6 h-6 text-teal-heal" />
              </div>
              <h3 className="font-display text-xl font-bold text-deep-navy mb-3">
                Our Mission
              </h3>
              <p className="text-text-muted leading-relaxed">
                To deliver evidence-based, technologically advanced medical
                treatment with deep empathy. To make specialist care accessible
                in Solapur, so patients do not have to travel to Mumbai or Pune
                for quality healthcare.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            label="Our Facilities"
            title="Infrastructure Highlights"
            subtitle="State-of-the-art equipment and facilities designed for your safety and recovery."
            align="center"
          />
          <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-6">
            {infrastructure.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="text-center p-6 bg-warm-white rounded-lg border border-soft-grey">
                  <div className="w-12 h-12 rounded-full bg-teal-heal/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-teal-heal" />
                  </div>
                  <div className="font-display text-3xl font-bold text-deep-navy mb-1">
                    {item.stat}
                  </div>
                  <div className="font-semibold text-text-primary text-sm mb-1">{item.label}</div>
                  <div className="text-text-muted text-xs">{item.desc}</div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-display text-xl font-bold text-deep-navy mb-4">
                Equipment & Technology
              </h3>
              <ul className="space-y-3">
                {[
                  "Advanced IVF embryology lab with controlled environment",
                  "Digital X-ray and ultrasound suite",
                  "Multi-parameter ICU monitoring systems",
                  "Laparoscopic towers for minimally invasive surgery",
                  "Endourological equipment (PCNL, RIRS, URS)",
                  "Epidural and spinal anaesthesia equipment",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-text-muted text-sm">
                    <CheckCircle2 className="w-4 h-4 text-teal-heal flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            {/* OT/equipment photo */}
            <Image
              src="/images/facility/facility-ot.jpg"
              alt="Deep Hospital operation theatre with advanced surgical equipment"
              width={600}
              height={400}
              className="rounded-lg w-full object-cover aspect-[3/2]"
            />
          </div>
        </div>
      </section>

      {/* Facility Gallery */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-warm-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            label="Take a Look Inside"
            title="Our Facility"
            subtitle="A glimpse of the spaces where care happens — from our welcoming reception to our embryology lab and operation theatre."
            align="center"
          />
          <div className="mt-12">
            <FacilityGallery />
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            label="Certifications"
            title="Accreditations & Memberships"
            align="center"
          />
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {accreditations.map((acc) => (
              <div
                key={acc}
                className="flex items-center gap-2 bg-white rounded-lg px-5 py-3 border border-soft-grey shadow-sm"
              >
                <Award className="w-4 h-4 text-gold-trust flex-shrink-0" />
                <span className="text-sm font-medium text-text-primary">{acc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-warm-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            label="Find Us"
            title="Our Location"
            align="center"
          />
          <div className="mt-10">
            <MapEmbed height="450px" />
          </div>
          <div className="mt-6 text-center">
            <p className="text-text-muted">{HOSPITAL_INFO.address}</p>
            <a
              href={HOSPITAL_INFO.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 text-medical-blue font-semibold hover:underline"
            >
              Open in Google Maps →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
