"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Calendar, Menu } from "lucide-react";
import { NAV_LINKS, HOSPITAL_INFO } from "@/lib/constants";
import { MobileMenu } from "./MobileMenu";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHomepage = pathname === "/";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${
          scrolled || !isHomepage
            ? "bg-white shadow-sm border-b border-soft-grey"
            : "bg-transparent"
        }`}
      >
        <nav
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          aria-label="Main navigation"
        >
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0 group">
              <div className="flex flex-col leading-none">
                <span
                  className={`font-display text-xl lg:text-2xl font-bold transition-colors duration-300 ${
                    scrolled || !isHomepage ? "text-deep-navy" : "text-white"
                  }`}
                >
                  Deep Hospital
                </span>
                <span
                  className={`text-xs font-medium transition-colors duration-300 ${
                    scrolled || !isHomepage
                      ? "text-teal-heal"
                      : "text-teal-heal"
                  }`}
                >
                  Superspeciality & IVF Centre
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 text-sm font-medium rounded-sm transition-colors duration-150 ${
                    pathname === link.href
                      ? scrolled || !isHomepage
                        ? "text-medical-blue"
                        : "text-teal-heal"
                      : scrolled || !isHomepage
                      ? "text-text-primary hover:text-medical-blue"
                      : "text-white/90 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Right Side CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Phone pill */}
              <a
                href={HOSPITAL_INFO.phoneHref}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold border transition-colors duration-200 ${
                  scrolled || !isHomepage
                    ? "border-soft-grey text-text-primary hover:border-medical-blue hover:text-medical-blue"
                    : "border-white/30 text-white hover:border-white"
                }`}
                aria-label={`Call us at ${HOSPITAL_INFO.phone}`}
              >
                <Phone className="w-4 h-4" />
                {HOSPITAL_INFO.phone}
              </a>

              {/* Book Appointment */}
              <Link
                href="/appointment"
                className="flex items-center gap-2 px-5 py-2.5 bg-medical-blue text-white text-sm font-semibold rounded-sm hover:bg-blue-700 transition-colors duration-200"
              >
                <Calendar className="w-4 h-4" />
                Book Appointment
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(true)}
              className={`lg:hidden p-2 rounded-sm transition-colors ${
                scrolled || !isHomepage
                  ? "text-text-primary hover:bg-soft-grey"
                  : "text-white hover:bg-white/10"
              }`}
              aria-label="Open mobile menu"
              aria-expanded={mobileOpen}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        pathname={pathname}
      />
    </>
  );
}

export default Navbar;
