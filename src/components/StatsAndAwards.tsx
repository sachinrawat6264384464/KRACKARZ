"use client";

import React from "react";
import { Award, Trophy, Star, CheckCircle2, ShieldCheck } from "lucide-react";

export default function StatsAndAwards() {
  const stats = [
    { value: "10+", label: "Years UX/UI Design Experience" },
    { value: "150+", label: "Products & Websites Launched" },
    { value: "50+", label: "Clients Worldwide" },
    { value: "2,500+", label: "Designers Mentored" },
  ];

  const awards = [
    {
      title: "Good Design Award",
      sub: "Digital Design Interface of the Year",
      year: "2024",
      icon: Trophy,
      badge: "PLATINUM",
    },
    {
      title: "Good Design Award",
      sub: "Digital Design Interface - Gold Winner",
      year: "2024",
      icon: Award,
      badge: "GOLD WINNER",
    },
    {
      title: "CSS Design Award",
      sub: "Best UI Design, UX Design & Innovation",
      year: "2023",
      icon: Star,
      badge: "INNOVATION",
    },
    {
      title: "AWWWARDS",
      sub: "Honourable Mention",
      year: "2023",
      icon: ShieldCheck,
      badge: "HONORABLE",
    },
  ];

  const companies = [
    "Meta", "Google", "Airbnb", "Stripe", "Figma", "Spotify", "Vercel", "Linear"
  ];

  return (
    <section className="py-24 bg-[#161616] text-[#FFFFFF] border-b border-[#262626]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Experience Stats Grid */}
        <div className="mb-20 text-center">
          <span className="px-3.5 py-1.5 rounded-full bg-[#0000EE]/20 border border-[#0000EE]/40 text-[#0000EE] text-xs font-bold uppercase tracking-wider">
            PROVEN TRACK RECORD
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mt-4 text-[#FFFFFF]">
            Now tell us about yourself
          </h2>
          <p className="text-base text-[#F7F6F0]/80 mt-2 max-w-xl mx-auto">
            Curriculum created by industry veterans with over a decade of hands-on agency and in-house experience.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {stats.map((s, idx) => (
              <div
                key={idx}
                className="bg-[#212121] p-6 sm:p-8 rounded-[24px] border border-[#333333] hover:border-[#C8FF2E] transition-all group"
              >
                <div className="text-4xl sm:text-6xl font-black text-[#C8FF2E] tracking-tighter group-hover:scale-105 transition-transform">
                  {s.value}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-[#F7F6F0]/80 mt-3 leading-snug">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Awards Showcase Grid */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-[#C8FF2E] uppercase tracking-wider">RECOGNITION</span>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-[#FFFFFF] mt-2">
              Industry Awards & Mentorship Distinction
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {awards.map((award, i) => {
              const Icon = award.icon;
              return (
                <div
                  key={i}
                  className="bg-[#1f1f1f] p-6 rounded-2xl border border-[#333333] flex flex-col justify-between hover:scale-[1.02] transition-all group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-full bg-[#0000EE]/30 text-[#C8FF2E] flex items-center justify-center border border-[#0000EE]/50">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="px-2.5 py-0.5 bg-[#C8FF2E] text-[#161616] text-[10px] font-extrabold rounded-full">
                        {award.year}
                      </span>
                    </div>

                    <h4 className="font-extrabold text-lg text-[#FFFFFF] mb-1 group-hover:text-[#C8FF2E] transition-colors">
                      {award.title}
                    </h4>
                    <p className="text-xs text-[#F7F6F0]/70 leading-relaxed mb-4">
                      {award.sub}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#333333] flex items-center justify-between text-[11px] font-bold text-[#0000EE]">
                    <span>{award.badge}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C8FF2E]" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Experience From Ticker */}
        <div className="bg-[#212121] p-8 rounded-[24px] border border-[#333333] text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-[#F7F6F0]/60">
            EXPERIENCE INFLUENCED BY LEADERS FROM:
          </span>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 mt-6 opacity-70">
            {companies.map((comp) => (
              <span
                key={comp}
                className="text-lg sm:text-2xl font-black text-[#F7F6F0] tracking-tight hover:opacity-100 hover:text-[#C8FF2E] transition-all cursor-default"
              >
                {comp}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
