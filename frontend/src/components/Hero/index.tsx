import React from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import NavBar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import ContactForm from "../ContactForm/ContactForm";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <NavBar />

      {/* Hero Section */}
      <section className="relative min-h-[600px] md:h-[895px] flex items-center justify-center py-12 md:py-0">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/images/duo-manufacturing.png')`,
          }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/10" />

        {/* Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 leading-tight">
              SEO and Google Ads that <br className="hidden md:block" />
              <span className="md:hidden"> </span>Actually Bring You Clients
            </h1>
            {/* <div className="w-[280px] sm:w-[340px] md:w-[765px] mx-auto">
              <Image
                src="/images/Horizontal-Straight-line.svg"
                alt="Underline"
                width={765}
                height={8}
                className="w-full h-auto"
              />
            </div> */}
          </div>

          <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-5xl mx-auto leading-relaxed mt-4">
            For small businesses tired of paying for traffic that never
            converts. We figure out how your clients buy before we run a single
            campaign.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6 mt-6 md:mt-8">
            <Link
              href="https://taplink.cc/vivaldimkt.com"
              className="w-full sm:w-auto"
            >
              <button className="w-full sm:w-auto bg-[#E2725B] hover:bg-[#d45c43] text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-xl font-semibold rounded-md transition-colors">
                Book a Free Call
              </button>
            </Link>

            <Link href="/audit" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto bg-transparent border-2 border-white border-none text-white underline px-6 md:px-8 py-3 md:py-4 text-base md:text-xl font-semibold rounded-xl transition-colors hover:border-[#E2725B] hover:text-[#E2725B] hover:bg-transparent">
                Check out our results-based Google Ads program →
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Client Logos and Expertise section */}
      <section className="relative">
        {/* No background image */}
        {/* Client Logos Section */}
        <div className="py-8 md:py-12 bg-[#F1F1F1] relative z-10">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="flex items-center justify-start md:justify-center space-x-8 md:space-x-12 lg:space-x-16 overflow-x-auto pb-4 md:pb-0 scrollbar-hide">
              <Link
                href="https://americahostel.com.ar/"
                className="flex-shrink-0"
              >
                <Image
                  src="/images/america-sur-logo.svg"
                  alt="America del Sur"
                  width={160}
                  height={60}
                  className="md:w-[235px] md:h-[87px]"
                />
              </Link>
              <Link
                href="https://www.wushutao.com.ar/"
                className="flex-shrink-0"
              >
                <Image
                  src="/images/wushutao-logo.svg"
                  alt="Wu Shu Tao"
                  width={60}
                  height={60}
                  className="md:w-[87px] md:h-[87px]"
                />
              </Link>
              <Link
                href="https://www.dictumtranslationsolutions.com/"
                className="flex-shrink-0"
              >
                <Image
                  src="/images/dictum-logo.svg"
                  alt="Dictum Translation Solutions"
                  width={160}
                  height={55}
                  className="md:w-[235px] md:h-[80px]"
                />
              </Link>
              <Link
                href="https://www.ringteacher.com//"
                className="flex-shrink-0"
              >
                <Image
                  src="/images/ring-teacher-logo.svg"
                  alt="Sarris Marketing"
                  width={160}
                  height={42}
                  className="md:w-[235px] md:h-[62px]"
                />
              </Link>
              <Link
                href="https://sarrismarketing.com/"
                className="flex-shrink-0"
              >
                <Image
                  src="/images/sarris-logo.svg"
                  alt="Sarris Marketing"
                  width={160}
                  height={42}
                  className="md:w-[235px] md:h-[62px]"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Expertise Section */}
        <div className="py-12 md:py-20 bg-white relative z-10">
          <div className="max-w-5xl mx-auto px-4 md:px-6">
            <p className="text-[#10002B] text-xl sm:text-xl md:text-2xl leading-relaxed mb-6 md:mb-8">
              You&apos;re great at getting clients through word of mouth, and
              that says a lot about your expertise.
            </p>

            <p className="text-[#10002B] text-lg sm:text-xl md:text-2xl leading-relaxed mb-6 md:mb-8">
              But when you try other stuff — ads, SEO, social media — all you
              often get is frustration. Reports full of numbers you don&apos;t
              understand, supposedly lots of clicks, traffic and engagement… but
              your business looks exactly the same. You don&apos;t see more
              calls, more clients, or more money coming in.
            </p>

            <p className="text-[#10002B] text-lg sm:text-xl md:text-2xl leading-relaxed">
              So you keep relying on referrals, and that means you end up one
              month with more work than your team can handle, and the next
              stressing about where the next client will come from. And at some
              point, you start to wonder if maybe this whole digital marketing
              thing just doesn&apos;t work for businesses like yours.
            </p>
          </div>
        </div>
      </section>

      {/* Brutal Truth Section */}
      <section className="bg-[#FAF8F5] py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#10002B] text-center mb-10 md:mb-14">
            Here&apos;s the brutal truth about marketing.
          </h2>

          <p className="text-[#10002B] text-base md:text-2xl leading-relaxed mb-6">
            Most agencies guess what your clients want, then try a bunch of
            tactics and hope something works. We do the opposite: we talk to
            your actual clients first, figure out how they make decisions, and
            then build the strategy to make those clients come to you.
          </p>

          <p className="text-[#10002B] text-base md:text-2xl leading-relaxed mb-4">
            You can spend thousands on ads or SEO… and still not close deals.
          </p>

          <p className="text-[#10002B] text-base md:text-2xl leading-relaxed mb-8">
            That&apos;s not because digital marketing doesn&apos;t work, but
            usually because of one these reasons:
          </p>

          <ul className="space-y-3 mb-10">
            {[
              "You rank or run ads for keywords that attract the wrong people.",
              "Your site talks about you instead of your client's problem and how you solve it.",
              "You sound just like your competitors, so people just pick whoever's cheapest.",
              "You don't give people enough reasons to trust you or feel confident about hiring you.",
              "You're tracking clicks and traffic, but not what actually turns into clients, so you're spending blind.",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-red-600 font-bold text-2xl leading-relaxed flex-shrink-0">
                  ✕
                </span>
                <span className="text-[#10002B] text-base md:text-2xl leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <p className="text-[#10002B] text-base md:text-2xl leading-relaxed mb-10">
            All of these have the same root cause: not deeply understanding how
            your clients make buying decisions for your service. If you
            don&apos;t research what makes them trust, hesitate, or pick one
            option over another, no campaign or tactic is going to fix that.
          </p>

          <div className="bg-[#EDE9F8] rounded-lg px-5 py-4 md:px-6 md:py-5 border-l-4 border-[#4A1D8A]">
            <p className="text-[#10002B] text-base md:text-2xl leading-relaxed">
              <strong>Not sure which of these is costing you clients?</strong>{" "}
              Get a messaging audit — a 30-min video showing you exactly where
              your website is losing people and how to fix it.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonial Section Diana*/}
      <section className="bg-[#22082A] py-12 md:py-20">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <div className="bg-white rounded-2xl px-8 py-10 md:px-14 md:py-14 text-center shadow-lg">
            <p className="text-[#555555] text-base md:text-lg leading-relaxed italic mb-8">
              &ldquo;Viviana has outstanding work ethics and a deep
              understanding of the translation industry. She coordinated the
              development of our new site seamlessly, with clarity and
              precision. Her marketing recommendations are helping us define a
              new strategy moving forward. She listens carefully, offers
              thoughtful insights, and genuinely invests in her clients&apos;
              success. It&apos;s been a pleasure collaborating with her, and I
              look forward to continuing our partnership. Highly
              recommended!&rdquo;
            </p>
            <div className="flex flex-row items-center justify-center gap-4">
              <Image
                src="/images/diana.svg"
                alt="Diana Pompa Morris"
                width={64}
                height={64}
                className="rounded-full w-16 h-16 object-cover flex-shrink-0"
              />
              <div className="text-left">
                <p className="text-[#2B1055] font-bold text-base md:text-lg leading-tight">
                  Diana Pompa Morris
                </p>
                <p className="text-gray-500 text-sm md:text-base mt-0.5">
                  Founder at Dictum Translation Solutions
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-12 md:py-20">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 text-center mb-10 md:mb-14">
            Three services. One objective: helping you get more clients.
          </h2>

          {/* Top row: 2 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Google Ads Card */}
            <div className="rounded-2xl overflow-hidden shadow-[0_4px_30px_rgba(105,71,210,0.22)]">
              <div className="h-4 bg-gradient-to-r from-[#6947D2] to-[#E2725B]"></div>
              <div className="bg-white p-6 md:p-8 flex flex-col h-full">
                <h3 className="text-3xl font-bold text-[#4B3DA8] mb-3">
                  Google Ads
                </h3>
                <p className="text-gray-700 text-xl leading-relaxed mb-4">
                  Campaigns designed to put you in front of people who are
                  already searching for what you offer — without the long
                  timelines of SEO.
                </p>
                <Link
                  href="/services/google-ads"
                  className="text-[#4B3DA8] text-lg font-medium underline mb-5"
                >
                  Learn More →
                </Link>
                <div className="bg-[#EEE9FA] border-l-4 border-[#6947D2] rounded-lg p-4 text-xl text-[#3D2C8A] leading-relaxed mt-auto">
                  We&apos;re currently accepting 2 clients in a results-based
                  model: you only pay when we bring you clients.
                  <br />
                  <Link
                    href="/services/google-ads"
                    className="underline font-medium mt-2 inline-block text-lg"
                  >
                    [More info on the pilot program →]
                  </Link>
                </div>
              </div>
            </div>

            {/* SEO Card */}
            <div className="rounded-2xl overflow-hidden shadow-[0_4px_30px_rgba(105,71,210,0.22)] ">
              <div className="h-4 bg-gradient-to-r from-[#6947D2] to-[#E2725B]"></div>
              <div className="bg-white p-6 md:p-8 flex flex-col h-full ">
                <h3 className="text-3xl font-bold text-[#4B3DA8] mb-3">SEO</h3>
                <p className="text-gray-700 text-xl leading-relaxed mb-4">
                  Your client searches for you on Google. If you don&apos;t show
                  up, they don&apos;t find you. SEO takes longer to deliver
                  results, but when it works, it brings you leads for years
                  without paying for each click.
                </p>
                <Link
                  href="/services/seo"
                  className="text-[#4B3DA8] text-lg font-medium underline mt-auto"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom row: full-width card */}
          <div className="rounded-2xl overflow-hidden shadow-[0_4px_30px_rgba(105,71,210,0.22)] mb-12 md:mb-16">
            <div className="h-4 bg-gradient-to-r from-[#6947D2] to-[#E2725B]"></div>
            <div className="bg-white p-6 md:p-8">
              <h3 className="text-3xl font-bold text-[#4B3DA8] mb-3">
                Messaging Strategy &amp; Web Design
              </h3>
              <p className="text-gray-700 text-xl leading-relaxed mb-4">
                You can have all the traffic in the world, but if your website
                isn&apos;t persuasive, that traffic is worthless. We research
                how your clients buy — what makes them trust you, what
                objections they have, who they compare you against — and we
                rewrite your copy so the people who land on your site pick you
                and not the one next door.
              </p>
              <Link
                href="/services/messaging-and-positioning-strategy"
                className="text-[#4B3DA8] text-lg font-medium underline mb-5 inline-block"
              >
                Learn More →
              </Link>
              <div className="bg-[#EEE9FA] border-l-4 border-[#6947D2] rounded-lg p-4 text-xl text-[#3D2C8A] leading-relaxed mt-auto">
                <p className="font-semibold mb-1">
                  Not sure if your page is losing you clients?
                </p>
                <p>
                  Start with a messaging audit: a 30-min video showing you
                  exactly where you&apos;re losing people and how to fix it.
                </p>
                <Link
                  href="/audit"
                  className="underline font-medium mt-2 inline-block text-lg"
                >
                  [More about the audit →]
                </Link>
              </div>
            </div>
          </div>

          {/* Explanatory text + CTA */}
          <div className="text-justify max-w-5xl mx-auto">
            <p className="text-[#331E5B] text-sm md:text-2xl leading-relaxed mb-4">
              We chose these three services for a reason. In most of the
              industries we work with, people hire when something specific
              happens: a pipe bursts, they get sued, they need a translation.
              And they go straight to Google. If you don&apos;t show up in that
              moment, you lose that client.
            </p>
            <p className="text-[#331E5B] text-sm md:text-2xl leading-relaxed mb-8">
              Google Ads puts you there right away. SEO keeps you there for
              years without paying per click. But showing up is only half the
              job. Once they land on your site, you have a few seconds to
              convince them. If your page doesn&apos;t, they&apos;ll just go
              back to Google and hire the next one on the list. That&apos;s why
              the three work together: one without the other doesn&apos;t get
              you there.
            </p>
          </div>
          <div className="flex justify-center">
            <Link href="https://taplink.cc/vivaldimkt.com">
              <button className="bg-[#E2725B] hover:bg-[#d45c43] text-white px-8 py-3 text-lg font-semibold rounded-sm transition-colors">
                Book a Discovery Call
              </button>
            </Link>
          </div>
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
            <p className="text-white/80 text-sm sm:text-base mb-4">
              Founder at Sarris Marketing
            </p>
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

      {/* How We Work Section */}
      <section className="bg-[#faf9fb] py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#6947D2] mb-4 md:mb-6">
              How We Work
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
            {/* Discovery Card */}
            <div className="bg-white rounded-lg p-6 md:p-10 text-center relative flex flex-col justify-between min-h-[320px] md:h-120">
              <div className="absolute -top-4 left-4 md:left-8">
                <span className="text-5xl md:text-6xl font-bold text-orange-500">
                  1
                </span>
              </div>
              <div className="mt-4 mb-4 md:mb-6 flex justify-center">
                <div className="flex items-center justify-center">
                  <Image
                    src="/images/loupe-icon.svg"
                    alt="Discovery Icon"
                    width={90}
                    height={90}
                    className="md:w-[120px] md:h-[120px]"
                  />
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#6947D2] mb-3 md:mb-4">
                DISCOVERY
              </h3>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                We&apos;ll talk through what's happening in your business right
                now: what's working, what isn't, and what your goals are. Then
                we'll tell you exactly what we think would help and what it
                would cost.
              </p>
            </div>

            {/* Strategy Card */}
            <div className="bg-white rounded-lg p-6 md:p-8 text-center relative flex flex-col justify-between min-h-[320px]">
              <div className="absolute -top-4 left-4 md:left-8">
                <span className="text-5xl md:text-6xl font-bold text-orange-500">
                  2
                </span>
              </div>
              <div className="mt-4 mb-4 md:mb-6 flex justify-center">
                <div className="flex items-center justify-center">
                  <Image
                    src="/images/strategy-icon.svg"
                    alt="Strategy Icon"
                    width={110}
                    height={110}
                    className="md:w-[145px] md:h-[145px]"
                  />
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#6947D2] mb-3 md:mb-4">
                STRATEGY
              </h3>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                We research how buyers in your industry make decisions: talking
                to your clients, reviewing online conversations and analyzing
                your competition. Then we tell you what to say and which
                channels to prioritize.
              </p>
            </div>

            {/* Execution Card */}
            <div className="bg-white rounded-lg p-6 md:p-8 text-center relative flex flex-col justify-between min-h-[320px]">
              <div className="absolute -top-4 left-4 md:left-8">
                <span className="text-5xl md:text-6xl font-bold text-orange-500">
                  3
                </span>
              </div>
              <div className="mt-4 mb-4 md:mb-6 flex justify-center">
                <div className="flex items-center justify-center">
                  <Image
                    src="/images/execution-icon.svg"
                    alt="Execution Icon"
                    width={90}
                    height={90}
                    className="md:w-[120px] md:h-[120px]"
                  />
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#6947D2] mb-3 md:mb-4">
                EXECUTION
              </h3>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                Time to get down to work. We write your content, run your ads,
                or build your SEO presence. For ongoing work, we'll have a
                monthly consultation call to review what's working and what
                needs adjusting.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="https://taplink.cc/vivaldimkt.com"
              className="inline-block w-full sm:w-auto"
            >
              <button className="w-full sm:w-auto bg-[#E2725B] hover:bg-[#d45c43] text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-xl font-semibold rounded-xl transition-colors">
                BOOK A DISCOVERY CALL
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="relative py-12 md:py-16 lg:py-24 bg-[#5233B0]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-8 md:mb-12 lg:mb-16">
            Who We Are
          </h2>
          <div className="flex flex-col lg:flex-row justify-between gap-8 md:gap-12 lg:gap-16">
            {/*Viviana */}
            <div className="flex flex-col items-center gap-4 md:gap-6 lg:gap-8">
              <Image
                src="/images/viviana-photo2.svg"
                alt="Viviana"
                width={340}
                height={400}
                className="md:w-[400px] md:h-[475px] lg:w-[455px] lg:h-[541px]"
              />
              <p className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl text-center md:pt-4 lg:pt-8">
                Viviana spent six years as a<br className="hidden md:block" />
                <span className="md:hidden"> </span>freelance translator before
                <br className="hidden md:block" />
                <span className="md:hidden"> </span>switching to marketing.
              </p>
              <Link
                href="https://www.linkedin.com/in/viviana-urbaneja-marketer/"
                target="_blank"
                className="block w-10 sm:w-12"
              >
                <Image
                  src="/images/linkedin3.png"
                  alt="Viviana Urbaneja"
                  width={40}
                  height={40}
                  className="rounded-lg bg-white sm:w-[50px] sm:h-[50px]"
                />
              </Link>
            </div>
            {/*Valdi */}
            <div className="flex flex-col items-center gap-4 md:gap-6 lg:gap-8">
              <Image
                src="/images/jorge-photo3.png"
                alt="Valdi"
                width={300}
                height={400}
                className="md:w-[350px] md:h-[475px] lg:w-[400px] lg:h-[541px]"
              />
              <p className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl text-center md:pt-4 lg:pt-8">
                Valdi is a materials engineer
                <br className="hidden md:block" />
                <span className="md:hidden"> </span>who discovered his passion
                for
                <br className="hidden md:block" />
                <span className="md:hidden"> </span>marketing.
              </p>
              <Link
                href="https://www.linkedin.com/in/valdimarketing/"
                target="_blank"
                className="block w-10 sm:w-12"
              >
                <Image
                  src="/images/linkedin3.png"
                  alt="Jorge Valderrama"
                  width={40}
                  height={40}
                  className="rounded-lg bg-white sm:w-[50px] sm:h-[50px]"
                />
              </Link>
            </div>
          </div>
          <div className="flex justify-center mt-8 md:mt-16 lg:mt-24">
            <Link
              href="https://taplink.cc/vivaldimkt.com"
              className="inline-block w-full sm:w-auto px-4"
            >
              <button className="w-full sm:w-auto bg-[#E2725B] hover:bg-[#d45c43] text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-xl font-semibold rounded-xl transition-colors">
                DISCOVER MORE ABOUT US
              </button>
            </Link>
          </div>
        </div>
      </section>
      {/* Testimony and Predictable Growth Section */}
      <section className="w-full">
        {/* Testimony */}
        <div className="bg-[#10002B] py-12 md:py-16 px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <p className="text-white text-base sm:text-lg md:text-xl mb-6 md:mb-8">
              &quot;We have 50,000 photos from our two hostels but no time to
              manage social media properly. Viviana and Jorge understood exactly
              what we needed—a simple, effective strategy without the fluff.
              They create engaging content from our existing assets, handle
              everything professionally, and keep communication streamlined.
              After years of random posting, it&apos;s refreshing to have a
              structured approach that showcases what makes our hostels special
              to international travelers.&quot;
            </p>
            <div className="mb-3 md:mb-4">
              <span className="font-bold text-white text-base sm:text-lg">
                Sebastian Rinsky Vinagura
              </span>
              <div className="text-white/80 text-sm sm:text-base">
                Founder at America del Sur Hostel
              </div>
            </div>
            <div>
              <Image
                src="/images/sebastian-icon.svg"
                alt="Sebastian Rinsky Vinagura"
                width="54"
                height="54"
                className="rounded-full object-cover sm:w-16 sm:h-16"
              />
            </div>
          </div>
        </div>
        {/* Predictable Growth CTA */}
        <div className="bg-[#5233B0] py-12 md:py-16 lg:py-20 px-4 md:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6">
            Ready to Attract More Clients?
          </h2>
          <p className="text-white/90 text-base sm:text-lg md:text-xl lg:text-2xl max-w-7xl mx-auto mb-6 md:mb-8">
            Let&apos;s figure out the right approach for your business.
          </p>
          <Link
            href="https://taplink.cc/vivaldimkt.com"
            className="inline-block w-full sm:w-auto"
          >
            <button className="w-full sm:w-auto bg-[#E2725B] hover:bg-[#d45c43] text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-xl font-semibold rounded-xl transition-colors">
              BOOK A DISCOVERY CALL
            </button>
          </Link>
        </div>
      </section>
      {/* Contact Form Section */}
      <div id="contact-form">
        <ContactForm />
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Hero;
