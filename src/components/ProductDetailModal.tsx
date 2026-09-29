"use client";

import React, { useState } from "react";
import { X, Star, CheckCircle2, ShoppingBag, ShieldCheck, Truck, Sparkles, ArrowRight } from "lucide-react";
import { Product } from "./ProductStore";
import confetti from "canvas-confetti";

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, selectedOption?: string, quantity?: number) => void;
  onOpenWaitlist: () => void;
}

export default function ProductDetailModal({
  product,
  onClose,
  onAddToCart,
  onOpenWaitlist,
}: ProductDetailModalProps) {
  const [selectedOption, setSelectedOption] = useState<string>(
    product?.options ? product.options[0] : ""
  );
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) return null;

  const handleAdd = () => {
    onAddToCart(product, selectedOption, quantity);
    setAdded(true);
    confetti({
      particleCount: 60,
      spread: 50,
      origin: { y: 0.6 },
    });
    setTimeout(() => {
      setAdded(false);
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#161616] border border-[#333333] rounded-[28px] max-w-3xl w-full p-6 sm:p-8 shadow-2xl relative text-[#FFFFFF] max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-[#F7F6F0]/60 hover:text-[#FFFFFF] bg-[#262626] rounded-full transition-colors z-20"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Product Image Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="relative rounded-2xl overflow-hidden border-2 border-[#333333] bg-[#212121] h-72 w-full">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover"
              />
              <span className="absolute top-3 left-3 px-3 py-1 bg-[#161616] text-[#C8FF2E] border border-[#C8FF2E] text-[10px] font-black rounded-full uppercase">
                {product.tag}
              </span>
            </div>

            {/* Micro guarantee callouts */}
            <div className="space-y-2 text-xs text-[#F7F6F0]/70">
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-[#C8FF2E]" />
                <span>Instant digital delivery / Free global shipping</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#0000EE]" />
                <span>100% Satisfaction or money back within 14 days</span>
              </div>
            </div>
          </div>

          {/* Product Details Column */}
          <div className="md:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-bold text-[#0000EE] uppercase tracking-wider bg-[#0000EE]/20 px-3 py-1 rounded-full border border-[#0000EE]/40">
                {product.category}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#FFFFFF] mt-3 leading-snug">
                {product.title}
              </h2>

              {/* Rating */}
              <div className="flex items-center gap-2 mt-2">
                <div className="flex items-center text-[#C8FF2E]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-xs font-bold text-[#F7F6F0]">
                  {product.rating} ({product.reviewsCount} verified reviews)
                </span>
              </div>
            </div>

            {/* Price Box */}
            <div className="flex items-baseline gap-3 p-4 bg-[#212121] rounded-2xl border border-[#333333]">
              <span className="text-4xl font-black text-[#FFFFFF]">
                ${product.price}
              </span>
              <span className="text-sm text-[#F7F6F0]/50 line-through">
                ${product.originalPrice}
              </span>
              <span className="px-2.5 py-1 bg-[#C8FF2E] text-[#161616] text-xs font-extrabold rounded-full ml-auto">
                SAVE ${product.originalPrice - product.price}
              </span>
            </div>

            {/* Description */}
            <p className="text-sm text-[#F7F6F0]/85 leading-relaxed">
              {product.description}
            </p>

            {/* Option Selector if available */}
            {product.options && (
              <div>
                <label className="block text-xs font-bold uppercase text-[#F7F6F0]/70 mb-2">
                  Select Size / Option:
                </label>
                <div className="flex flex-wrap gap-2">
                  {product.options.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => setSelectedOption(opt)}
                      className={`px-4 py-2 rounded-xl text-xs font-bold border transition-all ${
                        selectedOption === opt
                          ? "bg-[#C8FF2E] text-[#161616] border-[#C8FF2E]"
                          : "bg-[#212121] text-[#F7F6F0] border-[#333333]"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Key Features Checklist */}
            <div className="space-y-2">
              <div className="text-xs font-bold uppercase text-[#C8FF2E]">WHAT'S INCLUDED:</div>
              {product.features.map((feat, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-[#F7F6F0]">
                  <CheckCircle2 className="w-4 h-4 text-[#C8FF2E] shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            {/* Quantity and Add to Cart Actions */}
            <div className="pt-4 border-t border-[#333333] flex items-center gap-4">
              <div className="flex items-center bg-[#212121] border border-[#333333] rounded-full p-1">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-8 h-8 rounded-full bg-[#161616] text-[#FFFFFF] font-bold text-sm flex items-center justify-center hover:bg-[#333333]"
                >
                  -
                </button>
                <span className="w-10 text-center font-bold text-sm text-[#FFFFFF]">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-8 h-8 rounded-full bg-[#161616] text-[#FFFFFF] font-bold text-sm flex items-center justify-center hover:bg-[#333333]"
                >
                  +
                </button>
              </div>

              <button
                onClick={handleAdd}
                className="flex-1 py-3.5 bg-[#C8FF2E] text-[#161616] font-extrabold text-sm rounded-full shadow-glow-lime hover:bg-[#b2e622] transition-all flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-4 h-4 fill-[#161616]" />
                <span>{added ? "ADDED TO CART!" : `ADD ${quantity} TO CART • $${product.price * quantity}`}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
