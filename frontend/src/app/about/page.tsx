

import React from "react";
import Image from "next/image";
import NavBar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Link from "next/link";

export const metadata = {
  title: "Vivaldi Marketing | About Us",
  description: "Learn more about Vivaldi Marketing and our mission.",
};

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-[#faf9fb]">
      <NavBar />
      {/* Description Section */}
      <section className="w-full pt-12 md:pt-16 pb-12 md:pb-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#6C3FC5] mb-2 leading-tight">
            A Translator And an Engineer
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#E2725B] mb-8 md:mb-10 leading-tight">
            Turned Marketers
          </h2>
          <div className="space-y-4 md:space-y-6 text-base sm:text-lg md:text-xl lg:text-2xl text-[#331E5B] mb-8 md:mb-12">
            <p>
              Ten years ago, if you&apos;d told us we&apos;d be running a
              marketing consultancy together, we would have laughed. Viviana
              majored in Modern Languages, eventually becoming a freelance
              translator. Valdi was pursuing Materials Engineering, thinking
              he&apos;d spend his career in manufacturing plants.
            </p>

            <p>
              We&apos;ve been friends for years, doing completely different
              things. Then, in one of those weird twists life throws at you, we
              both ended up switching to marketing. And not only that, but
              deciding to start a business together.
            </p>

            <p>
              We got into marketing because we experienced firsthand how
              frustrating it is to be really good at something and still
              struggle to communicate that value to potential clients.
            </p>

            <p>
              {" "}
              Here&apos;s the thing about marketing, though: there&apos;s a lot
              of noise out there. Quick fixes, magic formulas, and promises that
              sound too good to be true (because they usually are).
            </p>

            <p>
              That&apos;s why we&apos;ll never sell you unrealistic goals or
              overnight transformations. You&apos;re trusting us with your
              reputation and your budget, and we take that seriously. Every
              client matters to us—If we don&apos;t think we can help you reach
              your goals, we&apos;ll be honest about it.
            </p>

            <p>
              Marketing is complex work, and we&apos;ll always set realistic
              expectations about that while also doing everything in our power
              to get you positive results.
            </p>
            <p>
              Our philosophy is simple: Your work is genuinely valuable, and our
              job is to make sure the right people see that value.
            </p>
          </div>
        </div>
      </section>
      {/* About Viviana Section */}
      <section className="w-full bg-[#5233B0] py-12 md:py-16 lg:py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-8 md:gap-12">
          {/* Text */}
          <div className="text-white w-full order-2 lg:order-1">
            <div className="flex flex-col items-center lg:items-end mb-6 md:mb-8">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-center lg:text-right w-full lg:w-5/6">
                Viviana Urbaneja
              </h2>
              <Link
                href="https://www.linkedin.com/in/viviana-urbaneja-marketer/"
                target="_blank"
                className="block w-12"
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
            <div className="space-y-4 md:space-y-6 text-base sm:text-lg md:text-xl lg:text-2xl w-full text-center lg:text-right">
              <p>
                I spent six years as a freelance English to Spanish translator,
                experiencing the familiar feast-or-famine cycle that every
                service professional knows. I had to figure out how to build a
                freelance business without any formal business training, just
                like the majority of translators and agency owners out there.
              </p>

              <p>
                When I discovered how powerful clear messaging helped me gain
                more clients than I ever had, I fell in love with marketing. For
                the past three years, I&apos;ve worked full-time in marketing
                roles, and now I get to combine my translator background with my
                marketing expertise to help language service providers grow
                their businesses.
              </p>

              <p>
                I&apos;m Venezuelan, currently living in Argentina and pursuing
                a B.A. in Philosophy. I speak Spanish, English, French, and
                Portuguese—currently tackling the challenge of learning
                Japanese. When I&apos;m not working, you&apos;ll find me
                practicing kendo, reading, or writing stories. I&apos;m a bit of
                a language nerd and storyteller at heart, which probably
                explains why I ended up in this line of work.
              </p>
            </div>
          </div>
          {/* Image */}
          <div className="flex-shrink-0 w-full lg:w-1/2 max-w-md lg:max-w-lg bg-[#DDDDDD] flex items-start justify-start rounded-sm order-1 lg:order-2">
            <Image
              src="/images/viviana-photo.png"
              alt="Viviana Urbaneja"
              width={500}
              height={500}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </section>
      {/* About Jorge Section */}
      <section className="w-full bg-[#5233B0] py-12 md:py-16 lg:py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse items-center lg:items-start gap-8 md:gap-12">
          {/* Text */}
          <div className="w-full text-white order-2 lg:order-1">
            <div className="flex flex-col items-center lg:items-start mb-6 md:mb-8">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-center lg:text-left w-full lg:w-5/6">
                Jorge Valderrama
              </h2>
              <Link
                href="https://www.linkedin.com/in/valdimarketing/"
                target="_blank"
                className="block w-12"
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
            <div className="space-y-4 md:space-y-6 text-base sm:text-lg md:text-xl lg:text-2xl w-full text-center lg:text-left">
              <p>
                As a materials engineer, I spent years understanding the
                technical side of manufacturing—working within tight tolerances,
                engineering efficient production workflows, and enforcing
                data-driven quality control. I felt the frustration of watching
                less robust products gain market dominance simply because they
                were marketed better.
              </p>
              <p>
                After three years as a marketing specialist and manager, I
                realized I could bridge that gap between technical excellence
                and effective marketing. My background taught me the "how" of
                things, but I've always been interested in the "why" behind
                things. This blend of analytical thinking and genuine curiosity
                is what I bring to every client project.
              </p>
              <p>
                I value culture and connection deeply. I speak Spanish and
                English, studied French, and love interacting with people from
                all over the world.
              </p>
            </div>
          </div>
          {/* Image */}
          <div className="flex-shrink-0 w-full lg:w-1/2 max-w-md lg:max-w-lg bg-[#DDDDDD] flex items-center justify-center rounded-sm order-1 lg:order-2">
            <Image
              src="/images/jorge-photo3.png"
              alt="Jorge Valderrama"
              width={500}
              height={500}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </section>
      {/* Make Your Expertise Shine Section */}
      <section className="w-full py-12 md:py-16 lg:py-24 bg-[#faf9fb] text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#6C3FC5] mb-4 md:mb-6">
            Let&apos;s Make Your Expertise Shine
          </h2>
          <p className="text-gray-700 text-base sm:text-lg md:text-xl lg:text-2xl mb-8 md:mb-10">
            Work with marketers who&apos;ve been where you are and know exactly
            how to help you stand out
          </p>
          <Link href="https://taplink.cc/vivaldimkt.com" className="inline-block">
            <button className="bg-[#E2725B] hover:bg-[#d45c43] text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-xl font-semibold rounded-xl transition-colors w-full sm:w-auto">
              BOOK A DISCOVERY CALL
            </button>
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AboutPage;
