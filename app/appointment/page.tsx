import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Clock, CheckCircle2 } from "lucide-react";
import { AppointmentForm } from "@/components/forms/AppointmentForm";
import { HOSPITAL_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Book Appointment | Deep Superspeciality Hospital Solapur",
  description:
    "Book an appointment at Deep Superspeciality Hospital Solapur for IVF, Urology, Critical Care, or Gynaecology consultations. Online appointment booking available.",
};

interface AppointmentPageProps {
  searchParams: Promise<{ doctor?: string }>;
}

export default async function AppointmentPage({ searchParams }: AppointmentPageProps) {
  const { doctor } = await searchParams;
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-deep-navy py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm">
              <li><Link href="/" className="text-slate-400 hover:text-white transition-colors">Home</Link></li>
              <li className="text-slate-600">/</li>
              <li className="text-white font-medium">Book Appointment</li>
            </ol>
          </nav>
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1.5 rounded-full border border-teal-heal/40 text-teal-heal text-xs font-semibold uppercase tracking-widest mb-6">
              Online Booking
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
              Book Your Appointment
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed">
              Fill in the form below and our patient coordinator will confirm
              your appointment within 2 hours during OPD hours.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-warm-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Form */}
            <div className="lg:col-span-2">
              <AppointmentForm prefilledDoctor={doctor} />
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick call */}
              <div className="bg-deep-navy rounded-lg p-6 text-white">
                <h3 className="font-display text-lg font-bold mb-2">
                  Prefer to Call?
                </h3>
                <p className="text-slate-400 text-sm mb-4">
                  Speak directly with our patient coordinator during OPD hours.
                </p>
                <a
                  href={HOSPITAL_INFO.phoneHref}
                  className="flex items-center gap-3 bg-teal-heal rounded-sm px-4 py-3 font-bold hover:bg-teal-700 transition-colors"
                  aria-label={`Call ${HOSPITAL_INFO.phone}`}
                >
                  <Phone className="w-5 h-5" />
                  {HOSPITAL_INFO.phone}
                </a>
              </div>

              {/* Hours */}
              <div className="bg-white rounded-lg border border-soft-grey p-6">
                <h3 className="font-display text-base font-bold text-deep-navy mb-4 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-teal-heal" />
                  OPD Timings
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between text-text-muted">
                    <span>Monday – Saturday</span>
                    <span className="font-medium text-text-primary">9AM – 8PM</span>
                  </div>
                  <div className="flex justify-between text-text-muted">
                    <span>Sunday</span>
                    <span className="font-medium text-text-muted">Emergency only</span>
                  </div>
                  <div className="flex justify-between text-text-muted">
                    <span>Emergency</span>
                    <span className="font-medium text-teal-heal">24/7</span>
                  </div>
                </div>
              </div>

              {/* What to bring */}
              <div className="bg-white rounded-lg border border-soft-grey p-6">
                <h3 className="font-display text-base font-bold text-deep-navy mb-4">
                  What to Bring
                </h3>
                <ul className="space-y-2">
                  {[
                    "Previous medical records & prescriptions",
                    "Lab reports & scan reports (if any)",
                    "Insurance card or Ayushman Bharat card",
                    "Government issued photo ID",
                    "List of current medications",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-text-muted">
                      <CheckCircle2 className="w-4 h-4 text-teal-heal flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Departments */}
              <div className="bg-warm-white rounded-lg border border-soft-grey p-6">
                <h3 className="font-display text-base font-bold text-deep-navy mb-4">
                  Our Departments
                </h3>
                <ul className="space-y-1.5 text-sm text-text-muted">
                  {[
                    "IVF & Fertility Centre",
                    "Obstetrics & Gynaecology",
                    "Urology",
                    "Critical Care & ICU",
                    "General Surgery",
                    "Anaesthesiology",
                  ].map((dept) => (
                    <li key={dept} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-teal-heal" />
                      {dept}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
