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
      <section className="relative w-full min-h-[500px] flex items-center">
        {/* Background image with dark overlay */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/duo-manufacturing.png"
            alt="Google Ads background"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[#22082A]/80" />
        </div>
        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-16 md:py-24 flex flex-col lg:flex-row items-center gap-10 lg:gap-0">
          {/* Left column */}
          <div className="flex-1 lg:pr-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
              You&apos;ve already spent money on Google Ads and it didn&apos;t work. We&apos;ll fix it for free.
            </h1>
            <p className="text-white/70 text-base sm:text-2xl mb-6">
              Get at least 20% more calls from Google in 90 days — or you don&apos;t pay us.
            </p>
            <p className="text-[#D4A843] font-semibold text-base sm:text-3xl mb-8">
              Only for the first 2 companies that decide to trust us.
            </p>
            <div className="flex flex-col gap-3 items-start">
              <Link href="/audit">
                <button className="bg-[#E8705A] hover:bg-[#d45f49] text-white font-semibold px-6 py-3 rounded-2xl text-sm sm:text-lg transition-colors">
                  Start with a free 5-minute audit of your campaign
                </button>
              </Link>
              <Link href="https://taplink.cc/vivaldimkt.com">
                <button className="bg-white/10 hover:bg-white/20 border border-white/30 backdrop-blur-sm text-white font-semibold px-6 py-3 rounded-2xl text-sm sm:text-lg transition-colors">
                  I want to know more first...
                </button>
              </Link>
            </div>
          </div>
          {/* Vertical divider */}
          <div className="hidden lg:block w-px self-stretch bg-white/30 mx-8 min-h-[200px]" />
          {/* Right column — stats */}
          <div className="flex-shrink-0 lg:pl-8 w-full lg:w-auto">
            <div className="flex flex-col gap-0">
              {/* Stat 1 */}
              <div className="py-5 border-b border-white/30">
                <p className="text-4xl sm:text-5xl font-bold text-white leading-none mb-1">90 days</p>
                <p className="text-white/60 text-sm sm:text-2xl">to prove the campaign works</p>
              </div>
              {/* Stat 2 */}
              <div className="py-5 border-b border-white/30">
                <p className="text-4xl sm:text-5xl font-bold text-white leading-none mb-1">0 upfront</p>
                <p className="text-white/60 text-sm sm:text-2xl">no retainers, no long contracts</p>
              </div>
              {/* Stat 3 */}
              <div className="pt-5">
                <p className="text-4xl sm:text-5xl font-bold text-white leading-none mb-1">100%</p>
                <p className="text-white/60 text-sm sm:text-2xl">aligned with your results</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Google Ads Description second part */}
      <section className="w-full bg-[#F0EAE0] py-16 md:py-24 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left column */}
          <div>
            <p className="text-[#E8705A] text-lg font-bold uppercase tracking-widest mb-2">
              You are not the only one
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#10002B] mb-8">
              We know exactly what happened.
            </h2>
            <p className="text-[#331E5B] text-base sm:text-2xl leading-relaxed mb-6">
              You hired an agency that promised you tons of clients. They showed you video testimonials, their &quot;proven process&quot;, everything looked great on paper. And they charged you $1,500–$2,000 a month.
            </p>
            <p className="text-[#331E5B] text-base sm:text-2xl leading-relaxed mb-6">
              The months went by, and they kept sending you reports full of numbers: &quot;Look at all these clicks we got&quot;… but you didn&apos;t see your team having more work, and you definitely didn&apos;t see more money coming in for your business.
            </p>
            <p className="text-[#331E5B] text-base sm:text-2xl leading-relaxed">
              That nagging doubt that you had in the back of your mind turned out to be right.
            </p>
          </div>
          {/* Right column */}
          <div className="flex flex-col gap-6">
            {/* Dark purple card */}
            <div className="bg-[#3D1A6E] rounded-2xl p-7 md:p-8">
              <h3 className="text-white font-bold text-lg sm:text-xl md:text-3xl leading-snug mb-4">
                Or maybe you never hired an agency, but decided to do it yourself.
              </h3>
              <p className="text-[#F2FFED] text-sm sm:text-xl leading-relaxed">
                You jumped into Google Ads, tried to understand the console, watched a thousand YouTube videos, followed Google&apos;s own &quot;recommendations,&quot; tested different keywords, adjusted the bidding…
              </p>
            </div>
            {/* Light card with orange border */}
            <div className="bg-[#F8F3ED] border-l-4 border-[#E8705A] rounded-2xl p-7 md:p-8">
              <p className="text-[#E8705A] font-bold text-lg sm:text-2xl mb-4">
                And nothing.
              </p>
              <p className="text-[#10002B] text-sm sm:text-xl leading-relaxed mb-4">
                Google Ads still isn&apos;t bringing you people who are ready to buy, or it brings you leads so expensive they don&apos;t make sense.
              </p>
              <p className="text-[#10002B] text-sm sm:text-xl leading-relaxed">
                And you&apos;re about to give up and say &quot;digital marketing is all hype, the only thing that works is word of mouth and that&apos;s it.&quot;
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* The Problem With Google Ads Section */}
      <section className="w-full bg-[#F5F0EB] py-16 md:py-24 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-[#10002B] text-center mb-10">
            The Problem With Google Ads
          </h2>
          {/* Paragraphs */}
          <p className="text-[#10002B] text-base sm:text-2xl leading-relaxed mb-5">
            Now, the problem is that truly great agencies are difficult to find, and you don&apos;t always have a trusted friend with a business who can recommend you one.
          </p>
          <p className="text-[#10002B] text-base sm:text-2xl leading-relaxed mb-10">
            Also, the truly good agencies charge at least $1,000/mo for a management fee. And if you want to do it yourself, you&apos;re signing up for a full-time job.
          </p>
          {/* Callout line */}
          <p className="text-[#10002B] text-base sm:text-xl font-bold text-center mb-8">
            A good Google Ads campaign requires getting a lot of things right at the same time:
          </p>
          {/* 4 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            {[
              {
                title: "Keywords",
                desc: "Finding those with high purchase intent that aren't burning your budget on job seekers or casual browsers.",
              },
              {
                title: "Ad Copy",
                desc: "Writing copy that makes someone stop and click instead of scrolling past and choosing your competitor.",
              },
              {
                title: "Landing Page",
                desc: "Building a page around how your specific customer makes a buying decision, instead of just a pretty page with a contact form.",
              },
              {
                title: "Bidding Strategy",
                desc: "Implementing a strategy that doesn't eat through your entire budget before the campaign even has a chance to work.",
              },
            ].map((card) => (
              <div key={card.title} className="rounded-xl overflow-hidden shadow-md bg-white">
                <div className="h-1.5 bg-gradient-to-r from-[#6947D2] to-[#E2725B]" />
                <div className="p-5">
                  <h3 className="text-[#10002B] font-bold text-base sm:text-xl mb-2">{card.title}</h3>
                  <p className="text-[#555555] text-sm sm:text-lg leading-relaxed">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
          {/* Warning line */}
          <p className="text-[#E8705A] text-base sm:text-2xl font-bold text-center mb-8">
            Miss any one of those, and the whole thing falls apart. Most campaigns do.
          </p>
          {/* Dark CTA card */}
          <div className="max-w-3xl mx-auto rounded-2xl overflow-hidden flex">
            <div className="w-2 flex-shrink-0 bg-[#E8705A]" />
            <div className="flex-1 bg-[#35113F] px-8 py-8 text-center">
              <p className="text-white font-bold text-lg sm:text-2xl mb-3">
                We&apos;re offering to help you fix that problem for free.
              </p>
              <p className="text-[#D4A843] text-sm sm:text-xl font-bold">
                But only if you&apos;re one of the first 2 companies that decide to trust us.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* What We Offer Section */}
      <section className="w-full bg-[#F5F0EB] py-16 md:py-24 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          {/* Top labels */}
          <p className="text-[#E8705A] text-xl font-bold text-center mb-2">
            &quot;SO WHAT ARE WE OFFERING YOU?&quot;
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#10002B] text-center mb-5">
            We&apos;ll fix your entire Google Ads campaign. For free.
          </h2>
          <p className="text-[#10002B] text-base sm:text-xl text-center leading-relaxed mb-8">
            No upfront fees. No $1,500 monthly retainers. No 6-month &quot;packages&quot; you have to pay for even if it doesn&apos;t work.
          </p>
          <p className="text-[#E8705A] font-semibold text-base sm:text-2xl text-center mb-8">
            Here&apos;s how it works:
          </p>
          {/* 3 step cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
            {/* Step 1 */}
            <div className="rounded-xl overflow-hidden shadow-md bg-white flex flex-col">
              <div className="h-1.5 bg-gradient-to-r from-[#6947D2] to-[#E2725B]" />
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-[#10002B] font-bold text-base sm:text-2xl mb-4">Step 1: We do a free audit</h3>
                <p className="text-[#331E5B] text-sm sm:text-lg leading-relaxed mb-3">
                  We do a complete audit of your current campaign (free, no commitment).
                </p>
                <p className="text-[#331E5B] text-sm sm:text-lg leading-relaxed mb-3">
                  We review your landing page, your copy, your keyword strategy, your bidding, your ads in the SERP. Everything.
                </p>
                <p className="text-[#10002B] text-sm sm:text-lg font-bold leading-relaxed mb-3">
                  We summarize it for you in a 5-10 minute video.
                </p>
                <p className="text-[#331E5B] text-sm sm:text-lg leading-relaxed">
                  And if you feel like the video doesn&apos;t describe the real problems behind your campaign or still have doubts, we just don&apos;t move forward.
                </p>
              </div>
            </div>
            {/* Step 2 */}
            <div className="rounded-xl overflow-hidden shadow-md bg-white flex flex-col">
              <div className="h-1.5 bg-gradient-to-r from-[#6947D2] to-[#E2725B]" />
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-[#10002B] font-bold text-base sm:text-2xl mb-4">Step 2: We have a proper consulting call</h3>
                <p className="text-[#331E5B] text-sm sm:text-lg leading-relaxed mb-3">
                  If we impress you with the video (and we trust our skills enough to know we will) by nailing down exactly what&apos;s stalling your campaign, we talk.
                </p>
                <p className="text-[#331E5B] text-sm sm:text-lg leading-relaxed">
                  And then we evaluate if we&apos;re a good fit, discuss in detail how we would work, give you specific next steps, and everything you need to evaluate before moving forward with us.
                </p>
              </div>
            </div>
            {/* Step 3 */}
            <div className="rounded-xl overflow-hidden shadow-md bg-white flex flex-col">
              <div className="h-1.5 bg-gradient-to-r from-[#6947D2] to-[#E2725B]" />
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-[#10002B] font-bold text-base sm:text-2xl mb-4">Step 3: Let&apos;s do it!</h3>
                <p className="text-[#331E5B] text-sm sm:text-lg leading-relaxed mb-4">
                  If you decide to move forward with us, we build everything for free:
                </p>
                <ul className="space-y-2">
                  {[
                    "New landing page (or we fix the one you have)",
                    "All the campaign configuration",
                    "Optimized keywords",
                    "Persuasive ads",
                    "Simplified purchase process",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-[#10002B] font-bold text-sm sm:text-lg">
                      <span className="text-[#E8705A] font-bold mt-0.5">◆</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          {/* Commission card */}
          <div className="rounded-2xl overflow-hidden flex mb-10">
            <div className="w-2 flex-shrink-0 bg-gradient-to-r from-[#6947D2] to-[#E2725B] " />
            <div className="flex-1 bg-[#EDE5DA] px-7 py-7">
              <h3 className="text-[#35113F] font-bold text-lg sm:text-3xl mb-3">
                During the first 3 months, we work 100% on commission.
              </h3>
              <p className="text-[#331E5B] text-sm sm:text-xl leading-relaxed">
                You only pay us if we get you clients. And you pay us after you close them, not before. If we bring you 10 clients who pay you $500 each (total: $5,000), you pay us 10% of that: $500, meaning you still have $4,500 in revenue. If we don&apos;t bring you clients, you don&apos;t pay us anything. <strong>Period</strong>.
              </p>
            </div>
          </div>
          {/* CTA button */}
          <div className="flex justify-center">
            <Link href="/audit">
              <button className="bg-[#E8705A] hover:bg-[#d45f49] text-white font-semibold px-10 py-4 rounded-full text-sm sm:text-base transition-colors">
                Book your 5-minute audit
              </button>
            </Link>
          </div>
        </div>
      </section>
      {/* Testimonial Section Justin*/}
      <section className="bg-[#25072D] py-14 md:py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-white font-bold text-base sm:text-2xl mb-8">
            What a better campaign actually feels like
          </p>
          <p className="text-white text-base sm:text-lg md:text-2xl leading-relaxed mb-10">
            &ldquo;Viviana provided me with extremely insightful feedback on my website to improve
            my messaging and directly address my target markets. She pointed out both my
            website&apos;s strengths and weaknesses and suggested easy solutions for each point,
            even coming up with specific wording to make my messaging more effective. I highly
            recommend her services!&rdquo;
          </p>
          <div className="flex items-center justify-center gap-4">
            <Image
              src="/images/natalie-testimonial-2.png"
              alt="Natalie Pavey"
              width={64}
              height={64}
              className="rounded-full w-16 h-16 object-cover flex-shrink-0"
            />
            <div className="text-left">
              <p className="text-white font-bold text-base sm:text-lg leading-tight">Natalie Pavey</p>
              <p className="text-white/60 text-sm sm:text-base">Business Owner</p>
            </div>
          </div>
        </div>
      </section>
      {/* The Right Question Section */}
      <section className="w-full bg-[#F5F0EB] py-16 md:py-24 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#10002B] text-center mb-8">
            &ldquo;That all sounds great, but it also sounds too good to be true… how do I know you can actually do this?&rdquo;
          </h2>
          <p className="text-[#E8705A] font-semibold text-base sm:text-2xl text-center mb-10">
            This is the right question, and we want to be transparent with you:
          </p>
          <div className="space-y-6">
            <p className="text-[#10002B] text-base sm:text-2xl leading-relaxed">
              We don&apos;t have case studies yet. We&apos;re a new agency. We both have 4 years of experience in marketing, and we both know how to do this thanks to our previous work experience.
            </p>
            <p className="text-[#10002B] text-base sm:text-2xl leading-relaxed">
              Problem is: all that work was done under somebody else&apos;s name. But we still don&apos;t have a portfolio full of testimonials and documented cases of our own.
            </p>
            <p className="text-[#10002B] text-base sm:text-2xl leading-relaxed">
              And that&apos;s exactly why we&apos;re offering this deal. We know you&apos;re not going to trust us just because we say &ldquo;we&apos;re good.&rdquo; Nobody in their right mind should.
            </p>
            <p className="text-[#10002B] text-base sm:text-2xl leading-relaxed">
              That&apos;s why we&apos;re eliminating all the risk on your end. If this doesn&apos;t work, the only thing you lose is the ad budget (which you were going to spend anyway), and we&apos;re the ones who lose months of work.
            </p>
            <p className="text-[#10002B] text-base sm:text-2xl leading-relaxed">
              Our interests are 100% aligned with yours. If you win, we win. If you lose, we lose.
            </p>
            <p className="text-[#10002B] text-base sm:text-2xl leading-relaxed">
              The only thing we ask in return: if this works, and you start getting more clients than before, that you give us a testimonial and that you let us publish the campaign metrics on our social media.
            </p>
          </div>
          <div className="flex justify-center mt-12">
            <Link href="/audit">
              <button className="bg-[#E8705A] hover:bg-[#d45f49] text-white font-semibold px-10 py-4 rounded-full text-sm sm:text-lg transition-colors">
                Book your 5-minute audit
              </button>
            </Link>
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
