import React from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import NavBar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import ContactForm from "../ContactForm/ContactForm";

const Hero = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <NavBar />

      {/* Hero Section */}
      <section className="relative h-[895px] flex items-center justify-center">
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
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <div className="flex flex-col items-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-2 leading-tight">
              Work with Marketers <br className="hidden md:block" />
              <span>Who Speak Your Language</span>
            </h1>
            <div className="w-[340px] md:w-[765px] mx-auto">
              <Image
                src="/images/Horizontal-Straight-line.svg"
                alt="Underline"
                width={765}
                height={8}
                className="w-full h-auto"
              />
            </div>
          </div>

          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed mt-4">
            Marketing strategy for translation agencies
          </p>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            and manufacturing companies by people who&apos;ve worked in your
            industries.
          </p>

          <button className="bg-[#E2725B] hover:bg-[#d45c43] text-white px-8 py-3 text-lg font-semibold rounded-md transition-colors">
            BOOK A DISCOVERY CALL
          </button>
        </div>
      </section>

      {/* Client Logos and Expertise section */}
      <section className="relative">
        {/* No background image */}
        {/* Client Logos Section */}
        <div className="py-12 bg-transparent relative z-10">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center justify-center space-x-12 md:space-x-16">
              <Image
                src="/images/america-sur-logo.svg"
                alt="America del Sur"
                width={235}
                height={87}
              />
              <Image
                src="/images/wushutao-logo.svg"
                alt="Wu Shu Tao"
                width={87}
                height={87}
              />
              <Image
                src="/images/dictum-logo.svg"
                alt="Dictum Translation Solutions"
                width={235}
                height={80}
              />
              <Image
                src="/images/sarris-logo.svg"
                alt="Sarris Marketing"
                width={235}
                height={62}
              />
            </div>
          </div>
        </div>

        {/* Expertise Section */}
        <div className="py-16 bg-transparent relative z-10">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl md:text-6xl font-bold text-[#6947D2] text-center mb-16 leading-tight">
              Your Expertise Deserves the Spotlight
            </h2>

            <div className="flex flex-col lg:flex-row lg:justify-between items-center gap-12">
              <div className="lg:w-1/2 space-y-6">
                <p className="text-[#1204AA] text-lg leading-relaxed">
                  You&apos;ve built expertise that truly matters, whether
                  it&apos;s bridging language barriers or manufacturing
                  precision components that power industries. But in
                  today&apos;s market, excellent work alone won&apos;t guarantee
                  consistent client bookings.
                </p>

                <p className="text-[#1204AA] text-lg leading-relaxed">
                  One month you&apos;re thriving with more work than you can
                  handle. The next, you&apos;re stressing about where the next
                  client will come from.
                </p>

                <p className="text-lg leading-relaxed">
                  <span className="text-[#E2725B] font-semibold">
                    That&apos;s why we started Vivaldi Marketing.
                  </span>{" "}
                  <span className="text-[#1204AA]">
                    We&apos;re marketers who&apos;ve actually worked in your
                    industries. We&apos;ve had to justify why human translation
                    beats AI, and we&apos;ve watched subpar manufacturers win
                    contracts simply because they were more visible.
                  </span>
                </p>

                <h3 className="text-2xl md:text-3xl font-bold text-[#6947D2] pt-4">
                  Your expertise matters—and we&apos;re here to make it shine
                </h3>
              </div>

              <div className="lg:w-1/2">
                <Image
                  src="/images/planing.png"
                  alt="Professional working on documents at desk"
                  width={372}
                  height={512}
                  className="ml-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section Diana*/}
      <section className="bg-[#10002B] py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="text-left mb-8">
            <p className="text-white text-lg leading-relaxed">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
              lorem metus. Phasellus consequat, massa vel sagittis dignissim,
              urna lectus pretium libero, finibus hendrerit tellus orci id sem.
              Nullam id volutpat justo, ut rutrum tortor. Phasellus egestas
              dictum ante ut venenatis. Praesent vulputate ullamcorper
              consequat. Integer condimentum, nisl in pretium suscipit, nibh
              felis suscipit augue, nec pretium elit nisl non dui. Ut imperdiet
              erat eget magna hendrerit rhoncus. Fusce aliquet leo eros, sit
              amet euismod ligula tempor eget. Nunc tincidunt ex nec diam
              aliquet viverra."
            </p>
          </div>

          <div className="text-left">
            <p className="text-white font-semibold text-lg mb-1">
              Diana Pompa Morris
            </p>
            <p className="text-white/80 mb-4">
              Founder at Dictum Translation Solutions
            </p>
            <Image
              src="/images/diana.svg"
              alt="Diana Pompa Morris"
              width={90}
              height={90}
              className="rounded-full"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-[#5233B0] py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              How We Can Help You Grow
            </h2>
            <p className="text-white/90 text-lg max-w-3xl mx-auto leading-relaxed">
              Most consultants jump straight into tactics without understanding
              your customers first. We start with comprehensive customer
              research to discover what your prospects care about, and then
              build a tailored strategy so you spend your budget on the right
              channels for your business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Messaging Strategy Card */}
            <div className="bg-white rounded-lg p-6 text-center flex flex-col justify-between h-full">
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
                We build a message that articulates your value in a way that
                immediately positions you as the right choice, making everything
                else you do—from your website to your sales calls—more
                effective.
              </p>
              <button className="bg-[#10002B] hover:bg-[#2a1e4d] text-white px-6 py-2 text-sm font-semibold rounded transition-colors">
                LEARN MORE
              </button>
            </div>

            {/* Social Media Ghostwriting Card */}
            <div className="bg-white rounded-lg p-6 text-center flex flex-col justify-between h-full">
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
                Strategic LinkedIn content that establishes you as the go-to
                expert for complex projects. We write tailored posts that
                showcase your knowledge, feel authentic, and attract your target
                clients.
              </p>
              <button className="bg-[#10002B] hover:bg-[#2a1e4d] text-white px-6 py-2 text-sm font-semibold rounded transition-colors">
                LEARN MORE
              </button>
            </div>

            {/* SEO & Content Writing Card */}
            <div className="bg-white rounded-lg p-6 text-center flex flex-col justify-between h-full">
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
                Show up when your ideal clients are searching for solutions. We
                create content that demonstrates your expertise and ranks on
                Google, bringing qualified prospects to you instead of you
                chasing after them.
              </p>
              <button className="bg-[#10002B] hover:bg-[#2a1e4d] text-white px-6 py-2 text-sm font-semibold rounded transition-colors w-full">
                LEARN MORE
              </button>
            </div>

            {/* Google Ads Card */}
            <div className="bg-white rounded-lg p-6 text-center flex flex-col justify-between h-full">
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
                Reach decision-makers who are ready to invest in quality. Our
                targeted ads put your expertise in front of the right people at
                the right time, generating leads from prospects who are ready to
                work with specialists.
              </p>
              <button className="bg-[#10002B] hover:bg-[#2a1e4d] text-white px-6 py-2 text-sm font-semibold rounded transition-colors w-full">
                LEARN MORE
              </button>
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
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#6947D2] mb-6">
              How We Work
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Discovery Card */}
            <div className="bg-white rounded-lg p-8 text-center relative flex flex-col justify-between h-full">
              <div className="absolute -top-4 left-8">
                <span className="text-6xl font-bold text-orange-500">1</span>
              </div>
              <div className="mt-8 mb-6 flex justify-center">
                <div className="flex items-center justify-center">
                  <Image
                    src="/images/loupe-icon.svg"
                    alt="Discovery Icon"
                    width={80}
                    height={80}
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#6947D2] mb-4">
                DISCOVERY
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We&apos;ll talk through what&apos;s happening in your business
                right now: what&apos;s working, what isn&apos;t, and what your
                goals are. Then we&apos;ll tell you exactly what we think would
                help and what it would cost.
              </p>
            </div>

            {/* Strategy Card */}
            <div className="bg-white rounded-lg p-8 text-center relative flex flex-col justify-between h-full">
              <div className="absolute -top-4 left-8">
                <span className="text-6xl font-bold text-orange-500">2</span>
              </div>
              <div className="mt-8 mb-6 flex justify-center">
                <div className="flex items-center justify-center">
                  <Image
                    src="/images/strategy-icon.svg"
                    alt="Strategy Icon"
                    width={80}
                    height={80}
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#6947D2] mb-4">
                STRATEGY
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We research your customers and competitors to figure out what
                messages will resonate. No generic advice, we dig into your
                specific industry and situation to create a plan that makes
                sense for your business.
              </p>
            </div>

            {/* Execution Card */}
            <div className="bg-white rounded-lg p-8 text-center relative flex flex-col justify-between h-full">
              <div className="absolute -top-4 left-8">
                <span className="text-6xl font-bold text-orange-500">3</span>
              </div>
              <div className="mt-8 mb-6 flex justify-center">
                <div className="flex items-center justify-center">
                  <Image
                    src="/images/execution-icon.svg"
                    alt="Execution Icon"
                    width={80}
                    height={80}
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#6947D2] mb-4">
                EXECUTION
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Time to get down to work. We write your content, run your ads,
                or build your SEO presence. For ongoing work, we&apos;ll have a
                monthly consultation call to review what&apos;s working and what
                needs adjusting.
              </p>
            </div>
          </div>

          <div className="text-center">
            <button className="bg-[#E2725B] hover:bg-[#d45c43] text-white px-6 py-2 text-sm font-semibold rounded transition-colors">
              BOOK A DISCOVERY CALL
            </button>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="relative py-24 bg-[#5233B0]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            Who We Are
          </h2>
          <div className="flex flex-row justify-between gap-16">
            {/* Top row: Viviana */}
            <div className="flex flex-col md:flex-col items-center md:justify-start gap-8">
              <Image
                src="/images/viviana-photo2.svg"
                alt="Viviana"
                width={455}
                height={381}
                className="rounded-md"
              />
              <p className="text-white text-lg text-center md:pt-8">
                Viviana spent six years as a
                <br />
                freelance translator before
                <br />
                switching to marketing.
              </p>
            </div>
            {/* Bottom row: Valdi */}
            <div className="flex flex-col md:flex-col items-center md:justify-end gap-8">
              <Image
                src="/images/jorge-photo2.svg"
                alt="Valdi"
                width={455}
                height={381}
                className="rounded-md"
              />
              <p className="text-white text-lg text-center md:pt-8">
                Valdi is a materials engineer
                <br />
                who discovered his passion for
                <br />
                marketing.
              </p>
            </div>
          </div>
          <div className="flex justify-center mt-16">
            <button className="bg-[#E2725B] hover:bg-[#d45c43] text-white px-6 py-2 text-sm font-semibold rounded transition-colors">
              Discover more about us
            </button>
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
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to Build Predictable Growth?
          </h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
            Work with marketers who&apos;ve been where you are and know exactly
            how to help you stand out.
          </p>
          <button className="bg-[#E2725B] hover:bg-[#d45c43] text-white px-6 py-2 text-sm font-semibold rounded transition-colors">
            BOOK A DISCOVERY CALL
          </button>
        </div>
      </section>
      {/* Contact Form Section */}
      <ContactForm />
      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Hero;
