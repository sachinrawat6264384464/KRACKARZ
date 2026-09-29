"use client";

import React, { useState } from "react";
import { Star, ShoppingBag, Eye, Sparkles, Check, ArrowRight } from "lucide-react";

export interface Product {
  id: string;
  title: string;
  price: number;
  originalPrice: number;
  category: "Merch & Apparel" | "Course Bundles" | "Figma Playbooks" | "Stickers";
  tag: string;
  image: string;
  rating: number;
  reviewsCount: number;
  summary: string;
  description: string;
  features: string[];
  options?: string[];
}

export const PRODUCTS_DATA: Product[] = [
  {
    id: "sticker-pack",
    title: "Official Krackerz Vinyl Sticker Pack (10-pc)",
    price: 19,
    originalPrice: 29,
    category: "Stickers",
    tag: "BESTSELLER",
    image: "/images/sticker_pack.png",
    rating: 4.9,
    reviewsCount: 128,
    summary: "10x Heavy-duty matte vinyl stickers • Waterproof • Custom Krackerz quotes (\"Soft Skills 100%\", \"No Cringe Cold Outreach\") • Free global shipping.",
    description: "Elevate your laptop, notebook, and phone case with 10 high-grade vinyl matte stickers designed specifically for UX, product, and brand designers. Weather-resistant, scratch-proof, and designed to make a statement in any design studio.",
    features: [
      "10x Unique Matte Vinyl Stickers",
      "UV & Water Resistant Coating",
      "Laptop & iPad Safe Adhesive",
      "Free Global Shipping Included"
    ]
  },
  {
    id: "hoodie-tote-pack",
    title: "Krackerz Streetwear Hoodie & 'Crack Open' Tote",
    price: 69,
    originalPrice: 89,
    category: "Merch & Apparel",
    tag: "POPULAR",
    image: "/images/hoodie_tote.png",
    rating: 4.9,
    reviewsCount: 94,
    summary: "Premium 450GSM organic cotton hoodie + heavy canvas tote bag with electric lime Krackerz embroidery.",
    description: "Designed for long studio sessions and design team meetups. The Krackerz Streetwear Bundle includes our signature heavy-cotton hoodie with lime green embroidered branding and our spacious canvas tote bag.",
    features: [
      "450GSM Organic Heavy Cotton Hoodie",
      "Lime Green High-Density Embroidery",
      "Reinforced Canvas Tote Bag",
      "Unisex Oversized Studio Fit"
    ],
    options: ["Small", "Medium", "Large", "X-Large"]
  },
  {
    id: "pitch-playbook",
    title: "Stakeholder Pitch Deck Template & Financial ROI Calculator",
    price: 49,
    originalPrice: 79,
    category: "Figma Playbooks",
    tag: "MOST POPULAR",
    image: "/images/pitch_deck.png",
    rating: 5.0,
    reviewsCount: 215,
    summary: "50+ Figma slide templates • Financial ROI framing framework • Objection response cheatsheet • PDF + Keynote exports.",
    description: "Never struggle to justify your design decisions again. This toolkit gives you 50+ fully customizable Figma presentation slides, metric calculator components, and proven scripts to pitch to C-suite executives, product managers, and clients.",
    features: [
      "50+ Figma Auto-layout Slides",
      "Excel/Sheets Metric ROI Calculator",
      "Objection Handling Script Cheatsheet",
      "Lifetime Updates & Figma Community File"
    ]
  },
  {
    id: "full-course-pass",
    title: "Krackerz Full Sales Course Pass & 1-on-1 Pitch Review",
    price: 149,
    originalPrice: 219,
    category: "Course Bundles",
    tag: "RECOMMENDED",
    image: "/images/hero_designer.png",
    rating: 5.0,
    reviewsCount: 310,
    summary: "Lifetime access to all 8 course modules • 50+ scenario drills • Private Slack community • 1-on-1 video portfolio audit.",
    description: "The complete sales masterclass built specifically for UI/UX, product, and brand designers. Learn how to pitch your work, negotiate salary, handle tough executive pushback, and land high-paying clients.",
    features: [
      "8 Core Video Modules (12+ Hours)",
      "50+ Interactive Scenario Drills",
      "Private Mentor Slack Access",
      "1-on-1 Live Portfolio Audit Video"
    ]
  }
];

