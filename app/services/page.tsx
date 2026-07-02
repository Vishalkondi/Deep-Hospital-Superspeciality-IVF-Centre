import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import { Activity, Heart, Users, Shield, CheckCircle2, ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SERVICES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Medical Services | Deep Superspeciality Hospital Solapur",
  description:
    "Comprehensive medical services at Deep Superspeciality Hospital Solapur — Critical Care, IVF & Fertility, Urology, and Surgical expertise. Book a consultation today.",
};

const iconMap: Record<string, React.ElementType> = {
  activity: Activity,
  heart: Heart,
  users: Users,
  shield: Shield,
};

const serviceDetails = [
  {
    slug: "critical-surgical-care",
    subServices: [
      {
        name: "Intensive Care Unit (ICU)",
        details: [
          "Multi-bed ICU with advanced monitoring",
          "Ventilator support and respiratory care",
          "24/7 intensivist coverage",
          "Sepsis management protocols",
        ],
      },
      {
        name: "Emergency & Trauma Surgery",
        details: [
          "Immediate surgical assessment",
          "Trauma bay with resuscitation facilities",
          "Emergency laparotomy & damage control surgery",
          "Multi-trauma management",
        ],
      },
      {
        name: "Planned Surgical Procedures",
        details: [
          "Laparoscopic (minimally invasive) surgery",
          "Hernia repair (open & laparoscopic)",
          "Appendectomy, cholecystectomy",
          "Abdominal & GI surgeries",
        ],
      },
    ],
  },
  {
    slug: "ivf-test-tube-baby",
    subServices: [
      {
        name: "IVF & ICSI",
        details: [
          "In Vitro Fertilisation (IVF) — standard protocol",
          "ICSI for severe male infertility",
          "Blastocyst culture & transfer",
          "Preimplantation Genetic Testing (PGT)",
        ],
      },
      {
        name: "IUI & Other ART",
        details: [
          "Intrauterine Insemination (IUI)",
          "Controlled Ovarian Stimulation",
          "Donor egg & sperm programmes",
          "Surrogacy information & referrals",
        ],
      },
      {
        name: "Embryo Cryopreservation",
        details: [
          "Vitrification (fast freeze) technology",
          "Frozen Embryo Transfer (FET)",
          "Egg freezing for fertility preservation",
          "Long-term embryo storage",
        ],
      },
    ],
  },
  {
    slug: "fertility",
    subServices: [
      {
        name: "Female Fertility",
        details: [
          "Hormonal evaluation & thyroid assessment",
          "PCOS diagnosis & management",
          "Blocked tube investigation (HSG, laparoscopy)",
          "Endometriosis treatment",
        ],
      },
      {
        name: "Male Fertility",
        details: [
          "Comprehensive semen analysis",
          "Azoospermia investigation & treatment",
          "Low sperm motility (asthenospermia) management",
          "Surgical sperm retrieval (TESA, PESA)",
        ],
      },
      {
        name: "Fertility Preservation",
        details: [
          "Egg (oocyte) freezing",
          "Sperm freezing & banking",
          "Embryo freezing",
          "Oncofertility — fertility preservation before cancer treatment",
        ],
      },
    ],
  },
  {
    slug: "urology",
    subServices: [
      {
        name: "Kidney Stone Treatment",
        details: [
          "PCNL (Percutaneous Nephrolithotomy)",
          "RIRS (Retrograde Intrarenal Surgery)",
          "URS (Ureteroscopy)",
          "Shock wave lithotripsy coordination",
        ],
      },
      {
        name: "Prostate Conditions",
        details: [
          "TURP (Transurethral Resection of Prostate)",
          "HoLEP (Holmium Laser Enucleation of Prostate)",
          "Prostate cancer evaluation & management",
          "Urinary retention treatment",
        ],
      },
      {
        name: "Advanced Urology",
        details: [
          "Uro-oncology — bladder, kidney, prostate cancers",
          "Laparoscopic nephrectomy & pyeloplasty",
          "Male infertility — varicocelectomy, TESA",
          "Urethral stricture treatment",
        ],
      },
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-deep-navy py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm">
              <li><Link href="/" className="text-slate-400 hover:text-white transition-colors">Home</Link></li>
              <li className="text-slate-600">/</li>
              <li className="text-white font-medium">Services</li>
            </ol>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 rounded-full border border-teal-heal/40 text-teal-heal text-xs font-semibold uppercase tracking-widest mb-6">
              What We Offer
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
              Medical Services
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed">
              Comprehensive, specialist-led care across four major service areas.
              Every treatment is evidence-based and delivered with precision and
              compassion.
            </p>
          </div>

          {/* Quick service grid */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {SERVICES.map((service) => {
              const Icon = iconMap[service.icon] || Activity;
              return (
                <a
                  key={service.slug}
                  href={`#${service.slug}`}
                  className="flex flex-col items-center text-center p-4 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <Icon className="w-6 h-6 text-teal-heal mb-2" />
                  <span className="text-white text-sm font-medium">
                    {service.shortTitle}
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Detail Blocks */}
      {SERVICES.map((service, serviceIndex) => {
        const Icon = iconMap[service.icon] || Activity;
        const detail = serviceDetails.find((d) => d.slug === service.slug);
        const isEven = serviceIndex % 2 === 0;

        return (
          <section
            key={service.slug}
            id={service.slug}
            className={`py-20 px-4 sm:px-6 lg:px-8 ${
              isEven ? "bg-white" : "bg-warm-white"
            }`}
            aria-label={service.title}
          >
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-3 gap-12">
                {/* Left: Overview */}
                <div>
                  <div className="w-14 h-14 rounded-lg bg-teal-heal/10 flex items-center justify-center mb-5">
                    <Icon className="w-7 h-7 text-teal-heal" />
                  </div>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-deep-navy mb-4">
                    {service.title}
                  </h2>
                  <p className="text-text-muted leading-relaxed mb-6">
                    {service.longDescription}
                  </p>
                  <ul className="space-y-2 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-text-muted">
                        <CheckCircle2 className="w-4 h-4 text-teal-heal flex-shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/appointment"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-medical-blue text-white font-semibold rounded-sm hover:bg-blue-700 transition-colors text-sm"
                  >
                    {service.cta}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                {/* Right: Sub-services */}
                <div className="lg:col-span-2 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {detail?.subServices.map((sub) => (
                    <div
                      key={sub.name}
                      className="bg-white rounded-lg border border-soft-grey p-5"
                      style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}
                    >
                      <h3 className="font-semibold text-deep-navy text-sm mb-3 pb-3 border-b border-soft-grey">
                        {sub.name}
                      </h3>
                      <ul className="space-y-1.5">
                        {sub.details.map((d) => (
                          <li key={d} className="flex items-start gap-2 text-xs text-text-muted">
                            <div className="w-1 h-1 rounded-full bg-teal-heal mt-2 flex-shrink-0" />
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-deep-navy text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-white mb-4">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-slate-300 mb-8">
            Our team will help assess your needs and direct you to the right
            specialist. Call us or book a general consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/appointment"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-medical-blue text-white font-semibold rounded-sm hover:bg-blue-700 transition-colors"
            >
              Book Consultation
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
