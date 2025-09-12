import React from "react";
import { ChevronDown } from "lucide-react"
import Image from "next/image";

const Hero = () => {
  return (
   <div className="min-h-screen">
      {/* Header */}
      <header className="bg-purple-600 bg-gradient-to-r from-purple-600 to-orange-400 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div>
            <Image src="/images/vivaldi-logo.svg" alt="Vivaldi Logo" width={140} height={140} />
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-white hover:text-white/80 transition-colors">
              About
            </a>
            <div className="relative group">
              <button className="text-white hover:text-white/80 transition-colors flex items-center gap-1">
                Services
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
            <a href="#" className="text-white hover:text-white/80 transition-colors">
              Sectors
            </a>
            <a href="#" className="text-white hover:text-white/80 transition-colors">
              Resources
            </a>
            <a href="#" className="text-white hover:text-white/80 transition-colors">
              Our Work
            </a>
          </nav>

          {/* Contact Button */}
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md transition-colors">
            Contact Us
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/images/duo-manufacturing.png')`,
          }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Work with Marketers <br className="hidden md:block" />
            <span className="underline decoration-2 underline-offset-4">Who Speak Your Language</span>
          </h1>

          <p className="text-lg md:text-xl text-white/90 mb-4 max-w-2xl mx-auto leading-relaxed">
            Marketing strategy for translation agencies
          </p>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            and manufacturing companies by people who've worked in your industries.
          </p>

          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg font-semibold rounded-md transition-colors">
            BOOK A DISCOVERY CALL
          </button>
        </div>
      </section>
    </div>
  );
};

export default Hero;
