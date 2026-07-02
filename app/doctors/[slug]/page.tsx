import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { GraduationCap, CheckCircle2, Calendar, ArrowLeft, Phone } from "lucide-react";
import { DOCTORS } from "@/lib/constants";
import { Badge } from "@/components/ui/Badge";
import { DoctorAvatar } from "@/components/ui/DoctorAvatar";

interface Params {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return DOCTORS.map((doctor) => ({ slug: doctor.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const doctor = DOCTORS.find((d) => d.slug === slug);
  if (!doctor) return { title: "Doctor Not Found" };

  return {
    title: `${doctor.name} — ${doctor.designation} | Deep Hospital Solapur`,
    description: `${doctor.bio.slice(0, 155)}...`,
    keywords: [
      doctor.name,
      doctor.speciality,
      "Deep Hospital Solapur",
      `${doctor.speciality} Solapur`,
    ],
  };
}

export default async function DoctorProfilePage({ params }: Params) {
  const { slug } = await params;
  const doctor = DOCTORS.find((d) => d.slug === slug);

  if (!doctor) {
    notFound();
  }

  return (
    <div className="pt-20">
      {/* Back nav */}
      <div className="bg-warm-white border-b border-soft-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href="/doctors"
            className="inline-flex items-center gap-2 text-text-muted hover:text-medical-blue transition-colors text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to All Doctors
          </Link>
        </div>
      </div>

      {/* Doctor Hero */}
      <section className="bg-deep-navy py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-10 items-start">
            {/* Photo */}
            <div className="lg:col-span-1">
              <div className="relative rounded-lg overflow-hidden bg-soft-grey aspect-[3/4] max-w-sm mx-auto lg:mx-0">
                <DoctorAvatar doctor={doctor} className="absolute inset-0" />
              </div>
            </div>

            {/* Details */}
            <div className="lg:col-span-2 text-white">
              <nav aria-label="Breadcrumb" className="mb-6">
                <ol className="flex items-center gap-2 text-sm">
                  <li><Link href="/" className="text-slate-400 hover:text-white transition-colors">Home</Link></li>
                  <li className="text-slate-600">/</li>
                  <li><Link href="/doctors" className="text-slate-400 hover:text-white transition-colors">Doctors</Link></li>
                  <li className="text-slate-600">/</li>
                  <li className="text-white font-medium">{doctor.name}</li>
                </ol>
              </nav>

              <div className="mb-3">
                <Badge variant="teal">{doctor.department}</Badge>
              </div>

              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-3">
                {doctor.name}
              </h1>

              <p className="text-teal-heal text-lg font-medium mb-4">
                {doctor.designation}
              </p>

              {/* Qualifications */}
              <div className="flex items-start gap-3 mb-6 bg-white/10 rounded-lg p-4">
                <GraduationCap className="w-5 h-5 text-teal-heal flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs text-slate-400 uppercase tracking-wide mb-1">
                    Qualifications
                  </div>
                  <div className="font-semibold text-white">
                    {doctor.qualifications}
                  </div>
                </div>
              </div>

              {doctor.experience !== "Consultant" && doctor.experience !== "Senior Consultant" && (
                <div className="inline-flex items-center gap-2 bg-teal-heal/20 border border-teal-heal/40 rounded-sm px-4 py-2 mb-6">
                  <span className="text-teal-heal font-bold">{doctor.experience}</span>
                  <span className="text-slate-300 text-sm">Medical Practice</span>
                </div>
              )}

              {/* Speciality */}
              <div className="text-slate-300 text-sm mb-8">
                <span className="text-slate-400 uppercase text-xs tracking-wide">Speciality: </span>
                {doctor.speciality}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={`/appointment?doctor=${encodeURIComponent(doctor.name)}`}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-medical-blue text-white font-semibold rounded-sm hover:bg-blue-700 transition-colors"
                >
                  <Calendar className="w-5 h-5" />
                  Book Appointment with {doctor.name.split(" ")[0]} {doctor.name.split(" ")[1]}
                </Link>
                <a
                  href="tel:02172727224"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 border-2 border-white/40 text-white font-semibold rounded-sm hover:bg-white/10 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Call for Appointment
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bio & Highlights */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Bio */}
            <div>
              <h2 className="font-display text-2xl font-bold text-deep-navy mb-5">
                About {doctor.name}
              </h2>
              <p className="text-text-muted leading-relaxed text-base">
                {doctor.bio}
              </p>

              <div className="mt-8 bg-warm-white rounded-lg border border-soft-grey p-6">
                <h3 className="font-semibold text-deep-navy mb-4 text-sm uppercase tracking-wide">
                  Appointment Details
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-text-muted">Department</span>
                    <span className="font-medium text-text-primary">{doctor.department}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-text-muted">Speciality</span>
                    <span className="font-medium text-text-primary">{doctor.speciality}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-text-muted">Hospital</span>
                    <span className="font-medium text-text-primary">Deep Hospital, Solapur</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-text-muted">Consultation</span>
                    <span className="font-medium text-text-primary">Mon – Sat, 9AM – 8PM</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Highlights */}
            <div>
              <h2 className="font-display text-2xl font-bold text-deep-navy mb-5">
                Areas of Expertise
              </h2>
              <ul className="space-y-3">
                {doctor.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-start gap-3 p-4 bg-warm-white rounded-lg border border-soft-grey"
                  >
                    <CheckCircle2 className="w-5 h-5 text-teal-heal flex-shrink-0 mt-0.5" />
                    <span className="text-text-primary font-medium text-sm">
                      {highlight}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Book CTA */}
              <div className="mt-8 bg-deep-navy rounded-lg p-6 text-center">
                <h3 className="font-display text-lg font-bold text-white mb-2">
                  Ready to Consult {doctor.name.split(" ")[0]} {doctor.name.split(" ")[1]}?
                </h3>
                <p className="text-slate-400 text-sm mb-4">
                  Book an appointment online or call us directly.
                </p>
                <Link
                  href={`/appointment?doctor=${encodeURIComponent(doctor.name)}`}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-teal-heal text-white font-semibold rounded-sm hover:bg-teal-700 transition-colors text-sm"
                >
                  <Calendar className="w-4 h-4" />
                  Book Appointment
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Doctors */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-warm-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-2xl font-bold text-deep-navy mb-8 text-center">
            Other Specialists at Deep Hospital
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {DOCTORS.filter((d) => d.slug !== doctor.slug).map((otherDoctor) => (
              <Link
                key={otherDoctor.slug}
                href={`/doctors/${otherDoctor.slug}`}
                className="flex items-center gap-4 bg-white rounded-lg border border-soft-grey p-4 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0 bg-soft-grey">
                  <DoctorAvatar doctor={otherDoctor} className="absolute inset-0" size="sm" />
                </div>
                <div>
                  <div className="font-display font-bold text-deep-navy text-base">
                    {otherDoctor.name}
                  </div>
                  <div className="text-text-muted text-xs mt-0.5">
                    {otherDoctor.designation}
                  </div>
                  <div className="text-medical-blue text-xs font-semibold mt-1">
                    View Profile →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
