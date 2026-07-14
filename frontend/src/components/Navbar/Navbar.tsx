"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const isActive = (href: string) => pathname === href;
  const isServicesActive = pathname.startsWith("/services");

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

  const navLinkClass = (href: string) =>
    `relative text-white font-medium text-base transition-colors hover:text-[#E2725B] ${
      isActive(href)
        ? "after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-[#E2725B]"
        : ""
    }`;

  return (
    <header className="w-full bg-[#100820] px-6 md:px-10 lg:px-16">
      <div className="w-full flex items-center justify-between h-[72px] max-w-none">
        {/* Logo */}
        <div className="flex items-center flex-shrink-0">
          <Link href="/">
            <Image
              src="/images/vivaldi-logo-new.svg"
              alt="Vivaldi Logo"
              width={150}
              height={50}
              className="h-auto"
            />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white p-2 hover:bg-white/10 rounded-md transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

        {/* Desktop Navigation — centered */}
        <nav className="hidden lg:flex flex-1 items-center justify-center gap-12 xl:gap-16">
          <Link href="/" className={navLinkClass("/")}>
            Home
          </Link>

          {/* Services dropdown */}
          <div className="relative" id="services-dropdown">
            <button
              className={`relative flex items-center gap-1 text-white font-medium text-base transition-colors hover:text-[#E2725B] focus:outline-none ${
                isServicesActive
                  ? "after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-[#E2725B]"
                  : ""
              }`}
              onClick={() => setServicesOpen((open) => !open)}
              aria-haspopup="true"
              aria-expanded={servicesOpen}
              type="button"
            >
              Services
              <ChevronDown
                className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
              />
            </button>
            {servicesOpen && (
              <div className="absolute left-1/2 -translate-x-1/2 mt-3 w-60 bg-white rounded-xl shadow-xl py-2 z-50">
                <Link
                  href="/services/messaging-and-positioning-strategy"
                  className="block px-5 py-3 text-[#6C3FC5] hover:bg-[#f3f0fa] text-sm font-medium transition-colors"
                  onClick={() => setServicesOpen(false)}
                >
                  Messaging & Positioning
                </Link>
                {/* <Link
                  href="/services/linkedIn-ghostwriting"
                  className="block px-5 py-3 text-[#6C3FC5] hover:bg-[#f3f0fa] text-sm font-medium transition-colors"
                  onClick={() => setServicesOpen(false)}
                >
                  LinkedIn Ghostwriting
                </Link> */}
                <Link
                  href="/services/seo"
                  className="block px-5 py-3 text-[#6C3FC5] hover:bg-[#f3f0fa] text-sm font-medium transition-colors"
                  onClick={() => setServicesOpen(false)}
                >
                  SEO
                </Link>
                <Link
                  href="/services/google-ads"
                  className="block px-5 py-3 text-[#6C3FC5] hover:bg-[#f3f0fa] text-sm font-medium transition-colors"
                  onClick={() => setServicesOpen(false)}
                >
                  Google Ads
                </Link>
              </div>
            )}
          </div>

          <Link href="/about" className={navLinkClass("/about")}>
            About Us
          </Link>

          <Link href="/audit" className={navLinkClass("/audit")}>
            Website Audit
          </Link>
        </nav>

        {/* Contact Button */}
        <div className="hidden lg:flex items-center flex-shrink-0">
          <Link href="#contact-form">
            <button className="bg-[#E2725B] hover:bg-[#cc5c44] text-white px-8 py-2 text-sm font-semibold transition-colors rounded-md">
              Contact Us
            </button>
          </Link>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="lg:hidden border-t border-white/10 py-5 px-2">
          <div className="flex flex-col space-y-1">
            <Link
              href="/"
              className="text-white font-medium hover:text-[#E2725B] transition-colors text-base py-3 px-2 rounded-md hover:bg-white/5"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>

            {/* Mobile Services Dropdown */}
            <div>
              <button
                className="text-white font-medium hover:text-[#E2725B] transition-colors flex items-center gap-1 text-base py-3 px-2 w-full rounded-md hover:bg-white/5"
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                type="button"
              >
                Services
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}
                />
              </button>
              {mobileServicesOpen && (
                <div className="pl-4 mt-1 space-y-1">
                  <button
                    className="block py-2 px-2 text-white/80 hover:text-[#E2725B] text-sm transition-colors text-left w-full rounded-md hover:bg-white/5"
                    onClick={() => {
                      router.push("/services/messaging-and-positioning-strategy");
                      setMobileServicesOpen(false);
                      setMobileMenuOpen(false);
                    }}
                  >
                    Messaging & Positioning
                  </button>
                  {/* <button
                    className="block py-2 px-2 text-white/80 hover:text-[#E2725B] text-sm transition-colors text-left w-full rounded-md hover:bg-white/5"
                    onClick={() => {
                      router.push("/services/linkedIn-ghostwriting");
                      setMobileServicesOpen(false);
                      setMobileMenuOpen(false);
                    }}
                  >
                    LinkedIn Ghostwriting
                  </button> */}
                  <button
                    className="block py-2 px-2 text-white/80 hover:text-[#E2725B] text-sm transition-colors text-left w-full rounded-md hover:bg-white/5"
                    onClick={() => {
                      router.push("/services/seo");
                      setMobileServicesOpen(false);
                      setMobileMenuOpen(false);
                    }}
                  >
                    SEO
                  </button>
                  <button
                    className="block py-2 px-2 text-white/80 hover:text-[#E2725B] text-sm transition-colors text-left w-full rounded-md hover:bg-white/5"
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

            <Link
              href="/about"
              className="text-white font-medium hover:text-[#E2725B] transition-colors text-base py-3 px-2 rounded-md hover:bg-white/5"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>

            <Link
              href="/audit"
              className="text-white font-medium hover:text-[#E2725B] transition-colors text-base py-3 px-2 rounded-md hover:bg-white/5"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Your Audit!
            </Link>

            <div className="pt-2">
              <Link href="#contact-form" onClick={() => setMobileMenuOpen(false)}>
                <button className="w-full bg-[#E2725B] hover:bg-[#cc5c44] text-white px-6 py-3 text-base font-semibold transition-colors rounded-lg">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
