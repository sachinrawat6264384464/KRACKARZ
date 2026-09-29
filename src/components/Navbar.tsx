"use client";

import React, { useState, useEffect } from "react";
import { ShoppingBag, Menu, X } from "lucide-react";

interface NavbarProps {
  onOpenWaitlist: () => void;
  cartCount: number;
  onOpenCart: () => void;
}

export default function Navbar({ onOpenWaitlist, cartCount, onOpenCart }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Features", href: "#core-features" },
    { name: "Pricing", href: "#pricing" },
    { name: "For partners", href: "#Partnership" },
    { name: "FAQ", href: "#faq" },
    { name: "Shop", href: "#store" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#F7F6F0]/90 backdrop-blur-md py-3 border-b border-[#e0dfd5]"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo matching Image 1: Solid Black */}
          <a
            href="#"
            className="flex items-center gap-2 focus-visible:outline-none"
          >
            <span className="font-krack-chunky text-3xl tracking-tight text-[#161616] uppercase">
              KRACKERZ
            </span>
          </a>

          {/* Nav Pill Container matching Image 1 */}
          <div className="hidden md:flex items-center bg-[#FFFFFF] border border-[#161616] rounded-[62px] px-6 py-2 shadow-sm gap-6">
            <nav className="flex items-center gap-6" aria-label="Main Navigation">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-semibold text-[#161616] hover:opacity-75 transition-opacity"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <div className="h-4 w-[1px] bg-[#e0dfd5]" />

            {/* Cart Icon trigger */}
            <button
              onClick={onOpenCart}
              className="relative flex items-center gap-1.5 text-xs font-bold uppercase text-[#161616] hover:opacity-75 transition-opacity"
            >
              <ShoppingBag className="w-4 h-4 text-[#161616]" />
              <span>Cart</span>
              {cartCount > 0 && (
                <span className="w-4 h-4 rounded-full bg-[#0000EE] text-white flex items-center justify-center text-[10px] font-bold">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Join Waitlist Button matching Image 1 */}
            <button
              onClick={onOpenWaitlist}
              className="flex items-center gap-2 px-4 py-2 bg-[#C8FF2E] text-[#161616] font-krack-chunky text-xs uppercase rounded-[62px] border border-[#161616] shadow-sm hover:scale-105 transition-transform"
            >
              <span>JOIN WAITLIST</span>
              <div className="w-5 h-5 rounded-full bg-[#FF4500] text-white flex items-center justify-center font-bold text-[10px]">
                ➔
              </div>
            </button>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={onOpenCart}
              className="relative p-2 bg-[#FFFFFF] border border-[#161616] rounded-full text-[#161616]"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#0000EE] text-white flex items-center justify-center text-[10px] font-bold">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 bg-[#FFFFFF] border border-[#161616] rounded-full text-[#161616]"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FFFFFF] border-b-2 border-[#161616] px-4 pt-4 pb-6 space-y-4 shadow-xl">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-bold text-[#161616] py-2 border-b border-[#e0dfd5]"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenWaitlist();
            }}
            className="w-full flex items-center justify-center gap-2 px-5 py-3 bg-[#C8FF2E] text-[#161616] font-krack-chunky text-sm rounded-[62px] border border-[#161616]"
          >
            <span>JOIN WAITLIST ➔</span>
          </button>
        </div>
      )}
    </header>
  );
}
