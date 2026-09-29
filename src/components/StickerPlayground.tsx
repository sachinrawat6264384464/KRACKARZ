"use client";

import React, { useState, useRef } from "react";
import { Move, ShoppingBag, Sparkles, RotateCcw, Plus, Check } from "lucide-react";
import confetti from "canvas-confetti";

interface Sticker {
  id: string;
  text: string;
  bgColor: string;
  textColor: string;
  borderColor: string;
  x: number;
  y: number;
  rotation: number;
}

interface StickerPlaygroundProps {
  onOpenWaitlist: () => void;
}

export default function StickerPlayground({ onOpenWaitlist }: StickerPlaygroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [claimed, setClaimed] = useState(false);

  const initialStickers: Sticker[] = [
    {
      id: "1",
      text: "BEYOND DESIGN SCHOOL 🚀",
      bgColor: "#C8FF2E",
      textColor: "#161616",
      borderColor: "#161616",
      x: 30,
      y: 40,
      rotation: -6,
    },
    {
      id: "2",
      text: "NO CRINGE COLD OUTREACH ⚡",
      bgColor: "#0000EE",
      textColor: "#FFFFFF",
      borderColor: "#FFFFFF",
      x: 320,
      y: 70,
      rotation: 8,
    },
    {
      id: "3",
      text: "SELL WORK, DON'T JUST MAKE IT",
      bgColor: "#FFFFFF",
      textColor: "#161616",
      borderColor: "#C8FF2E",
      x: 180,
      y: 200,
      rotation: -3,
    },
    {
      id: "4",
      text: "MOCK STAKEHOLDER PRO 🎯",
      bgColor: "#161616",
      textColor: "#C8FF2E",
      borderColor: "#C8FF2E",
      x: 480,
      y: 150,
      rotation: 12,
    },
  ];

  const [stickers, setStickers] = useState<Sticker[]>(initialStickers);
  const [activeStickerId, setActiveStickerId] = useState<string | null>(null);

  const handlePointerDown = (id: string, e: React.PointerEvent) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    setActiveStickerId(id);
  };

  const handlePointerMove = (id: string, e: React.PointerEvent) => {
    if (activeStickerId !== id || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const newX = e.clientX - rect.left - 100;
    const newY = e.clientY - rect.top - 25;

    setStickers((prev) =>
      prev.map((s) => (s.id === id ? { ...s, x: newX, y: newY } : s))
    );
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    e.currentTarget.releasePointerCapture(e.pointerId);
    setActiveStickerId(null);
  };

  const addExtraSticker = () => {
    const extraPhrases = [
      { text: "100% SOFT SKILLS 🔥", bg: "#C8FF2E", textCol: "#161616" },
      { text: "CONVINCE ANY ROOM 💼", bg: "#0000EE", textCol: "#FFFFFF" },
      { text: "KRACKERZ VIP MEMBER 👑", bg: "#FFFFFF", textCol: "#161616" },
    ];
    const item = extraPhrases[Math.floor(Math.random() * extraPhrases.length)];
    const newSticker: Sticker = {
      id: Date.now().toString(),
      text: item.text,
      bgColor: item.bg,
      textColor: item.textCol,
      borderColor: "#161616",
      x: Math.random() * 300 + 50,
      y: Math.random() * 150 + 50,
      rotation: (Math.random() - 0.5) * 20,
    };
    setStickers((prev) => [...prev, newSticker]);
  };

  const handleClaimPack = () => {
    setClaimed(true);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
    setTimeout(() => {
      onOpenWaitlist();
    }, 1200);
  };

  return (
    <section id="shop" className="py-24 bg-[#161616] text-[#FFFFFF] border-b border-[#262626] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="px-3.5 py-1.5 rounded-full bg-[#0000EE]/20 border border-[#0000EE]/40 text-[#0000EE] text-xs font-bold uppercase tracking-wider">
              INTERACTIVE SHOP & STICKERS
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mt-4 text-[#FFFFFF]">
              Drag the stickers to <span className="text-[#C8FF2E]">krack your style</span>
            </h2>
            <p className="text-base text-[#F7F6F0]/80 mt-2">
              Interactive design vinyl stickers. Drag them around the interactive board below!
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setStickers(initialStickers)}
              className="p-3 bg-[#262626] hover:bg-[#333333] text-[#F7F6F0] rounded-full border border-[#333333] transition-colors"
              title="Reset stickers"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
            <button
              onClick={addExtraSticker}
              className="flex items-center gap-2 px-4 py-2.5 bg-[#262626] hover:bg-[#333333] text-[#C8FF2E] font-bold text-xs rounded-full border border-[#333333] transition-colors"
            >
              <Plus className="w-4 h-4" />
              <span>Add Sticker</span>
            </button>
            <button
              onClick={handleClaimPack}
              className="flex items-center gap-2 px-6 py-2.5 bg-[#C8FF2E] text-[#161616] font-extrabold text-xs rounded-full shadow-glow-lime hover:bg-[#b2e622] transition-all"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>{claimed ? "STICKER PACK CLAIMED!" : "CLAIM FREE STICKER PACK"}</span>
            </button>
          </div>
        </div>

        {/* Interactive Canvas Playground Container */}
        <div
          ref={containerRef}
          className="relative w-full h-[420px] bg-[#1a1a1a] rounded-[24px] border-2 border-dashed border-[#333333] overflow-hidden select-none touch-none p-6 shadow-inner"
        >
          {/* Subtle Grid Pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(#333333_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

          {/* Watermark text */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10">
            <span className="text-6xl sm:text-9xl font-black uppercase text-[#F7F6F0] tracking-tighter">
              KRACKERZ
            </span>
          </div>

          {/* Instruction Tooltip */}
          <div className="absolute top-4 left-4 pointer-events-none flex items-center gap-2 px-3 py-1.5 bg-[#262626]/80 backdrop-blur-sm text-xs font-semibold text-[#F7F6F0]/70 rounded-full border border-[#333333]">
            <Move className="w-3.5 h-3.5 text-[#C8FF2E]" />
            <span>Click & Drag stickers anywhere</span>
          </div>

          {/* Draggable Stickers */}
          {stickers.map((s) => (
            <div
              key={s.id}
              onPointerDown={(e) => handlePointerDown(s.id, e)}
              onPointerMove={(e) => handlePointerMove(s.id, e)}
              onPointerUp={handlePointerUp}
              style={{
                transform: `translate(${s.x}px, ${s.y}px) rotate(${s.rotation}deg)`,
                backgroundColor: s.bgColor,
                color: s.textColor,
                borderColor: s.borderColor,
              }}
              className="absolute cursor-grab active:cursor-grabbing px-6 py-3.5 rounded-full border-2 font-black text-sm uppercase tracking-wider shadow-2xl transition-transform hover:scale-110 active:scale-105 z-20 flex items-center gap-2"
            >
              <span>{s.text}</span>
            </div>
          ))}
        </div>

        {/* Sticker Pack Perks Banner */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-[#212121] p-4 rounded-xl border border-[#333333] flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#C8FF2E]/20 text-[#C8FF2E] flex items-center justify-center font-bold">
              01
            </div>
            <div>
              <div className="font-bold text-sm text-[#FFFFFF]">Vinyl Matte Finish</div>
              <div className="text-xs text-[#F7F6F0]/70">Waterproof laptop stickers</div>
            </div>
          </div>

          <div className="bg-[#212121] p-4 rounded-xl border border-[#333333] flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#0000EE]/20 text-[#0000EE] flex items-center justify-center font-bold">
              02
            </div>
            <div>
              <div className="font-bold text-sm text-[#FFFFFF]">Worldwide Shipping</div>
              <div className="text-xs text-[#F7F6F0]/70">Free for waitlist members</div>
            </div>
          </div>

          <div className="bg-[#212121] p-4 rounded-xl border border-[#333333] flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#C8FF2E]/20 text-[#C8FF2E] flex items-center justify-center font-bold">
              03
            </div>
            <div>
              <div className="font-bold text-sm text-[#FFFFFF]">Digital Badge Pack</div>
              <div className="text-xs text-[#F7F6F0]/70">Figma & Notion stickers included</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
