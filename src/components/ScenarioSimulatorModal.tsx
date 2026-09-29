"use client";

import React, { useState } from "react";
import { X, CheckCircle2, AlertCircle, Sparkles, RefreshCw, Award } from "lucide-react";
import confetti from "canvas-confetti";

interface ScenarioSimulatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenWaitlist: () => void;
}

export default function ScenarioSimulatorModal({
  isOpen,
  onClose,
  onOpenWaitlist,
}: ScenarioSimulatorModalProps) {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const scenario = {
    title: "Scenario 01: Executive Stakeholder Pushback",
    role: "Head of Product (Non-designer)",
    situation:
      "You present your user research and propose adding a 3-step onboarding flow. The Head of Product interrupts:",
    quote:
      '"Our competitors don\'t force 3 onboarding steps! Why are we adding friction for our users instead of just sending them directly to the main dashboard?"',
    options: [
      {
        text: '"Because our user testing showed that 80% of users get confused without setup instructions, and design best practices state onboarding increases retention."',
        score: 60,
        verdict: "Needs Improvement",
        analysis:
          "Appealing only to 'design best practices' rarely sways executives. You need business metric justification.",
      },
      {
        text: '"Valid concern! However, our data shows users without setup drop off by 42% on Day 1. The 3 steps take only 18 seconds, reducing churn and lifting 30-day retention by $120k projected ARR."',
        score: 98,
        verdict: "Perfect Sales Framing!",
        analysis:
          "Excellent! You acknowledged their point, quantified time cost (18s), and translated design into concrete revenue metrics ($120k ARR).",
      },
      {
        text: '"Trust me, as a UX designer I studied user psychology. Users actually prefer guided steps over blank slates."',
        score: 45,
        verdict: "Weak Pitch",
        analysis:
          "Saying 'Trust me' creates immediate defensiveness. Always back claims with user metrics or business goals.",
      },
    ],
  };

  const handleSubmit = () => {
    if (selectedOption === null) return;
    setSubmitted(true);
    if (selectedOption === 1) {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 },
      });
    }
  };

  const handleReset = () => {
    setSelectedOption(null);
    setSubmitted(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#161616] border border-[#333333] rounded-[24px] max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative text-[#FFFFFF] max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-[#F7F6F0]/60 hover:text-[#FFFFFF] bg-[#262626] rounded-full transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-2 text-[#C8FF2E] text-xs font-bold uppercase tracking-wider mb-2">
          <Sparkles className="w-4 h-4 fill-current" />
          <span>KRACKERZ SCENARIO SIMULATOR</span>
        </div>

        <h3 className="text-2xl font-extrabold text-[#FFFFFF] mb-2">{scenario.title}</h3>
        <p className="text-xs text-[#F7F6F0]/70 mb-6">Role: {scenario.role}</p>

        {/* Situation Quote */}
        <div className="bg-[#262626] p-5 rounded-xl border border-[#333333] mb-6 relative">
          <div className="text-xs font-bold text-[#0000EE] uppercase tracking-wider mb-2">STAKEHOLDER SAYS:</div>
          <p className="text-sm sm:text-base text-[#F7F6F0] italic font-medium leading-relaxed">
            {scenario.quote}
          </p>
        </div>

        {/* Options */}
        <div className="space-y-3 mb-6">
          <div className="text-xs font-bold uppercase text-[#F7F6F0]/80">Select Your Pitch Response:</div>
          {scenario.options.map((opt, i) => (
            <button
              key={i}
              disabled={submitted}
              onClick={() => setSelectedOption(i)}
              className={`w-full text-left p-4 rounded-xl border text-sm transition-all flex items-start gap-3 ${
                selectedOption === i
                  ? "border-[#C8FF2E] bg-[#C8FF2E]/10 text-[#FFFFFF]"
                  : "border-[#333333] bg-[#1f1f1f] text-[#F7F6F0]/90 hover:border-[#555555]"
              }`}
            >
              <span
                className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-extrabold shrink-0 mt-0.5 ${
                  selectedOption === i
                    ? "bg-[#C8FF2E] text-[#161616]"
                    : "bg-[#262626] text-[#F7F6F0]/70"
                }`}
              >
                {String.fromCharCode(65 + i)}
              </span>
              <span className="leading-relaxed">{opt.text}</span>
            </button>
          ))}
        </div>

        {/* Result Breakdown */}
        {submitted && selectedOption !== null && (
          <div className="p-5 rounded-xl bg-[#212121] border border-[#333333] mb-6 animate-in slide-in-from-bottom duration-300">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                {scenario.options[selectedOption].score >= 80 ? (
                  <CheckCircle2 className="w-6 h-6 text-[#C8FF2E]" />
                ) : (
                  <AlertCircle className="w-6 h-6 text-amber-400" />
                )}
                <span className="font-extrabold text-base text-[#FFFFFF]">
                  {scenario.options[selectedOption].verdict}
                </span>
              </div>
              <span className="px-3 py-1 bg-[#C8FF2E] text-[#161616] text-xs font-extrabold rounded-full">
                Score: {scenario.options[selectedOption].score}/100
              </span>
            </div>
            <p className="text-sm text-[#F7F6F0]/90 leading-relaxed">
              {scenario.options[selectedOption].analysis}
            </p>
          </div>
        )}

        {/* Footer Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-[#333333]">
          {!submitted ? (
            <button
              disabled={selectedOption === null}
              onClick={handleSubmit}
              className="w-full sm:w-auto px-6 py-3 bg-[#C8FF2E] text-[#161616] font-extrabold text-sm rounded-full disabled:opacity-50 hover:bg-[#b2e622] transition-all shadow-glow-lime"
            >
              SUBMIT ANSWER & EVALUATE
            </button>
          ) : (
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full justify-between">
              <button
                onClick={handleReset}
                className="flex items-center gap-2 text-xs font-bold text-[#F7F6F0]/80 hover:text-[#FFFFFF]"
              >
                <RefreshCw className="w-3.5 h-3.5" /> Try Again
              </button>
              <button
                onClick={() => {
                  onClose();
                  onOpenWaitlist();
                }}
                className="w-full sm:w-auto px-6 py-3 bg-[#C8FF2E] text-[#161616] font-extrabold text-sm rounded-full hover:bg-[#b2e622] transition-all shadow-glow-lime"
              >
                UNLOCK FULL 50+ SCENARIOS
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
