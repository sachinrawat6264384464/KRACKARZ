"use client";

import React from "react";
import { ArrowUp, Sparkles, Heart, Globe, Share2, MessageCircle } from "lucide-react";

interface FooterProps {
  onOpenWaitlist: () => void;
}

export default function Footer({ onOpenWaitlist }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#161616] text-[#FFFFFF] pt-20 pb-12 border-t border-[#262626]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#262626]">
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-6">
            <div className="flex items-center gap-3">
              <span className="font-extrabold text-3xl tracking-tighter text-[#FFFFFF]">
                KRACKERZ
              </span>
              <span className="px-2.5 py-0.5 text-[10px] font-extrabold tracking-wider uppercase bg-[#C8FF2E] text-[#161616] rounded-full">
                SALES COURSE FOR DESIGNERS
              </span>
            </div>

            <p className="text-xl sm:text-2xl font-bold text-[#F7F6F0]/90 max-w-md leading-tight">
              For the stuff they don’t teach in design schools.
            </p>

            <p className="text-sm text-[#F7F6F0]/60 max-w-sm">
              Learn how to pitch your work, win clients, and convince any room. Built for UX, product, and brand designers ready to level up.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={onOpenWaitlist}
                className="px-6 py-3 bg-[#C8FF2E] text-[#161616] font-extrabold text-xs rounded-full shadow-glow-lime hover:bg-[#b2e622] transition-all flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4 fill-[#161616]" />
                <span>JOIN WAITLIST NOW</span>
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#C8FF2E]">NAVIGATION</h4>
            <ul className="space-y-2 text-sm text-[#F7F6F0]/80">
              <li>
                <a href="#core-features" className="hover:text-[#C8FF2E] transition-colors">
                  Core Features
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-[#C8FF2E] transition-colors">
                  Pricing & Plans
                </a>
              </li>
              <li>
                <a href="#Partnership" className="hover:text-[#C8FF2E] transition-colors">
                  For Partners & Recruiters
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#C8FF2E] transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#shop" className="hover:text-[#C8FF2E] transition-colors">
                  Sticker Shop
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Legal */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#C8FF2E]">CONNECT</h4>
            <div className="flex items-center gap-3 text-[#F7F6F0]">
              <a
                href="https://www.linkedin.com/company/bizkitgroup/"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 bg-[#262626] rounded-full hover:bg-[#0000EE] transition-colors text-xs font-bold flex items-center justify-center w-9 h-9"
                aria-label="LinkedIn"
              >
                in
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 bg-[#262626] rounded-full hover:bg-[#0000EE] transition-colors text-xs font-bold flex items-center justify-center w-9 h-9"
                aria-label="Twitter"
              >
                X
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 bg-[#262626] rounded-full hover:bg-[#0000EE] transition-colors"
                aria-label="Instagram"
              >
                <Share2 className="w-4 h-4" />
              </a>
              <a
                href="https://krackerz.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 bg-[#262626] rounded-full hover:bg-[#0000EE] transition-colors"
                aria-label="Website"
              >
                <Globe className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-4 text-xs text-[#F7F6F0]/60">
              Powered by{" "}
              <a
                href="https://bizkitgroup.com/"
                target="_blank"
                rel="noreferrer"
                className="text-[#C8FF2E] font-semibold hover:underline"
              >
                Bizkit Group
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F7F6F0]/60">
          <div>© {new Date().getFullYear()} Krackerz. All Rights Reserved.</div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              Crafted with <Heart className="w-3.5 h-3.5 text-[#C8FF2E] fill-current inline" /> for designers worldwide
            </span>

            <button
              onClick={scrollToTop}
              className="p-2 bg-[#262626] hover:bg-[#333333] text-[#F7F6F0] rounded-full border border-[#333333] transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
