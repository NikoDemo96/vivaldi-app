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
      <section className="w-full pt-12 md:pt-16 pb-12 md:pb-16 px-4 md:px-8 lg:px-16 bg-[#faf9fb]">
        <div className="max-w-5xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#6C3FC5] mb-2 leading-tight text-left">
            Articulate Your Value
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#FF8A71] mb-6 md:mb-8 leading-tight text-left">
            So Clients Say Yes
          </h2>
          <p className="text-[#6C3FC5] text-base sm:text-lg md:text-xl mb-8 md:mb-10 text-left">
            Stop guessing how to make clients trust you and start using 
            <br />
            research-backed messaging that actually sells
            <br />
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

      {/* Exceptional work section */}
      <section className="w-full pt-4 pb-12 md:pb-20 px-4 md:px-8 lg:px-16 bg-[#faf9fb]">
        <div className="max-w-8xl flex flex-col gap-8 md:gap-16">
          {/* Row 1 */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8">
            <div className="flex-1 order-1 md:order-1">
              <h3 className="text-[#F07C5A] text-lg sm:text-xl md:text-2xl font-bold mb-3 md:mb-2">
                Most businesses skip the most important step in marketing: 
                <br />
                figuring out what to say.
              </h3>
              <p className="text-[#331E5B] text-base sm:text-lg md:text-xl mb-0 font-medium leading-relaxed">
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
                src="/images/sticky-notes.svg"
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
                src="/images/board-wall.svg"
                alt="Sticky notes wall"
                width={420}
                height={260}
                className="rounded-lg object-cover w-full max-w-sm md:max-w-md"
              />
            </div>
            <div className="flex-1 order-1 md:order-2">
              <h3 className="text-[#F07C5A] text-lg sm:text-xl md:text-2xl font-bold mb-3 md:mb-2">
                The missing piece is the right message, not more tactics.
              </h3>
              <p className="text-[#331E5B] text-base sm:text-lg md:text-xl font-medium leading-relaxed mb-2">
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
      {/* Our Process Section */}
      <section className="w-full bg-[#5233B0] px-6 md:py-16 px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 md:mb-12">
            Our Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {/* Step 1 */}
            <div className="relative bg-white rounded-xl shadow-lg p-6 md:p-8 lg:p-10 flex flex-col items-center text-center min-h-[280px] md:min-h-[320px]">
              <span
                className="absolute -left-6 -top-6 md:-left-8 md:-top-8 text-[4rem] md:text-[5rem] lg:text-[6rem] font-bold text-[#F07C5A] select-none"
                style={{ fontFamily: "Caveat, cursive" }}
              >
                1
              </span>
              <Image
                src="/images/light-bulb.svg"
                alt="Discovery Icon"
                width={70}
                height={70}
                className="mb-3 md:mb-4 md:w-[90px] md:h-[90px]"
              />
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-2">
                Discovery & Strategic Interviews
              </h3>
              <p className="text-[#18102B] text-sm md:text-base lg:text-lg">
                We talk with you twice. First, about your service: what you do,
                how you're different, how you work. Second, about your clients:
                who they are, what they care about, and why they choose one
                company over another.
              </p>
            </div>
            {/* Step 2 */}
            <div className="relative bg-white rounded-xl shadow-lg p-6 md:p-8 lg:p-10 flex flex-col items-center text-center min-h-[280px] md:min-h-[320px]">
              <span
                className="absolute -left-6 -top-6 md:-left-8 md:-top-8 text-[4rem] md:text-[5rem] lg:text-[6rem] font-bold text-[#F07C5A] select-none"
                style={{ fontFamily: "Caveat, cursive" }}
              >
                2
              </span>
              <Image
                src="/images/loupe-icon.svg"
                alt="Research Icon"
                width={70}
                height={70}
                className="mb-3 md:mb-4 md:w-[90px] md:h-[90px]"
              />
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-2">
                Market Research
              </h3>
              <p className="text-[#18102B] text-sm md:text-base lg:text-lg">
                We talk to your past clients to hear what made them choose you.
                We read what people in your industry say online about their
                problems and frustrations. And we look at your competitors to
                see what's working for them and what gaps you can fill.
              </p>
            </div>
            {/* Step 3 */}
            <div className="relative bg-white rounded-xl shadow-lg p-6 md:p-8 lg:p-10 flex flex-col items-center text-center min-h-[280px] md:min-h-[320px]">
              <span
                className="absolute -left-6 -top-6 md:-left-8 md:-top-8 text-[4rem] md:text-[5rem] lg:text-[6rem] font-bold text-[#F07C5A] select-none"
                style={{ fontFamily: "Caveat, cursive" }}
              >
                3
              </span>
              <Image
                src="/images/paper-board.svg"
                alt="Document Icon"
                width={70}
                height={70}
                className="mb-3 md:mb-4 md:w-[90px] md:h-[90px]"
              />
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-2">
                Strategic Document Creation
              </h3>
              <p className="text-[#18102B] text-sm md:text-base lg:text-lg">
                We organize everything into clear guides: what makes you
                different, what benefits to highlight, and the actual phrases
                your clients use. These become the reference for your website,
                emails, content, and sales calls.
              </p>
            </div>
            {/* Step 4 */}
            <div className="relative bg-white rounded-xl shadow-lg p-6 md:p-8 lg:p-10 flex flex-col items-center text-center min-h-[280px] md:min-h-[320px]">
              <span
                className="absolute -left-6 -top-6 md:-left-8 md:-top-8 text-[4rem] md:text-[5rem] lg:text-[6rem] font-bold text-[#F07C5A] select-none"
                style={{ fontFamily: "Caveat, cursive" }}
              >
                4
              </span>
              <Image
                src="/images/revisions-copy.svg"
                alt="Copy Icon"
                width={70}
                height={70}
                className="mb-3 md:mb-4 md:w-[90px] md:h-[90px]"
              />
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-2">
                Website Copy & Revisions
              </h3>
              <p className="text-[#18102B] text-sm md:text-base lg:text-lg">
                We write your website copy using your new messaging, then work
                with you to refine it until it sounds right. If you need help
                building or redesigning your site, we can help with that too.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonial Section Justin*/}
      <section className="bg-[#10002B] py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-left mb-6 md:mb-8">
            <p className="text-white text-base md:text-lg leading-relaxed">
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
            <p className="text-white font-semibold text-base md:text-lg mb-1">
              Justin Sarris
            </p>
            <p className="text-white/80 mb-4 text-sm md:text-base">Founder at Sarris Marketing</p>
            <Image
              src="/images/justin.svg"
              alt="Justin Sarris"
              width={70}
              height={70}
              className="rounded-full md:w-[90px] md:h-[90px]"
            />
          </div>
        </div>
      </section>
      {/* What You'll Receive Section */}
      <section className="w-full bg-[#5233B0] py-12 md:py-16 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 md:mb-6">
            What You&apos;ll Receive
          </h2>
          <div className="text-white text-lg sm:text-xl md:text-2xl text-left mb-3 md:mb-2 font-normal">
            Messaging strategy answers three critical questions:
          </div>
          <div className="text-white text-sm sm:text-base md:text-lg text-left mb-4 md:mb-6 font-semibold">
            <ul className="list-none p-0 m-0">
              <li>
                •{" "}
                <span className="font-bold">
                  Who specifically are your ideal clients?
                </span>
              </li>
              <li>
                •{" "}
                <span className="font-bold">
                  What do they care about when choosing a provider?
                </span>
              </li>
              <li>
                •{" "}
                <span className="font-bold">
                  How do you talk about your service so they choose you?
                </span>
              </li>
            </ul>
          </div>
          <div className="text-white text-sm sm:text-base md:text-lg text-left mb-6 md:mb-10 font-normal">
            We answer those through four deliverables:
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 flex flex-col items-center text-center min-h-[280px] md:min-h-[320px]">
              <Image
                src="/images/light-bulb.svg"
                alt="Blueprint Icon"
                width={70}
                height={70}
                className="mb-3 md:mb-4 md:w-[90px] md:h-[90px]"
              />
              <h3 className="text-[#18102B] text-base md:text-lg lg:text-xl font-bold mb-2">
                Messaging &amp; Positioning Guide
              </h3>
              <p className="text-[#18102B] text-sm md:text-base">
                A clear document that explains how to talk about your business:
                what makes you different, what benefits to highlight, and what
                proof to show.
              </p>
            </div>
            {/* Card 2 */}
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 flex flex-col items-center text-center min-h-[280px] md:min-h-[320px]">
              <Image
                src="/images/paper-board.svg"
                alt="Service Overview Icon"
                width={70}
                height={70}
                className="mb-3 md:mb-4 md:w-[90px] md:h-[90px]"
              />
              <h3 className="text-[#18102B] text-base md:text-lg lg:text-xl font-bold mb-2">
                Service Overview
              </h3>
              <p className="text-[#18102B] text-sm md:text-base">
                A short summary of who you help, what problems you solve, and
                how your service delivers results so your sales team can explain
                it the same way.
              </p>
            </div>
            {/* Card 3 */}
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 flex flex-col items-center text-center min-h-[280px] md:min-h-[320px]">
              <Image
                src="/images/loupe-icon.svg"
                alt="Competitor Research Icon"
                width={70}
                height={70}
                className="mb-3 md:mb-4 md:w-[90px] md:h-[90px]"
              />
              <h3 className="text-[#18102B] text-base md:text-lg lg:text-xl font-bold mb-2">
                Voice of Customer Summary
              </h3>
              <p className="text-[#18102B] text-sm md:text-base">
                Real quotes from your ideal clients. Words you can reuse in your
                copy, emails, or sales calls.
              </p>
            </div>
            {/* Card 4 */}
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 flex flex-col items-center text-center min-h-[280px] md:min-h-[320px]">
              <Image
                src="/images/revisions-copy.svg"
                alt="Website Copy Icon"
                width={70}
                height={70}
                className="mb-3 md:mb-4 md:w-[90px] md:h-[90px]"
              />
              <h3 className="text-[#18102B] text-base md:text-lg lg:text-xl font-bold mb-2">
                Website Copy
              </h3>
              <p className="text-[#18102B] text-sm md:text-base">
                We rewrite your homepage (and other pages if needed) so your
                value comes across clearly from the first line.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-16 lg:py-24 bg-[#faf9fb] text-center">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#6C3FC5] mb-6 md:mb-8">
            Once your messaging is clear, everything starts working together.
          </h2>
          <p className="text-gray-700 text-base sm:text-lg md:text-xl lg:text-2xl mb-8 md:mb-10">
            Your ads bring real inquiries. Your posts attract clients, not just likes. Your website visitors actually call you. 
             <br />
             <br />
            That's when your marketing starts doing what word of mouth has done all along: make people trust you.
          </p>
          <p className="text-[#18102B] text-lg sm:text-xl md:text-2xl font-bold mb-8 md:mb-10">
            Ready to stop competing on price and start winning on value?
          </p>
          <Link href="https://taplink.cc/vivaldimkt.com" className="inline-block">
            <button className="bg-[#E2725B] hover:bg-[#d45c43] text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-xl font-semibold rounded-xl transition-colors w-full sm:w-auto">
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
