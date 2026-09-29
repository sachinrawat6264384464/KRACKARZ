"use client";

import React from "react";
import { Sparkles } from "lucide-react";

interface HeroProps {
  onOpenWaitlist: () => void;
  onScrollToStore: () => void;
}

export default function Hero({ onOpenWaitlist, onScrollToStore }: HeroProps) {
  const cards = [
    {
      id: "1",
      image: "/images/hero_designer.png",
      caption: "Getting ready for my next interview",
      theme: "cream",
      rotation: "rotate-[-5deg]",
    },
    {
      id: "2",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80",
      caption: "Uplifting my design portfolio",
      theme: "burgundy",
      rotation: "rotate-[-2deg]",
    },
    {
      id: "3",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
      caption: "Cold outreaching without cringing",
      theme: "cream",
      rotation: "rotate-[0deg]",
    },
    {
      id: "4",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80",
      caption: "Connecting with other designers",
      theme: "burgundy",
      rotation: "rotate-[2deg]",
    },
    {
      id: "5",
      image: "/images/hoodie_tote.png",
      caption: "Selling my work, not just making it",
      theme: "cream",
      rotation: "rotate-[-1deg]",
    },
    {
      id: "6",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
      caption: "Defining my personal brand",
      theme: "burgundy",
      rotation: "rotate-[4deg]",
    },
  ];

  return (
    <section className="relative pt-24 pb-12 md:pt-28 md:pb-16 bg-[#F7F6F0] text-[#161616] overflow-hidden border-b border-[#e5e4dc]">
      {/* Dynamic Multi-lobed Organic Cloud Background with Pronounced Waves & Dips */}
      <div className="absolute top-0 left-0 right-0 h-[480px] pointer-events-none overflow-hidden z-0">
        <svg
          className="w-full h-full text-[#FFFFFF]"
          viewBox="0 0 1440 480"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          <path d="M 0,0 H 1440 V 160 C 1360,290 1250,310 1160,180 C 1060,50 960,60 880,240 C 790,420 650,440 560,260 C 470,80 370,70 280,230 C 190,390 80,360 0,180 Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Eyebrow Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#161616] text-[#C8FF2E] text-[10px] font-black uppercase tracking-wider mb-6 shadow-sm hover:scale-105 transition-transform">
          <div className="w-4 h-4 rounded-full bg-[#C8FF2E] text-[#161616] flex items-center justify-center font-black text-[9px]">
            ⌛
          </div>
          <span>WORLD’S FIRST SALES COURSE FOR DESIGNERS</span>
        </div>

        {/* Headline */}
        <div className="max-w-4xl mx-auto mb-7 select-none">
          <h1 className="font-krack-chunky text-3xl sm:text-5xl md:text-6xl text-[#161616] uppercase leading-[1.0] tracking-tight">
            FOR THE STUFF
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 my-1">
            {/* Mascot Character "C" */}
            <div className="w-10 h-10 sm:w-14 sm:h-14 bg-[#FF3B00] text-white rounded-xl flex items-center justify-center font-black text-xl sm:text-3xl border-2 border-[#161616] shadow-[3px_3px_0px_#161616] rotate-[-6deg] hover:rotate-0 transition-transform">
              C👀
            </div>

            <span className="font-krack-chunky text-3xl sm:text-5xl md:text-6xl text-[#161616] uppercase">
              THEY
            </span>

            {/* Cursive script font for "don't" */}
            <span className="font-krack-script text-4xl sm:text-6xl text-[#161616] lowercase font-bold tracking-normal mx-1 -mt-2">
              don't
            </span>

            <span className="font-krack-chunky text-3xl sm:text-5xl md:text-6xl text-[#161616] uppercase">
              TEACH
            </span>
          </div>
          <h1 className="font-krack-chunky text-3xl sm:text-5xl md:text-6xl text-[#161616] uppercase leading-[1.0] tracking-tight">
            IN DESIGN SCHOOLS
          </h1>
        </div>

        {/* Center CTA Button */}
        <div className="flex items-center justify-center mb-12">
          <button
            onClick={onOpenWaitlist}
            className="flex items-center gap-2 px-6 py-3 bg-[#C8FF2E] text-[#161616] font-krack-chunky text-xs sm:text-sm uppercase rounded-[62px] border-2 border-[#161616] shadow-[3px_3px_0px_#161616] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_#161616] transition-all"
          >
            <span>JOIN WAITLIST</span>
            <div className="w-4 h-4 rounded-full bg-[#FF3B00] text-white flex items-center justify-center font-bold text-[9px]">
              ➔
            </div>
          </button>
        </div>

        {/* 6 Hero Photo Cards - Positioned Lower towards section bottom */}
        <div className="relative max-w-6xl mx-auto mt-6 sm:mt-10 md:mt-14 -mb-6 md:-mb-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 sm:gap-4 items-end justify-center">
            {cards.map((card) => (
              <div
                key={card.id}
                className={`bg-[#FFFFFF] p-1.5 rounded-2xl border-2 border-[#161616] shadow-[3px_3px_0px_#161616] ${card.rotation} hover:rotate-0 hover:scale-105 transition-all overflow-hidden flex flex-col justify-between`}
              >
                <img
                  src={card.image}
                  alt={card.caption}
                  className="w-full h-32 sm:h-36 object-cover rounded-xl"
                />

                {/* Scalloped Cloud Top Edge Banner */}
                <div
                  className={`-mt-3 pt-1 rounded-b-xl relative ${
                    card.theme === "cream"
                      ? "bg-[#F7F6F0] text-[#161616]"
                      : "bg-[#4A121A] text-[#FFFFFF]"
                  }`}
                >
                  {/* Cloud Semicircular Scallops Path */}
                  <svg
                    className={`w-full h-3.5 -mt-3.5 ${
                      card.theme === "cream" ? "text-[#F7F6F0]" : "text-[#4A121A]"
                    }`}
                    viewBox="0 0 120 16"
                    preserveAspectRatio="none"
                    fill="currentColor"
                  >
                    <path d="M0 16 C 5 2, 10 2, 15 16 C 20 2, 25 2, 30 16 C 35 2, 40 2, 45 16 C 50 2, 55 2, 60 16 C 65 2, 70 2, 75 16 C 80 2, 85 2, 90 16 C 95 2, 100 2, 105 16 C 110 2, 115 2, 120 16 V 16 H 0 Z" />
                  </svg>

                  <div className="px-1.5 pb-2 pt-0.5 text-center text-[11px] font-bold leading-tight">
                    {card.caption}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
