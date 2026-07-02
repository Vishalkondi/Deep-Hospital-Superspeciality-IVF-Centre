import React from "react";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Instagram,
  ExternalLink,
} from "lucide-react";
import { NAV_LINKS, HOSPITAL_INFO, SERVICES } from "@/lib/constants";
import { MapEmbed } from "@/components/ui/MapEmbed";

export function Footer() {
  return (
    <footer className="bg-deep-navy text-white" aria-label="Site footer">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Logo + Tagline */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <h2 className="font-display text-2xl font-bold text-white">
                Deep Hospital
              </h2>
              <p className="text-teal-heal text-sm font-medium mt-1">
                Superspeciality & IVF Centre
              </p>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              {HOSPITAL_INFO.tagline}. Serving Solapur and all of Maharashtra
              with world-class medical care.
            </p>
            {/* Social */}
            <div className="flex items-center gap-3">
              <a
                href={HOSPITAL_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-400 hover:text-pink-400 transition-colors duration-200"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-5 h-5" />
                <span className="text-sm">Instagram</span>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-300 mb-5">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors duration-150 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/appointment"
                  className="text-teal-heal hover:text-teal-300 transition-colors duration-150 text-sm font-medium"
                >
                  Book Appointment →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-300 mb-5">
              Our Services
            </h3>
            <ul className="space-y-2.5">
              {SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services#${service.slug}`}
                    className="text-slate-400 hover:text-white transition-colors duration-150 text-sm"
                  >
                    {service.shortTitle}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/ivf-centre"
                  className="text-slate-400 hover:text-white transition-colors duration-150 text-sm"
                >
                  IVF & Test Tube Baby Centre
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact + Hours */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-300 mb-5">
              Contact & Hours
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-teal-heal flex-shrink-0 mt-0.5" />
                <span className="text-slate-400 text-sm leading-relaxed">
                  {HOSPITAL_INFO.address}
                </span>
              </li>
              <li>
                <a
                  href={HOSPITAL_INFO.phoneHref}
                  className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors text-sm"
                >
                  <Phone className="w-4 h-4 text-teal-heal flex-shrink-0" />
                  {HOSPITAL_INFO.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${HOSPITAL_INFO.email}`}
                  className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors text-sm"
                >
                  <Mail className="w-4 h-4 text-teal-heal flex-shrink-0" />
                  {HOSPITAL_INFO.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-teal-heal flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p className="text-slate-400">{HOSPITAL_INFO.hours.opd}</p>
                  <p className="text-teal-heal font-medium mt-1">
                    {HOSPITAL_INFO.hours.emergency}
                  </p>
                </div>
              </li>
              <li>
                <a
                  href={HOSPITAL_INFO.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-medical-blue hover:text-blue-300 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Get Directions
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Map Embed */}
        <div className="mt-12 rounded-lg overflow-hidden opacity-80 hover:opacity-100 transition-opacity">
          <MapEmbed height="250px" />
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-500 text-sm text-center sm:text-left">
            © 2025 Deep Superspeciality Hospital & Solapur Test Tube Baby
            Centre. All rights reserved.
          </p>
          <p className="text-slate-600 text-xs">
            Bhavani Peth, Solapur, Maharashtra
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
