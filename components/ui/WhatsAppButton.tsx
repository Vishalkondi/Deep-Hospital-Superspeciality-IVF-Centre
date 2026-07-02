"use client";

import React from "react";
import { MessageCircle } from "lucide-react";
import { HOSPITAL_INFO } from "@/lib/constants";

/**
 * Floating WhatsApp button, fixed bottom-right on all screen sizes.
 * Sits above the mobile sticky call bar (see MobileActionBar) via bottom offset.
 */
export function WhatsAppButton() {
  const message = encodeURIComponent(
    "Hi, I'd like to know more about Deep Superspeciality Hospital & Solapur Test Tube Baby Centre."
  );

  return (
    <a
      href={`${HOSPITAL_INFO.whatsapp}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed z-40 right-4 sm:right-6 bottom-20 sm:bottom-6 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:scale-105 active:scale-95 transition-transform duration-200"
      style={{ boxShadow: "0 8px 24px rgba(37,211,102,0.45)" }}
    >
      <MessageCircle className="w-7 h-7" fill="white" strokeWidth={0} />
      <span
        className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-40 animate-ping"
        aria-hidden="true"
      />
    </a>
  );
}

export default WhatsAppButton;
