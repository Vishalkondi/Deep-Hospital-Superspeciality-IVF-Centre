"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { X, Phone, Calendar } from "lucide-react";
import { NAV_LINKS, HOSPITAL_INFO } from "@/lib/constants";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  pathname: string;
}

export function MobileMenu({ isOpen, onClose, pathname }: MobileMenuProps) {
  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-deep-navy/60 backdrop-blur-sm z-40 transition-opacity duration-300 lg:hidden ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[300px] bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-soft-grey">
            <div>
              <span className="font-display text-xl font-bold text-deep-navy">
                Deep Hospital
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-sm text-text-muted hover:text-text-primary hover:bg-soft-grey transition-colors"
              aria-label="Close mobile menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Nav Links */}
          <nav className="flex-1 overflow-y-auto px-4 py-6">
            <ul className="space-y-1">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className={`flex items-center px-4 py-3 rounded-sm text-base font-medium transition-colors duration-150 ${
                      pathname === link.href
                        ? "bg-medical-blue/10 text-medical-blue"
                        : "text-text-primary hover:bg-soft-grey hover:text-medical-blue"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTAs */}
          <div className="px-4 pb-6 space-y-3 border-t border-soft-grey pt-4">
            <a
              href={HOSPITAL_INFO.phoneHref}
              className="flex items-center justify-center gap-2 w-full px-4 py-3 border-2 border-medical-blue text-medical-blue font-semibold rounded-sm hover:bg-medical-blue hover:text-white transition-colors"
            >
              <Phone className="w-4 h-4" />
              {HOSPITAL_INFO.phone}
            </a>
            <Link
              href="/appointment"
              onClick={onClose}
              className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-medical-blue text-white font-semibold rounded-sm hover:bg-blue-700 transition-colors"
            >
              <Calendar className="w-4 h-4" />
              Book Appointment
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default MobileMenu;
