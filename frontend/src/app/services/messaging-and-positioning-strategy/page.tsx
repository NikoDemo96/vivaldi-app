
import React from "react";
import Image from "next/image";
import NavBar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import ContactForm from "@/components/ContactForm/ContactForm";
import Link from "next/link";

export const metadata = {
  title: "Vivaldi Marketing | Messaging & Positioning Strategy",
  description:
    "Developing effective messaging and positioning strategies for translation and manufacturing businesses.",
};

const MessagingAndPositioningPage = () => {
  return (
    <div className="min-h-screen bg-[#faf9fb]">
      <NavBar />
      {/* Articulate your value section */}
      <section className="w-full pt-16 pb-16 px-16 bg-[#faf9fb]">
        <div className="max-w-5xl mx-8">
          <h1 className="text-5xl md:text-6xl font-bold text-[#6C3FC5] mb-2 leading-tight text-left">
            Articulate Your Value
          </h1>
          <h2 className="text-5xl md:text-6xl font-bold text-[#FF8A71] mb-8 leading-tight text-left">
            so Clients Say Yes
          </h2>
          <p className="text-[#6C3FC5] text-base md:text-xl mb-10 text-left">
            We help you discover exactly what your ideal clients care about and
            <br />
            give you a complete roadmap for how to talk to them so they choose 
            <br />
            you over your competitors.
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

      {/* Exceptional work section */}
      <section className="w-full bg-[#faf9fb] pt-4 pb-20 px-16">
        <div className="max-w-8xl mx-8 flex flex-col gap-16">
          {/* Row 1 */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
            <div className="flex-1 order-1 md:order-1">
              <p className="text-[#331E5B] text-lg md:text-xl mb-0 font-medium leading-relaxed">
                You know your work is exceptional. Your translations capture
                nuances that AI misses, or your operational standards deliver
                precision that sets you apart. But when prospects compare you to
                cheaper alternatives, they can't see the difference.
                <br />
                <br />
                It's not that you lack compelling advantages—it's that you
                haven't articulated them in a way that immediately resonates
                with your ideal clients.
              </p>
            </div>
            <div className="flex-1 order-2 md:order-2 flex justify-end">
              <Image
                src="/images/sticky-notes.svg"
                alt="Hand with sticky notes"
                width={420}
                height={260}
                className="rounded-lg object-cover w-full max-w-md"
              />
            </div>
          </div>
          {/* Row 2 */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
            <div className="flex-1 order-2 md:order-1 flex justify-start">
              <Image
                src="/images/board-wall.svg"
                alt="Sticky notes wall"
                width={420}
                height={260}
                className="rounded-lg object-cover w-full max-w-md"
              />
            </div>
            <div className="flex-1 order-1 md:order-2">
              <h3 className="text-[#F07C5A] text-xl md:text-2xl font-bold mb-2">
                The missing piece is the right foundation
                <br />
                not just more marketing.
              </h3>
              <p className="text-[#331E5B] text-lg md:text-xl font-medium leading-relaxed mb-2">
                Before you invest in websites, social media, or advertising, you
                need to nail down exactly what to say and how to say it. That's
                what we call messaging strategy.
                <br />
                <br />
                We start with comprehensive research to understand what your
                ideal clients care about and what makes them choose one provider
                over another. Then we craft a clear message that positions your
                expertise as the solution they've been looking for and that
                addresses their specific hesitations.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonial Section Diana*/}
      {/* <section className="bg-[#10002B] py-16">
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
      </section> */}
      {/* Our Process Section */}
      <section className="w-full bg-[#5233B0] py-16 px-2 md:px-0">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-white text-4xl md:text-5xl font-bold text-center mb-12">
            Our Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Step 1 */}
            <div className="relative bg-white rounded-xl shadow-lg p-8 md:p-10 flex flex-col items-center text-center min-h-[320px]">
              <span
                className="absolute -left-8 -top-8 text-[5rem] md:text-[6rem] font-bold text-[#F07C5A] select-none"
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
              <h3 className="text-xl md:text-2xl font-bold mb-2">
                Discovery & Strategic Interviews
              </h3>
              <p className="text-[#18102B] text-base md:text-lg">
                We conduct two in-depth workshops with you. The first focuses on
                your service: what you deliver, your differentiators, and your
                processes. The second dives deep into everything you know about
                your customers and what makes them choose one provider over
                another.
              </p>
            </div>
            {/* Step 2 */}
            <div className="relative bg-white rounded-xl shadow-lg p-8 md:p-10 flex flex-col items-center text-center min-h-[320px]">
              <span
                className="absolute -left-8 -top-8 text-[5rem] md:text-[6rem] font-bold text-[#F07C5A] select-none"
                style={{ fontFamily: "Caveat, cursive" }}
              >
                2
              </span>
              <Image
                src="/images/loupe-icon.svg"
                alt="Research Icon"
                width={90}
                height={90}
                className="mb-4"
              />
              <h3 className="text-xl md:text-2xl font-bold mb-2">
                Market Research
              </h3>
              <p className="text-[#18102B] text-base md:text-lg">
                We research your prospects through multiple methods:
                interviewing your previous customers, analyzing online
                discussions where your target market shares their experiences,
                and studying chosen competitors to identify what clients truly
                value when making decisions.
              </p>
            </div>
            {/* Step 3 */}
            <div className="relative bg-white rounded-xl shadow-lg p-8 md:p-10 flex flex-col items-center text-center min-h-[320px]">
              <span
                className="absolute -left-8 -top-8 text-[5rem] md:text-[6rem] font-bold text-[#F07C5A] select-none"
                style={{ fontFamily: "Caveat, cursive" }}
              >
                3
              </span>
              <Image
                src="/images/paper-board.svg"
                alt="Document Icon"
                width={90}
                height={90}
                className="mb-4"
              />
              <h3 className="text-xl md:text-2xl font-bold mb-2">
                Strategic Document Creation
              </h3>
              <p className="text-[#18102B] text-base md:text-lg">
                Using all this research, we create practical documents that
                become your go-to guide for every marketing decision. Instead of
                dense reports you’ll never use again, they’re designed as
                reference guides for everything from website copy to content
                creation to sales calls.
              </p>
            </div>
            {/* Step 4 */}
            <div className="relative bg-white rounded-xl shadow-lg p-8 md:p-10 flex flex-col items-center text-center min-h-[320px]">
              <span
                className="absolute -left-8 -top-8 text-[5rem] md:text-[6rem] font-bold text-[#F07C5A] select-none"
                style={{ fontFamily: "Caveat, cursive" }}
              >
                4
              </span>
              <Image
                src="/images/revisions-copy.svg"
                alt="Copy Icon"
                width={90}
                height={90}
                className="mb-4"
              />
              <h3 className="text-xl md:text-2xl font-bold mb-2">
                Website Copy & Revisions
              </h3>
              <p className="text-[#18102B] text-base md:text-lg">
                We write compelling website copy that reflects your new
                messaging strategy, then work with you through revisions until
                everything perfectly captures your value proposition. Web
                development services are also available if you need a complete
                website refresh to match your new messaging.
              </p>
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
      {/* What You'll Receive Section */}
      <section className="w-full bg-[#5233B0] py-16 px-2 md:px-0">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-white text-5xl md:text-6xl font-bold text-center mb-6">
            What You&apos;ll Receive
          </h2>
          <div className="text-white text-xl md:text-2xl text-left mb-2 font-normal">
            Messaging strategy is the foundation that answers three critical
            questions:
          </div>
          <div className="text-white text-base md:text-lg text-left mb-6 font-semibold">
            <ul className="list-none p-0 m-0">
              <li>
                • <span className="font-bold">Who are your ideal clients?</span>
              </li>
              <li>
                •{" "}
                <span className="font-bold">
                  What do they actually care about when choosing a provider?
                </span>
              </li>
              <li>
                •{" "}
                <span className="font-bold">
                  And how do you communicate your value in a way that
                  immediately resonates with them?
                </span>
              </li>
            </ul>
          </div>
          <div className="text-white text-base md:text-lg text-left mb-10 font-normal">
            We answer those questions through four key deliverables:
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center min-h-[320px]">
              <Image
                src="/images/light-bulb.svg"
                alt="Blueprint Icon"
                width={90}
                height={90}
                className="mb-4"
              />
              <h3 className="text-[#18102B] text-lg md:text-xl font-bold mb-2">
              Messaging &amp; Positioning Guide
              </h3>
              <p className="text-[#18102B] text-base">
                Includes your value proposition, unique differentiators,
                customer profiles, and the specific benefits only you can
                provide. Your reference guide for all messaging decisions.
              </p>
            </div>
            {/* Card 2 */}
            <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center min-h-[320px]">
              <Image
                src="/images/paper-board.svg"
                alt="Service Overview Icon"
                width={90}
                height={90}
                className="mb-4"
              />
              <h3 className="text-[#18102B] text-lg md:text-xl font-bold mb-2">
                Service Overview
              </h3>
              <p className="text-[#18102B] text-base">
                A comprehensive breakdown of your service that covers who you
                serve, what problems you solve, and how you deliver value.
                Ensures your entire team can is aligned on how to talk about
                your service. Especially valuable for your sales reps.
              </p>
            </div>
            {/* Card 3 */}
            <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center min-h-[320px]">
              <Image
                src="/images/loupe-icon.svg"
                alt="Competitor Research Icon"
                width={90}
                height={90}
                className="mb-4"
              />
              <h3 className="text-[#18102B] text-lg md:text-xl font-bold mb-2">
                Competitor Research Summary
              </h3>
              <p className="text-[#18102B] text-base">
                Insights into how your competitors position themselves and what
                messaging gaps you can exploit to stand out in your market.
              </p>
            </div>
            {/* Card 4 */}
            <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center min-h-[320px]">
              <Image
                src="/images/revisions-copy.svg"
                alt="Website Copy Icon"
                width={90}
                height={90}
                className="mb-4"
              />
              <h3 className="text-[#18102B] text-lg md:text-xl font-bold mb-2">
                Website Copy
              </h3>
              <p className="text-[#18102B] text-base">
                Your website is the first place prospects learn about your
                business, and where your messaging strategy comes to life. We
                write copy for your homepage and additional pages (based on
                project scope) that guide all your other marketing copy.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-24 bg-[#faf9fb] text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-5xl md:text-6xl font-bold text-[#6C3FC5] mb-6">
            Let&apos;s Make Your Expertise Shine
          </h2>
          <p className="text-gray-700 text-xl md:text-2xl mb-10">
            Tactics without the right message are like building a house without
            a foundation.  But with strategic messaging, every marketing
            effort—from your website to your sales conversations—becomes
            exponentially more effective because you're finally speaking your
            prospects' language.
          </p>
          <p className="text-[#18102B] text-xl md:text-2xl font-bold mb-10">
            Ready to stop competing on price and start winning on value?
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

export default MessagingAndPositioningPage;
