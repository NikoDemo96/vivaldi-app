"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";

const Navbar = () => {
  const router = useRouter();
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  // Close desktop dropdown when clicking outside
  React.useEffect(() => {
    if (!servicesOpen) return;
    function handleClick(e: MouseEvent) {
      const dropdown = document.getElementById("services-dropdown");
      if (dropdown && !dropdown.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [servicesOpen]);

  return (
    <header className="w-full bg-[#5233B0] px-4 md:px-8 lg:px-16 py-5">
      <div className="w-full flex items-center justify-between h-[64px] max-w-none">
        {/* Logo and Brand */}
        <div className="mt-10 flex items-center min-w-[260px]">
          <Link href="/">
            <Image
              src="/images/vivaldi-logo.svg"
              alt="Vivaldi Logo"
              width={140}
              height={140}
              className="md:w-[180px] md:h-[180px]"
            />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white p-2 hover:bg-white/10 rounded-md transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex flex-1 items-center justify-end space-x-12 xl:space-x-20">
          <Link
            href="/"
            className="text-white font-medium hover:text-[#E2725B] transition-colors text-base"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-white font-medium hover:text-[#E2725B] transition-colors text-base"
          >
            About Us
          </Link>
          <div className="relative group">
            <button
              className="text-white font-medium hover:text-[#E2725B] transition-colors flex items-center gap-1 text-base focus:outline-none"
              onClick={() => setServicesOpen((open) => !open)}
              aria-haspopup="true"
              aria-expanded={servicesOpen}
              type="button"
            >
              Services
              <ChevronDown className="w-4 h-4" />
            </button>
            {servicesOpen && (
              <div
                id="services-dropdown"
                className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-lg py-2 z-50 min-w-[200px]"
              >
                <Link
                  href="/services/messaging-and-positioning-strategy"
                  className="block px-5 py-3 text-[#6C3FC5] hover:bg-[#f3f0fa] text-base font-medium transition-colors"
                  onClick={() => setServicesOpen(false)}
                >
                  Messaging & Positioning
                </Link>
                <Link
                  href="/services/linkedIn-ghostwriting"
                  className="block px-5 py-3 text-[#6C3FC5] hover:bg-[#f3f0fa] text-base font-medium transition-colors"
                  onClick={() => setServicesOpen(false)}
                >
                  LinkedIn Ghostwriting
                </Link>

                <Link
                  href="/services/seo"
                  className="block px-5 py-3 text-[#6C3FC5] hover:bg-[#f3f0fa] text-base font-medium transition-colors"
                  onClick={() => setServicesOpen(false)}
                >
                  SEO
                </Link>
                <Link
                  href="/services/google-ads"
                  className="block px-5 py-3 text-[#6C3FC5] hover:bg-[#f3f0fa] text-base font-medium transition-colors"
                  onClick={() => setServicesOpen(false)}
                >
                  Google Ads
                </Link>
              </div>
            )}
          </div>
          <Link
            href="/audit"
            className="text-white font-medium hover:text-[#E2725B] transition-colors text-base"
          >
            Get your Audit!
          </Link>
          {/* Contact Button */}
          <div className="flex items-center pr-0">
            <Link href="#contact-form">
              <button className="bg-[#E2725B] hover:bg-[#d45c43] text-white px-6 lg:px-8 py-4 text-base font-semibold transition-colors rounded-xl h-[64px] min-w-[140px] lg:min-w-[160px]">
                Contact Us
              </button>
            </Link>
          </div>
        </nav>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="lg:hidden bg-[#5233B0] border-t border-white/20 py-4 px-4">
          <div className="flex flex-col space-y-4">
            <Link
              href="/"
              className="text-white font-medium hover:text-[#E2725B] transition-colors text-base py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-white font-medium hover:text-[#E2725B] transition-colors text-base py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>

            {/* Mobile Services Dropdown */}
            <div>
              <button
                className="text-white font-medium hover:text-[#E2725B] transition-colors flex items-center gap-1 text-base py-2 w-full"
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                type="button"
              >
                Services
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}
                />
              </button>
              {mobileServicesOpen && (
                <div className="pl-4 mt-2 space-y-2">
                  <button
                    className="block py-2 text-white/90 hover:text-[#E2725B] text-sm transition-colors text-left w-full"
                    onClick={() => {
                      router.push(
                        "/services/messaging-and-positioning-strategy",
                      );
                      setMobileServicesOpen(false);
                      setMobileMenuOpen(false);
                    }}
                  >
                    Messaging & Positioning
                  </button>
                  <button
                    className="block py-2 text-white/90 hover:text-[#E2725B] text-sm transition-colors text-left w-full"
                    onClick={() => {
                      router.push("/services/linkedIn-ghostwriting");
                      setMobileServicesOpen(false);
                      setMobileMenuOpen(false);
                    }}
                  >
                    LinkedIn Ghostwriting
                  </button>
                  <button
                    className="block py-2 text-white/90 hover:text-[#E2725B] text-sm transition-colors text-left w-full"
                    onClick={() => {
                      router.push("/services/seo");
                      setMobileServicesOpen(false);
                      setMobileMenuOpen(false);
                    }}
                  >
                    SEO
                  </button>
                  <button
                    className="block py-2 text-white/90 hover:text-[#E2725B] text-sm transition-colors text-left w-full"
                    onClick={() => {
                      router.push("/services/google-ads");
                      setMobileServicesOpen(false);
                      setMobileMenuOpen(false);
                    }}
                  >
                    Google Ads
                  </button>
                </div>
              )}
            </div>

            {/* Mobile Contact Button */}
            <Link href="#contact-form" onClick={() => setMobileMenuOpen(false)}>
              <button className="w-full bg-[#E2725B] hover:bg-[#d45c43] text-white px-6 py-3 text-base font-semibold transition-colors rounded-xl">
                Contact Us
              </button>
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
