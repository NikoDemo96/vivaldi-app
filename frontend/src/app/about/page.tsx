"use client";

import React from "react";
import Image from "next/image";
import NavBar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-[#faf9fb]">
      <NavBar />
      {/* Description Section */}
      <section className="w-full pt-16 pb-16 px-16">
        <div className="max-w-8xl mx-8">
          <h1 className="text-5xl md:text-6xl font-bold text-[#6C3FC5] mb-2 leading-tight">
            A Translator And an Engineer
          </h1>
          <h2 className="text-5xl md:text-6xl font-bold text-[#E2725B] mb-10 leading-tight">
            Turned Marketers
          </h2>
          <div className="space-y-6 text-lg text-[#331E5B] mb-12">
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
      <section className="w-full bg-[#5233B0] py-20 px-16">
        <div className="max-w-8xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-12">
          {/* Text */}
          <div className="flex-1 text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Viviana Urbaneja
            </h2>
            <div className="space-y-6 text-lg">
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
          <div className="flex-shrink-0 w-full max-w-md bg-[#DDDDDD] flex items-center justify-center rounded-sm">
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
      <section className="w-full bg-[#5233B0] py-20 px-16">
        <div className="max-w-8xl mx-auto flex flex-col lg:flex-row-reverse items-center lg:items-start gap-12">
          {/* Text */}
          <div className="flex-1 text-white text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Jorge Valderrama
            </h2>
            <div className="space-y-6 text-lg">
              <p>
                As a materials engineer, I spent years understanding the
                technical side of manufacturing—working within tight tolerances,
                engineering efficient production workflows, and enforcing
                data-driven quality control. Once I entered marketing during my
                years of study, I already felt the frustration of watching less
                robust products gain market dominance simply because they were
                marketed better.
              </p>
              <p>
                After three years as a marketing specialist and manager, I
                realized I could bridge that gap between technical excellence
                and effective marketing. My background taught me the "how" of
                things, but I&apos;ve always been interested in the "why" behind
                things. This blend of analytical thinking and genuine curiosity
                is what I bring to every client project.
              </p>
              <p>
                I value culture and connection deeply. I speak Spanish and
                English, studied French, and love interacting with people from
                all over the world.
              </p>
              <p>
                Outside of work, I&apos;m a dog lover, a loyal friend, and
                I&apos;m also good at making memes, not gonna lie (I&apos;m the
                meme engine in the agency). Video games and animation have been
                constant hobbies since childhood, and I find that creativity
                often sparks the best marketing ideas.
              </p>
            </div>
          </div>
          {/* Image */}
          <div className="flex-shrink-0 w-full max-w-md bg-[#DDDDDD] flex items-center justify-center rounded-sm">
            <Image
              src="/images/jorge-photo2.svg"
              alt="Jorge Valderrama"
              width={500}
              height={500}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </section>
      {/* Make Your Expertise Shine Section */}
      <section className="w-full py-24 bg-[#faf9fb] text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-5xl md:text-6xl font-bold text-[#6C3FC5] mb-6">
            Let&apos;s Make Your Expertise Shine
          </h2>
          <p className="text-gray-700 text-lg mb-10">
            Work with marketers who&apos;ve been where you are and know exactly
            how to help you stand out
          </p>
          <button className="bg-[#FF8A71] hover:bg-[#e2725b] text-white font-semibold px-8 py-3 rounded-md text-base transition-colors">
            Book a discovery call
          </button>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AboutPage;
