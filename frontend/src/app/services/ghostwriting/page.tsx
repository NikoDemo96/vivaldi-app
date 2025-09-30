"use client";

import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Image from "next/image";
import ContactForm from "@/components/ContactForm/ContactForm";

const GhostwritingPage = () => {
  return (
    <div className="min-h-screen bg-[#faf9fb]">
      <Navbar />
      {/* Main Description */}
      <section className="w-full pt-16 pb-16 px-16 bg-[#faf9fb]">
        <div className="max-w-5xl mx-8">
          <h1 className="text-5xl md:text-6xl font-bold text-[#6947D2] mb-2 leading-tight text-left">
            Establish Thought Leadership
          </h1>
          <h2 className="text-5xl md:text-6xl font-bold text-[#FF8A71] mb-8 leading-tight text-left">
            Without Writing a Single Post
          </h2>
          <p className="text-[#6C3FC5] text-base md:text-lg mb-10 text-left">
            LinkedIn ghostwriting for translation agencies and manufacturers who
            need to build their professional reputation
            <br />
            but don&apos;t have time to create content that resonates with their
            industry
          </p>
          <div className="flex flex-col md:flex-row gap-4 items-start w-full mb-8">
            <button className="bg-[#1A133A] hover:bg-[#331E5B] text-white font-semibold px-8 py-3 rounded-md text-base transition-colors text-left w-full md:w-auto">
              Contact us by email
            </button>
            <button className="border-2 border-[#FF8A71] text-[#FF8A71] font-semibold px-8 py-3 rounded-md text-base transition-colors hover:bg-[#FF8A71] hover:text-white bg-transparent text-left w-full md:w-auto">
              Book a discovery call
            </button>
          </div>
        </div>
      </section>

      {/* Ghostwriting and Laptop */}
      <section className="relative w-full h-[340px] md:h-[400px] flex items-center justify-center">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/ghost-background.png"
            alt="LinkedIn content on laptop"
            width={1920}
            height={400}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 w-full flex items-center justify-center">
          <p className="text-white text-xl md:text-2xl font-semibold text-center max-w-3xl px-4">
            You know LinkedIn content builds credibility and attracts clients.
            But most ghostwriters create generic posts that get engagement
            without generating qualified leads, and writing industry-specific
            content yourself eats up hours you should be spending on client
            work.
          </p>
        </div>
      </section>
      {/* Our LinkedIn Philosophy */}
      <section className="w-full bg-transparent pt-16 pb-16 px-16">
        <div className="w-full grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-8 px-4 md:px-8 items-start">
          <div className="flex flex-col items-start justify-start">
            <h2
              className="text-[2.7rem] md:text-[3.2rem] font-extrabold leading-tight mb-8"
              style={{ lineHeight: 1.05 }}
            >
              <span className="text-[#6947D2]">Our LinkedIn</span>{" "}
              <span className="text-[#F07C5A]">Philosophy</span>
            </h2>
            <div className="text-[#18102B] text-base md:text-lg mb-10 space-y-5 max-w-xl">
              <p>
                LinkedIn has become crowded, which means generic advice and
                formulaic posts get lost in the noise. The platform rewards
                content that gets your specific audience actually talking and
                engaging.
              </p>
              <p>
                That's why we don't write for your industry colleagues or chase
                vanity metrics. We write for your prospective clients, using
                your unique perspective and stories to build trust in ways that
                make them think “This person understands my challenges”.
              </p>
              <p>
                Every post serves a purpose: building the trust that makes you
                the obvious choice when your ideal clients are ready to hire.
              </p>
            </div>

            <button
              className="mt-2 px-8 py-3 bg-[#18102B] text-white font-semibold rounded-lg shadow-md hover:bg-[#2a1e4d] transition-colors text-base md:text-lg"
              style={{ minWidth: "200px" }}
            >
              Book a discovery call
            </button>
          </div>
          <div className="flex items-center justify-center w-full h-full">
            <Image
              src="/images/linkedin-philosophy-scribble2.svg"
              alt="LinkedIn Philosophy Scribble"
              width={1800}
              height={900}
              className="w-full h-auto max-w-none"
              priority
            />
          </div>
        </div>
      </section>

      {/* --- How We Work Section --- */}
      <section className="w-full bg-[#5233B0] py-16 px-2 md:px-0">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-white text-4xl md:text-5xl font-bold text-center mb-12">
            How We Work
          </h2>
          <div className="flex flex-col gap-8">
            {/* Step 1 */}
            <div className="relative bg-white rounded-xl shadow-lg p-8 md:p-10 min-h-[140px] flex flex-col justify-center">
              <span
                className="absolute -left-8 -top-8 text-[5rem] md:text-[6rem] font-bold text-[#F07C5A] select-none"
                style={{ fontFamily: "Caveat, cursive" }}
              >
                1
              </span>
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                Discovery & Strategy Foundation
              </h3>
              <p className="text-[#18102B] text-base md:text-lg">
                If you've completed our messaging strategy service, we jump
                straight to content planning. For standalone projects, we start
                with discovery interviews about your service and customers, plus
                interviews about your business at help us understand your unique
                perspective plus customer research so we can write content that
                is both persuasive and authentic to what you do.
              </p>
            </div>
            {/* Step 2 */}
            <div className="relative bg-white rounded-xl shadow-lg p-8 md:p-10 min-h-[140px] flex flex-col justify-center">
              <span
                className="absolute -left-8 -top-8 text-[5rem] md:text-[6rem] font-bold text-[#F07C5A] select-none"
                style={{ fontFamily: "Caveat, cursive" }}
              >
                2
              </span>
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                Content Strategy Development
              </h3>
              <p className="text-[#18102B] text-base md:text-lg">
                Before writing a single post, we build your LinkedIn strategy.
                What topics position you as an expert? Which tone resonates with
                your prospects? Who should you connect with and how? We map out
                your content themes, networking approach, and storytelling
                framework.
              </p>
            </div>
            {/* Step 3 */}
            <div className="relative bg-white rounded-xl shadow-lg p-8 md:p-10 min-h-[140px] flex flex-col justify-center">
              <span
                className="absolute -left-8 -top-8 text-[5rem] md:text-[6rem] font-bold text-[#F07C5A] select-none"
                style={{ fontFamily: "Caveat, cursive" }}
              >
                3
              </span>
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                Content Creation & Refinement
              </h3>
              <p className="text-[#18102B] text-base md:text-lg">
                We write 14 LinkedIn posts monthly that reflect your expertise
                and voice. After your revisions and approval, you have a month's
                worth of effective content ready to publish on your schedule.
              </p>
            </div>
            {/* Step 4 */}
            <div className="relative bg-white rounded-xl shadow-lg p-8 md:p-10 min-h-[140px] flex flex-col justify-center">
              <span
                className="absolute -left-8 -top-8 text-[5rem] md:text-[6rem] font-bold text-[#F07C5A] select-none"
                style={{ fontFamily: "Caveat, cursive" }}
              >
                4
              </span>
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                Monthly Consulting Calls
              </h3>
              <p className="text-[#18102B] text-base md:text-lg">
                Great content is only half the equation—you also need continuing
                networking to drive real results. During our monthly calls, we
                discuss your networking questions, review which content is
                performing best, and adjust your strategy based on what's
                working.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* --- Make Your Expertise Shine Section --- */}
      <section className="w-full py-24 bg-[#faf9fb] text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-5xl md:text-6xl font-bold text-[#6C3FC5] mb-6">
            Let&apos;s Make Your Expertise Shine
          </h2>
          <p className="text-gray-700 text-lg mb-10">
            Industry knowledge without visibility is like being the best kept
            secret in your field: incredibly valuable, but invisible to the
            people who need your help.
          </p>
          <p className="text-[#18102B] text-lg md:text-xl font-bold">
            Let’s turn your industry insights into posts that generate leads.
          </p>
        </div>
        <ContactForm />
      </section>
      <Footer />
    </div>
  );
};

export default GhostwritingPage;
