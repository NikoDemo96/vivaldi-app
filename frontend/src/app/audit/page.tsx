import React from "react";
import NavBar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import ContactForm from "@/components/ContactForm/ContactForm";
import AuditContactForm from "@/components/AuditContactForm/AuditContactForm";
import Link from "next/link";
import { AlertTriangle } from "lucide-react";

export const metadata = {
  title: "Messaging Audit",
  description:
    "Get a short video showing exactly where you're losing potential clients—whether it's your website, LinkedIn, or how you're talking about your service.",
};

export default function AuditPage() {
  return (
    <main>
      <NavBar />

      {/* ── Hero Section ────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-[#8663F4] via-[#401AB4] to-[#2C0B63] min-h-[480px] flex items-center py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center gap-12">

          {/* Left – Headline + CTA */}
          <div className="lg:w-1/2 text-white">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Not Sure{" "}
              <span className="underline decoration-[#E2725B] underline-offset-4">
                Why
              </span>
              <br />
              You&apos;re Not Getting
              <br />
              More Clients?
            </h1>

            <p className="text-white/85 text-base md:text-lg leading-relaxed mb-8 max-w-md">
              Get a short video showing exactly where you&apos;re losing
              potential clients—whether it&apos;s your website, LinkedIn, or
              how you&apos;re talking about your service.
            </p>

            <Link href="#contact-form">
              <button className="bg-[#E2725B] hover:bg-[#d45c43] text-white px-6 py-3 rounded-lg font-semibold text-base transition-colors">
                Get Your Messaging Audit
              </button>
            </Link>
          </div>

          {/* Right – Dashboard mockup */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-5 w-full max-w-[420px]">
              {/* Browser chrome dots */}
              <div className="flex gap-2 mb-5">
                <span className="w-3 h-3 rounded-full bg-[#E2725B]" />
                <span className="w-3 h-3 rounded-full bg-yellow-400" />
                <span className="w-3 h-3 rounded-full bg-green-400" />
              </div>

              {/* Two mock widgets */}
              <div className="flex gap-3 mb-4">
                {/* Bar chart widget */}
                <div className="bg-[#3a2070] rounded-xl p-3 flex-1 h-28 flex items-end gap-1">
                  {[60, 80, 45, 100, 55, 70].map((h, i) => (
                    <div
                      key={i}
                      className="bg-[#6947D2] rounded-sm flex-1"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>

                {/* Profile widget */}
                <div className="bg-[#E2725B] rounded-xl p-3 flex-1 flex flex-col justify-between">
                  <div className="w-9 h-9 bg-white/40 rounded-full flex items-center justify-center">
                    <svg
                      viewBox="0 0 24 24"
                      fill="white"
                      className="w-5 h-5 opacity-70"
                    >
                      <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                    </svg>
                  </div>
                  <div className="bg-white/30 h-2 rounded w-4/5" />
                </div>
              </div>

              {/* Insight cards */}
              <div className="space-y-2">
                <div className="bg-white/10 rounded-lg px-4 py-2.5 text-white/90 text-sm">
                  72% Drop-off on Homepage
                </div>
                <div className="bg-white/10 rounded-lg px-4 py-2.5 text-white/90 text-sm">
                  #1 Competitor: Clearer CTA
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section divider */}
      <div className="h-[8px] w-full bg-gradient-to-r from-[#6947D2] to-[#E2725B]" />

      {/* ── Client Acquisition Disconnect ───────────────────────────── */}
      <section className="bg-white py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="w-fit mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#6947D2] text-center mb-2">
              The Client Acquisition Disconnect
            </h2>
            <div className="w-full h-[3px] bg-gradient-to-r from-[#6947D2] to-[#E2725B] rounded" />
          </div>

          <div className="flex flex-col lg:flex-row gap-12 items-start">
            {/* Left – Body copy */}
            <div className="lg:w-1/2">
              <p className="text-gray-700 text-base md:text-lg mb-4 leading-relaxed">
                You&apos;re posting on LinkedIn, driving traffic to your website
                through SEO or ads, doing the work. But the clients aren&apos;t
                coming.
              </p>

              <p className="text-gray-700 text-base md:text-lg mb-5 leading-relaxed">
                <strong>Here&apos;s what usually happens:</strong> somewhere
                between how you present yourself and what prospects need to
                hear, there&apos;s a disconnect.
              </p>

              <ul className="list-disc list-outside pl-5 space-y-2 text-gray-700 text-base md:text-lg mb-8">
                <li>
                  Maybe your website doesn&apos;t make your value clear fast
                  enough.
                </li>
                <li>
                  Maybe your LinkedIn content doesn&apos;t talk about the
                  things your clients really care about.
                </li>
                <li>
                  Maybe the way you describe your service sounds too much like
                  everyone else.
                </li>
              </ul>

              <div className="border border-indigo-400 bg-indigo-50 rounded-md p-4 flex items-start gap-3">
                <AlertTriangle className="text-yellow-500 w-5 h-5 mt-0.5 flex-shrink-0" />
                <p className="text-indigo-800 font-semibold text-sm md:text-base">
                  Every month without fixing this is another month relying only
                  on word of mouth.
                </p>
              </div>
            </div>

            {/* Right – Messaging Gap diagram */}
            <div className="lg:w-1/2 flex justify-center">
              <div className="bg-[#10002B] rounded-2xl overflow-hidden flex w-full max-w-sm shadow-xl min-h-[360px]">
                {/* YOUR INPUT column */}
                <div className="w-[44%] p-5 text-white ">
                  <div className="flex items-start gap-2 mb-5">
                    <span className="text-[#E2725B] text-xl leading-none mt-0.5">
                      ⚙
                    </span>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest">
                        YOUR INPUT
                      </p>
                      <p className="text-[10px] text-white/50">(Effort)</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {[
                      "Consistent Posting",
                      "SEO & Paid Ads",
                      "Service Delivery",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-2">
                        <span className="text-yellow-400 text-base">👍</span>
                        <span className="text-sm text-white/90">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* THE MESSAGING GAP – vertical strip */}
                <div className="relative flex items-center justify-center w-8 bg-[#E2725B] flex-shrink-0">
                  <span
                    className="text-white text-[8px] font-bold tracking-[0.15em] uppercase whitespace-nowrap select-none"
                    style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
                  >
                    THE MESSAGING GAP
                  </span>
                </div>

                {/* CLIENT PERCEPTION column */}
                <div className="flex-1 bg-gray-100 p-5 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-[#6947D2] text-base">◎</span>
                      <p className="text-[10px] font-bold text-gray-700 uppercase tracking-widest">
                        CLIENT PERCEPTION
                      </p>
                    </div>
                    {/* Blurred placeholder bars */}
                    <div className="bg-[#E2725B]/40 rounded h-8 mb-2 w-4/5 blur-[2px]" />
                    <div className="bg-gray-300 rounded h-4 w-3/5 blur-[2px]" />
                  </div>

                  <div className="flex items-center gap-1.5 pt-6">
                    <span className="text-gray-500 text-base">↩</span>
                    <span className="text-gray-700 font-semibold text-sm">
                      They leave.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section divider */}
      <div className="h-[8px] w-full bg-gradient-to-r from-[#6947D2] to-[#E2725B]" />

      {/* ── Exactly What This Audit Fixes ───────────────────────────── */}
      <section className="bg-[#EDE9F8] py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="w-fit mx-auto mb-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#10002B] mb-1">
              Exactly What This Audit Fixes
            </h2>
            <div className="w-full h-[3px] bg-gradient-to-r from-[#6947D2] to-[#E2725B] rounded" />
          </div>
          <p className="text-[#6947D2] text-base md:text-lg leading-relaxed">
            We review how you present your business—your website, your LinkedIn,
            how you stack up against competitors—and record a ~15 minutes video
            showing you exactly what&apos;s not working and how to fix it.
          </p>
        </div>

        {/* Two cards */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {/* Card 1 – Pinpoint Problems */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-white">
            <div className="h-1.5 bg-gradient-to-r from-[#6947D2] to-[#E2725B]" />
            <div className="p-6">
              <div className="w-11 h-11 bg-[#6947D2] rounded-full flex items-center justify-center mb-4">
                <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" className="w-5 h-5">
                  <circle cx="11" cy="11" r="7" />
                  <line x1="16.5" y1="16.5" x2="21" y2="21" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#6947D2] mb-3">Pinpoint Problems</h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
                You&apos;ll know which parts of your copy are turning people away,
                where you&apos;re creating confusion without realizing it, and what
                changes will actually make a difference.
              </p>
              <p className="text-[#6947D2] font-bold text-sm md:text-base leading-snug">
                No guessing, no generic advice.
                <br />
                Just specific feedback you can use right away.
              </p>
            </div>
          </div>

          {/* Card 2 – What You Get */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-white">
            <div className="h-1.5 bg-gradient-to-r from-[#6947D2] to-[#E2725B]" />
            <div className="p-6">
              <div className="w-11 h-11 bg-[#6947D2] rounded-full flex items-center justify-center mb-4">
                <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" className="w-5 h-5">
                  <rect x="2" y="7" width="20" height="14" rx="2" />
                  <polygon points="10,10 16,14 10,18" fill="white" stroke="none" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#6947D2] mb-1">What You Get</h3>
              <p className="text-gray-700 font-semibold text-sm md:text-base mb-4">
                A comprehensive Loom video walking through:
              </p>
              <ul className="space-y-3">
                {[
                  "How your website talks about your service",
                  "How you compare to competitors",
                  "Analysis of one social media profile",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-700 text-sm md:text-base">
                    <span className="w-5 h-5 rounded-full bg-[#6947D2] flex items-center justify-center flex-shrink-0">
                      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" className="w-3 h-3">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mb-10">
          <Link href="#contact-form">
            <button className="bg-[#10002B] hover:bg-[#1e0d6e] text-white px-8 py-3.5 rounded-lg font-semibold text-base transition-colors">
              Get Your Messaging Audit
            </button>
          </Link>
        </div>

        {/* Special Credit Offer card */}
        <div className="max-w-2xl mx-auto bg-[#2D0A6B] rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-3">Special Credit Offer</h3>
          <p className="text-white/75 text-sm md:text-base leading-relaxed mb-6 max-w-md mx-auto">
            Love your audit and want the full strategy? If you decide to work with us on a
            messaging project, we&apos;ll apply a discount.
          </p>
          <div className="inline-flex items-center gap-3 bg-white/10 border border-white/20 rounded-xl px-7 py-4 mb-5">
            <span className="text-4xl font-extrabold">$200</span>
            <span className="text-yellow-400 font-bold text-sm leading-tight text-left">
              Full Project<br />Credit
            </span>
          </div>
          <p className="text-white/40 text-xs italic">
            *Offer valid for 30 days following your audit delivery.
          </p>
        </div>
      </section>

      {/* Section divider */}
      <div className="h-[8px] w-full bg-gradient-to-r from-[#6947D2] to-[#E2725B]" />

      {/* ── Here's How It Works ─────────────────────────────────────── */}
      <section className="pt-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-16">
            <div className="w-fit mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#10002B] mb-2">
                Here&apos;s How It Works
              </h2>
              <div className="w-full h-[3px] bg-gradient-to-r from-[#6947D2] to-[#E2725B] rounded" />
            </div>
          </div>

          {/* Steps */}
          <div className="relative flex flex-col md:flex-row items-start justify-between gap-10 md:gap-0">
            {/* Connecting line (desktop only) */}
            <div className="hidden md:block absolute top-[22px] left-[calc(16.66%-8px)] right-[calc(16.66%-8px)] h-[2px] bg-[#6947D2]" />

            {[
              {
                num: "1",
                title: "You Reach Out",
                body: "Fill out the contact form telling us you want an audit. Include your website and 1 social media profile, who your target clients are, which service you want to prioritize, and how you're currently driving traffic.",
              },
              {
                num: "2",
                title: "We Analyze & Record",
                body: "We review everything and record a custom video walking you through what we found.",
              },
              {
                num: "3",
                title: "You Receive & Pay $50",
                body: "We send you the video and written summary. Once you've received it, we process the $50 payment.",
              },
            ].map((step) => (
              <div key={step.num} className="relative flex flex-col items-center text-center md:w-1/3 md:px-6">
                {/* Diamond badge */}
                <div
                  className="relative z-10 w-11 h-11 bg-[#6947D2] flex items-center justify-center mb-5 flex-shrink-0"
                  style={{ transform: "rotate(45deg)" }}
                >
                  <span
                    className="text-white font-bold text-lg"
                    style={{ transform: "rotate(-45deg)" }}
                  >
                    {step.num}
                  </span>
                </div>
                <h3 className="text-base md:text-lg font-bold text-[#10002B] mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom banner */}
        <div className="mt-16 -mx-4 md:-mx-8 lg:-mx-16 bg-gradient-to-r from-[#FF8971] via-[#6947D2] to-[#FF8971]  py-4 px-6 text-center">
          <p className="text-white font-semibold text-sm md:text-base">
            Simple, straightforward process to get your personalized audit
          </p>
        </div>
      </section>

      {/* Section divider */}
      <div className="h-[8px] w-full bg-[#6947D2]" />

      {/* ── Contact Form ─────────────────────────────────────────────── */}
      <div className="mt-16">
        <AuditContactForm />
      </div>

      <Footer />
    </main>
  );
}
