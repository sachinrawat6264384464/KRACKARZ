"use client";

import React, { useState } from "react";
import { X, Sparkles, CheckCircle2, ArrowRight, ArrowLeft, Mail, User } from "lucide-react";
import confetti from "canvas-confetti";

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WaitlistModal({ isOpen, onClose }: WaitlistModalProps) {
  const [step, setStep] = useState(1);
  const [goal, setGoal] = useState("Selling my work, not just making it");
  const [experience, setExperience] = useState("2-5 years");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const goals = [
    "Getting ready for my next interview",
    "Uplifting my design portfolio",
    "Cold outreaching without cringing",
    "Connecting with other designers",
    "Selling my work, not just making it",
    "Defining my personal brand",
  ];

  const expLevels = [
    "Entry / Student (0-1 yrs)",
    "Junior / Mid-level (1-3 yrs)",
    "Senior Designer (3-6 yrs)",
    "Design Lead / Manager (6+ yrs)",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.5 },
    });
  };

  const handleResetAndClose = () => {
    setStep(1);
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#161616] border border-[#333333] rounded-[28px] max-w-lg w-full p-6 sm:p-8 shadow-2xl relative text-[#FFFFFF] overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#C8FF2E]/10 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={handleResetAndClose}
          className="absolute top-5 right-5 p-2 text-[#F7F6F0]/60 hover:text-[#FFFFFF] bg-[#262626] rounded-full transition-colors z-20"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            {/* Modal Header */}
            <div className="flex items-center gap-2 text-[#C8FF2E] text-xs font-extrabold uppercase tracking-wider mb-2">
              <Sparkles className="w-4 h-4 fill-current" />
              <span>KRACKERZ PRIORITY ACCESS</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#FFFFFF] mb-2">
              Join the Krackerz Waitlist
            </h3>
            <p className="text-xs text-[#F7F6F0]/70 mb-6">
              Step {step} of 3 • Get early invite access & 20% launch discount
            </p>

            {/* Step 1: Goal Selection */}
            {step === 1 && (
              <div className="space-y-4 animate-in fade-in">
                <label className="block text-xs font-bold uppercase text-[#F7F6F0]/90">
                  What is your primary goal right now?
                </label>
                <div className="space-y-2">
                  {goals.map((g) => (
                    <button
                      key={g}
                      onClick={() => setGoal(g)}
                      className={`w-full text-left p-3.5 rounded-xl border text-xs sm:text-sm font-semibold transition-all flex items-center justify-between ${
                        goal === g
                          ? "bg-[#C8FF2E] text-[#161616] border-[#C8FF2E] shadow-glow-lime"
                          : "bg-[#212121] text-[#F7F6F0]/90 border-[#333333] hover:border-[#555555]"
                      }`}
                    >
                      <span>{g}</span>
                      {goal === g && <CheckCircle2 className="w-4 h-4 shrink-0 text-[#161616]" />}
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => setStep(2)}
                  className="w-full mt-6 py-3.5 bg-[#C8FF2E] text-[#161616] font-extrabold text-sm rounded-full shadow-glow-lime hover:bg-[#b2e622] transition-all flex items-center justify-center gap-2"
                >
                  <span>CONTINUE</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}

            {/* Step 2: Experience Selection */}
            {step === 2 && (
              <div className="space-y-4 animate-in fade-in">
                <label className="block text-xs font-bold uppercase text-[#F7F6F0]/90">
                  How many years of design experience do you have?
                </label>
                <div className="space-y-2">
                  {expLevels.map((exp) => (
                    <button
                      key={exp}
                      onClick={() => setExperience(exp)}
                      className={`w-full text-left p-4 rounded-xl border text-sm font-semibold transition-all flex items-center justify-between ${
                        experience === exp
                          ? "bg-[#0000EE] text-[#FFFFFF] border-[#0000EE]"
                          : "bg-[#212121] text-[#F7F6F0]/90 border-[#333333] hover:border-[#555555]"
                      }`}
                    >
                      <span>{exp}</span>
                      {experience === exp && <CheckCircle2 className="w-4 h-4 shrink-0 text-[#C8FF2E]" />}
                    </button>
                  ))}
                </div>

                <div className="flex items-center gap-3 pt-4">
                  <button
                    onClick={() => setStep(1)}
                    className="p-3 bg-[#262626] text-[#F7F6F0] rounded-full border border-[#333333]"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setStep(3)}
                    className="flex-1 py-3.5 bg-[#C8FF2E] text-[#161616] font-extrabold text-sm rounded-full shadow-glow-lime hover:bg-[#b2e622] transition-all flex items-center justify-center gap-2"
                  >
                    <span>NEXT: CONTACT INFO</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Contact Info & Submit */}
            {step === 3 && (
              <form onSubmit={handleSubmit} className="space-y-4 animate-in fade-in">
                <div>
                  <label className="block text-xs font-bold text-[#F7F6F0]/80 mb-1">Your Full Name</label>
                  <div className="relative">
                    <User className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#F7F6F0]/50" />
                    <input
                      required
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Jordan Lee"
                      className="w-full pl-10 pr-4 py-3 bg-[#262626] border border-[#333333] rounded-xl text-sm text-[#FFFFFF] focus:outline-none focus:border-[#C8FF2E]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#F7F6F0]/80 mb-1">Your Best Email</label>
                  <div className="relative">
                    <Mail className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#F7F6F0]/50" />
                    <input
                      required
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="jordan@design.com"
                      className="w-full pl-10 pr-4 py-3 bg-[#262626] border border-[#333333] rounded-xl text-sm text-[#FFFFFF] focus:outline-none focus:border-[#C8FF2E]"
                    />
                  </div>
                </div>

                <div className="p-3 bg-[#212121] rounded-xl border border-[#333333] text-xs text-[#F7F6F0]/70 space-y-1">
                  <div className="flex justify-between">
                    <span className="font-semibold text-[#FFFFFF]">Goal:</span>
                    <span className="text-[#C8FF2E] font-medium">{goal}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-[#FFFFFF]">Experience:</span>
                    <span>{experience}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="p-3 bg-[#262626] text-[#F7F6F0] rounded-full border border-[#333333]"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-3.5 bg-[#C8FF2E] text-[#161616] font-black text-sm rounded-full shadow-glow-lime hover:bg-[#b2e622] transition-all flex items-center justify-center gap-2"
                  >
                    <Sparkles className="w-4 h-4 fill-[#161616]" />
                    <span>GET PRIORITY ACCESS</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        ) : (
          /* Confirmation Screen */
          <div className="text-center py-6 animate-in zoom-in-95 duration-200">
            <CheckCircle2 className="w-16 h-16 text-[#C8FF2E] mx-auto mb-4" />
            <h4 className="text-2xl font-black text-[#FFFFFF]">YOU’RE ON THE LIST! 🎉</h4>
            <p className="text-sm text-[#F7F6F0]/80 mt-2 max-w-sm mx-auto">
              Welcome, <strong className="text-[#C8FF2E]">{name || "Designer"}</strong>! We’ve reserved your waitlist spot with email <span className="underline">{email}</span>.
            </p>
            <div className="mt-6 p-4 bg-[#212121] rounded-xl border border-[#333333] text-xs text-[#F7F6F0]/70">
              Check your inbox shortly for the free <strong className="text-[#FFFFFF]">Krackerz 10-Step Design Pitch Playbook PDF</strong>!
            </div>
            <button
              onClick={handleResetAndClose}
              className="mt-6 px-8 py-3 bg-[#C8FF2E] text-[#161616] font-extrabold text-xs rounded-full shadow-glow-lime"
            >
              BACK TO KRACKERZ HOME
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
