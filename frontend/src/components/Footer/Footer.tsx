"use client";

import React from "react";
import Image from "next/image";
import Link  from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#10002B] pt-12 pb-4 px-4 w-full">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:justify-between md:items-start gap-8">
        {/* Left: Logo and site */}
        <div className="flex flex-col items-start mb-8 md:mb-0">
          <Image
            src="/images/vivaldi-logo.svg"
            alt="Vivaldi Logo"
            width={180}
            height={180}
          />
          <span className="text-white text-sm">www.vivaldimkt.com</span>
          <span className="text-white text-sm">info@vivaldimkt.com</span>
        </div>
        {/* Center: Navigation */}
        <div className="flex-1 flex flex-col items-center">
          <div className="flex flex-row gap-25 mb-2">
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
            <div className="flex flex-col items-center">
              <p
                
                className="text-white font-semibold text-sm"
              >
                Services
              </p>
              
              <div className="flex flex-col items-center gap-4 mt-5">
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
      <hr className="border-t border-white/30 my-6" />
      <div className="text-center text-white text-xs">
        Copyright © 2025 www.vivaldimkt.com All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
