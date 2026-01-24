"use client";

import React from "react";
import Image from "next/image";
import Link  from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#10002B] pt-8 md:pt-12 pb-4 px-4 w-full">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:justify-between md:items-start gap-6 md:gap-8">
        {/* Left: Logo and site */}
        <div className="flex flex-col items-start mb-6 md:mb-0">
          <Image
            src="/images/vivaldi-logo.svg"
            alt="Vivaldi Logo"
            width={140}
            height={140}
            className="md:w-[180px] md:h-[180px]"
          />
          <span className="text-white text-sm mt-2">www.vivaldimkt.com</span>
          <span className="text-white text-sm">info@vivaldimkt.com</span>
        </div>
        {/* Center: Navigation */}
        <div className="flex-1 flex flex-col md:items-center">
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 md:gap-12 mb-2">
            <Link
              href="/"
              className="text-white font-semibold text-sm hover:underline"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-white font-semibold text-sm hover:underline"
            >
              About
            </Link>
            <div className="flex flex-col">
              <p className="text-white font-semibold text-sm mb-3">
                Services
              </p>
              
              <div className="flex flex-col gap-2 md:gap-3 pl-2 md:pl-0">
                <Link href="/services/messaging-and-positioning-strategy" className="text-white text-xs hover:underline">
                  Messaging &amp; Positioning
                </Link>
                <Link href="/services/social-media-ghostwriting" className="text-white text-xs hover:underline">
                  Ghostwriting
                </Link>
                <Link href="/services/google-and-meta-ads" className="text-white text-xs hover:underline">
                  Google Ads
                </Link>
                <Link href="/services/seo" className="text-white text-xs hover:underline">
                  SEO
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-t border-white/30 my-4 md:my-6" />
      <div className="text-center text-white text-xs">
        Copyright © 2025 www.vivaldimkt.com All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
