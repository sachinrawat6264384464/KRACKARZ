"use client";

import React, { useState } from "react";
import { Check, Sparkles, Zap, GraduationCap, ShieldCheck } from "lucide-react";

interface PricingSectionProps {
  onOpenWaitlist: () => void;
}

export default function PricingSection({ onOpenWaitlist }: PricingSectionProps) {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("yearly");

  const plans = [
    {
      id: "free",
      name: "JUST KRUMBLING",
      sub: "Get a taste of Krackerz",
      priceMonthly: "$0",
      priceYearly: "$0",
      period: "free forever",
      badge: "FREE STARTER",
      highlight: false,
      bgColor: "bg-[#212121]",
      borderColor: "border-[#333333]",
      textColor: "text-[#FFFFFF]",
      buttonColor: "bg-[#262626] text-[#FFFFFF] hover:bg-[#333333]",
      features: [
        "Access to first module for 14 days",
        "Discover and join open events",
        "Benchmark yourself against industry baseline",
        "Basic pitch checklist framework",
      ],
    },
    {
      id: "pro",
      name: "READY TO KRACK",
      sub: "For designers ready to krack further",
      priceMonthly: "$19",
      priceYearly: "$149",
      savings: "Save $70",
      period: billingCycle === "yearly" ? "/year" : "/month",
      badge: "MOST POPULAR",
      highlight: true,
      bgColor: "bg-[#0000EE]",
      borderColor: "border-[#0000EE]",
      textColor: "text-[#FFFFFF]",
      buttonColor: "bg-[#C8FF2E] text-[#161616] hover:bg-[#b2e622] shadow-glow-lime",
      features: [
        "Full access to all 8 modules & 50+ scenarios",
        "Discover and join live events & hackathons",
        "Benchmark yourself with advanced analytics",
        "Connect with private designer communities",
        "Mentor feedback from industry experts*",
        "Lifetime updates to all future course modules",
      ],
    },
    {
      id: "student",
      name: "STUDENTS",
      sub: "Get krackin' early in your career",
      priceMonthly: "$9",
      priceYearly: "$99",
      savings: "Save $32",
      period: billingCycle === "yearly" ? "/year" : "/month",
      badge: "STUDENT DISCOUNT",
      highlight: false,
      bgColor: "bg-[#212121]",
      borderColor: "border-[#333333]",
      textColor: "text-[#FFFFFF]",
      buttonColor: "bg-[#C8FF2E] text-[#161616] hover:bg-[#b2e622]",
      features: [
        "Full access to all courses & scenario drills",
        "Discover and join student hackathons",
        "Connect with junior designer peer groups",
        "Verified student status via edu email",
      ],
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-[#161616] text-[#FFFFFF] border-b border-[#262626]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="px-3.5 py-1.5 rounded-full bg-[#262626] border border-[#333333] text-[#C8FF2E] text-xs font-bold uppercase tracking-wider">
            PRICING & MEMBERSHIP
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mt-4 text-[#FFFFFF]">
            Invest in the skills that <span className="text-[#C8FF2E]">pay back 10x</span>
          </h2>
          <p className="text-base text-[#F7F6F0]/80 mt-2">
            Simple transparent pricing. Join the waitlist today for exclusive launch perks.
          </p>
        </div>

        {/* Monthly / Yearly Toggle */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <span
            className={`text-sm font-bold cursor-pointer transition-colors ${
              billingCycle === "monthly" ? "text-[#C8FF2E]" : "text-[#F7F6F0]/60"
            }`}
            onClick={() => setBillingCycle("monthly")}
          >
            Monthly
          </span>
          <button
            onClick={() => setBillingCycle(billingCycle === "monthly" ? "yearly" : "monthly")}
            className="w-14 h-8 bg-[#262626] rounded-full p-1 border border-[#333333] transition-colors relative"
          >
            <div
              className={`w-6 h-6 rounded-full bg-[#C8FF2E] transition-transform ${
                billingCycle === "yearly" ? "translate-x-6" : "translate-x-0"
              }`}
            />
          </button>
          <span
            className={`text-sm font-bold flex items-center gap-2 cursor-pointer transition-colors ${
              billingCycle === "yearly" ? "text-[#C8FF2E]" : "text-[#F7F6F0]/60"
            }`}
            onClick={() => setBillingCycle("yearly")}
          >
            Yearly
            <span className="px-2.5 py-0.5 bg-[#C8FF2E] text-[#161616] text-[10px] font-extrabold rounded-full">
              SAVE UP TO $70
            </span>
          </span>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`${plan.bgColor} ${plan.borderColor} border-2 rounded-[24px] p-8 flex flex-col justify-between relative shadow-2xl hover:scale-[1.02] transition-all`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#C8FF2E] text-[#161616] text-xs font-black rounded-full uppercase tracking-wider shadow-glow-lime flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 fill-[#161616]" />
                  <span>{plan.badge}</span>
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold tracking-wider uppercase text-[#C8FF2E]">
                    {!plan.highlight ? plan.badge : "PRO LEVEL"}
                  </span>
                  {plan.savings && billingCycle === "yearly" && (
                    <span className="px-2.5 py-1 bg-[#262626] text-[#C8FF2E] text-[10px] font-bold rounded-full">
                      {plan.savings}
                    </span>
                  )}
                </div>

                <h3 className="text-2xl font-extrabold text-[#FFFFFF] mb-1">{plan.name}</h3>
                <p className="text-xs text-[#F7F6F0]/80 mb-6">{plan.sub}</p>

                {/* Price Display */}
                <div className="mb-8">
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-black text-[#FFFFFF] tracking-tight">
                      {billingCycle === "yearly" ? plan.priceYearly : plan.priceMonthly}
                    </span>
                    <span className="text-sm font-semibold text-[#F7F6F0]/70">{plan.period}</span>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-3 mb-8">
                  <div className="text-xs font-bold uppercase text-[#F7F6F0]/60 tracking-wider">
                    INCLUDED FEATURES:
                  </div>
                  {plan.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm text-[#F7F6F0]">
                      <Check className="w-4 h-4 text-[#C8FF2E] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={onOpenWaitlist}
                className={`w-full py-3.5 px-6 rounded-full font-extrabold text-sm transition-all ${plan.buttonColor}`}
              >
                JOIN WAITLIST FOR {plan.name}
              </button>
            </div>
          ))}
        </div>

        {/* Moneyback Guarantee note */}
        <div className="mt-12 text-center flex items-center justify-center gap-2 text-xs text-[#F7F6F0]/70">
          <ShieldCheck className="w-4 h-4 text-[#C8FF2E]" />
          <span>14-day full refund guarantee upon public launch. Student verification required for student pricing.</span>
        </div>
      </div>
    </section>
  );
}
