import type { Metadata } from "next";
import Link from "next/link";
import {
  Clock,
  FileText,
  ShieldCheck,
  Download,
  CheckCircle2,
  AlertCircle,
  Users,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Accordion } from "@/components/ui/Accordion";
import { FAQS_GENERAL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Patient Information | Deep Superspeciality Hospital Solapur",
  description:
    "Patient information for Deep Superspeciality Hospital Solapur — OPD timings, appointment process, insurance, visiting hours, patient rights, and FAQs.",
};

const opdTimings = [
  { day: "Monday", timing: "9:00 AM – 8:00 PM" },
  { day: "Tuesday", timing: "9:00 AM – 8:00 PM" },
  { day: "Wednesday", timing: "9:00 AM – 8:00 PM" },
  { day: "Thursday", timing: "9:00 AM – 8:00 PM" },
  { day: "Friday", timing: "9:00 AM – 8:00 PM" },
  { day: "Saturday", timing: "9:00 AM – 8:00 PM" },
  { day: "Sunday", timing: "Emergency Only (24/7)" },
];

const appointmentSteps = [
  {
    step: 1,
    title: "Choose & Book",
    desc: "Select your department and preferred doctor online, or call 0217-2727224. Our patient coordinator will confirm your slot.",
    icon: FileText,
  },
  {
    step: 2,
    title: "Prepare & Arrive",
    desc: "Bring your previous medical records, prescription, and any lab reports. Arrive 15 minutes before your scheduled time.",
    icon: CheckCircle2,
  },
  {
    step: 3,
    title: "Consult & Follow Up",
    desc: "Meet your specialist for a thorough consultation. Receive your treatment plan and follow-up schedule before leaving.",
    icon: Users,
  },
];

const patientRights = [
  "Right to receive care regardless of religion, caste, gender, or financial status",
  "Right to be informed about your diagnosis, treatment plan, and prognosis",
  "Right to give informed consent before any procedure",
  "Right to privacy and confidentiality of your medical records",
  "Right to a second opinion",
  "Right to access your medical records",
  "Right to refuse treatment and be informed of consequences",
  "Right to be treated with dignity and respect at all times",
];

const patientResponsibilities = [
  "Provide accurate and complete medical history to your doctor",
  "Follow the prescribed treatment plan and medication schedule",
  "Attend all scheduled follow-up appointments",
  "Inform hospital staff of any allergies or adverse reactions",
  "Treat hospital staff with respect and courtesy",
  "Settle your bills and insurance claims in a timely manner",
  "Do not bring or consume alcohol or tobacco on hospital premises",
];

