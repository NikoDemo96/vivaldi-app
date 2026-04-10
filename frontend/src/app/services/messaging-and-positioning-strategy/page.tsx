import React from "react";
import Image from "next/image";
import NavBar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import ContactForm from "@/components/ContactForm/ContactForm";
import Link from "next/link";
import ProcessAccordion from "@/components/ProcessAccordion/ProcessAccordion";
import AuditContactForm from "@/components/AuditContactForm/AuditContactForm";

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
      <section
        className="w-full py-20 md:py-28 px-4 md:px-8 lg:px-16"
        style={{
          background:
            "radial-gradient(ellipse 60% 80% at 80% 50%, #3D1E8C 0%, transparent 70%), radial-gradient(ellipse 50% 60% at 10% 90%, #5C1A2E 0%, transparent 65%), #0D0020",
        }}
      >
        <div className="max-w-2xl mx-auto flex flex-col items-center text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 border border-white/25 rounded-full px-4 py-1.5 text-white/80 text-sm mb-8">
            Messaging &amp; Positioning
            <span className="text-[#FF8A71] text-base leading-none">✦</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-5 leading-tight">
            Articulate Your Value
            <br />
            So Clients Say Yes
          </h1>

          <p className="text-white/65 text-base sm:text-lg mb-10 max-w-lg">
            Stop guessing how to make clients trust you and start using
            research-backed messaging that actually sells
          </p>

          <Link href="https://taplink.cc/vivaldimkt.com">
            <button className="bg-[#4A2E9E] hover:bg-[#5C3FBD] text-white font-semibold px-8 py-3 rounded-md text-sm tracking-widest uppercase transition-colors">
              BOOK A DISCOVERY CALL
            </button>
          </Link>
        </div>
      </section>
      {/* Section divider */}
      <div
        className="h-[41px] w-full border-t-2 border-b-2 border-[#E2725B]"
        style={{
          background:
            "linear-gradient(to right, #2D0A1E 0%, #5C1A2E 30%, #E8724A 50%, #5C1A2E 70%, #2D0A1E 100%)",
        }}
      />
      {/* Exceptional work section */}
      <section className="w-full pt-4 pb-12 md:pb-20 px-4 md:px-8 lg:px-16 bg-[#faf9fb] mt-10 mb-10">
        <div className="max-w-8xl flex flex-col gap-8 md:gap-16">
          {/* Row 1 */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8">
            <div className="flex-1 order-1 md:order-1">
              <h3 className="text-[#E2725B] text-lg sm:text-xl md:text-3xl font-bold mb-3 md:mb-2">
                Most businesses skip the most important step in marketing:
                <br />
                figuring out what to say.
              </h3>
              <p className="text-[#331E5B] text-base sm:text-lg md:text-xl mb-0 font-medium leading-relaxed mt-8">
                You&apos;ve probably tried ads, invested in your website, or
                posted on LinkedIn hoping to attract clients. But instead of
                steady inquiries, you got frustration… and went back to relying
                on word of mouth.
                <br />
                <br />
                Here&apos;s the problem: most translation agencies and
                manufacturers websites talk about quality, precision, or
                expertise. But so does everyone else. And when your prospects
                can&apos;t tell the difference between you and cheaper
                competitors, they default to comparing on price.
              </p>
            </div>
            <div className="flex-1 order-2 md:order-2 flex justify-center md:justify-end">
              <Image
                src="/images/guy-laptop2.png"
                alt="Hand with sticky notes"
                width={420}
                height={260}
                className="rounded-lg object-cover w-full max-w-sm md:max-w-md"
              />
            </div>
          </div>
          {/* Row 2 */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8">
            <div className="flex-1 order-2 md:order-1 flex justify-center md:justify-start">
              <Image
                src="/images/guys-board.png"
                alt="Sticky notes wall"
                width={420}
                height={260}
                className="rounded-lg object-cover w-full max-w-sm md:max-w-md"
              />
            </div>
            <div className="flex-1 order-1 md:order-2">
              <h3 className="text-[#E2725B] text-lg sm:text-xl md:text-3xl font-bold mb-3 md:mb-2">
                The missing piece is the right message, not more tactics.
              </h3>
              <p className="text-[#331E5B] text-base sm:text-lg md:text-xl font-medium leading-relaxed mb-2 mt-8">
                Before you spend another dollar on marketing tactics, you need
                to know exactly what to say and how to say it. That's messaging
                strategy.
                <br />
                <br />
                We figure out how clients in your specialization make buying
                decisions: what they care about, what makes them trust one
                provider over another, and what hesitations keep them from
                saying yes. Then we give you the exact words to use everywhere:
                your website, your emails, your sales calls. Once your message
                is clear, everything else starts working.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="h-[8px] w-full bg-gradient-to-r from-[#6947D2] to-[#E2725B]" />
      {/* Testimonial Section Diana*/}
      <section className="bg-[#521980] py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          {/* Quote mark */}
          <div className="text-white text-5xl font-serif leading-none mb-6 select-none">
            &ldquo;&rdquo;
          </div>

          {/* Quote text */}
          <p className="text-white text-base sm:text-lg md:text-xl leading-relaxed mb-10">
            &quot;Viviana has outstanding work ethics and a deep understanding
            of the translation industry. She coordinated the development of our
            new site seamlessly, with clarity and precision. Her marketing
            recommendations are helping us define a new strategy moving forward.
            She listens carefully, offers thoughtful insights, and genuinely
            invests in her clients&apos; success. It&apos;s been a pleasure
            collaborating with her, and I look forward to continuing our
            partnership. Highly recommended!&quot;
          </p>

          {/* Author */}
          <div className="flex items-center justify-center gap-3">
            <Image
              src="/images/diana.svg"
              alt="Diana Pompa Morris"
              width={48}
              height={48}
              className="rounded-full flex-shrink-0 ring-2 ring-[#E2725B]"
            />
            <div className="text-left">
              <p className="text-white font-semibold text-base">
                Diana Pompa Morris
              </p>
              <p className="text-[#E2725B] text-sm">
                Founder at Dictum Translation Solutions
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="h-[8px] w-full bg-gradient-to-r from-[#6947D2] to-[#E2725B]" />
      {/* Our Process Section */}
      <ProcessAccordion />
      <div className="h-[8px] w-full bg-gradient-to-r from-[#6947D2] to-[#E2725B]" />
      {/* Testimonial Section Justin*/}
      <section className="bg-[#521980] py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          {/* Quote mark */}
          <div className="text-white text-5xl font-serif leading-none mb-6 select-none">
            &ldquo;&rdquo;
          </div>

          {/* Quote text */}
          <p className="text-white text-base sm:text-lg md:text-xl leading-relaxed mb-10">
            &quot;I had the pleasure of working with Viviana as a Strategic
            Messaging Specialist at Sarris Marketing. Her ability to analyze a
            business&apos;s digital presence and identify what makes them
            unique, then turn those findings into clear, actionable insights,
            consistently impressed me. What sets Viviana apart is not just her
            strategic skillset, but how she communicates her ideas — always
            thoughtful, well-reasoned, and focused on delivering value.&quot;
          </p>

          {/* Author */}
          <div className="flex items-center justify-center gap-3">
            <Image
              src="/images/justin.svg"
              alt="Justin Sarris"
              width={48}
              height={48}
              className="rounded-full flex-shrink-0 ring-2 ring-[#E2725B]"
            />
            <div className="text-left">
              <p className="text-white font-semibold text-base">
                Justin Sarris
              </p>
              <p className="text-[#E2725B] text-sm">
                Founder at Sarris Marketing
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="h-[8px] w-full bg-gradient-to-r from-[#6947D2] to-[#E2725B]" />
      {/* What You'll Receive Section */}
      <section className="w-full py-16 md:py-24 px-4 md:px-6 lg:px-8 bg-[#EDE8FF]">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <h2 className="text-[#18102B] text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10 md:mb-14">
            What You&apos;ll Receive
          </h2>

          {/* Three Imperatives card */}
          <div className="bg-white rounded-2xl shadow-sm px-6 md:px-10 py-8 mb-10 md:mb-12">
            {/* Pill */}
            <div className="flex justify-center mb-6">
              <span className="border border-[#E2725B] text-[#E2725B] text-sm font-semibold px-5 py-1.5 rounded-full">
                The Three Imperatives
              </span>
            </div>
            {/* Three columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                "Who specifically are your ideal clients?",
                "What do they care about when choosing a provider?",
                "How do you talk about your service so they choose you?",
              ].map((q) => (
                <div key={q} className="flex items-start gap-3">
                  {/* Checkmark */}
                  <span className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full bg-[#E2725B] flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  <p className="text-[#18102B] text-sm md:text-base font-medium leading-snug">
                    {q}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Four deliverable cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl shadow-sm p-8 flex flex-col items-start">
              <div className="w-10 h-10 rounded-lg bg-[#5233B0] flex items-center justify-center mb-4">
                <Image
                  src="/images/menu_book.png"
                  alt="Blueprint Icon"
                  width={22}
                  height={22}
                />
              </div>
              <h3 className="text-[#18102B] text-base font-bold mb-2">
                Messaging &amp; Positioning Guide
              </h3>
              <p className="text-[#4B4B6A] text-sm leading-relaxed">
                A clear document that explains how to talk about your business:
                what makes you different, what benefits to highlight, and the
                proof to show.
              </p>
            </div>
            {/* Card 2 */}
            <div className="bg-white rounded-2xl shadow-sm p-8 flex flex-col items-start">
              <div className="w-10 h-10 rounded-lg bg-[#5233B0] flex items-center justify-center mb-4">
                <Image
                  src="/images/view_list.png"
                  alt="Service Overview Icon"
                  width={22}
                  height={22}
                />
              </div>
              <h3 className="text-[#18102B] text-base font-bold mb-2">
                Service Overview
              </h3>
              <p className="text-[#4B4B6A] text-sm leading-relaxed">
                A short summary of who you help, what problems you solve, and
                how your service delivers results so your sales team can explain
                it the same way.
              </p>
            </div>
            {/* Card 3 */}
            <div className="bg-white rounded-2xl shadow-sm p-8 flex flex-col items-start">
              <div className="w-10 h-10 rounded-lg bg-[#5233B0] flex items-center justify-center mb-4">
                <Image
                  src="/images/record_voice_over.png"
                  alt="Voice of Customer Icon"
                  width={22}
                  height={22}
                />
              </div>
              <h3 className="text-[#18102B] text-base font-bold mb-2">
                Voice of Customer Summary
              </h3>
              <p className="text-[#4B4B6A] text-sm leading-relaxed">
                Real quotes from your ideal clients. Words you can reuse in your
                copy, emails, or sales calls.
              </p>
            </div>
            {/* Card 4 */}
            <div className="bg-white rounded-2xl shadow-sm p-8 flex flex-col items-start">
              <div className="w-10 h-10 rounded-lg bg-[#5233B0] flex items-center justify-center mb-4">
                <Image
                  src="/images/web_copy.png"
                  alt="Website Copy Icon"
                  width={22}
                  height={22}
                />
              </div>
              <h3 className="text-[#18102B] text-base font-bold mb-2">
                Website Copy
              </h3>
              <p className="text-[#4B4B6A] text-sm leading-relaxed">
                We rewrite your homepage (and other pages if needed) so your
                value comes across clearly from the first line.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="h-[8px] w-full bg-gradient-to-r from-[#6947D2] to-[#E2725B]" />
      {/* Start winning on value */}
      <section
        className="w-full py-16 md:py-24 px-4 md:px-8 lg:px-16"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, #7143FF 0%, #1E0757 45%, #0D0020 100%)",
        }}
      >
        {/* Hero copy — centered, above the form */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <p className="text-white/60 text-sm md:text-base mb-4">
            Once your messaging is clear, your ads bring real inquiries
            <br />
            and website visitors actually call you.
          </p>
          <h2 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold mb-8 leading-tight">
            Start winning on Value
          </h2>
          <Link href="https://taplink.cc/vivaldimkt.com">
            <button className="bg-[#4A2E9E] hover:bg-[#5C3FBD] text-white font-semibold px-8 py-3 rounded-full text-sm tracking-widest uppercase transition-colors">
              BOOK A DISCOVERY CALL
            </button>
          </Link>
        </div>
        {/* Contact form */}
      </section>

      <div className="h-[8px] w-full bg-gradient-to-r from-[#6947D2] to-[#E2725B]" />

      {/* ── Contact Form ─────────────────────────────────────────────── */}
      <section className="w-full bg-gradient-to-br from-[#8663F4] via-[#401AB4] to-[#2C0B63] py-20 px-4 md:px-8">
        {/* Heading */}
        <div className="text-center mb-10 max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 underline decoration-[#E2725B] underline-offset-16">
            Let’s Make Your Expertise Shine
          </h2>
          <div className="mx-auto w-64 sm:w-80 h-[3px] rounded mb-6" />
          <p className="text-white/85 text-base md:text-lg leading-relaxed">
            Tactics without the right message are like building a house without
            a foundation.  But with strategic messaging, every marketing
            effort—from your website to your sales conversations—becomes
            exponentially more effective because you're finally speaking your
            prospects' language.
          </p>
          <h4 className="text-white/85 text-base md:text-lg leading-relaxed font-bold mt-10">
            Ready to stop competing on price and start winning on value?
          </h4>
        </div>
        <div id="audit-contact-form" className="mt-16">
          <AuditContactForm />
        </div>
      </section>
      <div className="h-[8px] w-full bg-gradient-to-r from-[#6947D2] to-[#E2725B]" />
      <Footer />
    </div>
  );
};

export default MessagingAndPositioningPage;