interface ProductStoreProps {
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

export default function ProductStore({ onSelectProduct, onAddToCart }: ProductStoreProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Items");

  const categories = ["All Items", "Merch & Apparel", "Course Bundles", "Figma Playbooks", "Stickers"];

  const filteredProducts =
    selectedCategory === "All Items"
      ? PRODUCTS_DATA
      : PRODUCTS_DATA.filter((p) => p.category === selectedCategory);

  return (
    <section id="store" className="py-24 bg-[#161616] text-[#FFFFFF] border-b border-[#262626]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="px-3.5 py-1.5 rounded-full bg-[#C8FF2E] text-[#161616] text-xs font-black uppercase tracking-wider shadow-glow-lime">
              KRACKERZ OFFICIAL STORE
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mt-4 text-[#FFFFFF]">
              Merch, Playbooks & <span className="text-[#C8FF2E]">Course Bundles</span>
            </h2>
            <p className="text-base text-[#F7F6F0]/80 mt-2 max-w-xl">
              Click any product to view full details, specifications, customer reviews & instant checkout.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  selectedCategory === cat
                    ? "bg-[#C8FF2E] text-[#161616] shadow-glow-lime scale-105"
                    : "bg-[#262626] text-[#F7F6F0]/80 hover:text-[#FFFFFF] border border-[#333333]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid (Pre-Info View) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-[#212121] rounded-[24px] border-2 border-[#333333] hover:border-[#C8FF2E] transition-all overflow-hidden flex flex-col justify-between group shadow-xl hover:shadow-[0_10px_30px_rgba(200,255,46,0.15)]"
            >
              <div>
                {/* Product Image Preview */}
                <div className="relative h-56 w-full bg-[#161616] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Badge */}
                  <span className="absolute top-3 left-3 px-3 py-1 bg-[#161616] text-[#C8FF2E] border border-[#C8FF2E] text-[10px] font-black rounded-full uppercase">
                    {product.tag}
                  </span>

                  {/* Rating Badge */}
                  <span className="absolute top-3 right-3 px-2.5 py-1 bg-[#161616]/80 backdrop-blur-sm text-white text-[11px] font-bold rounded-full flex items-center gap-1 border border-[#333333]">
                    <Star className="w-3 h-3 text-[#C8FF2E] fill-current" />
                    <span>{product.rating}</span>
                  </span>
                </div>

                {/* Pre-Info Card Details */}
                <div className="p-6">
                  <div className="text-[11px] font-bold text-[#0000EE] uppercase tracking-wider mb-1">
                    {product.category}
                  </div>
                  <h3
                    onClick={() => onSelectProduct(product)}
                    className="text-lg font-bold text-[#FFFFFF] group-hover:text-[#C8FF2E] transition-colors cursor-pointer leading-snug mb-3 line-clamp-2"
                  >
                    {product.title}
                  </h3>

                  {/* Pre-info Summary */}
                  <p className="text-xs text-[#F7F6F0]/75 leading-relaxed mb-4 line-clamp-3">
                    {product.summary}
                  </p>

                  {/* Price Tag */}
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-2xl font-black text-[#FFFFFF]">
                      ${product.price}
                    </span>
                    <span className="text-xs text-[#F7F6F0]/50 line-through">
                      ${product.originalPrice}
                    </span>
                    <span className="text-[10px] font-bold text-[#C8FF2E] uppercase">
                      Save ${product.originalPrice - product.price}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0 space-y-2">
                <button
                  onClick={() => onSelectProduct(product)}
                  className="w-full py-2.5 bg-[#262626] hover:bg-[#333333] text-[#FFFFFF] hover:text-[#C8FF2E] font-bold text-xs rounded-full border border-[#333333] transition-all flex items-center justify-center gap-2"
                >
                  <Eye className="w-3.5 h-3.5 text-[#C8FF2E]" />
                  <span>Quick Info & Details</span>
                </button>

                <button
                  onClick={() => onAddToCart(product)}
                  className="w-full py-2.5 bg-[#C8FF2E] text-[#161616] font-extrabold text-xs rounded-full hover:bg-[#b2e622] transition-all shadow-glow-lime flex items-center justify-center gap-2"
                >
                  <ShoppingBag className="w-3.5 h-3.5 fill-[#161616]" />
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
