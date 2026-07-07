"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#10002B] pt-12 md:pt-16 pb-0 px-4 w-full">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-8 pb-12 md:pb-16">
        {/* Column 1: Logo + contact */}
        <div className="flex flex-col gap-3">
          <Image
            src="/images/vivaldi-logo.svg"
            alt="Vivaldi Marketing"
            width={180}
            height={60}
          />
          <p className="text-white font-semibold text-sm mt-3">
            www.vivaldimkt.com
          </p>
          <p className="text-white font-semibold text-sm">
            info@vivaldimkt.com
          </p>
        </div>

        {/* Column 2: Navigation */}
        <div>
          <h3 className="text-white font-bold text-base mb-2">Navigation</h3>
          <div className="w-24 h-[3px] bg-[#E2725B] mb-5" />
          <ul className="space-y-4">
            <li>
              <Link href="/" className="text-white/75 text-sm hover:text-white transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-white/75 text-sm hover:text-white transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link href="/services" className="text-white/75 text-sm hover:text-white transition-colors">
                Services
              </Link>
            </li>
            <li>
              <Link href="#contact-form" className="text-white/75 text-sm hover:text-white transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Services */}
        <div>
          <h3 className="text-white font-bold text-base mb-2">Services</h3>
          <div className="w-24 h-[3px] bg-[#E2725B] mb-5" />
          <ul className="space-y-4">
            <li>
              <Link href="/services/messaging-and-positioning-strategy" className="text-white/75 text-sm hover:text-white transition-colors">
                Messaging &amp; Positioning
              </Link>
            </li>
            <li>
              <Link href="/services/linkedIn-ghostwriting" className="text-white/75 text-sm hover:text-white transition-colors">
                Ghostwriting
              </Link>
            </li>
            <li>
              <Link href="/services/google-ads" className="text-white/75 text-sm hover:text-white transition-colors">
                Google Ads
              </Link>
            </li>
            <li>
              <Link href="/services/seo" className="text-white/75 text-sm hover:text-white transition-colors">
                SEO Strategy
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4: Resources */}
        <div>
          <h3 className="text-white font-bold text-base mb-2">Resources</h3>
          <div className="w-24 h-[3px] bg-[#E2725B] mb-5" />
          <ul className="space-y-4">
            {/* <li>
              <Link href="/case-studies" className="text-white/75 text-sm hover:text-white transition-colors">
                Case Studies
              </Link>
            </li> */}
            {/* <li>
              <Link href="/blog" className="text-white/75 text-sm hover:text-white transition-colors">
                Blog
              </Link>
            </li> */}
            <li>
              <Link href="/audit" className="text-white/75 text-sm hover:text-white transition-colors">
                Free Audit
              </Link>
            </li>
            {/* <li>
              <Link href="#contact-form" className="text-white/75 text-sm hover:text-white transition-colors">
                Contact
              </Link>
            </li> */}
          </ul>
        </div>
      </div>

      {/* Glow divider */}
      <div className="w-full h-px bg-white/20" />
      <div
        className="w-full h-10"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(226,114,91,0.7) 0%, rgba(226,114,91,0.15) 50%, transparent 100%)",
        }}
      />
    </footer>
  );
};

export default Footer;
