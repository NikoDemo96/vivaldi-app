'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';

const Navbar = () => {
  return (
      <header className="bg-[#6C3FC5] px-0 py-0 w-full">
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
          <nav className="flex-1 flex items-center justify-center space-x-8">
            <a
              href="#"
              className="text-white font-medium hover:text-white/80 transition-colors text-base"
            >
              About
            </a>
            <div className="relative group">
              <button className="text-white font-medium hover:text-white/80 transition-colors flex items-center gap-1 text-base">
                Services
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
            <a
              href="#"
              className="text-white font-medium hover:text-white/80 transition-colors text-base"
            >
              Sectors
            </a>
            <a
              href="#"
              className="text-white font-medium hover:text-white/80 transition-colors text-base"
            >
              Resources
            </a>
            <a
              href="#"
              className="text-white font-medium hover:text-white/80 transition-colors text-base"
            >
              Our Work
            </a>
          </nav>

          {/* Contact Button */}
          <div className="flex items-center pr-0">
            <button className="bg-[#E2725B] hover:bg-[#d45c43] text-white px-8 py-4 text-base font-semibold transition-colors rounded-none h-[64px] min-w-[160px]">
              Contact Us
            </button>
          </div>
        </div>
      </header>
  );
};

export default Navbar;
