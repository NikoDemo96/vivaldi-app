import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Image from "next/image";
import ContactForm from "@/components/ContactForm/ContactForm";
import Link from "next/link";

export const metadata = {
  title: "Vivaldi Marketing | Social Media Ghostwriting | LinkedIn | Instagram",
  description:
    "Professional ghostwriting services for LinkedIn and Instagram to elevate your business presence.",
};

const GhostwritingPage = () => {
  return (
    <div className="min-h-screen bg-[#faf9fb]">
      <Navbar />
      {/* Main Description */}
      <section className="w-full pt-12 md:pt-16 pb-12 md:pb-16 px-4 md:px-8 lg:px-16 bg-[#faf9fb]">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#6947D2] mb-2 leading-tight text-left">
            Attract Clients on LinkedIn
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#FF8A71] mb-6 md:mb-8 leading-tight text-left">
            Without Writing a Single Post
          </h2>
          <p className="text-[#6C3FC5] text-base sm:text-lg md:text-xl mb-8 md:mb-10 text-left">
            LinkedIn ghostwriting for business owners who need client-generating
            content but don't have time to figure out what works.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-start w-full mb-8">
            <Link href="#contact-form" className="w-full sm:w-auto">
              <button className="w-full bg-[#1A133A] hover:bg-[#331E5B] text-white font-semibold px-6 md:px-8 py-3 rounded-md text-base transition-colors">
                CONTACT US BY EMAIL
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

      {/* Ghostwriting and Laptop */}
      <section className="relative w-full min-h-[300px] md:h-[340px] lg:h-[400px] flex items-center justify-center">
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
        <div className="relative z-10 w-full flex items-center justify-center py-8 md:py-0">
          <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-center max-w-3xl px-4 md:px-6">
            You know you should be on LinkedIn consistently. But between client
            work and running your business, sitting down to write posts feels
            impossible. And if those posts only get likes without bringing
            actual client calls, what's the point?
          </p>
        </div>
      </section>
      {/* Our LinkedIn Philosophy */}
      <section className="w-full bg-transparent pt-12 md:pt-16 pb-12 md:pb-16 px-4 md:px-8 lg:px-16">
        <div className="w-full grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8 md:gap-12 items-start max-w-7xl mx-auto">
          <div className="flex flex-col items-start justify-start">
            <h2
              className="text-[2rem] sm:text-[2.5rem] md:text-[2.7rem] lg:text-[3.2rem] font-extrabold leading-tight mb-6 md:mb-8"
              style={{ lineHeight: 1.05 }}
            >
              <span className="text-[#6947D2]">Our LinkedIn</span>{" "}
              <span className="text-[#F07C5A]">Philosophy</span>
            </h2>
            <div className="text-[#18102B] text-base sm:text-lg md:text-xl mb-8 md:mb-10 space-y-4 md:space-y-5 max-w-xl">
              <p>
                LinkedIn isn't just about posting industry tips. It's about
                showing you understand your clients' challenges while letting
                them see the person behind the business. That means sharing real
                stories, being relatable, and choosing which wins to showcase
                strategically.
              </p>
              <p>
                We write posts that make your potential clients stop scrolling
                and think 'this person gets it' because generic corporate
                content that racks up likes from people who'll never hire you
                isn’t efficient and, to be honest, it makes us sleepy.
              </p>
              <p>
                The goal is simple: build enough trust that when they need help,
                you're the first person they call.
              </p>
            </div>

            <Link href="https://taplink.cc/vivaldimkt.com" className="w-full sm:w-auto">
              <button
                className="w-full sm:w-auto mt-2 px-6 md:px-8 py-3 bg-[#18102B] text-white font-semibold rounded-lg shadow-md hover:bg-[#2a1e4d] transition-colors text-base md:text-lg"
                style={{ minWidth: "200px" }}
              >
                Book a discovery call
              </button>
            </Link>
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
      <section className="w-full bg-[#5233B0] py-12 md:py-16 px-4 md:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8 md:mb-12">
            How We Work
          </h2>
          <div className="flex flex-col gap-6 md:gap-8">
            {/* Step 1 */}
            <div className="relative bg-white rounded-xl shadow-lg p-6 md:p-8 lg:p-10 min-h-[120px] md:min-h-[140px] flex flex-col justify-center">
              <span
                className="absolute -left-6 -top-6 md:-left-8 md:-top-8 text-[4rem] md:text-[5rem] lg:text-[6rem] font-bold text-[#F07C5A] select-none"
                style={{ fontFamily: "Caveat, cursive" }}
              >
                1
              </span>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">Discovery</h3>
              <p className="text-[#18102B] text-sm sm:text-base md:text-lg">
                We start with interviews to understand your service, your
                customers, and your unique perspective. This helps us write
                content that sounds like you and actually persuades people.
              </p>
            </div>
            {/* Step 2 */}
            <div className="relative bg-white rounded-xl shadow-lg p-6 md:p-8 lg:p-10 min-h-[120px] md:min-h-[140px] flex flex-col justify-center">
              <span
                className="absolute -left-6 -top-6 md:-left-8 md:-top-8 text-[4rem] md:text-[5rem] lg:text-[6rem] font-bold text-[#F07C5A] select-none"
                style={{ fontFamily: "Caveat, cursive" }}
              >
                2
              </span>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">Strategy</h3>
              <p className="text-[#18102B] text-sm sm:text-base md:text-lg">
                Before we write anything, we figure out your LinkedIn approach:
                what topics make sense for you, what tone works with your
                clients, and who you should be connecting with. We map out your
                content plan and how to network without it feeling forced.
              </p>
            </div>
            {/* Step 3 */}
            <div className="relative bg-white rounded-xl shadow-lg p-6 md:p-8 lg:p-10 min-h-[120px] md:min-h-[140px] flex flex-col justify-center">
              <span
                className="absolute -left-6 -top-6 md:-left-8 md:-top-8 text-[4rem] md:text-[5rem] lg:text-[6rem] font-bold text-[#F07C5A] select-none"
                style={{ fontFamily: "Caveat, cursive" }}
              >
                3
              </span>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">
                Writing & Approval
              </h3>
              <p className="text-[#18102B] text-sm sm:text-base md:text-lg">
                We write 14 LinkedIn posts each month in your voice. You review
                and approve them, then you've got a month of content ready to
                post whenever you want.
              </p>
            </div>
            {/* Step 4 */}
            <div className="relative bg-white rounded-xl shadow-lg p-6 md:p-8 lg:p-10 min-h-[120px] md:min-h-[140px] flex flex-col justify-center">
              <span
                className="absolute -left-6 -top-6 md:-left-8 md:-top-8 text-[4rem] md:text-[5rem] lg:text-[6rem] font-bold text-[#F07C5A] select-none"
                style={{ fontFamily: "Caveat, cursive" }}
              >
                4
              </span>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">
                Ongoing Support
              </h3>
              <p className="text-[#18102B] text-sm sm:text-base md:text-lg">
                Good content needs good networking to actually bring clients.
                Depending on what works best for you, we either jump on monthly
                calls to discuss your networking questions and what's working,
                or we handle the networking side for you directly.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* --- Make Your Expertise Shine Section --- */}
      <section className="w-full py-12 md:py-16 lg:py-24 bg-[#faf9fb] text-center">
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#6C3FC5] mb-4 md:mb-6">
            Ready to Attract More Clients?
          </h2>
          <p className="text-gray-700 text-base sm:text-lg md:text-xl lg:text-2xl mb-8 md:mb-10">
            Let's get you showing up consistently on LinkedIn with posts that actually bring clients.
          </p>
        </div>
        <div id="contact-form">
          <ContactForm />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default GhostwritingPage;
