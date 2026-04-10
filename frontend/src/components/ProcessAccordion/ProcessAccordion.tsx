"use client";
import React, { useState } from "react";

const steps = [
  {
    number: 1,
    title: "Discovery & Strategic Interviews",
    description:
      "We talk with you twice. First, about your service: what you do, how you're different, how you work. Second, about your clients: who they are, what they care about, and why they choose one company over another.",
  },
  {
    number: 2,
    title: "Market Research",
    description:
      "We research your prospects through multiple methods: interviewing your previous customers, analyzing online discussions where your target market shares their experiences, and studying chosen competitors to identify what clients truly value when making decisions.",
  },
  {
    number: 3 ,
    title: "Strategic Document Creation",
    description:
      "Using all this research, we create practical documents that become your go-to guide for every marketing decision. Instead of dense reports you’ll never use again, they’re designed as reference guides for everything from website copy to content creation to sales calls.",
  },
  {
    number: 4,
    title: "Website Copy & Revisions",
    description:
      "We write compelling website copy that reflects your new messaging strategy, then work with you through revisions until everything perfectly captures your value proposition. Web development services are also available if you need a complete website refresh to match your new messaging.",
  },
];

export default function ProcessAccordion() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section
      className="w-full py-16 md:py-24 px-4 md:px-6 lg:px-8"
      style={{ background: "#0D0020" }}
    >
      <div className="max-w-2xl mx-auto">
        {/* Label */}
        <p className="text-center text-[#4A3AFF] text-sm font-medium mb-3 tracking-wide">
          Our Methodology
        </p>
        {/* Title */}
        <h2 className="text-white text-4xl sm:text-5xl font-bold text-center mb-10 md:mb-14">
          Our Process
        </h2>

        {/* Accordion */}
        <div className="flex flex-col gap-4">
          {steps.map((step, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={step.number}
                className="bg-white rounded-2xl shadow-sm overflow-hidden"
              >
                <button
                  className="w-full flex items-center gap-4 px-5 py-5 text-left"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                >
                  {/* Number badge */}
                  <span
                    className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-base font-bold transition-colors ${
                      isOpen
                        ? "bg-[#4A3AFF] text-white"
                        : "border-2 border-[#4A3AFF] text-[#4A3AFF] bg-transparent"
                    }`}
                  >
                    {step.number}
                  </span>

                  {/* Title */}
                  <span
                    className={`flex-1 text-base md:text-lg font-bold transition-colors ${
                      isOpen ? "text-[#4A3AFF]" : "text-[#18102B]"
                    }`}
                  >
                    {step.title}
                  </span>

                  {/* Chevron */}
                  <svg
                    className={`flex-shrink-0 w-5 h-5 text-[#4A3AFF] transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Expandable content */}
                {isOpen && (
                  <div className="px-5 pb-6 pt-0">
                    <p className="text-[#4B4B6A] text-sm md:text-base leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
