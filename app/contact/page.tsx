import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, MessageCircle, AlertCircle } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { MapEmbed } from "@/components/ui/MapEmbed";
import { ContactForm } from "@/components/forms/ContactForm";
import { HOSPITAL_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us | Deep Superspeciality Hospital Solapur",
  description:
    "Contact Deep Superspeciality Hospital Solapur. Phone: 0217-2727224. Located at Bhavani Peth, Solapur. Email: info@deephospital.in. 24/7 emergency care available.",
};

const contactCards = [
  {
    icon: MapPin,
    title: "Our Address",
    lines: [HOSPITAL_INFO.address, "Maharashtra, India"],
    action: {
      label: "Get Directions",
      href: HOSPITAL_INFO.mapUrl,
      external: true,
    },
    color: "text-medical-blue",
    bg: "bg-blue-50",
  },
  {
    icon: Phone,
    title: "Phone & WhatsApp",
    lines: [HOSPITAL_INFO.phone, "24/7 Emergency Line"],
    action: {
      label: "Call Now",
      href: HOSPITAL_INFO.phoneHref,
      external: false,
    },
    showWhatsapp: true,
    color: "text-teal-heal",
    bg: "bg-teal-50",
  },
  {
    icon: Mail,
    title: "Email Us",
    lines: [HOSPITAL_INFO.email, "We respond within 24 hours"],
    action: {
      label: "Send Email",
      href: `mailto:${HOSPITAL_INFO.email}`,
      external: false,
    },
    color: "text-gold-trust",
    bg: "bg-amber-50",
  },
];

export default function ContactPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-deep-navy py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm">
              <li><Link href="/" className="text-slate-400 hover:text-white transition-colors">Home</Link></li>
              <li className="text-slate-600">/</li>
              <li className="text-white font-medium">Contact</li>
            </ol>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 rounded-full border border-teal-heal/40 text-teal-heal text-xs font-semibold uppercase tracking-widest mb-6">
              Get In Touch
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
              Contact & Location
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed">
              We are here to help. Reach out by phone, email, or visit us
              directly at Bhavani Peth, Solapur.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-warm-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {contactCards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className="bg-white rounded-lg border border-soft-grey p-6"
                  style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.08)" }}
                >
                  <div className={`w-12 h-12 rounded-lg ${card.bg} flex items-center justify-center mb-4`}>
                    <Icon className={`w-6 h-6 ${card.color}`} />
                  </div>
                  <h3 className="font-display text-lg font-bold text-deep-navy mb-2">
                    {card.title}
                  </h3>
                  {card.lines.map((line, i) => (
                    <p key={i} className={`text-sm ${i === 0 ? "text-text-primary font-medium" : "text-text-muted"}`}>
                      {line}
                    </p>
                  ))}
                  <div className="mt-4 flex items-center gap-4 flex-wrap">
                    {card.action.external ? (
                      <a
                        href={card.action.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-1.5 text-sm font-semibold ${card.color} hover:underline`}
                      >
                        {card.action.label} →
                      </a>
                    ) : (
                      <a
                        href={card.action.href}
                        className={`inline-flex items-center gap-1.5 text-sm font-semibold ${card.color} hover:underline`}
                      >
                        {card.action.label} →
                      </a>
                    )}
                    {"showWhatsapp" in card && card.showWhatsapp && (
                      <a
                        href={HOSPITAL_INFO.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1da851] hover:underline"
                      >
                        WhatsApp →
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Hours */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 bg-white border-y border-soft-grey">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16">
            <div className="flex items-center gap-3 text-center sm:text-left">
              <Clock className="w-6 h-6 text-teal-heal flex-shrink-0" />
              <div>
                <div className="text-xs text-text-muted uppercase tracking-wide">OPD Hours</div>
                <div className="font-semibold text-text-primary">Mon – Sat: 9AM – 8PM</div>
              </div>
            </div>
            <div className="h-8 w-px bg-soft-grey hidden sm:block" aria-hidden="true" />
            <div className="flex items-center gap-3 text-center sm:text-left">
              <AlertCircle className="w-6 h-6 text-emergency-red flex-shrink-0" />
              <div>
                <div className="text-xs text-text-muted uppercase tracking-wide">Emergency</div>
                <div className="font-semibold text-emergency-red">24/7 — Always Available</div>
              </div>
            </div>
            <div className="h-8 w-px bg-soft-grey hidden sm:block" aria-hidden="true" />
            <a
              href={HOSPITAL_INFO.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-center sm:text-left group"
            >
              <MessageCircle className="w-6 h-6 text-medical-blue flex-shrink-0" />
              <div>
                <div className="text-xs text-text-muted uppercase tracking-wide">WhatsApp</div>
                <div className="font-semibold text-text-primary group-hover:text-medical-blue transition-colors">
                  Chat with us
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Map + Form */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-warm-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            label="Find & Contact Us"
            title="Get in Touch"
            align="center"
          />
          <div className="mt-12 grid lg:grid-cols-2 gap-10">
            {/* Map */}
            <div>
              <MapEmbed height="450px" />
              <div className="mt-4 p-4 bg-white rounded-lg border border-soft-grey">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-medical-blue flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-text-primary text-sm">
                      Deep Superspeciality Hospital
                    </div>
                    <div className="text-text-muted text-sm">{HOSPITAL_INFO.address}</div>
                    <a
                      href={HOSPITAL_INFO.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-medical-blue text-xs font-semibold mt-1 inline-block hover:underline"
                    >
                      Open in Google Maps →
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-emergency-red">
        <div className="max-w-4xl mx-auto text-center text-white">
          <AlertCircle className="w-10 h-10 mx-auto mb-3 animate-pulse" aria-hidden="true" />
          <h2 className="font-display text-2xl sm:text-3xl font-bold mb-2">
            Medical Emergency?
          </h2>
          <p className="text-red-100 mb-5">
            Do not wait — call us immediately for 24/7 emergency care.
          </p>
          <a
            href={HOSPITAL_INFO.phoneHref}
            className="inline-flex items-center gap-3 px-10 py-4 bg-white text-emergency-red font-bold rounded-sm hover:bg-red-50 transition-colors text-xl"
            aria-label="Call emergency number"
          >
            <Phone className="w-6 h-6" />
            {HOSPITAL_INFO.phone}
          </a>
        </div>
      </section>
    </div>
  );
}
