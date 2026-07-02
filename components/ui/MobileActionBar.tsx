"use client";

import React from "react";
import Link from "next/link";
import { Phone, CalendarPlus } from "lucide-react";
import { HOSPITAL_INFO } from "@/lib/constants";

/**
 * Sticky bottom action bar, visible only on small screens (mobile-first
 * pattern common on Indian hospital/clinic sites). Hidden on md+ where the
 * navbar's Book Appointment CTA is already visible.
 */
export function MobileActionBar() {
  return (
    <div
      className="md:hidden fixed bottom-0 left-0 right-0 z-30 bg-white border-t border-soft-grey grid grid-cols-2"
      style={{ boxShadow: "0 -2px 12px rgba(0,0,0,0.08)" }}
      role="navigation"
      aria-label="Quick actions"
    >
      <a
        href={HOSPITAL_INFO.phoneHref}
        className="flex items-center justify-center gap-2 py-3.5 text-deep-navy font-semibold text-sm border-r border-soft-grey active:bg-warm-white"
      >
        <Phone className="w-4 h-4 text-teal-heal" />
        Call Now
      </a>
      <Link
        href="/appointment"
        className="flex items-center justify-center gap-2 py-3.5 bg-medical-blue text-white font-semibold text-sm active:bg-blue-700"
      >
        <CalendarPlus className="w-4 h-4" />
        Book Appointment
      </Link>
    </div>
  );
}

export default MobileActionBar;
