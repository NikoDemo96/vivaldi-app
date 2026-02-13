import React from "react";
import Image from "next/image";
import NavBar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import ContactForm from "@/components/ContactForm/ContactForm";
import Link from "next/link";

export const metadata = {
  title:
    "Vivaldi Marketing | Google Ads for Translation and Manufacturing Businesses",
  description:
    "Google Ads strategies designed to grow translation and manufacturing businesses.",
};

const GoogleAndMetaAdsPage = () => {
  return (
    <div className="min-h-screen bg-[#faf9fb]">
      <NavBar />
      {/* Description Section */}
      <section className="w-full pt-12 md:pt-16 pb-12 md:pb-20 px-4 md:px-8 lg:px-16 bg-[#faf9fb]">
        <div className="max-w-5xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#6C3FC5] mb-2 leading-tight text-left">
            Turn Google Ads
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#FF8A71] mb-6 md:mb-8 leading-tight text-left">
            Into Client Calls
          </h2>
          <p className="text-[#6C3FC5] text-base sm:text-lg md:text-xl lg:text-2xl mb-8 md:mb-10 text-left">
            Google Ads management for specialized businesses by people who understand your industries and how your clients buy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-start w-full mb-8">
            <Link href="#contact-form" className="w-full sm:w-auto">
              <button className="w-full bg-[#1A133A] hover:bg-[#331E5B] text-white font-semibold px-6 md:px-8 py-3 rounded-md text-base transition-colors">
                GET YOUR FREE CAMPAIGN AUDIT
              </button>
            </Link>
            <Link href="https://taplink.cc/vivaldimkt.com" className="w-full sm:w-auto">
              <button className="w-full border-2 border-[#FF8A71] text-[#FF8A71] font-semibold px-6 md:px-8 py-3 rounded-md text-base transition-colors hover:bg-[#FF8A71] hover:text-white bg-transparent">
                BOOK A DISCOVERY CALL
              </button>
            </Link>
          </div>
        </div>
      </section>
      <section className="relative w-full min-h-[500px] md:h-[600px] lg:h-[700px] flex items-center justify-center">
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
        <div className="relative z-10 w-full flex items-center justify-center py-8 md:py-0">
          <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-center max-w-7xl px-4 md:px-6">
            Google Ads puts you at the top of search results when potential
            clients are looking for what you offer. It's the fastest way to get
            in front of buyers with immediate need while your SEO builds
            long-term visibility.
            <br />
            <br />
            But getting clicks is only half the battle. If your landing page
            doesn't immediately build trust and explain your value clearly,
            you've wasted that ad spend. That's why we don't just manage your
            ads, we make sure your messaging actually converts those clicks into
            conversations.
            <br />
            <br />
            This is especially critical for specialized services. When buyers
            are investing in precision manufacturing or certified translations,
            the stakes are high: they need to fully trust you before committing.
            Your messaging has to build that trust fast.
          </p>
        </div>
      </section>
      {/* Testimonial Section Justin*/}
      <section className="bg-[#10002B] py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-left mb-6 md:mb-8">
            <p className="text-white text-base sm:text-lg leading-relaxed">
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
            <p className="text-white font-semibold text-base sm:text-lg mb-1">
              Justin Sarris
            </p>
            <p className="text-white/80 text-sm sm:text-base mb-4">Founder at Sarris Marketing</p>
            <Image
              src="/images/justin.svg"
              alt="Justin Sarris"
              width={70}
              height={70}
              className="rounded-full sm:w-[90px] sm:h-[90px]"
            />
          </div>
        </div>
      </section>
      {/* Why Choose Vivaldi Section */}
      <section className="w-full bg-[#6C3FC5] py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-10 md:mb-16">
            Why Choose Vivaldi
          </h2>
          {/* Row 1 */}
          <div className="flex flex-col lg:flex-row items-center mb-8 md:mb-12 gap-6 md:gap-8">
            <div className="flex-1">
              <h3 className="text-white text-xl sm:text-2xl md:text-3xl font-bold mb-2">
                Industry Insider Knowledge
              </h3>
              <p className="text-white text-base sm:text-lg md:text-xl max-w-lg">
                We don’t have to Google what “5-axis CNC machining” mean or the
                difference between legal and certified translation. We speak
                your language and understand what matters to your buyers.
              </p>
            </div>
            <div className="flex-1 flex justify-center">
              <Image
                src="/images/ads-insider.svg"
                alt="Industry Insider Knowledge"
                width={370}
                height={207}
                className="md:w-[498px] md:h-[278px]"
              />
            </div>
          </div>
          {/* Row 2 */}
          <div className="flex flex-col lg:flex-row items-center mb-8 md:mb-12 gap-6 md:gap-8">
            <div className="flex-1 flex justify-center order-2 lg:order-1">
              <Image
                src="/images/ads-leads.svg"
                alt="Lead Quality Obsession"
                width={405}
                height={215}
                className="md:w-[545px] md:h-[290px]"
              />
            </div>
            <div className="flex-1 order-1 lg:order-2">
              <h3 className="text-white text-xl sm:text-2xl md:text-3xl font-bold mb-2">
                Lead Quality Obsession
              </h3>
              <p className="text-white text-base sm:text-lg md:text-xl max-w-lg">
                We focus on bringing you actual client conversations. That means
                filtering out students, job seekers, and casual browsers through
                careful targeting and ad copy so your budget goes toward people
                ready to hire.
              </p>
            </div>
          </div>
          {/* Row 3 */}
          <div className="flex flex-col lg:flex-row items-center mb-8 md:mb-12 gap-6 md:gap-8">
            <div className="flex-1">
              <h3 className="text-white text-xl sm:text-2xl md:text-3xl font-bold mb-2">
                We Fix What Most Agencies Ignore: Your Message
              </h3>
              <p className="text-white text-base sm:text-lg md:text-xl max-w-lg">
                Most Google Ads agencies focus only on keywords and bidding. We
                know that messaging is 70% of whether an ad converts. We review
                your landing pages, make sure your value is clear, and help you
                build trust fast, because great targeting with weak messaging
                just burns budget.
              </p>
            </div>
            <div className="flex-1 flex justify-center">
              <Image
                src="/images/ads-transparent.svg"
                alt="Transparent Approach"
                width={390}
                height={208}
                className="md:w-[523px] md:h-[278px]"
              />
            </div>
          </div>
          {/* Row 4 */}
          <div className="flex flex-col lg:flex-row items-center mb-10 md:mb-16 gap-6 md:gap-8">
            <div className="flex-1 flex justify-center order-2 lg:order-1">
              <Image
                src="/images/ads-b2b.svg"
                alt="Built for B2B Complexity"
                width={350}
                height={225}
                className="md:w-[469px] md:h-[301px]"
              />
            </div>
            <div className="flex-1 order-1 lg:order-2">
              <h3 className="text-white text-xl sm:text-2xl md:text-3xl font-bold mb-2">
                We Get B2B Sales Cycles
              </h3>
              <p className="text-white text-base sm:text-lg md:text-xl max-w-lg">
                Manufacturing and translation deals take time. We track leads
                over 90-180 days to see what actually closes, integrate with
                your CRM to follow the full journey, and adjust our strategy
                based on what your sales team tells us about lead quality.
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <Link href="https://taplink.cc/vivaldimkt.com" className="inline-block w-full sm:w-auto">
              <button className="w-full sm:w-auto bg-[#E2725B] hover:bg-[#d45c43] text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-xl font-semibold rounded-xl transition-colors">
                BOOK A DISCOVERY CALL
              </button>
            </Link>
          </div>
        </div>
      </section>
      {/* Our Strategic Approach Section */}
      <section className="w-full bg-[#10002B] py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8 md:mb-12">
            Our Approach
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 flex flex-col items-center text-center min-h-[280px] md:min-h-[320px]">
              <Image
                src="/images/megafono.svg"
                alt="Deep Discovery"
                width={90}
                height={67}
                className="mb-3 md:mb-4 md:w-[120px] md:h-[89px]"
              />
              <h3 className="text-[#18102B] text-base sm:text-lg md:text-xl font-bold mb-2">
                Discovery
              </h3>
              <p className="text-[#18102B] text-sm sm:text-base">
                We start by understanding your business, sales process, and who
                you're trying to reach. We look at your competitors, review any
                past campaigns, and figure out which search terms actually show
                buying intent in your industry.
              </p>
            </div>
            {/* Card 2 */}
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 flex flex-col items-center text-center min-h-[280px] md:min-h-[320px]">
              <Image
                src="/images/process-content.svg"
                alt="Campaign Architecture"
                width={55}
                height={65}
                className="mb-3 md:mb-4 md:w-[70px] md:h-[85px]"
              />
              <h3 className="text-[#18102B] text-base sm:text-lg md:text-xl font-bold mb-2">
                Campaign Setup
              </h3>
              <p className="text-[#18102B] text-sm sm:text-base">
                We organize campaigns around how your buyers search—not just
                your product list. For manufacturers, that might mean separating
                "need this now" searches from "comparing vendors" searches. Each
                needs different messaging and landing pages.
              </p>
            </div>
            {/* Card 3 */}
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 flex flex-col items-center text-center min-h-[280px] md:min-h-[320px]">
              <Image
                src="/images/seo-icon.svg"
                alt="Launch & Optimize"
                width={70}
                height={70}
                className="mb-3 md:mb-4 md:w-[90px] md:h-[90px]"
              />
              <h3 className="text-[#18102B] text-base sm:text-lg md:text-xl font-bold mb-2">
                Launch & Test
              </h3>
              <p className="text-[#18102B] text-sm sm:text-base">
                We start small, testing different messages and keywords with
                conservative budgets to see what works. Weekly monitoring
                catches problems early. We optimize based on what the data
                shows, not hunches.
              </p>
            </div>
            {/* Card 4 */}
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 flex flex-col items-center text-center min-h-[280px] md:min-h-[320px]">
              <Image
                src="/images/google-ads-icon.svg"
                alt="Scale & Refine"
                width={75}
                height={70}
                className="mb-3 md:mb-4 md:w-[102px] md:h-[95px]"
              />
              <h3 className="text-[#18102B] text-base sm:text-lg md:text-xl font-bold mb-2">
                Scale What Works
              </h3>
              <p className="text-[#18102B] text-sm sm:text-base">
                As we see what brings quality leads, we expand those campaigns
                and cut what's not performing. Monthly calls keep you informed
                and let us adjust based on your sales team's feedback about lead
                quality.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* See Our Packages & Pricing Section */}
      <section className="w-full bg-[#faf9fb] py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[#6C3FC5] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8 md:mb-12">
            See Our Packages & Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
            {/* Starter Package */}
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 flex flex-col items-center text-center border border-[#ececec]">
              <div className="text-[#6C3FC5] text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
                Starter Package
              </div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#F07C5A] mb-2">
                {/* $1000<span className="text-lg font-normal">/month</span> */}
              </div>
              <div className="mt-4 md:mt-6 mb-4 md:mb-6">
                <p className="text-[#18102B] text-left text-sm sm:text-base mb-4 md:mb-6">
                  Launch your first Google Ads campaigns and test what works. We
                  try different messages and targeting to see what gets people
                  to reach out.
                </p>
                <p className="text-[#18102B] text-left text-sm sm:text-base mb-4 md:mb-6 italic  ">
                  Ideal for: Companies new to paid ads or testing ads for a new
                  service
                </p>
              </div>
              <button className="mt-auto px-6 md:px-8 py-3 bg-[#18102B] text-white font-semibold rounded-md shadow-md hover:bg-[#2a1e4d] transition-colors text-sm sm:text-base w-full">
                Learn more
              </button>
            </div>
            {/* Growth Package */}
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 flex flex-col items-center text-center border border-[#ececec]">
              <div className="text-[#6C3FC5] text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
                Standard Package
              </div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#F07C5A] mb-2">
                {/* $1,700<span className="text-lg font-normal">/month</span> */}
              </div>
              <div className="mt-4 md:mt-6 mb-4 md:mb-6">
                <p className="text-[#18102B] text-left text-sm sm:text-base mb-4 md:mb-6">
                  Run multiple campaigns across Google and Meta. We manage more
                  keywords, test different audiences, and optimize to bring you
                  more qualified leads.
                </p>
                <p className="text-[#18102B] text-left text-sm sm:text-base mb-4 md:mb-6 italic">
                  Ideal for: Small to mid-sized companies that want professional
                  ads management or need to scale beyond a single campaign
                </p>
              </div>
              <button className="mt-auto px-6 md:px-8 py-3 bg-[#18102B] text-white font-semibold rounded-md shadow-md hover:bg-[#2a1e4d] transition-colors text-sm sm:text-base w-full">
                Learn more
              </button>
            </div>
            {/* Strategic Package */}
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 flex flex-col items-center text-center border border-[#ececec]">
              <div className="text-[#6C3FC5] text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
                Premium Package
              </div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#F07C5A] mb-2">
                {/* $2,500<span className="text-lg font-normal">/month</span> */}
              </div>

              <div className="mt-4 md:mt-6 mb-4 md:mb-6">
                <p className="text-[#18102B] text-left text-sm sm:text-base mb-4 md:mb-6">
                  Comprehensive campaign management for complex needs. We handle
                  large keyword lists, multiple regions, account-based
                  targeting, and work closely with your sales team.
                </p>
                <p className="text-[#18102B] text-left text-sm sm:text-base mb-4 md:mb-6 italic">
                  Ideal for: Larger companies with multiple locations, extensive
                  targeting needs, or complex sales processes
                </p>
              </div>
              <button className="mt-auto px-6 md:px-8 py-3 bg-[#18102B] text-white font-semibold rounded-md shadow-md hover:bg-[#2a1e4d] transition-colors text-sm sm:text-base w-full">
                Learn more
              </button>
            </div>
          </div>
          <div className="text-center text-[#18102B] text-sm sm:text-base md:text-lg font-semibold mt-6 md:mt-8 px-4">
            <span className="font-normal">Setup Fee: </span>
            <span className="font-bold">$1,000</span>{" "}
            <span className="font-normal">
              (waived if you&apos;ve completed our Messaging & Positioning
              Strategy)
            </span>
          </div>
        </div>
      </section>
      {/* Ready to Engineer Your Lead Generation?*/}
      <section className="w-full py-12 md:py-16 lg:py-24 bg-[#5233B0] text-center">
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#F9F6FF] mb-4 md:mb-6">
            Ready to Attract More Clients?
          </h2>
          <p className="text-[#F9F6FF] text-base sm:text-lg md:text-xl lg:text-2xl mb-8 md:mb-10">
            Let's get your ads in front of buyers who need specialized services like yours.
          </p>
          <Link href="https://taplink.cc/vivaldimkt.com" className="inline-block w-full sm:w-auto">
            <button className="w-full sm:w-auto bg-[#E2725B] hover:bg-[#d45c43] text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-xl font-semibold rounded-xl transition-colors">
              BOOK A DISCOVERY CALL
            </button>
          </Link>
        </div>
        <div id="contact-form">
          <ContactForm />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default GoogleAndMetaAdsPage;
