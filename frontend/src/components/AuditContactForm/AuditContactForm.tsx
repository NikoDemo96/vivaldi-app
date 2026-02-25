"use client";
import React, { useRef, useState } from "react";
import { sendEmailForm } from "@/email/emailJsConfig";

const AuditContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState<boolean | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setOk(null);

    try {
      await sendEmailForm(formRef.current);
      setOk(true);
      if (formRef.current) {
        formRef.current.reset();
      }
    } catch (err) {
      console.error("EmailJS error:", err);
      setOk(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full bg-gradient-to-br from-[#8663F4] via-[#401AB4] to-[#2C0B63] py-20 px-4 md:px-8">
      {/* Heading */}
      <div className="text-center mb-10 max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 underline decoration-[#E2725B] underline-offset-16">
          Not Ready for a Full Messaging Project?
        </h2>
        <div className="mx-auto w-64 sm:w-80 h-[3px] rounded mb-6" />
        <p className="text-white/85 text-base md:text-lg leading-relaxed">
          <span className="underline decoration-[#E2725B] underline-offset-4 cursor-pointer">Start here.</span> This
          audit gives you clear, actionable feedback without committing to a
          full strategy project. You&apos;ll walk away knowing exactly
          what&apos;s costing you clients and what to fix first —whether you
          decide to work with us further or handle it yourself.
        </p>
      </div>

      {/* Form card */}
      <div className="bg-white rounded-2xl shadow-xl max-w-md w-full mx-auto px-8 py-10">
        <h3 className="text-xl md:text-2xl font-bold text-[#10002B] text-center mb-1 leading-snug">
          Get Your
          <br />
          Messaging Audit
        </h3>
        <p className="text-gray-500 text-sm text-center mb-7">
          Fill in the form below and we&apos;ll send you
          <br />
          instructions on how to get started
        </p>

        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-[#10002B] mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="user_name"
              placeholder="Your name"
              className="w-full border border-purple-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#6947D2] text-gray-700"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#10002B] mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="user_email"
              placeholder="your.email@example.com"
              className="w-full border border-purple-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#6947D2] text-gray-700"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#10002B] mb-1">
              Website URL
            </label>
            <input
              type="url"
              name="website_url"
              placeholder="https://yourwebsite.com"
              className="w-full border border-purple-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#6947D2] text-gray-700"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#10002B] mb-1">
              Social Media Profile
            </label>
            <input
              type="url"
              name="social_profile"
              placeholder="https://linkedin.com/in/yourprofile"
              className="w-full border border-purple-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#6947D2] text-gray-700"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#10002B] mb-1">
              Tell us about your business and target clients
            </label>
            <textarea
              name="message"
              rows={4}
              placeholder="Describe your business, target clients, and what service you want to prioritize..."
              className="w-full border border-purple-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#6947D2] text-gray-700 resize-none"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#E2725B] hover:bg-[#d45c43] text-white font-semibold py-3 rounded-lg transition-colors text-base mt-1"
          >
            {loading ? "Sending..." : "Submit Your Request"}
          </button>
        </form>

        {ok === true && (
          <p className="text-green-600 text-center mt-4 text-sm">
            Message sent successfully!
          </p>
        )}
        {ok === false && (
          <p className="text-red-600 text-center mt-4 text-sm">
            Something went wrong. Try again later.
          </p>
        )}
      </div>
    </section>
  );
};

export default AuditContactForm;
