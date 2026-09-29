"use client";

import React, { useState } from "react";
import { Star, Quote, MapPin, CheckCircle } from "lucide-react";

interface TestimonialsProps {
  onOpenWaitlist: () => void;
}

export default function Testimonials({ onOpenWaitlist }: TestimonialsProps) {
  const [filter, setFilter] = useState<string>("all");

  const testimonials = [
    {
      id: "1",
      quote: "I feel like I can't stand out, that there are many talented people applying for the same positions and I can't leverage my strengths.",
      author: "PAULINA M.",
      role: "Job seeking",
      location: "Poland",
      category: "jobseeking",
      avatarBg: "bg-[#0000EE]",
    },
    {
      id: "2",
      quote: "There’s hardly any structured guidance towards selling yourself as a designer. Krackerz is the missing playbook.",
      author: "SRAYAN G.",
      role: "In-house designer",
      location: "Bangalore",
      category: "inhouse",
      avatarBg: "bg-[#C8FF2E] text-[#161616]",
    },
    {
      id: "3",
      quote: "I do the work but don’t know how to show its value to non-design managers. The scenario practice changed my entire presentation strategy.",
      author: "FARZANEH S.",
      role: "Job Seeking",
      location: "Netherlands",
      category: "jobseeking",
      avatarBg: "bg-[#161616]",
    },
    {
      id: "4",
      quote: "I’ve been job hunting for over a year and really struggled with interview stages due to confidence. Scenario learning gives me the exact script.",
      author: "KIMBERLY L.",
      role: "Job seeking",
      location: "London",
      category: "jobseeking",
      avatarBg: "bg-[#0000EE]",
    },
  ];

  const filtered = filter === "all" ? testimonials : testimonials.filter((t) => t.category === filter);

  return (
    <section className="py-24 bg-[#161616] text-[#FFFFFF] border-b border-[#262626]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-3.5 py-1.5 rounded-full bg-[#262626] border border-[#333333] text-[#C8FF2E] text-xs font-bold uppercase tracking-wider">
            DESIGNER VOICES
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mt-4 text-[#FFFFFF]">
            Why designers are joining <span className="text-[#C8FF2E]">Krackerz</span>
          </h2>
          <p className="text-base sm:text-lg text-[#F7F6F0]/80 mt-3">
            Real challenges faced by UX, product, and brand designers across the world.
          </p>
        </div>

        {/* Filters */}
        <div className="flex items-center justify-center gap-2 mb-12">
          {[
            { id: "all", label: "All Designers" },
            { id: "jobseeking", label: "Job Seekers" },
            { id: "inhouse", label: "In-House & Freelance" },
          ].map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
                filter === f.id
                  ? "bg-[#C8FF2E] text-[#161616] shadow-glow-lime scale-105"
                  : "bg-[#262626] text-[#F7F6F0]/70 hover:text-[#FFFFFF] border border-[#333333]"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="bg-[#F7F6F0] text-[#161616] p-8 sm:p-10 rounded-[24px] shadow-xl flex flex-col justify-between hover:scale-[1.01] transition-all relative border border-[#e3e2d8]"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1 text-[#0000EE]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-[#0000EE]/20" />
                </div>

                <p className="text-lg sm:text-xl font-semibold text-[#161616] leading-relaxed mb-8 italic">
                  "{item.quote}"
                </p>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-[#161616]/10">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-11 h-11 rounded-full flex items-center justify-center font-black text-sm ${item.avatarBg}`}
                  >
                    {item.author[0]}
                  </div>
                  <div>
                    <h4 className="font-extrabold text-sm text-[#161616] flex items-center gap-1.5">
                      <span>{item.author}</span>
                      <CheckCircle className="w-4 h-4 text-[#0000EE]" />
                    </h4>
                    <p className="text-xs text-[#161616]/70 flex items-center gap-1">
                      <span>{item.role}</span>
                      <span>•</span>
                      <span className="flex items-center gap-0.5">
                        <MapPin className="w-3 h-3 text-[#0000EE]" />
                        {item.location}
                      </span>
                    </p>
                  </div>
                </div>

                <span className="px-3 py-1 bg-[#161616] text-[#C8FF2E] text-[10px] font-bold rounded-full uppercase">
                  VERIFIED DESIGNER
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button
            onClick={onOpenWaitlist}
            className="px-8 py-4 bg-[#C8FF2E] text-[#161616] font-extrabold text-base rounded-[62px] shadow-glow-lime hover:bg-[#b2e622] hover:scale-105 transition-all"
          >
            JOIN THE WAITLIST & ELEVATE YOUR CAREER
          </button>
        </div>
      </div>
    </section>
  );
}
