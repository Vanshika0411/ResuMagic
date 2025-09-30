"use client";
import { useState } from "react";

type FormType = 'faq' | 'support' | 'feedback' | null;

export const Footer = () => {
  const [activeForm, setActiveForm] = useState<FormType>(null);

  const toggleForm = (formName: Exclude<FormType, null>) => {
    setActiveForm((prev) => (prev === formName ? null : formName));
  };

 

  return (
    <footer className="bg-transparent text-black py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        {/* Contact Section */}
        <div>
          <h3 className="text-xl font-bold mb-3">Contact</h3>
          <ul className="space-y-1 text-black">
            <li><strong>Company:</strong> VS Solution's</li>
            <li><strong>Phone:</strong> +91-987654321</li>
            <li><strong>Location:</strong> MEERUT, UP, INDIA</li>
            <li><strong>Hours:</strong> Mon - Fri, 10am - 8pm</li>
          </ul>
        </div>

        {/* Email Section */}
        <div>
          <h3 className="text-xl font-bold mb-3">Email</h3>
          <ul className="space-y-1 text-black">
            <li>
              <strong>General:</strong>{" "}
              <a href="mailto:info@example.com" className="text-blue-600 hover:underline">
                info@resumagic.com
              </a>
            </li>
            <li>
              <strong>Support:</strong>{" "}
              <a href="mailto:support@example.com" className="text-blue-600 hover:underline">
                support@resumagic.com
              </a>
            </li>
          </ul>
        </div>

        {/* Help Section */}
        <div>
          <h3 className="text-xl font-bold mb-3">Help</h3>
          <ul className="space-y-1 text-black">
            <li>
              <button
                onClick={() => toggleForm("faq")}
                className="hover:underline text-blue-600 font-semibold focus:outline-none"
              >
                FAQs
              </button>
            </li>
            <li>
              <button
                onClick={() => toggleForm("support")}
                className="hover:underline text-blue-600 font-semibold focus:outline-none"
              >
                Support Center
              </button>
            </li>
            <li>
              <button
                onClick={() => toggleForm("feedback")}
                className="hover:underline text-blue-600 font-semibold focus:outline-none"
              >
                Feedback Form
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Conditional Forms */}
      {activeForm && (
        <div className="max-w-3xl mx-auto mt-10 text-center transition-opacity duration-500 ease-in-out opacity-100">
          {activeForm === "faq" && (
            <>
              <h3 className="text-xl font-bold mb-4">Frequently Asked Questions</h3>
              <form className="space-y-4 px-4">
                <input
                  type="text"
                  placeholder="Your Question"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
                />
                <textarea
                  placeholder="Additional Details (optional)"
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
                ></textarea>
                <button
                  type="submit"
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Submit Question
                </button>
              </form>
            </>
          )}

          {activeForm === "support" && (
            <>
              <h3 className="text-xl font-bold mb-4">Support Center</h3>
              <form className="space-y-4 px-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
                />
                <textarea
                  placeholder="Describe your issue"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
                ></textarea>
                <button
                  type="submit"
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Submit Ticket
                </button>
              </form>
            </>
          )}

          {activeForm === "feedback" && (
            <>
              <h3 className="text-xl font-bold mb-4">We value your feedback</h3>
              <form className="space-y-4 px-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
                />
                <textarea
                  placeholder="Your Feedback"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
                ></textarea>
                <button
                  type="submit"
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Submit Feedback
                </button>
              </form>
            </>
          )}
        </div>
      )}

      <div className="text-center text-sm text-gray-600 mt-8">
        © {new Date().getFullYear()} RESUMAGIC. All rights reserved.
      </div>
    </footer>
  );
};
