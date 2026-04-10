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
  
      <section className="bg-white rounded-2xl shadow-xl max-w-md w-full mx-auto px-8 py-10">
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
      </section>
  
  );
};

export default AuditContactForm;
