"use client";
import React from "react";
import Image from "next/image";
import NavBar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import ContactForm from "@/components/ContactForm/ContactForm";

const GoogleAndMetaAdsPage = () => {
  return (
    <div className="min-h-screen bg-[#faf9fb]">
      <NavBar />
      {/* Description Section */}
      <section className="w-full pt-16 pb-20 px-16 bg-[#faf9fb]">
        <div className="max-w-5xl mx-8">
          <h1 className="text-5xl md:text-6xl font-bold text-[#6C3FC5] mb-2 leading-tight text-left">
            Consistent Growth
          </h1>
          <h2 className="text-5xl md:text-6xl font-bold text-[#FF8A71] mb-8 leading-tight text-left">
            Through Targeted Google Ads
          </h2>
          <p className="text-[#6C3FC5] text-base md:text-lg mb-10 text-left">
            Stop burning budget on clicks that don't convert. Start attracting
            qualified buyers who actually need what you
            <br />
            manufacture or translate.
          </p>
          <div className="flex flex-col md:flex-row gap-4 items-start w-full mb-8">
            <button className="bg-[#1A133A] hover:bg-[#331E5B] text-white font-semibold px-8 py-3 rounded-md text-base transition-colors text-left w-full md:w-auto">
              Get Your Free Campaign Audit
            </button>
            <button className="border-2 border-[#FF8A71] text-[#FF8A71] font-semibold px-8 py-3 rounded-md text-base transition-colors hover:bg-[#FF8A71] hover:text-white bg-transparent text-left w-full md:w-auto">
              Book a discovery call
            </button>
          </div>
        </div>
      </section>
      <section className="relative w-full h-[340px] md:h-[700px] flex items-center justify-center">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/google_ads_laptop.png"
            alt="LinkedIn content on laptop"
            width={1920}
            height={600}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/10" />
        </div>
        <div className="relative z-10 w-full flex items-center justify-center">
          <p className="text-white text-xl md:text-2xl font-semibold text-center max-w-7xl px-4">
            Google Ads ensures your business appears right at the top when
            potential clients are actively searching for your services or
            products. It's a direct way to capture immediate interest and gain
            visibility, working hand-in-hand with your SEO without the huge time
            investment that SEO represents.
            <br />
            <br />
            This approach is particularly effective for businesses that offer
            specialized products or services. If you're a manufacturer looking
            for precision component orders, or a language service provider
            offering certified legal translations or highly specialized
            localization in niche industries, Google Ads helps you reach those
            specific needs.
          </p>
        </div>
      </section>
      {/* Testimonial Section Justin*/}
      <section className="bg-[#10002B] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-left mb-8">
            <p className="text-white text-lg leading-relaxed">
              &quot;I had the pleasure of working with Viviana as a Strategic
              Messaging Specialist at Sarris Marketing. Her ability to analyze a
              business&apos;s digital presence and identify what makes them
              unique, then turn those findings into clear, actionable insights,
              consistently impressed me. What sets Viviana apart is not just her
              strategic skillset, but how she communicates her ideas — always
              thoughtful, well-reasoned, and focused on delivering value.&quot;
            </p>
          </div>

          <div className="text-left">
            <p className="text-white font-semibold text-lg mb-1">
              Justin Sarris
            </p>
            <p className="text-white/80 mb-4">Founder at Sarris Marketing</p>
            <Image
              src="/images/justin.svg"
              alt="Justin Sarris"
              width={90}
              height={90}
              className="rounded-full"
            />
          </div>
        </div>
      </section>
      {/* Why Choose Vivaldi Section */}
      <section className="w-full bg-[#6C3FC5] py-20 px-2 md:px-0">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-white text-4xl md:text-5xl font-bold text-center mb-16">
            Why Choose Vivaldi
          </h2>
          {/* Row 1 */}
          <div className="flex flex-col md:flex-row items-center mb-12 gap-8">
            <div className="flex-1">
              <h3 className="text-white text-2xl md:text-3xl font-bold mb-2">
                Industry Insider Knowledge
              </h3>
              <p className="text-white text-base md:text-lg max-w-lg">
                We don’t have to Google what “5-axis CNC machining” means, the
                nuances of ISO 17100 compliance for translation, or why
                certified translations matter for medical devices. We speak your
                language and understand your buyers’ needs and purchasing
                drivers.
              </p>
            </div>
            <div className="flex-1 flex justify-center">
              <Image
                src="/images/ads-insider.svg"
                alt="Industry Insider Knowledge"
                width={498}
                height={278}
              />
            </div>
          </div>
          {/* Row 2 */}
          <div className="flex flex-col md:flex-row items-center mb-12 gap-8">
            <div className="flex-1 flex justify-center order-2 md:order-1">
              <Image
                src="/images/ads-leads.svg"
                alt="Lead Quality Obsession"
                width={545}
                height={290}
              />
            </div>
            <div className="flex-1 order-1 md:order-2">
              <h3 className="text-white text-2xl md:text-3xl font-bold mb-2">
                Lead Quality Obsession
              </h3>
              <p className="text-white text-base md:text-lg max-w-lg">
                We optimize for qualified conversations. Our strategies use
                advanced targeting, rigorous negative keyword management, and
                precise ad copy to filter out irrelevant traffic (students, job
                seekers, casual researchers), ensuring your budget attracts only
                genuine, high-intent prospects.
              </p>
            </div>
          </div>
          {/* Row 3 */}
          <div className="flex flex-col md:flex-row items-center mb-12 gap-8">
            <div className="flex-1">
              <h3 className="text-white text-2xl md:text-3xl font-bold mb-2">
                Transparent, No-Contract Approach
              </h3>
              <p className="text-white text-base md:text-lg max-w-lg">
                No locked-in contracts. No mysterious “proprietary methods.” We
                show you exactly what we’re doing, why we’re doing it, and how
                it connects to your revenue goals. Month-to-month agreements
                because we earn your business through results.
              </p>
            </div>
            <div className="flex-1 flex justify-center">
              <Image
                src="/images/ads-transparent.svg"
                alt="Transparent Approach"
                width={523}
                height={278}
              />
            </div>
          </div>
          {/* Row 4 */}
          <div className="flex flex-col md:flex-row items-center mb-16 gap-8">
            <div className="flex-1 flex justify-center order-2 md:order-1">
              <Image
                src="/images/ads-b2b.svg"
                alt="Built for B2B Complexity"
                width={469}
                height={301}
              />
            </div>
            <div className="flex-1 order-1 md:order-2">
              <h3 className="text-white text-2xl md:text-3xl font-bold mb-2">
                Built for B2B Complexity
              </h3>
              <p className="text-white text-base md:text-lg max-w-lg">
                Understanding the often-extended sales cycles in manufacturing
                and enterprise LSP deals, we implement sophisticated attribution
                windows (90–180 days) to accurately measure long-term impact.
                <br />
                <br />
                We also integrate with your CRM for lead tracking from the
                initial click to a closed deal, and we develop targeting and
                bidding strategies that align precisely with your specific sales
                objectives and sales team’s workflows.
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <button className="px-10 py-3 bg-[#F07C5A] text-white font-semibold rounded-md shadow-md hover:bg-[#e05c2a] transition-colors text-base">
              Book a discovery call
            </button>
          </div>
        </div>
      </section>
      {/* Our Strategic Approach Section */}
      <section className="w-full bg-[#10002B] py-20 px-2 md:px-0">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-white text-4xl md:text-5xl font-bold text-center mb-12">
            Our Strategic Approach
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center min-h-[320px]">
              <Image
                src="/images/megafono.svg"
                alt="Deep Discovery"
                width={120}
                height={89}
                className="mb-4"
              />
              <h3 className="text-[#18102B] text-lg md:text-xl font-bold mb-2">
                Deep Discovery
              </h3>
              <p className="text-[#18102B] text-base">
                We’ll talk through what’s happening in your business right now:
                what’s working, what isn’t, and what your goals are. Then we’ll
                tell you exactly what we think would help and what it would
                cost.
              </p>
            </div>
            {/* Card 2 */}
            <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center min-h-[320px]">
              <Image
                src="/images/process-content.svg"
                alt="Campaign Architecture"
                width={70}
                height={85}
                className="mb-4"
              />
              <h3 className="text-[#18102B] text-lg md:text-xl font-bold mb-2">
                Campaign Architecture
              </h3>
              <p className="text-[#18102B] text-base">
                We research your customers and competitors to figure out what
                messages will resonate. No generic advice, we dig into your
                specific industry and situation to create a plan that makes
                sense for your business.
              </p>
            </div>
            {/* Card 3 */}
            <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center min-h-[320px]">
              <Image
                src="/images/seo-icon.svg"
                alt="Launch & Optimize"
                width={90}
                height={90}
                className="mb-4"
              />
              <h3 className="text-[#18102B] text-lg md:text-xl font-bold mb-2">
                Launch & Optimize
              </h3>
              <p className="text-[#18102B] text-base">
                Time to get down to work. We write your content, run your ads,
                or build your SEO presence. For ongoing work, we’ll have a
                monthly consultation call to review what’s working and what
                needs adjusting.
              </p>
            </div>
            {/* Card 4 */}
            <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center min-h-[320px]">
              <Image
                src="/images/google-ads-icon.svg"
                alt="Scale & Refine"
                width={102}
                height={95}
                className="mb-4"
              />
              <h3 className="text-[#18102B] text-lg md:text-xl font-bold mb-2">
                Scale & Refine
              </h3>
              <p className="text-[#18102B] text-base">
                As we gather data on what converts, we expand successful
                campaigns and cut underperformers. Monthly strategy calls keep
                you informed and aligned with your sales team’s feedback about
                lead quality.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* See Our Packages & Pricing Section */}
      <section className="w-full bg-[#faf9fb] py-20 px-2 md:px-0">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[#6C3FC5] text-4xl md:text-5xl font-bold text-center mb-12">
            See Our Packages & Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Starter Package */}
            <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center border border-[#ececec]">
              <div className="text-3xl md:text-4xl font-bold text-[#F07C5A] mb-2">
                $1000<span className="text-lg font-normal">/month</span>
              </div>
              <div className="text-[#6C3FC5] text-xl font-bold mb-2">
                Starter Package
              </div>
              <div className="text-[#18102B] text-base mb-4">
                Perfect for testing B2B Google Ads
              </div>
              <ul className="text-[#18102B] text-left text-base mb-6 space-y-2">
                <li>• 3-month minimum</li>
                <li>• Campaign setup & optimization</li>
                <li>• Up to 3 campaigns</li>
                <li>• Monthly reporting & strategy call</li>
                <li>• Email support</li>
              </ul>
              <button className="mt-auto px-8 py-3 bg-[#18102B] text-white font-semibold rounded-md shadow-md hover:bg-[#2a1e4d] transition-colors text-base w-full">
                Learn more
              </button>
            </div>
            {/* Growth Package */}
            <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center border border-[#ececec]">
              <div className="text-3xl md:text-4xl font-bold text-[#F07C5A] mb-2">
                $1,700<span className="text-lg font-normal">/month</span>
              </div>
              <div className="text-[#6C3FC5] text-xl font-bold mb-2">
                Growth Package
              </div>
              <div className="text-[#18102B] text-base mb-4">
                For companies ready to scale
              </div>
              <ul className="text-[#18102B] text-left text-base mb-6 space-y-2">
                <li>• 3-month minimum</li>
                <li>• Everything in Starter, plus:</li>
                <li>• Unlimited campaigns</li>
                <li>• Bi-weekly optimization</li>
                <li>• CRM integration & tracking</li>
                <li>• Custom landing page optimization</li>
                <li>• Priority support</li>
              </ul>
              <button className="mt-auto px-8 py-3 bg-[#18102B] text-white font-semibold rounded-md shadow-md hover:bg-[#2a1e4d] transition-colors text-base w-full">
                Learn more
              </button>
            </div>
            {/* Strategic Package */}
            <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center border border-[#ececec]">
              <div className="text-3xl md:text-4xl font-bold text-[#F07C5A] mb-2">
                $2,500<span className="text-lg font-normal">/month</span>
              </div>
              <div className="text-[#6C3FC5] text-xl font-bold mb-2">
                Strategic Package
              </div>
              <div className="text-[#18102B] text-base mb-4">
                Full-service B2B lead generation
              </div>
              <ul className="text-[#18102B] text-left text-base mb-6 space-y-2">
                <li>• 3-month minimum</li>
                <li>• Everything in Growth, plus:</li>
                <li>• Weekly strategy sessions</li>
                <li>• Account-based campaign development</li>
                <li>• Advanced attribution modeling</li>
                <li>• Sales team alignment meetings</li>
                <li>• Dedicated account strategist</li>
              </ul>
              <button className="mt-auto px-8 py-3 bg-[#18102B] text-white font-semibold rounded-md shadow-md hover:bg-[#2a1e4d] transition-colors text-base w-full">
                Learn more
              </button>
            </div>
          </div>
          <div className="text-center text-[#18102B] text-base md:text-lg font-semibold mt-8">
            <span className="font-normal">Setup Fee: </span>
            <span className="font-bold text-[#F07C5A]">$1,500</span>{" "}
            <span className="font-normal">
              (waived if you&apos;ve completed our Messaging & Positioning
              Strategy)
            </span>
          </div>
        </div>
      </section>
      <section className="w-full py-24 bg-[#5233B0] text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-5xl md:text-6xl font-bold text-[#F9F6FF] mb-6">
            Stop Being Invisible to Your Best Clients
          </h2>
          <p className="text-[#F9F6FF] text-lg mb-10">
            Your expertise deserves to be found by clients who value it. But in
            today's digital landscape, being excellent isn't enough.
          </p>
          <p className="text-[#F9F6FF] text-lg md:text-xl font-bold mb-10">
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

export default GoogleAndMetaAdsPage;
