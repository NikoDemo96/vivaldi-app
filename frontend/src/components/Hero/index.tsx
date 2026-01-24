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
              Work with Marketers <br className="hidden md:block" />
              <span className="md:hidden"> </span>Who Speak Your Language
            </h1>
            <div className="w-[280px] sm:w-[340px] md:w-[765px] mx-auto">
              <Image
                src="/images/Horizontal-Straight-line.svg"
                alt="Underline"
                width={765}
                height={8}
                className="w-full h-auto"
              />
            </div>
          </div>

          <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed mt-4">
            Marketing strategy for translation agencies
          </p>
          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed">
            and manufacturing companies by people who&apos;ve worked in your
            industries.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6 mt-6 md:mt-8">
            <Link href="https://taplink.cc/vivaldimkt.com" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto bg-[#E2725B] hover:bg-[#d45c43] text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-xl font-semibold rounded-xl transition-colors">
                BOOK A FREE CONSULTATION CALL
              </button>
            </Link>

            <Link href="#contact-form" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto bg-transparent border-2 border-white text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-xl font-semibold rounded-xl transition-colors hover:border-[#E2725B] hover:text-[#E2725B] hover:bg-transparent">
                GET A 30-MIN MESSASING AUDIT
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Client Logos and Expertise section */}
      <section className="relative">
        {/* No background image */}
        {/* Client Logos Section */}
        <div className="py-8 md:py-12 bg-transparent relative z-10">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="flex items-center justify-start md:justify-center space-x-8 md:space-x-12 lg:space-x-16 overflow-x-auto pb-4 md:pb-0 scrollbar-hide">
              <Link href="https://americahostel.com.ar/" className="flex-shrink-0">
                <Image
                  src="/images/america-sur-logo.svg"
                  alt="America del Sur"
                  width={160}
                  height={60}
                  className="md:w-[235px] md:h-[87px]"
                />
              </Link>
              <Link href="https://www.wushutao.com.ar/" className="flex-shrink-0">
                <Image
                  src="/images/wushutao-logo.svg"
                  alt="Wu Shu Tao"
                  width={60}
                  height={60}
                  className="md:w-[87px] md:h-[87px]"
                />
              </Link>
              <Link href="https://www.dictumtranslationsolutions.com/" className="flex-shrink-0">
                <Image
                  src="/images/dictum-logo.svg"
                  alt="Dictum Translation Solutions"
                  width={160}
                  height={55}
                  className="md:w-[235px] md:h-[80px]"
                />
              </Link>
              <Link href="https://sarrismarketing.com/" className="flex-shrink-0">
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
        <div className="py-12 md:py-16 bg-transparent relative z-10">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#6947D2] text-center mb-12 md:mb-16 leading-tight px-2">
              You're great at getting clients through word of mouth.
            </h2>

            <div className="flex flex-col lg:flex-row lg:justify-between items-center gap-8 md:gap-12">
              <div className="lg:w-1/2 space-y-4 md:space-y-6">
                <p className="text-[#1204AA] text-lg md:text-xl leading-relaxed">
                  But when you try ads or social media, all you often get is
                  frustration.
                </p>

                <p className="text-[#1204AA] text-lg md:text-xl leading-relaxed">
                  So you end up one month with more work than you can handle,
                  and the next stressing about where the next client will come
                  from.
                </p>

                <p className="text-lg md:text-xl leading-relaxed">
                  <span className="text-[#E2725B] font-semibold">
                    That&apos;s why we started Vivaldi Marketing.
                  </span>{" "}
                  <span className="text-[#1204AA]">
                    We&apos;ve actually worked in your industries. We know
                    first-hand how damn hard it is to sell translation and
                    manufacturing services.
                  </span>
                </p>
                <p className="text-[#1204AA] text-lg md:text-xl leading-relaxed">
                  So now we help businesses like yours get past that.
                </p>

                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#6947D2] pt-4">
                  So now we help businesses like yours get past that.
                </h3>
              </div>

              <div className="lg:w-1/2 w-full max-w-md lg:max-w-none">
                <Image
                  src="/images/planing.png"
                  alt="Professional working on documents at desk"
                  width={472}
                  height={612}
                  className="ml-auto w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section Diana*/}
      <section className="bg-[#10002B] py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <div className="text-left mb-6 md:mb-8">
            <p className="text-white text-base md:text-lg leading-relaxed">
              "Viviana has outstanding work ethics and a deep understanding of
              the translation industry. She coordinated the development of our
              new site seamlessly, with clarity and precision. Her marketing
              recommendations are helping us define a new strategy moving
              forward. She listens carefully, offers thoughtful insights, and
              genuinely invests in her clients&apos; success. It&apos;s been a
              pleasure collaborating with her, and I look forward to continuing
              our partnership. Highly recommended!"
            </p>
          </div>

          <div className="text-left">
            <p className="text-white font-semibold text-base md:text-lg mb-1">
              Diana Pompa Morris
            </p>
            <p className="text-white/80 mb-4 text-sm md:text-base">
              Founder at Dictum Translation Solutions
            </p>
            <Image
              src="/images/diana.svg"
              alt="Diana Pompa Morris"
              width={70}
              height={70}
              className="rounded-full md:w-[90px] md:h-[90px]"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-[#5233B0] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-5xl font-bold text-white mb-6">
              Here's How We Can Help You
            </h2>
            <p className="text-white/90 text-2xl max-w-7xl mx-auto leading-relaxed">
              Most agencies guess what your clients want, then try a bunch of
              tactics and hope something works. We do the opposite: we talk to
              your actual clients first, figure out how they make decisions, and
              then build the strategy to make those clients come to you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Messaging Strategy Card */}
            <div className="bg-white rounded-lg p-10 text-center flex flex-col justify-between h-full">
              <div className="mb-4 flex justify-center">
                <div className="flex items-center justify-center">
                  <Image
                    src="/images/megafono.svg"
                    alt="Messaging Icon"
                    width={110}
                    height={90}
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Messaging Strategy
              </h3>
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                We figure out what your clients care and worry about, then tell
                you exactly what to say to make them choose you. Once you know
                what resonates, you can use it everywhere—your website, your
                emails, your sales calls.
              </p>

              <Link
                href="/services/messaging-and-positioning-strategy"
                className="w-full"
              >
                <button className="w-full bg-[#10002B] hover:bg-[#2a1e4d] text-white px-6 py-2 text-sm font-semibold rounded transition-colors">
                  LEARN MORE
                </button>
              </Link>
            </div>

            {/* Social Media Ghostwriting Card */}
            <div className="bg-white rounded-lg p-10 text-center flex flex-col justify-between h-full">
              <div className="mb-4 flex justify-center">
                <div className="flex items-center justify-center">
                  <Image
                    src="/images/linkedin-icon.svg"
                    alt="Social Media Icon"
                    width={90}
                    height={90}
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Social Media Ghostwriting
              </h3>
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                We handle your LinkedIn presence: writing posts that sound like
                you, optimizing for the algorithm, and focusing on topics that
                make your ideal clients think 'this person gets it' and reach
                out.
              </p>
              <Link
                href="/services/social-media-ghostwriting"
                className="w-full"
              >
                <button className="bg-[#10002B] hover:bg-[#2a1e4d] text-white px-6 py-2 text-sm font-semibold rounded transition-colors w-full">
                  LEARN MORE
                </button>
              </Link>
            </div>

            {/* SEO & Content Writing Card */}
            <div className="bg-white rounded-lg p-10 text-center flex flex-col justify-between h-full">
              <div className="mb-4 flex justify-center">
                <div className="flex items-center justify-center">
                  <Image
                    src="/images/seo-icon.svg"
                    alt="SEO Icon"
                    width={90}
                    height={90}
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                SEO & Content Writing
              </h3>
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                We handle everything SEO: keyword research, content strategy,
                and writing articles that rank. Increase your website traffic
                and get the right people to find you when they&apos;re looking
                for your service.
              </p>
              <Link href="/services/seo" className="w-full">
                <button className="bg-[#10002B] hover:bg-[#2a1e4d] text-white px-6 py-2 text-sm font-semibold rounded transition-colors w-full">
                  LEARN MORE
                </button>
              </Link>
            </div>

            {/* Google Ads Card */}
            <div className="bg-white rounded-lg p-10 text-center flex flex-col justify-between h-full">
              <div className="mb-4 flex justify-center">
                <div className="flex items-center justify-center">
                  <Image
                    src="/images/google-ads-icon.svg"
                    alt="Google Ads Icon"
                    width={90}
                    height={90}
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Google Ads
              </h3>
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                Google Ads are the fastest way to get in front of buyers
                actively searching. We run campaigns that target the right
                searches and turn those clicks into conversations.
              </p>
              <Link href="/services/google-and-meta-ads" className="w-full">
                <button className="bg-[#10002B] hover:bg-[#2a1e4d] text-white px-6 py-2 text-sm font-semibold rounded transition-colors w-full">
                  LEARN MORE
                </button>
              </Link>
            </div>
          </div>
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

      {/* How We Work Section */}
      <section className="bg-[#faf9fb] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-bold text-[#6947D2] mb-6">
              How We Work
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Discovery Card */}
            <div className="bg-white rounded-lg p-10 text-center relative flex flex-col justify-between h-120">
              <div className="absolute -top-4 left-8">
                <span className="text-6xl font-bold text-orange-500">1</span>
              </div>
              <div className="mt-4 mb-6 flex justify-center">
                <div className="flex items-center justify-center">
                  <Image
                    src="/images/loupe-icon.svg"
                    alt="Discovery Icon"
                    width={120}
                    height={120}
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#6947D2] mb-4">
                DISCOVERY
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                We&apos;ll talk through what's happening in your business right
                now: what's working, what isn't, and what your goals are. Then
                we'll tell you exactly what we think would help and what it
                would cost.
              </p>
            </div>

            {/* Strategy Card */}
            <div className="bg-white rounded-lg p-8 text-center relative flex flex-col justify-between h-full">
              <div className="absolute -top-4 left-8">
                <span className="text-6xl font-bold text-orange-500">2</span>
              </div>
              <div className="mt-4 mb-6 flex justify-center">
                <div className="flex items-center justify-center">
                  <Image
                    src="/images/strategy-icon.svg"
                    alt="Strategy Icon"
                    width={145}
                    height={145}
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#6947D2] mb-4">
                STRATEGY
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                We research how buyers in your industry make decisions: talking
                to your clients, reviewing online conversations and analyzing
                your competition. Then we tell you what to say and which
                channels to prioritize.
              </p>
            </div>

            {/* Execution Card */}
            <div className="bg-white rounded-lg p-8 text-center relative flex flex-col justify-between h-full">
              <div className="absolute -top-4 left-8">
                <span className="text-6xl font-bold text-orange-500">3</span>
              </div>
              <div className="mt-4 mb-6 flex justify-center">
                <div className="flex items-center justify-center">
                  <Image
                    src="/images/execution-icon.svg"
                    alt="Execution Icon"
                    width={120}
                    height={120}
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#6947D2] mb-4">
                EXECUTION
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Time to get down to work. We write your content, run your ads,
                or build your SEO presence. For ongoing work, we'll have a
                monthly consultation call to review what's working and what
                needs adjusting.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link href="https://taplink.cc/vivaldimkt.com">
              <button className="bg-[#E2725B] hover:bg-[#d45c43] text-white px-8 py-4 text-xl font-semibold rounded-xl transition-colors">
                BOOK A DISCOVERY CALL
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="relative py-24 bg-[#5233B0]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-5xl md:text-6xl font-bold text-white text-center mb-16">
            Who We Are
          </h2>
          <div className="flex flex-row justify-between gap-16">
            {/*Viviana */}
            <div className="flex flex-col md:flex-col items-center md:justify-start gap-8">
              <Image
                src="/images/viviana-photo2.svg"
                alt="Viviana"
                width={455}
                height={541}
              />
              <p className="text-white text-3xl text-center md:pt-8">
                Viviana spent six years as a
                <br />
                freelance translator before
                <br />
                switching to marketing.
              </p>
              <Link
                href="https://www.linkedin.com/in/viviana-urbaneja-marketer/"
                target="_blank"
                className="mb-4 block w-12"
              >
                <Image
                  src="/images/linkedin3.png"
                  alt="Viviana Urbaneja"
                  width={50}
                  height={50}
                  className="rounded-lg bg-white"
                />
              </Link>
            </div>
            {/*Valdi */}
            <div className="flex flex-col md:flex-col items-center md:justify-end gap-8">
              <Image
                src="/images/jorge-photo3.png"
                alt="Valdi"
                width={400}
                height={541}
              />
              <p className="text-white text-3xl text-center md:pt-8">
                Valdi is a materials engineer
                <br />
                who discovered his passion for
                <br />
                marketing.
              </p>
              <Link
                href="https://www.linkedin.com/in/valdimarketing/"
                target="_blank"
                className="mb-4 block w-12"
              >
                <Image
                  src="/images/linkedin3.png"
                  alt="Jorge Valderrama"
                  width={50}
                  height={50}
                  className="rounded-lg bg-white"
                />
              </Link>
            </div>
          </div>
          <div className="flex justify-center mt-24">
            <Link href="https://taplink.cc/vivaldimkt.com">
              <button className="bg-[#E2725B] hover:bg-[#d45c43] text-white px-8 py-4 text-xl font-semibold rounded-xl transition-colors">
                DISCOVER MORE ABOUT US
              </button>
            </Link>
          </div>
        </div>
      </section>
      {/* Testimony and Predictable Growth Section */}
      <section className="w-full">
        {/* Testimony */}
        <div className="bg-[#10002B] py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <p className="text-white text-lg md:text-xl mb-8">
              &quot;We have 50,000 photos from our two hostels but no time to
              manage social media properly. Viviana and Jorge understood exactly
              what we needed—a simple, effective strategy without the fluff.
              They create engaging content from our existing assets, handle
              everything professionally, and keep communication streamlined.
              After years of random posting, it&apos;s refreshing to have a
              structured approach that showcases what makes our hostels special
              to international travelers.&quot;
            </p>
            <div className="mb-4">
              <span className="font-bold text-white">
                Sebastian Rinsky Vinagura
              </span>
              <div className="text-white/80 text-base">
                Founder at America del Sur Hostel
              </div>
            </div>
            <div>
              <Image
                src="/images/sebastian-icon.svg"
                alt="Sebastian Rinsky Vinagura"
                width="64"
                height="64"
                className="rounded-full object-cover"
              />
            </div>
          </div>
        </div>
        {/* Predictable Growth CTA */}
        <div className="bg-[#5233B0] py-20 px-4 text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Ready to Attract More Clients?
          </h2>
          <p className="text-white/90 text-2xl max-w-7xl mx-auto mb-8">
            Let&apos;s figure out the right approach for your business.
          </p>
          <Link href="https://taplink.cc/vivaldimkt.com">
            <button className="bg-[#E2725B] hover:bg-[#d45c43] text-white px-8 py-4 text-xl font-semibold rounded-xl transition-colors">
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