export default function PatientInfoPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-deep-navy py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm">
              <li><Link href="/" className="text-slate-400 hover:text-white">Home</Link></li>
              <li className="text-slate-600">/</li>
              <li className="text-white font-medium">Patient Info</li>
            </ol>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 rounded-full border border-teal-heal/40 text-teal-heal text-xs font-semibold uppercase tracking-widest mb-6">
              Patient Hub
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
              Patient Information
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed">
              Everything you need to know for a smooth, stress-free visit to
              Deep Superspeciality Hospital.
            </p>
          </div>
        </div>
      </section>

      {/* Appointment Process */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            label="Getting Started"
            title="How to Book an Appointment"
            align="center"
          />
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {appointmentSteps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.step} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-medical-blue/10 border-2 border-medical-blue flex items-center justify-center mx-auto mb-5">
                    <Icon className="w-7 h-7 text-medical-blue" />
                  </div>
                  <div className="text-xs font-bold uppercase tracking-widest text-text-muted mb-2">
                    Step {step.step}
                  </div>
                  <h3 className="font-display text-lg font-bold text-deep-navy mb-2">
                    {step.title}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/appointment"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-medical-blue text-white font-semibold rounded-sm hover:bg-blue-700 transition-colors"
            >
              Book Appointment Online
            </Link>
          </div>
        </div>
      </section>

      {/* OPD Timings */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-warm-white">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            label="OPD Hours"
            title="Outpatient Department Timings"
            align="center"
          />
          <div className="mt-10 bg-white rounded-lg border border-soft-grey overflow-hidden">
            <div className="divide-y divide-soft-grey">
              {opdTimings.map((item) => (
                <div
                  key={item.day}
                  className={`flex items-center justify-between px-6 py-4 ${
                    item.day === "Sunday" ? "bg-teal-heal/5" : ""
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Clock className={`w-4 h-4 ${item.day === "Sunday" ? "text-teal-heal" : "text-text-muted"}`} />
                    <span className="font-semibold text-text-primary">
                      {item.day}
                    </span>
                  </div>
                  <span className={`text-sm font-medium ${item.day === "Sunday" ? "text-teal-heal" : "text-text-muted"}`}>
                    {item.timing}
                  </span>
                </div>
              ))}
            </div>
            <div className="bg-deep-navy px-6 py-4 flex items-center gap-3">
              <AlertCircle className="w-5 h-5 text-teal-heal flex-shrink-0" />
              <span className="text-white text-sm font-medium">
                Emergency services available 24 hours, 7 days a week
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            label="Insurance & Schemes"
            title="Accepted Insurance & Government Schemes"
            align="center"
          />
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { name: "CGHS", desc: "Central Government Health Scheme empanelled" },
              { name: "ESI", desc: "Employees State Insurance Corporation empanelled" },
              { name: "Ayushman Bharat", desc: "Pradhan Mantri Jan Arogya Yojana (PM-JAY)" },
              { name: "Private Insurance", desc: "Most major health insurance providers accepted" },
            ].map((scheme) => (
              <div
                key={scheme.name}
                className="bg-warm-white rounded-lg border border-soft-grey p-5 text-center"
              >
                <ShieldCheck className="w-8 h-8 text-teal-heal mx-auto mb-3" />
                <div className="font-bold text-deep-navy mb-1">{scheme.name}</div>
                <p className="text-text-muted text-xs">{scheme.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-text-muted text-sm mt-6">
            Contact our billing department at{" "}
            <a href="tel:02172727224" className="text-medical-blue font-semibold">
              0217-2727224
            </a>{" "}
            to verify your specific insurance coverage before your visit.
          </p>
        </div>
      </section>

      {/* Visiting Hours */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-warm-white">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            label="For Visitors"
            title="Visiting Hours & Ward Info"
            align="center"
          />
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg border border-soft-grey p-6">
              <h3 className="font-display text-lg font-bold text-deep-navy mb-4">
                General Wards
              </h3>
              <ul className="space-y-2 text-sm text-text-muted">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-teal-heal" />Morning: 10:00 AM – 12:00 PM</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-teal-heal" />Evening: 5:00 PM – 7:00 PM</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-teal-heal" />Maximum 2 visitors at a time</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-teal-heal" />Children under 12 years: restricted</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg border border-soft-grey p-6">
              <h3 className="font-display text-lg font-bold text-deep-navy mb-4">
                ICU / Critical Care
              </h3>
              <ul className="space-y-2 text-sm text-text-muted">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-teal-heal" />Strictly restricted — doctor permission required</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-teal-heal" />Visit duration: 15 minutes maximum</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-teal-heal" />Only immediate family members</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-teal-heal" />No food or personal items without prior approval</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Rights & Responsibilities */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            label="Your Partnership in Care"
            title="Patient Rights & Responsibilities"
            align="center"
          />
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-display text-xl font-bold text-deep-navy mb-5 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-teal-heal" />
                Your Rights as a Patient
              </h3>
              <ul className="space-y-2.5">
                {patientRights.map((right) => (
                  <li key={right} className="flex items-start gap-2 text-sm text-text-muted">
                    <CheckCircle2 className="w-4 h-4 text-teal-heal flex-shrink-0 mt-0.5" />
                    {right}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-display text-xl font-bold text-deep-navy mb-5 flex items-center gap-2">
                <Users className="w-5 h-5 text-medical-blue" />
                Your Responsibilities
              </h3>
              <ul className="space-y-2.5">
                {patientResponsibilities.map((resp) => (
                  <li key={resp} className="flex items-start gap-2 text-sm text-text-muted">
                    <CheckCircle2 className="w-4 h-4 text-medical-blue flex-shrink-0 mt-0.5" />
                    {resp}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pre-procedure Checklists */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-warm-white">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            label="Prepare for Your Visit"
            title="Pre-Procedure Checklists"
            align="center"
          />
          <div className="mt-10 grid sm:grid-cols-2 gap-5">
            {[
              {
                title: "Pre-Surgery Checklist",
                items: [
                  "Fast for 6–8 hours before surgery",
                  "Bring all previous blood reports & scans",
                  "Stop blood thinners as advised by your surgeon",
                  "Arrange for a caregiver on discharge day",
                  "Carry your insurance card and ID proof",
                ],
              },
              {
                title: "Pre-IVF Checklist",
                items: [
                  "Day 2–3 blood work as advised by Dr. Archana Shah",
                  "Semen analysis for partner (within 3 months)",
                  "Baseline ultrasound scan",
                  "Pap smear within last 12 months",
                  "Stop smoking and alcohol at least 3 months prior",
                ],
              },
            ].map((checklist) => (
              <div key={checklist.title} className="bg-white rounded-lg border border-soft-grey p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-display text-lg font-bold text-deep-navy">
                    {checklist.title}
                  </h3>
                  {/* TODO: Replace href with real PDF link */}
                  <a
                    href="#"
                    className="flex items-center gap-1.5 text-medical-blue text-xs font-semibold hover:underline"
                    aria-label={`Download ${checklist.title}`}
                  >
                    <Download className="w-3.5 h-3.5" />
                    Download PDF
                  </a>
                </div>
                <ul className="space-y-2">
                  {checklist.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-text-muted">
                      <CheckCircle2 className="w-4 h-4 text-teal-heal flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            label="Common Questions"
            title="Frequently Asked Questions"
            align="center"
          />
          <div className="mt-10">
            <Accordion items={FAQS_GENERAL} />
          </div>
        </div>
      </section>
    </div>
  );
}
