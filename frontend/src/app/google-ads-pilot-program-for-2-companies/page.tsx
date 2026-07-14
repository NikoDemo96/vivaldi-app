import React from "react";
import Image from "next/image";
import NavBar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import ContactForm from "@/components/ContactForm/ContactForm";
import Link from "next/link";

export const metadata = {
  title:
    "Vivaldi Marketing | Google Ads Pilot Program (only for 2 companies)",
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
              <Link href="https://tally.so/r/zxbMGE">
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
            <Link href="https://tally.so/r/zxbMGE">
              <button className="bg-[#E8705A] hover:bg-[#d45f49] text-white font-semibold px-10 py-4 rounded-full text-sm sm:text-base transition-colors">
                Book your 5-minute audit
              </button>
            </Link>
          </div>
        </div>
      </section>
      {/* Testimonial Section Natalie*/}
      <section className="bg-[#25072D] py-14 md:py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-white font-bold text-base sm:text-2xl mb-8">
            This is what people say about our audits
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
            <Link href="https://tally.so/r/zxbMGE">
              <button className="bg-[#E8705A] hover:bg-[#d45f49] text-white font-semibold px-10 py-4 rounded-full text-sm sm:text-lg transition-colors">
                Book your 5-minute audit
              </button>
            </Link>
          </div>
        </div>
      </section>
      {/* Ideal Profile Section */}
      <section className="w-full bg-[#F5F0EB] py-16 md:py-24 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">
          {/* Left column */}
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#35113F] mb-8">
              However… we don&apos;t work with just anyone
            </h2>
            <p className="text-[#331E5B] text-base sm:text-2xl leading-relaxed mb-5">
              If we&apos;re going to work for free for three months, we need to know the infrastructure is there to convert what we bring you.
            </p>
            <p className="text-[#331E5B] text-base sm:text-2xl leading-relaxed mb-5">
              <strong>Think about it:</strong> we could bring you 20 qualified leads, but if nobody answers the inquiries in time, or the budget runs out in week two, or your team isn&apos;t ready to close… we all lose.
            </p>
            <p className="text-[#331E5B] text-base sm:text-2xl font-bold leading-relaxed mb-4">
              So in our call, we&apos;ll ask you a few things:
            </p>
            <ul className="space-y-2 mb-5 ml-1">
              {[
                "How your team handles incoming leads,",
                "What budget you're working with,",
                "And whether your sales process is ready to receive more clients.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[#331E5B] text-base sm:text-2xl">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#10002B] flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-[#331E5B] text-base sm:text-2xl leading-relaxed">
              If those three things are in place, we&apos;re probably a good fit.
            </p>
          </div>
          {/* Right column — card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col gap-5">
            <h3 className="text-[#35113F] font-bold text-xl sm:text-4xl">
              Ideal profile
            </h3>
            <p className="text-[#331E5B] text-base sm:text-2xl leading-relaxed">
              We work with small businesses because that&apos;s where we have experience. So we&apos;re going to get better results if you run a business like:
            </p>
            <ul className="space-y-3">
              {[
                "A plumbing, electrical, cleaning, roofing, or HVAC company",
                "An auto repair shop",
                "A law firm",
                "A manufacturer",
                "A local IT and tech support company",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-[#331E5B] font-bold text-base sm:text-2xl">
                  <span className="text-[#E8705A] mt-0.5 flex-shrink-0">◆</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-[#331E5B] text-base sm:text-2xl leading-relaxed">
              But if your business isn&apos;t on this list, reach out anyway — we&apos;ll evaluate together if we&apos;re a good fit.
            </p>
            <Link href="https://tally.so/r/zxbMGE" className="mt-2">
              <button className="w-full bg-[#35113F] hover:bg-[#1e0b3e] text-white font-semibold px-8 py-4 rounded-full text-sm sm:text-xl transition-colors">
                Book your 5-minute audit
              </button>
            </Link>
          </div>
        </div>
      </section>
      {/* Case Study Offer Section */}
      <section
        className="w-full py-20 md:py-28 px-4 md:px-8 lg:px-16 text-center"
        style={{
          background:
            "radial-gradient(ellipse at 60% 50%, #4A1060 0%, #2F0C38 50%, #18041F 100%)",
        }}
      >
        <div className="max-w-6xl mx-auto flex flex-col items-center gap-7">
          {/* Badge */}
          <span className="border border-[#E8705A] text-[#E8705A] text-md font-bold uppercase tracking-widest px-8 py-3 rounded-full">
            Limited Availability
          </span>
          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
            This offer is only for the first 2 companies
          </h2>
          {/* Paragraphs */}
          <p className="text-white/80 text-base sm:text-2xl leading-relaxed">
            Once we have those 2 case studies, we&apos;re not offering this anymore. Then we&apos;ll charge our normal rates: $500–$2,000 per month for ad management. In 3 months approximately, when we have the case studies, this window closes.
          </p>
          <p className="text-white/80 text-base sm:text-2xl leading-relaxed">
            If you want to prove to yourself that you can get clients with digital marketing (not just word of mouth) without spending thousands of dollars on consulting, the moment is now.
          </p>
          {/* CTA */}
          <Link href="https://tally.so/r/zxbMGE" className="mt-2">
            <button className="bg-[#E8705A] hover:bg-[#d45f49] text-white font-semibold px-10 py-4 rounded-full text-sm sm:text-xl transition-colors">
              Claim one of the 2 spots
            </button>
          </Link>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="w-full bg-[#F5F0EB] py-16 md:py-24 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <p className="text-[#E8705A] text-lg font-bold uppercase tracking-widest text-center mb-2">FAQ</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#35113F] text-center mb-3">
            Some questions you might have
          </h2>
          <p className="text-[#555555] text-sm sm:text-lg text-center mb-10">
            A few things we&apos;d want to know too if we were in your shoes.
          </p>
          {/* 2-column grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
            {[
              {
                q: "\"How do I know the clients I close came from you and not from another source?\"",
                a: "We use call tracking numbers exclusive to the ads, UTM parameters on all links, and a shared dashboard where you can see in real-time where each lead came from. Everything is tracked so there's zero ambiguity about attribution.",
              },
              {
                q: "\"What happens if it doesn't work? Do I lose my ad budget?\"",
                a: "We want to be transparent: yes, the ad budget is your risk (you pay it directly to Google, we never touch it). But it's money you were going to spend anyway trying things on your own or paying another agency. If it doesn't work, you keep the landing page, the complete setup, and the strategy without having paid a dime for the work.",
              },
              {
                q: "\"How long until I see results?\"",
                a: "First leads can start coming in within 2–4 weeks, but Google Ads campaigns need time to gather data and optimize. The algorithm goes through a \"learning phase\" in the first few weeks, and we need to test what works for your specific business. That's why the engagement is 3 months: month 1 is setup and testing, month 2 is optimization, and month 3 is where you see consistent, predictable results.",
              },
              {
                q: "\"What happens after the 3 months?\"",
                a: "You decide. You can either: (1) continue with us at a bespoke rate (around $500–$2,000 on average, depending on the project's complexity and budget), or (2) end the engagement without penalty. Your Google Ads account, landing page, and all data belong to you from day 1. If you decide not to continue, we give you complete access with no problem.",
              },
              {
                q: "\"How do you define a 'closed client'?\"",
                a: "We consider a client closed when the prospect signs a contract, pays the first deposit, or completes the first purchase (depending on your business). We'll define this specifically in the Step 2 call so there's no confusion.",
              },
              {
                q: "\"When and how do I pay you the commission?\"",
                a: "At the end of each month, you add up the total revenue from all clients that came from the ads during that month, calculate 10% of that, and pay us within 5 business days of the month closing.",
              },
            ].map((item) => (
              <div key={item.q} className="bg-white rounded-2xl shadow-sm border border-[#E8E0D8] p-6">
                <h3 className="text-[#35113F] font-bold text-base sm:text-2xl leading-snug mb-3">{item.q}</h3>
                <p className="text-[#331E5B] text-sm sm:text-lg leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
          {/* Full-width last card */}
          <div className="bg-white rounded-2xl shadow-sm border border-[#E8E0D8] p-6">
            <h3 className="text-[#35113F] font-bold text-base sm:text-2xl leading-snug mb-3">
              &ldquo;Why only 2 companies?&rdquo;
            </h3>
            <p className="text-[#331E5B] text-sm sm:text-lg leading-relaxed">
              Because we can&apos;t work for free for everyone. We know our value as marketers and we value our time. But we also understand that people need to see case studies before trusting an agency that will charge them +$500 per month. This offer lets us prove ourselves while respecting both our time and yours — so it&apos;s limited to 2 companies.
            </p>
          </div>
        </div>
      </section>
      {/* Start Free Audit Section */}
      <section className="w-full bg-white py-20 md:py-28 px-4 md:px-8 text-center">
        <div className="max-w-2xl mx-auto flex flex-col items-center gap-5">
          <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-[#35113F]">
            Let&apos;s start with the free audit.
          </h2>
          <p className="text-[#6A5D70] text-base sm:text-lg leading-relaxed">
            Like we said: there&apos;s no commitment. We just want to show you what&apos;s failing in your current campaign and how we&apos;d fix it.
          </p>
          <Link href="https://tally.so/r/zxbMGE" className="mt-2">
            <button className="bg-[#E8705A] hover:bg-[#d45f49] text-white font-semibold px-10 py-4 rounded-full text-sm sm:text-lg transition-colors">
              Book your 5-minute audit
            </button>
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default GoogleAndMetaAdsPage;
