"use client";

import React, { useState } from "react";
import { X, Trash2, ShoppingBag, ArrowRight, ShieldCheck, Tag, CheckCircle2 } from "lucide-react";
import { Product } from "./ProductStore";
import confetti from "canvas-confetti";

export interface CartItem {
  product: Product;
  selectedOption?: string;
  quantity: number;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
}

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}: CartDrawerProps) {
  const [couponCode, setCouponCode] = useState("");
  const [appliedDiscount, setAppliedDiscount] = useState(0);
  const [checkoutCompleted, setCheckoutCompleted] = useState(false);

  if (!isOpen) return null;

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );

  const discountAmount = (subtotal * appliedDiscount) / 100;
  const total = Math.max(0, subtotal - discountAmount);

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (couponCode.trim().toUpperCase() === "KRACK20") {
      setAppliedDiscount(20);
    } else {
      alert("Invalid code! Use KRACK20 for 20% off.");
    }
  };

  const handleCheckout = () => {
    setCheckoutCompleted(true);
    confetti({
      particleCount: 150,
      spread: 90,
      origin: { y: 0.5 },
    });
  };

  const handleDone = () => {
    setCheckoutCompleted(false);
    onClearCart();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/80 backdrop-blur-sm animate-in fade-in duration-200 flex justify-end">
      <div className="w-full max-w-md bg-[#161616] border-l border-[#333333] h-full shadow-2xl flex flex-col justify-between text-[#FFFFFF] relative animate-in slide-in-from-right duration-300">
        {/* Header */}
        <div className="p-6 border-b border-[#262626] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#C8FF2E]" />
            <h3 className="font-extrabold text-lg text-[#FFFFFF]">Your Shopping Cart</h3>
            <span className="px-2 py-0.5 bg-[#C8FF2E] text-[#161616] text-xs font-bold rounded-full">
              {cartItems.reduce((a, b) => a + b.quantity, 0)} items
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-[#F7F6F0]/60 hover:text-[#FFFFFF] bg-[#262626] rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        {!checkoutCompleted ? (
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {cartItems.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <ShoppingBag className="w-16 h-16 text-[#333333] mx-auto" />
                <h4 className="font-extrabold text-lg text-[#FFFFFF]">Your cart is empty</h4>
                <p className="text-xs text-[#F7F6F0]/60 max-w-xs mx-auto">
                  Explore our merch, stickers, pitch decks and course bundles to get started.
                </p>
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 bg-[#C8FF2E] text-[#161616] font-extrabold text-xs rounded-full shadow-glow-lime"
                >
                  START SHOPPING
                </button>
              </div>
            ) : (
              <>
                {/* Free Shipping Bar */}
                <div className="p-3 bg-[#212121] rounded-xl border border-[#333333] text-xs">
                  <div className="flex justify-between font-bold mb-1">
                    <span>Free Shipping Threshold</span>
                    <span className="text-[#C8FF2E]">
                      {subtotal >= 100 ? "UNLOCKED!" : `$${100 - subtotal} away`}
                    </span>
                  </div>
                  <div className="w-full h-1.5 bg-[#262626] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#C8FF2E] transition-all duration-300"
                      style={{ width: `${Math.min(100, (subtotal / 100) * 100)}%` }}
                    />
                  </div>
                </div>

                {/* Items List */}
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div
                      key={item.product.id}
                      className="p-4 bg-[#212121] rounded-2xl border border-[#333333] flex items-center gap-4 relative"
                    >
                      <img
                        src={item.product.image}
                        alt={item.product.title}
                        className="w-16 h-16 rounded-xl object-cover border border-[#333333] shrink-0"
                      />

                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-xs text-[#FFFFFF] truncate">
                          {item.product.title}
                        </h4>
                        {item.selectedOption && (
                          <span className="text-[10px] text-[#C8FF2E] font-bold block">
                            Size/Option: {item.selectedOption}
                          </span>
                        )}
                        <div className="font-extrabold text-sm text-[#FFFFFF] mt-1">
                          ${item.product.price}
                        </div>
                      </div>

                      {/* Quantity counter */}
                      <div className="flex items-center gap-1 bg-[#161616] p-1 rounded-full border border-[#333333]">
                        <button
                          onClick={() =>
                            onUpdateQuantity(item.product.id, Math.max(1, item.quantity - 1))
                          }
                          className="w-6 h-6 rounded-full text-xs font-bold text-[#F7F6F0] hover:bg-[#333333]"
                        >
                          -
                        </button>
                        <span className="w-6 text-center text-xs font-bold">{item.quantity}</span>
                        <button
                          onClick={() =>
                            onUpdateQuantity(item.product.id, item.quantity + 1)
                          }
                          className="w-6 h-6 rounded-full text-xs font-bold text-[#F7F6F0] hover:bg-[#333333]"
                        >
                          +
                        </button>
                      </div>

                      <button
                        onClick={() => onRemoveItem(item.product.id)}
                        className="text-[#F7F6F0]/40 hover:text-red-400 p-1"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>

                {/* Coupon Code Input */}
                <form onSubmit={handleApplyCoupon} className="flex gap-2 pt-2">
                  <div className="relative flex-1">
                    <Tag className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#F7F6F0]/40" />
                    <input
                      type="text"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      placeholder="Promo Code (KRACK20)"
                      className="w-full pl-9 pr-3 py-2 bg-[#212121] border border-[#333333] rounded-xl text-xs text-[#FFFFFF] focus:outline-none focus:border-[#C8FF2E]"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-[#262626] text-[#C8FF2E] font-bold text-xs rounded-xl border border-[#333333] hover:bg-[#333333]"
                  >
                    Apply
                  </button>
                </form>

                {appliedDiscount > 0 && (
                  <div className="text-xs text-[#C8FF2E] font-bold flex items-center justify-between">
                    <span>Discount Applied (20% OFF)</span>
                    <span>-${discountAmount.toFixed(2)}</span>
                  </div>
                )}
              </>
            )}
          </div>
        ) : (
          /* Checkout Completed Screen */
          <div className="flex-1 p-8 text-center flex flex-col items-center justify-center space-y-4">
            <CheckCircle2 className="w-20 h-20 text-[#C8FF2E] animate-bounce" />
            <h3 className="text-2xl font-black text-[#FFFFFF]">ORDER CONFIRMED! 🚀</h3>
            <p className="text-xs text-[#F7F6F0]/80 max-w-xs">
              Thank you for ordering! Digital downloads & tracking details have been sent to your email.
            </p>
            <div className="p-4 bg-[#212121] rounded-2xl border border-[#333333] text-xs font-bold text-[#C8FF2E] w-full">
              Order ID: #KRACK-{Math.floor(Math.random() * 90000 + 10000)}
            </div>
            <button
              onClick={handleDone}
              className="w-full py-3 bg-[#C8FF2E] text-[#161616] font-extrabold text-xs rounded-full shadow-glow-lime"
            >
              DONE
            </button>
          </div>
        )}

        {/* Footer Checkout Summary */}
        {cartItems.length > 0 && !checkoutCompleted && (
          <div className="p-6 border-t border-[#262626] bg-[#1a1a1a] space-y-4">
            <div className="space-y-1.5 text-xs text-[#F7F6F0]/80">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-bold text-[#FFFFFF]">${subtotal.toFixed(2)}</span>
              </div>
              {appliedDiscount > 0 && (
                <div className="flex justify-between text-[#C8FF2E]">
                  <span>Discount (20%)</span>
                  <span>-${discountAmount.toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Shipping</span>
                <span className="font-bold text-[#C8FF2E]">
                  {subtotal >= 100 ? "FREE" : "$4.99"}
                </span>
              </div>
              <div className="flex justify-between pt-2 border-t border-[#333333] text-sm font-black text-[#FFFFFF]">
                <span>Total</span>
                <span className="text-[#C8FF2E]">
                  ${(total + (subtotal >= 100 ? 0 : 4.99)).toFixed(2)}
                </span>
              </div>
            </div>

            <button
              onClick={handleCheckout}
              className="w-full py-3.5 bg-[#C8FF2E] text-[#161616] font-extrabold text-sm rounded-full shadow-glow-lime hover:bg-[#b2e622] transition-all flex items-center justify-center gap-2"
            >
              <span>PROCEED TO CHECKOUT</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
