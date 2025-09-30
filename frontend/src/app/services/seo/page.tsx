"use client";
import React from "react";
import Image from "next/image";
import NavBar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import ContactForm from "@/components/ContactForm/ContactForm";

const SeoPage = () => {
  return (
    <div className="min-h-screen bg-[#faf9fb]">
      <NavBar />
      {/* Get Found by Clients section */}
      <section className="w-full pt-16 pb-16 px-16 bg-[#faf9fb]">
        <div className="max-w-5xl mx-8">
          <h1 className="text-5xl md:text-6xl font-bold text-[#6C3FC5] mb-2 leading-tight text-left">
            Get Found by Clients
          </h1>
          <h2 className="text-5xl md:text-6xl font-bold text-[#FF8A71] mb-8 leading-tight text-left">
            Who Value Your Expertise
          </h2>
          <p className="text-[#6C3FC5] text-base md:text-lg mb-10 text-left">
            We help translation agencies and manufacturers build sustainable
            organic
            <br />
            traffic that attracts quality leads.
          </p>
          <div className="flex flex-col md:flex-row gap-4 items-start w-full mb-8">
            <button className="bg-[#1A133A] hover:bg-[#331E5B] text-white font-semibold px-8 py-3 rounded-md text-base transition-colors text-left w-full md:w-auto">
              Contact us by email
            </button>
            <button className="border-2 border-[#FF8A71] text-[#FF8A71] font-semibold px-8 py-3 rounded-md text-base transition-colors hover:bg-[#FF8A71] hover:text-white bg-transparent text-left w-full md:w-auto">
              Book a discovery call
            </button>
          </div>
        </div>
      </section>
      {/* SEO and KPIs */}
      <section className="relative w-full h-[340px] md:h-[400px] flex items-center justify-center">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/kpis.jpg"
            alt="LinkedIn content on laptop"
            width={1920}
            height={400}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 w-full flex items-center justify-center">
          <p className="text-white text-xl md:text-2xl font-semibold text-center max-w-3xl px-4">
            You've probably heard "SEO is dead" more times than you can count.
            The spammy tactics that used to work are dead, but SEO itself isn't.
            Your potential clients still use Google as their primary tool to
            find service providers, which means not ranking makes you invisible
            to qualified opportunities.
            <br />
            <br />
            We know which searches indicate genuine buying intent and create
            content that positions you as the right choice when those prospects
            are ready to hire.
          </p>
        </div>
      </section>
      {/* Our Approach to SEO Section */}
      <section className="w-full bg-[#faf9fb] py-20 px-2 md:px-0">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-[#6C3FC5] text-4xl md:text-5xl font-bold mb-10">
            Our Approach to SEO
          </h2>
          <div className="text-[#18102B] text-base md:text-lg mb-4">
            SEO isn&apos;t about ranking for the sake of ranking. It&apos;s
            about connecting you with prospects who are actually looking for
            what you offer and have the budget to hire you.
          </div>
          <div className="text-[#18102B] text-base md:text-lg mb-4">
            That&apos;s why we focus on searches that generate qualified leads
            and create content that feels authentic to your expertise. Whether
            that means targeting specific technical terms or broader industry
            searches depends entirely on your situation and what&apos;s actually
            achievable for your business.
          </div>
          <div className="text-[#18102B] text-base md:text-lg mb-10">
            Every strategy is different because every business is different.
            That&apos;s why we create tailored solutions, not cookie-cutter
            formulas.
          </div>
          <div className="flex justify-center">
            <button className="mt-2 px-8 py-3 bg-[#18102B] text-white font-semibold rounded-md shadow-md hover:bg-[#2a1e4d] transition-colors text-base">
              Book a discovery call
            </button>
          </div>
        </div>
      </section>
      {/* Our Process Section */}
      <section className="w-full bg-[#5233B0] py-16 px-2 md:px-0">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-white text-4xl md:text-5xl font-bold text-center mb-12">
            Our Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
            {/* Step 1 */}
            <div className="relative bg-white rounded-xl shadow-lg p-8 md:p-10 flex flex-col items-center text-center min-h-[280px]">
              <span
                className="absolute -left-8 -top-8 text-[4rem] md:text-[5rem] font-bold text-[#F07C5A] select-none"
                style={{ fontFamily: "Caveat, cursive" }}
              >
                1
              </span>
              <Image
                src="/images/light-bulb.svg"
                alt="Discovery Icon"
                width={90}
                height={90}
                className="mb-4"
              />
              <h3 className="text-xl md:text-2xl font-bold mb-2">Discovery</h3>
              <p className="text-[#18102B] text-base md:text-lg">
                We start by understanding your business model, ideal clients,
                and current site performance. We research how your best
                customers search and identify what’s working (or not working) in
                your industry.
              </p>
            </div>
            {/* Step 2 */}
            <div className="relative bg-white rounded-xl shadow-lg p-8 md:p-10 flex flex-col items-center text-center min-h-[280px]">
              <span
                className="absolute -left-8 -top-8 text-[4rem] md:text-[5rem] font-bold text-[#F07C5A] select-none"
                style={{ fontFamily: "Caveat, cursive" }}
              >
                2
              </span>
              <Image
                src="/images/loupe-icon.svg"
                alt="Keyword Research Icon"
                width={90}
                height={90}
                className="mb-4"
              />
              <h3 className="text-xl md:text-2xl font-bold mb-2">
                Keyword Research
              </h3>
              <p className="text-[#18102B] text-base md:text-lg">
                We uncover the specific terms and long-tail phrases your buyers
                actually use, mapping these to your sales cycle to target
                searches that indicate genuine buying intent.
              </p>
            </div>
            {/* Step 3 */}
            <div className="relative bg-white rounded-xl shadow-lg p-8 md:p-10 flex flex-col items-center text-center min-h-[280px]">
              <span
                className="absolute -left-8 -top-8 text-[4rem] md:text-[5rem] font-bold text-[#F07C5A] select-none"
                style={{ fontFamily: "Caveat, cursive" }}
              >
                3
              </span>
              <Image
                src="/images/process-technical.svg"
                alt="Technical Foundation Icon"
                width={140}
                height={90}
                className="mb-4"
              />
              <h3 className="text-xl md:text-2xl font-bold mb-2">
                Technical Foundation
              </h3>
              <p className="text-[#18102B] text-base md:text-lg">
                We fix what’s broken first: site speed, mobile issues, and crawl
                errors. Then we optimize existing pages for target keywords in a
                way that feels natural and valuable to users.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-2 gap-10">
            {/* Step 4 */}
            <div className="relative bg-white rounded-xl shadow-lg p-8 md:p-10 flex flex-col items-center text-center min-h-[280px]">
              <span
                className="absolute -left-8 -top-8 text-[4rem] md:text-[5rem] font-bold text-[#F07C5A] select-none"
                style={{ fontFamily: "Caveat, cursive" }}
              >
                4
              </span>
              <Image
                src="/images/process-content.svg"
                alt="Content Creation Icon"
                width={90}
                height={90}
                className="mb-4"
              />
              <h3 className="text-xl md:text-2xl font-bold mb-2">
                Strategic Content Creation
              </h3>
              <p className="text-[#18102B] text-base md:text-lg">
                We create content that positions you as the expert – detailed
                guides on material selection for manufacturers, or compliance
                guides for translation agencies. Content that answers real
                prospect questions.
              </p>
            </div>
            {/* Step 5 */}
            <div className="relative bg-white rounded-xl shadow-lg p-8 md:p-10 flex flex-col items-center text-center min-h-[280px]">
              <span
                className="absolute -left-8 -top-8 text-[4rem] md:text-[5rem] font-bold text-[#F07C5A] select-none"
                style={{ fontFamily: "Caveat, cursive" }}
              >
                5
              </span>
              <Image
                src="/images/revisions-copy.svg"
                alt="Authority Building Icon"
                width={90}
                height={90}
                className="mb-4"
              />
              <h3 className="text-xl md:text-2xl font-bold mb-2">
                Authority Building (Ongoing)
              </h3>
              <p className="text-[#18102B] text-base md:text-lg">
                We establish your site as a trusted resource through strategic
                link building and industry placements. Monthly analysis and
                optimization based on what’s driving qualified traffic.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Choose Your Growth Path Section */}
      <section className="w-full bg-[#faf9fb] py-20 px-2 md:px-0">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[#6C3FC5] text-4xl md:text-5xl font-bold text-center mb-12">
            Choose Your Growth Path
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Foundation Package */}
            <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center border border-[#ececec]">
              <div className="text-3xl md:text-4xl font-bold text-[#F07C5A] mb-2">
                $700<span className="text-lg font-normal">/month</span>
              </div>
              <div className="text-[#6C3FC5] text-xl font-bold mb-2">
                Foundation Package
              </div>
              <div className="text-[#18102B] text-base mb-4">
                Perfect for establishing your SEO presence
              </div>
              <ul className="text-[#18102B] text-left text-base mb-6 space-y-2">
                <li>• 6-month minimum</li>
                <li>• Technical SEO audit & fixes</li>
                <li>• 30 target keywords research & mapping</li>
                <li>• On-page optimization for 15 key pages</li>
                <li>• 2 strategic content pieces monthly</li>
                <li>• Monthly performance reporting</li>
                <li>
                  • Best for: Companies just starting with SEO or fixing past
                  mistakes
                </li>
              </ul>
              <button className="mt-auto px-8 py-3 bg-[#18102B] text-white font-semibold rounded-md shadow-md hover:bg-[#2a1e4d] transition-colors text-base w-full">
                Learn more
              </button>
            </div>
            {/* Growth Package */}
            <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center border border-[#ececec]">
              <div className="text-3xl md:text-4xl font-bold text-[#F07C5A] mb-2">
                $1,500<span className="text-lg font-normal">/month</span>
              </div>
              <div className="text-[#6C3FC5] text-xl font-bold mb-2">
                Growth Package
              </div>
              <div className="text-[#18102B] text-base mb-4">
                For companies ready to dominate their niche
              </div>
              <ul className="text-[#18102B] text-left text-base mb-6 space-y-2">
                <li>• 6-month minimum</li>
                <li>• Everything in Foundation, plus:</li>
                <li>• 75 target keywords strategy</li>
                <li>• On-page optimization for 30 pages</li>
                <li>• 4 in-depth content pieces monthly</li>
                <li>• Competitor gap analysis</li>
                <li>• Conversion optimization basics</li>
                <li>• Bi-weekly strategy calls</li>
                <li>
                  • Best for: Established businesses wanting consistent lead
                  flow
                </li>
              </ul>
              <button className="mt-auto px-8 py-3 bg-[#18102B] text-white font-semibold rounded-md shadow-md hover:bg-[#2a1e4d] transition-colors text-base w-full">
                Learn more
              </button>
            </div>
            {/* Authority Package */}
            <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center border border-[#ececec]">
              <div className="text-3xl md:text-4xl font-bold text-[#F07C5A] mb-2">
                $2,500<span className="text-lg font-normal">/month</span>
              </div>
              <div className="text-[#6C3FC5] text-xl font-bold mb-2">
                Authority Package
              </div>
              <div className="text-[#18102B] text-base mb-4">
                Build industry leadership and sustained growth
              </div>
              <ul className="text-[#18102B] text-left text-base mb-6 space-y-2">
                <li>• 6-month minimum</li>
                <li>• Everything in Growth, plus:</li>
                <li>• 150+ keyword comprehensive strategy</li>
                <li>• Unlimited page optimizations</li>
                <li>• 6-8 authoritative content pieces monthly</li>
                <li>• Link building & digital PR campaigns</li>
                <li>• Advanced technical SEO implementations</li>
                <li>• Integration with your sales tracking</li>
                <li>• Weekly progress meetings</li>
                <li>
                  • Best for: Companies serious about becoming industry leaders
                </li>
              </ul>
              <button className="mt-auto px-8 py-3 bg-[#18102B] text-white font-semibold rounded-md shadow-md hover:bg-[#2a1e4d] transition-colors text-base w-full">
                Learn more
              </button>
            </div>
          </div>
          <div className="text-center text-[#18102B] text-base md:text-lg font-semibold mt-8">
            <span className="font-normal">One-Time SEO Audit: </span>
            <span className="font-bold text-[#F07C5A]">$1,000</span>{" "}
            <span className="font-normal">
              (credited toward any package if you proceed within 30 days)
            </span>
          </div>
        </div>
      </section>
      {/* Why Choose Vivaldi for SEO Section */}
      <section className="w-full bg-[#5233B0] py-20 px-2 md:px-0">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-white text-4xl md:text-5xl font-bold text-center mb-16">
            Why Choose Vivaldi for SEO
          </h2>
          {/* Row 1 */}
          <div className="flex flex-col md:flex-row items-center mb-12 gap-8">
            <div className="flex-1">
              <h3 className="text-white text-2xl md:text-3xl font-bold mb-2">
                We Speak Your Language
              </h3>
              <p className="text-white text-base md:text-lg max-w-lg">
                Writing effective SEO content is easier when you actually
                understand the industries you’re writing for. We know
                manufacturing processes and translation specializations, which
                means we can create content that resonates with your prospects
                and demonstrates real expertise.
              </p>
            </div>
            <div className="flex-1 flex justify-center">
              <Image
                src="/images/seo-language.svg"
                alt="SEO Language"
                width={541}
                height={429}
                
              />
            </div>
          </div>
          {/* Row 2 */}
          <div className="flex flex-col md:flex-row items-center mb-12 gap-8">
            <div className="flex-1 flex justify-center order-2 md:order-1">
              <Image
                src="/images/seo-report.svg"
                alt="SEO Report"
                width={595}
                height={375}
                
              />
            </div>
            <div className="flex-1 order-1 md:order-2">
              <h3 className="text-white text-2xl md:text-3xl font-bold mb-2">
                Quality Leads, Not Vanity Metrics
              </h3>
              <p className="text-white text-base md:text-lg max-w-lg">
                Our success is measured by qualified inquiries from companies
                with real projects and appropriate budgets. Every strategy
                decision prioritizes lead quality over traffic quantity.
              </p>
            </div>
          </div>
          {/* Row 3 */}
          <div className="flex flex-col md:flex-row items-center mb-16 gap-8">
            <div className="flex-1">
              <h3 className="text-white text-2xl md:text-3xl font-bold mb-2">
                Transparent, Partnership Approach
              </h3>
              <p className="text-white text-base md:text-lg max-w-lg">
                No black-box tactics or mysterious “proprietary methods.” We
                show you exactly what we’re doing, why we’re doing it, and how
                it connects to your business goals. Monthly reports focus on
                business impact, not just rankings.
              </p>
            </div>
            <div className="flex-1 flex justify-center">
              <Image
                src="/images/seo-partnership.svg"
                alt="SEO Partnership"
                width={481}
                height={302}
                
              />
            </div>
          </div>
          <div className="flex justify-center">
            <button className="px-10 py-3 bg-[#F07C5A] text-white font-semibold rounded-md shadow-md hover:bg-[#e05c2a] transition-colors text-base">
              Book a discovery call
            </button>
          </div>
        </div>
      </section>
      <section className="w-full py-24 bg-[#faf9fb] text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-5xl md:text-6xl font-bold text-[#6C3FC5] mb-6">
            Stop Being Invisible to Your Best Clients
          </h2>
          <p className="text-gray-700 text-lg mb-10">
            Your expertise deserves to be found by clients who value it. But in
            today's digital landscape, being excellent isn't enough.
          </p>
          <p className="text-[#18102B] text-lg md:text-xl font-bold mb-10">
            You need to be visible to the right people at the right time.
          </p>
          <button className="bg-[#FF8A71] hover:bg-[#e2725b] text-white font-semibold px-8 py-3 rounded-md text-base transition-colors">
            Book a discovery call
          </button>
        </div>
        <ContactForm />
      </section>
      <Footer />
    </div>
  );
};

export default SeoPage;
