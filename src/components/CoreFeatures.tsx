"use client";

import React, { useState } from "react";
import {
  Users,
  Briefcase,
  Globe2,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Target,
  FileCheck,
  Presentation,
  Award
} from "lucide-react";

interface CoreFeaturesProps {
  onOpenWaitlist: () => void;
  onOpenSimulator: () => void;
}

export default function CoreFeatures({ onOpenWaitlist, onOpenSimulator }: CoreFeaturesProps) {
  const [activeCategory, setActiveCategory] = useState<"scenario" | "prep" | "community">("scenario");

  const categories = [
    {
      id: "scenario",
      title: "Scenario Based Learning",
      subtitle: "Practice real-life sales & stakeholder situations before they happen.",
      icon: Target,
      tag: "CORE PILLAR 01",
      items: [
        {
          name: "Mock Stakeholders",
          desc: "Practice presenting to skeptical PMs, VPs, and non-design business leaders who care strictly about timelines and revenue.",
          badge: "Interactive Practice",
        },
        {
          name: "Mock Engineers",
          desc: "Learn developer terminology, trade-off negotiations, and design handoff sessions without friction.",
          badge: "Technical Alignment",
        },
        {
          name: "Convincing with Design",
          desc: "Frame design decisions around business ROI, conversion metrics, user retention, and strategic impact.",
          badge: "High Impact Pitch",
        },
      ],
    },
    {
      id: "prep",
      title: "Win Work Prep",
      subtitle: "Position your portfolio & interview skills to stand out from 1,000+ applicants.",
      icon: Briefcase,
      tag: "CORE PILLAR 02",
      items: [
        {
          name: "Portfolio Review",
          desc: "Turn passive Figma screenshots into irresistible sales pitch decks that demonstrate strategic problem solving.",
          badge: "Portfolio Audit",
        },
        {
          name: "Interview Practice",
          desc: "Master live whiteboard challenges, salary negotiations, and tough behavioral questions with confidence.",
          badge: "Live Mocking",
        },
        {
          name: "Case Studies Prep",
          desc: "Format your case study storytelling structure so recruiters read every word and book interviews faster.",
          badge: "Storytelling",
        },
      ],
    },
    {
      id: "community",
      title: "Community & Benchmarking",
      subtitle: "Learn alongside peers, get feedback, and compete in exclusive pitch hackathons.",
      icon: Globe2,
      tag: "CORE PILLAR 03",
      items: [
        {
          name: "Benchmark Against Designers",
          desc: "See how your presentation style, portfolio strength, and salary benchmark against global peers.",
          badge: "Global Analytics",
        },
        {
          name: "Peer Feedback Circles",
          desc: "Get constructive critique on your pitch deck, elevator pitch, and cold emails from seasoned mentors.",
          badge: "Weekly Reviews",
        },
        {
          name: "Exclusive Pitch Hackathons",
          desc: "Participate in real-time design pitch competitions with cash prizes and hiring manager judges.",
          badge: "Monthly Events",
        },
      ],
    },
  ];

  const currentCategory = categories.find((c) => c.id === activeCategory)!;

  return (
    <section id="core-features" className="py-24 bg-[#161616] text-[#FFFFFF] border-b border-[#262626]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-3.5 py-1.5 rounded-full bg-[#262626] border border-[#333333] text-[#C8FF2E] text-xs font-bold uppercase tracking-wider">
            CORE FEATURES
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mt-4 text-[#FFFFFF]">
            Everything you need to <span className="text-[#C8FF2E]">sell your design work</span>
          </h2>
          <p className="text-base sm:text-lg text-[#F7F6F0]/80 mt-4">
            Built from scratch for UI/UX, product, and brand designers looking to transition from task-doers to strategic leaders.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`flex items-center gap-3 px-6 py-3.5 rounded-[62px] text-sm font-bold transition-all focus-visible:outline-none ${
                  isActive
                    ? "bg-[#C8FF2E] text-[#161616] shadow-glow-lime scale-105"
                    : "bg-[#262626] text-[#F7F6F0]/80 hover:text-[#FFFFFF] border border-[#333333] hover:border-[#C8FF2E]/50"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-[#161616]" : "text-[#C8FF2E]"}`} />
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Tab Content Grid */}
        <div className="bg-[#212121] rounded-[24px] border border-[#333333] p-8 md:p-12 shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 mb-10 border-b border-[#333333]">
            <div>
              <span className="text-xs font-bold text-[#0000EE] uppercase tracking-wider bg-[#0000EE]/20 px-3 py-1 rounded-full border border-[#0000EE]/40">
                {currentCategory.tag}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#FFFFFF] mt-3">
                {currentCategory.title}
              </h3>
              <p className="text-base text-[#F7F6F0]/80 mt-1">
                {currentCategory.subtitle}
              </p>
            </div>

            {/* Feature Quick CTA */}
            <div className="flex items-center gap-3">
              <button
                onClick={onOpenSimulator}
                className="px-5 py-2.5 bg-[#0000EE] text-[#FFFFFF] font-bold text-sm rounded-full hover:bg-[#0000cc] transition-all flex items-center gap-2 shadow-glow-blue"
              >
                <Presentation className="w-4 h-4 text-[#C8FF2E]" />
                <span>Try Live Simulator</span>
              </button>
            </div>
          </div>

          {/* Cards List */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {currentCategory.items.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#161616] p-6 rounded-2xl border border-[#333333] hover:border-[#C8FF2E] transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2.5 py-1 bg-[#262626] text-[#C8FF2E] text-[11px] font-bold rounded-md uppercase">
                      {item.badge}
                    </span>
                    <span className="w-7 h-7 rounded-full bg-[#262626] text-[#F7F6F0] flex items-center justify-center text-xs font-extrabold group-hover:bg-[#C8FF2E] group-hover:text-[#161616] transition-colors">
                      0{idx + 1}
                    </span>
                  </div>

                  <h4 className="text-xl font-bold text-[#FFFFFF] mb-2 group-hover:text-[#C8FF2E] transition-colors">
                    {item.name}
                  </h4>
                  <p className="text-sm text-[#F7F6F0]/75 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#262626] flex items-center justify-between">
                  <span className="text-xs text-[#F7F6F0]/60 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C8FF2E]" /> Included in course
                  </span>
                  <button
                    onClick={onOpenWaitlist}
                    className="text-xs font-bold text-[#C8FF2E] flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                  >
                    <span>Join</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Section Footer Callout */}
          <div className="mt-12 p-6 bg-[#262626] rounded-xl border border-[#333333] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Award className="w-8 h-8 text-[#C8FF2E]" />
              <div>
                <h5 className="font-bold text-base text-[#FFFFFF]">Ready to level up your sales pitch?</h5>
                <p className="text-xs text-[#F7F6F0]/70">Join 2,500+ UX & Product designers in the priority waitlist.</p>
              </div>
            </div>
            <button
              onClick={onOpenWaitlist}
              className="px-6 py-3 bg-[#C8FF2E] text-[#161616] font-extrabold text-sm rounded-full hover:bg-[#b2e622] transition-all shadow-glow-lime whitespace-nowrap"
            >
              JOIN WAITLIST NOW
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
