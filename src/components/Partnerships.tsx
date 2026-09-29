"use client";

import React, { useState } from "react";
import { Handshake, Send, CheckCircle2, Building2, School, Users2 } from "lucide-react";
import confetti from "canvas-confetti";

export default function Partnerships() {
  const [formOpen, setFormOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    orgType: "recruiter",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.6 },
    });
  };

  return (
    <section id="Partnership" className="py-24 bg-[#161616] text-[#FFFFFF] border-b border-[#262626]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0000EE] rounded-[32px] p-8 sm:p-14 border border-[#0000cc] shadow-2xl relative overflow-hidden">
          {/* Background Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#C8FF2E]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl relative z-10">
            <span className="px-3.5 py-1.5 rounded-full bg-[#C8FF2E] text-[#161616] text-xs font-black uppercase tracking-wider">
              PARTNER WITH US
            </span>

            <h2 className="text-3xl sm:text-5xl font-black tracking-tight mt-6 text-[#FFFFFF] leading-tight uppercase">
              for RECRUITERS, DESIGN EDUCATORS, and DESIGN COMMUNITIES
            </h2>

            <p className="text-base sm:text-lg text-[#F7F6F0]/90 mt-4 leading-relaxed font-medium">
              Want to sponsor a pitch hackathon, hire job-ready sales-trained designers, or bring Krackerz curriculum into your university or bootcamp? Let’s team up!
            </p>

            {/* Partner Types Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              <div className="bg-[#161616]/40 p-4 rounded-xl border border-white/10 flex items-center gap-3">
                <Building2 className="w-5 h-5 text-[#C8FF2E]" />
                <span className="text-xs font-bold text-[#F7F6F0]">Design Recruiters</span>
              </div>
              <div className="bg-[#161616]/40 p-4 rounded-xl border border-white/10 flex items-center gap-3">
                <School className="w-5 h-5 text-[#C8FF2E]" />
                <span className="text-xs font-bold text-[#F7F6F0]">Design Bootcamps</span>
              </div>
              <div className="bg-[#161616]/40 p-4 rounded-xl border border-white/10 flex items-center gap-3">
                <Users2 className="w-5 h-5 text-[#C8FF2E]" />
                <span className="text-xs font-bold text-[#F7F6F0]">Design Communities</span>
              </div>
            </div>

            <div className="mt-10">
              <button
                onClick={() => setFormOpen(true)}
                className="px-8 py-4 bg-[#C8FF2E] text-[#161616] font-black text-sm rounded-[62px] shadow-glow-lime hover:bg-[#b2e622] hover:scale-105 transition-all flex items-center gap-2"
              >
                <Handshake className="w-5 h-5" />
                <span>GET IN TOUCH</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Partner Form Modal */}
      {formOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-[#161616] border border-[#333333] rounded-[24px] max-w-lg w-full p-6 sm:p-8 shadow-2xl relative text-[#FFFFFF]">
            <button
              onClick={() => {
                setFormOpen(false);
                setSubmitted(false);
              }}
              className="absolute top-5 right-5 text-[#F7F6F0]/60 hover:text-[#FFFFFF] text-sm"
            >
              ✕
            </button>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex items-center gap-2 text-[#C8FF2E] text-xs font-bold uppercase">
                  <Handshake className="w-4 h-4" />
                  <span>PARTNER INQUIRY</span>
                </div>
                <h3 className="text-2xl font-extrabold text-[#FFFFFF]">Get in Touch with Krackerz</h3>

                <div>
                  <label className="block text-xs font-semibold text-[#F7F6F0]/80 mb-1">Your Name</label>
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Morgan"
                    className="w-full px-4 py-3 bg-[#262626] border border-[#333333] rounded-xl text-sm text-[#FFFFFF] focus:outline-none focus:border-[#C8FF2E]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#F7F6F0]/80 mb-1">Work Email</label>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@company.com"
                    className="w-full px-4 py-3 bg-[#262626] border border-[#333333] rounded-xl text-sm text-[#FFFFFF] focus:outline-none focus:border-[#C8FF2E]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#F7F6F0]/80 mb-1">Partner Category</label>
                  <select
                    value={formData.orgType}
                    onChange={(e) => setFormData({ ...formData, orgType: e.target.value })}
                    className="w-full px-4 py-3 bg-[#262626] border border-[#333333] rounded-xl text-sm text-[#FFFFFF] focus:outline-none focus:border-[#C8FF2E]"
                  >
                    <option value="recruiter">Recruiter / Hiring Manager</option>
                    <option value="educator">Design Educator / University</option>
                    <option value="community">Design Community Lead</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#F7F6F0]/80 mb-1">Message</label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="How can we collaborate?"
                    className="w-full px-4 py-3 bg-[#262626] border border-[#333333] rounded-xl text-sm text-[#FFFFFF] focus:outline-none focus:border-[#C8FF2E]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#C8FF2E] text-[#161616] font-extrabold text-sm rounded-full shadow-glow-lime hover:bg-[#b2e622] transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>SUBMIT PARTNER INQUIRY</span>
                </button>
              </form>
            ) : (
              <div className="text-center py-8">
                <CheckCircle2 className="w-16 h-16 text-[#C8FF2E] mx-auto mb-4" />
                <h4 className="text-2xl font-extrabold text-[#FFFFFF]">Message Sent!</h4>
                <p className="text-sm text-[#F7F6F0]/80 mt-2">
                  Thank you, {formData.name}. Our partnerships team will respond to {formData.email} within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setFormOpen(false);
                    setSubmitted(false);
                  }}
                  className="mt-6 px-6 py-2.5 bg-[#262626] text-[#C8FF2E] font-bold text-xs rounded-full border border-[#333333]"
                >
                  CLOSE
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
