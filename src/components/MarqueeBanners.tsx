"use client";

import React from "react";
import { Zap, ShieldAlert, ArrowRight } from "lucide-react";

interface MarqueeProps {
  onOpenWaitlist: () => void;
}

export default function MarqueeBanners({ onOpenWaitlist }: MarqueeProps) {
  return (
    <section className="bg-[#161616] text-[#FFFFFF] py-16 overflow-hidden border-b border-[#262626]">
      {/* Infinite Top Banner Marquee */}
      <div className="bg-[#C8FF2E] py-4 text-[#161616] overflow-hidden rotate-[-1deg] scale-105 shadow-xl">
        <div className="flex animate-marquee-left whitespace-nowrap gap-8 font-black text-2xl sm:text-3xl tracking-tighter uppercase">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center gap-6">
              <span>BEYOND DESIGN SCHOOL</span>
              <span className="w-3 h-3 rounded-full bg-[#161616]" />
              <span>THE INDUSTRY DOESN’T WAIT</span>
              <span className="w-3 h-3 rounded-full bg-[#0000EE]" />
              <span>SELL YOUR WORK, DON'T JUST MAKE IT</span>
              <span className="w-3 h-3 rounded-full bg-[#161616]" />
            </div>
          ))}
        </div>
      </div>

      {/* Content Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div className="bg-[#F7F6F0] text-[#161616] p-8 sm:p-10 rounded-[24px] shadow-lg flex flex-col justify-between hover:scale-[1.01] transition-all border border-[#e0dfd5]">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#161616] text-[#C8FF2E] rounded-full text-xs font-bold uppercase mb-6">
                <Zap className="w-3.5 h-3.5 fill-[#C8FF2E]" />
                GAP 01
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 text-[#161616]">
                BEYOND DESIGN SCHOOL
              </h2>
              <p className="text-base sm:text-lg text-[#161616]/80 font-medium leading-relaxed mb-8">
                Designers' soft skills aren’t taught in school. The exact skills that get you hired, promoted, and help you win client work—like handling tough feedback, negotiating scope, and quantifying design value.
              </p>
            </div>

            <button
              onClick={onOpenWaitlist}
              className="inline-flex items-center gap-2 font-bold text-sm text-[#0000EE] hover:underline"
            >
              <span>Learn how Krackerz bridges this gap</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Card 2 */}
          <div className="bg-[#0000EE] text-[#FFFFFF] p-8 sm:p-10 rounded-[24px] shadow-lg flex flex-col justify-between hover:scale-[1.01] transition-all border border-[#0000cc]">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#C8FF2E] text-[#161616] rounded-full text-xs font-bold uppercase mb-6">
                <ShieldAlert className="w-3.5 h-3.5" />
                GAP 02
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 text-[#FFFFFF]">
                THE INDUSTRY DOESN’T WAIT
              </h2>
              <p className="text-base sm:text-lg text-[#F7F6F0]/90 font-medium leading-relaxed mb-8">
                Industries are moving faster than any college curriculum. Designers are pressured to change their process, adapt AI tools, and prove ROI instantly to stay relevant in a competitive market.
              </p>
            </div>

            <button
              onClick={onOpenWaitlist}
              className="inline-flex items-center gap-2 font-bold text-sm text-[#C8FF2E] hover:underline"
            >
              <span>Join waitlist for early curriculum access</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
