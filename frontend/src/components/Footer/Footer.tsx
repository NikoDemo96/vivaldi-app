"use client";

import React from "react";
import Image from "next/image";

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
        </div>
        {/* Center: Navigation */}
        <div className="flex-1 flex flex-col items-center">
          <div className="flex flex-row gap-10 mb-2">
            <a
              href="#"
              className="text-white font-semibold text-sm hover:underline"
            >
              About
            </a>
            <div className="flex flex-col items-center">
              <a
                href="#"
                className="text-white font-semibold text-sm hover:underline"
              >
                Services
              </a>
              <div className="flex flex-col items-center mt-1">
                <a href="#" className="text-white text-xs hover:underline">
                  Messaging &amp; Positioning
                </a>
                <a href="#" className="text-white text-xs hover:underline">
                  Ghostwriting
                </a>
                <a href="#" className="text-white text-xs hover:underline">
                  Google Ads
                </a>
                <a href="#" className="text-white text-xs hover:underline">
                  SEO
                </a>
              </div>
            </div>
            <a
              href="#"
              className="text-white font-semibold text-sm hover:underline"
            >
              Resources
            </a>
            <a
              href="#"
              className="text-white font-semibold text-sm hover:underline"
            >
              Contact Us
            </a>
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
