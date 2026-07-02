import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Baby, Microscope, HeartPulse } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { IVFProcess } from "@/components/sections/IVFProcess";
import { Accordion } from "@/components/ui/Accordion";
import { CounterAnimation } from "@/components/ui/CounterAnimation";
import { FAQS_IVF, IVF_TREATMENTS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "IVF Centre & Test Tube Baby | Solapur | Deep Hospital",
  description:
    "Solapur Test Tube Baby Centre — 5000+ successful IVF cycles. Expert fertility treatment including IVF, ICSI, IUI, Frozen Embryo Transfer and more. Consult Dr. Archana Shah today.",
  keywords: [
    "IVF Solapur",
    "Test Tube Baby Solapur",
    "fertility clinic Solapur",
    "ICSI Solapur",
    "IUI Solapur",
    "infertility treatment Solapur",
  ],
};

const labHighlights = [
  "Controlled-temperature IVF incubators with CO₂ monitoring",
  "Vitrification (fast freeze) for embryo & egg cryopreservation",
  "ICSI workstation with high-magnification microscopy",
  "Time-lapse embryo monitoring (EmbryoScope)",
  "Strict quality protocols — ISO-compliant environment",
  "Experienced clinical embryologist team",
];

export default function IVFCentrePage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section
        className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0D9488 0%, #0A1628 100%)" }}
      >
        <div className="absolute inset-0 opacity-5" aria-hidden="true"
          style={{
            backgroundImage: "radial-gradient(circle at 70% 50%, #0D9488 0%, transparent 60%)",
          }}
        />
        <div className="max-w-7xl mx-auto relative">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm">
              <li><Link href="/" className="text-slate-400 hover:text-white transition-colors">Home</Link></li>
              <li className="text-slate-600">/</li>
              <li className="text-white font-medium">IVF Centre</li>
            </ol>
          </nav>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full border border-teal-heal/40 text-teal-heal text-xs font-semibold uppercase tracking-widest mb-6">
                Solapur Test Tube Baby Centre
              </span>
              <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
                Hope, Science &amp; Life
              </h1>
              <p className="text-slate-300 text-lg leading-relaxed mb-8">
                Solapur&apos;s most trusted fertility centre, combining advanced
                embryology technology with compassionate, personalised care to
                help you build the family you dream of.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/appointment"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-teal-heal font-bold rounded-sm hover:bg-warm-white transition-colors"
                >
                  Talk to Our Fertility Expert
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a
                  href="tel:02172727224"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/40 text-white font-semibold rounded-sm hover:bg-white/10 transition-colors"
                >
                  Call 0217-2727224
                </a>
              </div>
            </div>
            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: 5000, suffix: "+", label: "Babies Born", sub: "Through IVF at Deep Hospital", icon: Baby },
                { value: 15, suffix: "+ Yrs", label: "Experience", sub: "In fertility treatment", icon: HeartPulse },
                { value: 3, suffix: "", label: "IVF Specialists", sub: "Dedicated to your journey", icon: Microscope },
                { value: 1, suffix: " Lab", label: "Certified", sub: "ISO-standard embryology lab", icon: Microscope },
              ].map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <div key={i} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-5 text-center">
                    <Icon className="w-6 h-6 text-teal-heal mx-auto mb-2" />
                    <div className="font-display text-3xl font-bold text-white">
                      <CounterAnimation end={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="text-teal-heal text-xs font-semibold uppercase tracking-wide mt-1">{stat.label}</div>
                    <div className="text-slate-400 text-xs mt-1">{stat.sub}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Photo banner */}
      <section className="relative">
        <div className="relative h-72 sm:h-96 w-full">
          <Image
            src="/images/hero/ivf-hope-family.jpg"
            alt="A couple holding their newborn, with a close-up embryology visual — symbolising the IVF journey from lab to life"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div
            className="absolute inset-0 flex items-end"
            style={{
              background:
                "linear-gradient(0deg, rgba(10,22,40,0.75) 0%, rgba(10,22,40,0.15) 60%, transparent 100%)",
            }}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 w-full">
              <p className="text-white font-display text-xl sm:text-2xl font-semibold">
                Every Journey is Special — We Are With You at Every Step
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* IVF Process */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-warm-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            label="How IVF Works"
            title="The IVF Journey — Step by Step"
            subtitle="Understanding the process helps reduce anxiety. Here is what to expect at every stage of your IVF treatment at Deep Hospital."
            align="center"
          />
        </div>
        <div className="mt-10">
          <IVFProcess />
        </div>
      </section>

      {/* Treatments */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            label="Fertility Treatments"
            title="Treatments We Offer"
            subtitle="From basic IUI to advanced IVF with ICSI — we offer the full spectrum of assisted reproductive technologies."
            align="center"
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {IVF_TREATMENTS.map((treatment) => (
              <div
                key={treatment.name}
                className="bg-warm-white rounded-lg border border-soft-grey overflow-hidden"
                style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}
              >
                <div className="relative h-36">
                  <Image
                    src={treatment.image}
                    alt={treatment.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-base font-bold text-deep-navy mb-2">
                    {treatment.name}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed mb-3">
                    {treatment.desc}
                  </p>
                  <div className="text-xs text-teal-heal font-semibold uppercase tracking-wide">
                    Ideal For
                  </div>
                  <p className="text-text-muted text-xs mt-1">{treatment.ideal}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lab & Technology */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-deep-navy">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader
                label="Our Laboratory"
                title="State-of-the-Art Embryology Lab"
                subtitle="Your embryos are precious. Our lab is designed to provide the optimal environment for fertilisation, development, and cryopreservation."
                align="left"
                light
              />
              <div className="relative mt-8 rounded-lg overflow-hidden aspect-[16/10]">
                <Image
                  src="/images/facility/embryology-lab.jpg"
                  alt="Embryologist examining an embryo culture under a high-magnification microscope"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <ul className="mt-8 space-y-3">
                {labHighlights.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-300 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-teal-heal flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/5 rounded-lg border border-white/10 p-8">
              <h3 className="font-display text-xl font-bold text-white mb-6">
                Why Our Lab Matters
              </h3>
              <div className="space-y-5">
                {[
                  { title: "Temperature Control", desc: "Incubators maintain precise 37°C — mimicking the human body for optimal embryo development." },
                  { title: "Air Quality", desc: "HEPA-filtered air and VOC monitoring ensures a contaminant-free environment for gametes and embryos." },
                  { title: "Vitrification", desc: "Ultra-rapid freezing preserves embryo integrity — our frozen embryo transfer success rates are excellent." },
                ].map((item) => (
                  <div key={item.title}>
                    <h4 className="font-semibold text-teal-heal text-sm mb-1">{item.title}</h4>
                    <p className="text-slate-400 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-warm-white">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            label="Common Questions"
            title="IVF FAQs"
            subtitle="Honest answers to the questions couples ask most."
            align="center"
          />
          <div className="mt-10">
            <Accordion items={FAQS_IVF} allowMultiple={false} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-teal-heal text-center overflow-hidden">
        <div className="absolute inset-0" aria-hidden="true">
          <Image
            src="/images/ivf/ivf-baby-hope.jpg"
            alt=""
            fill
            className="object-cover opacity-15"
            sizes="100vw"
          />
        </div>
        <div className="relative max-w-2xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-white mb-4">
            Take the First Step
          </h2>
          <p className="text-teal-100 mb-8 leading-relaxed">
            Every parenthood journey is unique. Let us understand yours. Book a
            confidential consultation with Dr. Archana Shah and take the first
            step towards your dream.
          </p>
          <Link
            href="/appointment"
            className="inline-flex items-center gap-2 px-10 py-4 bg-white text-teal-heal font-bold rounded-sm hover:bg-warm-white transition-colors text-base"
          >
            Book Your Consultation
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
