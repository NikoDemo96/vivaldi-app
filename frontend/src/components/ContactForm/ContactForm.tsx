"use client";
import React, { useRef, useState } from "react";
import { sendEmailForm } from "@/email/emailJsConfig"; 

const ContactForm = () => {
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
    <section className="w-full py-24 flex justify-center items-center">
      <div className="bg-white shadow-md border border-gray-200 rounded-sm max-w-md w-full px-8 py-10 mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-[#331E5B] text-center mb-4">
          Prefer to write? Use this form
        </h2>
        <p className="text-gray-700 text-center mb-6 text-sm">
          We’d love to hear about your project or idea.
          <br />
          Fill out the form and we’ll get back to you soon.
        </p>

        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="user_name"
            placeholder="Full Name"
            className="w-full border border-purple-200 rounded-sm px-3 py-2 focus:outline-none focus:border-purple-400 text-sm"
            required
          />
          <input
            type="email"
            name="user_email" 
            placeholder="Email Address"
            className="w-full border border-purple-200 rounded-sm px-3 py-2 focus:outline-none focus:border-purple-400 text-sm"
            required
          />
          <div className="flex items-center">
            <input
              type="text"
              name="company" 
              placeholder="Company Name"
              className="w-full border border-purple-200 rounded-sm px-3 py-2 focus:outline-none focus:border-purple-400 text-sm"
            />
            <span className="text-xs text-gray-400 ml-2">Optional</span>
          </div>
          <div>
            <label
              htmlFor="project"
              className="block text-xs text-gray-600 mb-1"
            >
              Tell us about your project!
            </label>
            <textarea
              id="project"
              name="message" 
              rows={5}
              className="w-full border border-purple-200 rounded-sm px-3 py-2 focus:outline-none focus:border-purple-400 text-sm"
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#6C3FC5] hover:bg-[#4b278a] text-white font-semibold py-2 rounded-sm mt-2 transition-colors"
          >
            {loading ? "Sending..." : "Submit"}
          </button>
        </form>

        {ok === true && (
          <p className="text-green-600 text-center mt-4">
             Message sent successfully!
          </p>
        )}
        {ok === false && (
          <p className="text-red-600 text-center mt-4">
             Something went wrong. Try again later.
          </p>
        )}
      </div>
    </section>
  );
};

export default ContactForm;
