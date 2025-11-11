import React from "react";
import Image from "next/image";
import NavBar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import ContactForm from "@/components/ContactForm/ContactForm";
import Link from "next/link";

export const metadata = {
  title: "Vivaldi Marketing | SEO for Translation and Manufacturing Businesses",
  description:
    "SEO services tailored for translation and manufacturing businesses.",
};

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
            Who Need Your Expertise
          </h2>
          <p className="text-[#6C3FC5] text-xl md:text-2xl mb-10 text-left">
            We help translation agencies and manufacturers show up on Google
            <br />
            with industry-specific content.
          </p>
          <div className="flex flex-col md:flex-row gap-4 items-start w-full mb-8">
            <Link href="#contact-form">
              <button className="bg-[#1A133A] hover:bg-[#331E5B] text-white font-semibold px-8 py-3 rounded-md text-base transition-colors text-left w-full md:w-auto">
                CONTACT US BY EMAIL
              </button>
            </Link>
            <Link href="https://taplink.cc/vivaldimkt.com">
              <button className="border-2 border-[#FF8A71] text-[#FF8A71] font-semibold px-8 py-3 rounded-md text-base transition-colors hover:bg-[#FF8A71] hover:text-white bg-transparent text-left w-full md:w-auto">
                BOOK A DISCOVERY CALL
              </button>
            </Link>
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
            You've probably heard 'SEO is dead' more times than you can count.
            But here's the reality: your clients still use Google to find
            service providers before they hire anyone. In manufacturing
            especially, buyers do extensive research before reaching out.
            <br />
            <br />
            And with AI overviews changing how search works, ranking well on
            Google is even more important because that's what feeds those AI
            results. If you're not showing up in search, you're not showing up
            in AI answers either.
          </p>
        </div>
      </section>
      {/* Our Approach to SEO Section */}
      <section className="w-full bg-[#faf9fb] py-20 px-2 md:px-0">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-[#6C3FC5] text-5xl md:text-6xl font-bold mb-10">
            How We Approach SEO
          </h2>
          <div className="text-[#18102B] text-lg md:text-xl mb-4">
            We focus on searches that actually bring client inquiries instead of
            just any traffic. Because we understand these industries, we know
            which searches show real buying intent and which are just research,
            distinctions that non-specialized SEO agencies tend to miss.
          </div>
          <div className="text-[#18102B] text-lg md:text-xl mb-4">
            And you won't spend weeks explaining basic industry concepts before
            we can write anything useful. We already understand the technical
            side of translation and manufacturing, so we can create content
            that's both accurate and persuasive from the start.
          </div>
          <div className="flex justify-center">
            <Link href="https://taplink.cc/vivaldimkt.com">
              <button className="bg-[#18102B] hover:bg-[#2a1e4d] text-white px-8 py-4 text-xl font-semibold rounded-xl transition-colors">
                BOOK A DISCOVERY CALL
              </button>
            </Link>
          </div>
        </div>
      </section>
      {/* Our Process Section */}
      <section className="w-full bg-[#5233B0] py-16 px-2 md:px-0">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-white text-5xl md:text-6xl font-bold text-center mb-12">
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
                We start by understanding your business, who you're trying to
                reach, and how your site is performing now. We research how your
                best clients search and what's actually working (or not) in your
                industry.
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
                We target search terms that show buying intent and are realistic
                for you to rank for based on your site's current authority and
                budget. These become our target keywords.
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
                Technical Fixes
              </h3>
              <p className="text-[#18102B] text-base md:text-lg">
                We fix what's broken first: slow loading, mobile problems, crawl
                errors. Then we optimize your existing pages for keywords in a
                way that reads naturally.
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
                Content Creation (Ongoing)
              </h3>
              <p className="text-[#18102B] text-base md:text-lg">
                We write detailed content that answers real questions your
                prospects have, like material selection guides for manufacturers
                or compliance guides for translation agencies.
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
                Building Authority (Ongoing)
              </h3>
              <p className="text-[#18102B] text-base md:text-lg">
                We focus on building your site's credibility over time, finding
                link opportunities, getting mentioned in industry spaces, and
                placing content strategically.. Monthly reviews to see what's
                working and what isn’t.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Choose Your Growth Path Section */}
      <section className="w-full bg-[#faf9fb] py-20 px-2 md:px-0">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[#6C3FC5] text-5xl md:text-6xl font-bold text-center mb-12">
            Starting Prices
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Foundation Package */}
            <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center border border-[#ececec]">
              <div className="text-[#6C3FC5] text-4xl font-bold mb-2">
                Basic SEO
              </div>
              <div className="text-3xl md:text-4xl font-bold text-[#F07C5A] mb-2">
                {/* $700<span className="text-xl font-normal">/month</span> */}
              </div>
              <div className="mt-6 mb-6">
                <p className="text-[#18102B] text-left text-base">
                  Get the foundation right Technical fixes and consistent
                  content creation. We fix what's broken on your site and start
                  creating content that brings the right traffic.
                </p>
                <br />
                <p className="text-[#18102B] text-left text-base mb-6 italic ">
                  Ideal for: Local businesses just starting with SEO or fixing
                  technical problems that are holding them back
                </p>
              </div>
              <button className="mt-auto px-8 py-3 bg-[#18102B] text-white font-semibold rounded-md shadow-md hover:bg-[#2a1e4d] transition-colors text-base w-full">
                Learn more
              </button>
            </div>
            {/* Growth Package */}
            <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center border border-[#ececec]">
              <div className="text-[#6C3FC5] text-4xl font-bold mb-2">
                Standard SEO
              </div>
              <div className="text-3xl md:text-4xl font-bold text-[#F07C5A] mb-2">
                {/* $1,500<span className="text-lg font-normal">/month</span> */}
              </div>

              <div className="mt-6">
                <p className="text-[#18102B] text-left text-base ">
                  Serious about getting leads from search Complete SEO strategy
                  with competitive research. We optimize your whole site, create
                  content consistently, and find opportunities your competitors
                  aren't using.
                </p>
                <br />
                <p className="text-[#18102B] text-left text-base mb-6 italic ">
                  Ideal for: Established small and mid-size businesses that want
                  steady leads from Google and need to show up ahead of
                  competitors
                </p>
              </div>
              <button className="mt-auto px-8 py-3 bg-[#18102B] text-white font-semibold rounded-md shadow-md hover:bg-[#2a1e4d] transition-colors text-base w-full">
                Learn more
              </button>
            </div>
            {/* Authority Package */}
            <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center border border-[#ececec]">
              <div className="text-[#6C3FC5] text-4xl font-bold mb-2">
                Premium SEO
              </div>
              <div className="text-3xl md:text-4xl font-bold text-[#F07C5A] mb-2">
                {/* $2,500<span className="text-lg font-normal">/month</span> */}
              </div>

              <div className="mt-6">
                <p className="text-[#18102B] text-left text-base">
                  Build long-term search dominance Everything in Standard plus
                  aggressive authority building and content strategy. For
                  companies targeting very competitive keywords or needing to
                  outrank established players.
                </p>
                <br />
                <p className="text-[#18102B] text-left text-base mb-6 italic ">
                  Ideal for: Larger projects with tough competition where you
                  need the full SEO toolkit to break through
                </p>
              </div>
              <button className="mt-auto px-8 py-3 bg-[#18102B] text-white font-semibold rounded-md shadow-md hover:bg-[#2a1e4d] transition-colors text-base w-full">
                Learn more
              </button>
            </div>
          </div>
          <div className="text-center text-[#18102B] text-base md:text-lg font-semibold mt-8">
            <span className="font-normal">One-Time SEO Audit: </span>
            <span className="font-bold">$1,000</span>{" "}
            <span className="font-normal">
              (credited toward any package if you proceed within 30 days)
            </span>
          </div>
        </div>
      </section>
      {/* Why Choose Vivaldi for SEO Section */}
      <section className="w-full bg-[#5233B0] py-20 px-2 md:px-0">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-white text-5xl md:text-6xl font-bold text-center mb-16">
            Why Choose Vivaldi for SEO
          </h2>
          {/* Row 1 */}
          <div className="flex flex-col md:flex-row items-center mb-12 gap-8">
            <div className="flex-1">
              <h3 className="text-white text-2xl md:text-3xl font-bold mb-2">
                We Speak Your Language
              </h3>
              <p className="text-white text-lg md:text-xl max-w-lg">
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
              <p className="text-white text-lg md:text-xl max-w-lg">
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
              <p className="text-white text-lg md:text-xl max-w-lg">
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
            <Link href="https://taplink.cc/vivaldimkt.com">
              <button className="bg-[#E2725B] hover:bg-[#d45c43] text-white px-8 py-4 text-xl font-semibold rounded-xl transition-colors">
                BOOK A DISCOVERY CALL
              </button>
            </Link>
          </div>
        </div>
      </section>
      <section className="w-full py-24 bg-[#faf9fb] text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-5xl md:text-6xl font-bold text-[#6C3FC5] mb-6">
            Ready to Attract More Clients?
          </h2>
          <p className="text-gray-700 text-xl md:text-2xl mb-10">
Let's get you showing up on Google when your ideal clients are searching for what you do.
          </p>
          <Link href="https://taplink.cc/vivaldimkt.com">
            <button className="bg-[#E2725B] hover:bg-[#d45c43] text-white px-8 py-4 text-xl font-semibold rounded-xl transition-colors">
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

export default SeoPage;
