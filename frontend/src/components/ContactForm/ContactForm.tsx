"use client";
import React from 'react';


const ContactForm = () => { 
    return (
        <section className="w-full py-24 bg-[#faf9fb] flex justify-center items-center">
        <div className="bg-white shadow-md border border-gray-200 rounded-sm max-w-md w-full px-8 py-10 mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#331E5B] text-center mb-4">
            Prefer to write? Use this form
          </h2>
          <p className="text-gray-700 text-center mb-6 text-sm">
            We’d love to hear about your project or idea.
            <br />
            Fill out the form and we’ll get back to you soon.
          </p>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border border-purple-200 rounded-sm px-3 py-2 focus:outline-none focus:border-purple-400 text-sm"
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full border border-purple-200 rounded-sm px-3 py-2 focus:outline-none focus:border-purple-400 text-sm"
              required
            />
            <div className="flex items-center">
              <input
                type="text"
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
                rows={5}
                className="w-full border border-purple-200 rounded-sm px-3 py-2 focus:outline-none focus:border-purple-400 text-sm"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#6C3FC5] hover:bg-[#4b278a] text-white font-semibold py-2 rounded-sm mt-2 transition-colors"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    );
};

export default ContactForm;