"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

const Navbar = () => {
  const [servicesOpen, setServicesOpen] = useState(false);

  // Close dropdown when clicking outside
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
    <header className="w-full bg-[#5233B0] px-16 py-5">
      <div className="w-full flex items-center justify-between h-[64px] max-w-none">
        {/* Logo and Brand */}
        <div className="mt-10 flex items-center pl-8 min-w-[260px]">
          <Image
            src="/images/vivaldi-logo.svg"
            alt="Vivaldi Logo"
            width={180}
            height={180}
            className="mr-2"
          />
        </div>

        {/* Navigation */}
        <nav className="flex-1 flex items-center justify-end space-x-20">
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
                  href="/services/ghostwriting"
                  className="block px-5 py-3 text-[#6C3FC5] hover:bg-[#f3f0fa] text-base font-medium transition-colors"
                  onClick={() => setServicesOpen(false)}
                >
                  Ghostwriting
                </Link>
                <Link
                  href="/services/messaging&pos"
                  className="block px-5 py-3 text-[#6C3FC5] hover:bg-[#f3f0fa] text-base font-medium transition-colors"
                  onClick={() => setServicesOpen(false)}
                >
                  Messaging & Positioning
                </Link>
                <Link
                  href="/services/seo"
                  className="block px-5 py-3 text-[#6C3FC5] hover:bg-[#f3f0fa] text-base font-medium transition-colors"
                  onClick={() => setServicesOpen(false)}
                >
                  SEO
                </Link>
                <Link
                  href="/services/google&meta"
                  className="block px-5 py-3 text-[#6C3FC5] hover:bg-[#f3f0fa] text-base font-medium transition-colors"
                  onClick={() => setServicesOpen(false)}
                >
                  Google & Meta Ads
                </Link>
              </div>
            )}
          </div>
          {/* Contact Button */}
          <div className="flex items-center pr-0">
            <button className="bg-[#E2725B] hover:bg-[#d45c43] text-white px-8 py-4 text-base font-semibold transition-colors rounded-none h-[64px] min-w-[160px] rounded-xl">
              Contact Us
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
