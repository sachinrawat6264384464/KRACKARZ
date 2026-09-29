"use client";

import React, { useState } from "react";
import { ChevronDown, Search, HelpCircle, Sparkles } from "lucide-react";

interface FAQSectionProps {
  onOpenWaitlist: () => void;
}

export default function FAQSection({ onOpenWaitlist }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState("");

  const faqs = [
    {
      q: "Who is Krackerz for?",
      a: "Krackerz is for designers at every stage — from people just starting out to experienced designers looking to level up. Starting your design journey? Build the skills and confidence you need to get going. A new graduate or entry-level designer? Get job-ready with portfolio, interview and real-world practice. Already working in design? Upskill your soft skills, learn how to sell your work, work with stakeholders, and adapt to AI and a changing industry. You don't have to start from zero to start with Krackerz.",
    },
    {
      q: "What will I actually learn?",
      a: "You'll practise the real-world skills behind great design careers — working with stakeholders, collaborating with engineers, communicating your decisions, presenting your work, interviewing, building case studies, and selling your value.",
    },
    {
      q: "How does the learning work?",
      a: "Krackerz is built around scenario-based learning, so you won't just watch someone talk at you. You'll practise realistic situations with mock stakeholders, engineers and other designers, then get feedback to improve.",
    },
    {
      q: "Is Krackerz a course, a community, or both?",
      a: "Both. Krackerz combines practical learning, career preparation and a community of designers who can challenge, support and learn from each other.",
    },
    {
      q: "How do I get the student price?",
      a: "Students can register using their education email or provide proof of enrolment showing their name. We'll use this to verify your student status.",
    },
  ];

  const filteredFaqs = faqs.filter(
    (item) =>
      item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.a.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="faq" className="py-24 bg-[#161616] text-[#FFFFFF] border-b border-[#262626]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="px-3.5 py-1.5 rounded-full bg-[#262626] border border-[#333333] text-[#C8FF2E] text-xs font-bold uppercase tracking-wider">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mt-4 text-[#FFFFFF]">
            Got questions? <span className="text-[#C8FF2E]">We’ve got answers.</span>
          </h2>
          <p className="text-base text-[#F7F6F0]/80 mt-2">
            Everything you need to know about Krackerz sales course for designers.
          </p>
        </div>

        {/* Search Input */}
        <div className="relative max-w-xl mx-auto mb-10">
          <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-[#F7F6F0]/50" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search FAQ questions..."
            className="w-full pl-12 pr-4 py-3.5 bg-[#212121] border border-[#333333] rounded-full text-sm text-[#FFFFFF] placeholder-[#F7F6F0]/40 focus:outline-none focus:border-[#C8FF2E] transition-colors"
          />
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-[#212121] rounded-2xl border border-[#333333] overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full text-left p-6 flex items-center justify-between gap-4 font-extrabold text-base sm:text-lg text-[#FFFFFF] hover:text-[#C8FF2E] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C8FF2E]"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-[#0000EE] shrink-0" />
                    <span>{faq.q}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#C8FF2E] shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-sm sm:text-base text-[#F7F6F0]/80 leading-relaxed border-t border-[#2d2d2d] animate-in fade-in duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-12 p-8 bg-[#212121] rounded-[24px] border border-[#333333] text-center">
          <h4 className="text-xl font-extrabold text-[#FFFFFF] mb-2">Have a question not listed here?</h4>
          <p className="text-sm text-[#F7F6F0]/70 mb-6">
            Join the waitlist to receive our full curriculum guide & direct Q&A session with founders.
          </p>
          <button
            onClick={onOpenWaitlist}
            className="px-8 py-3.5 bg-[#C8FF2E] text-[#161616] font-extrabold text-sm rounded-full shadow-glow-lime hover:bg-[#b2e622] transition-all"
          >
            JOIN WAITLIST & RECEIVE CURRICULUM
          </button>
        </div>
      </div>
    </section>
  );
}
