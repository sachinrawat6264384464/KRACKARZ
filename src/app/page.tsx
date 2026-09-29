"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MarqueeBanners from "@/components/MarqueeBanners";
import ProductStore, { Product } from "@/components/ProductStore";
import ProductDetailModal from "@/components/ProductDetailModal";
import CartDrawer, { CartItem } from "@/components/CartDrawer";
import CoreFeatures from "@/components/CoreFeatures";
import ScenarioSimulatorModal from "@/components/ScenarioSimulatorModal";
import StickerPlayground from "@/components/StickerPlayground";
import Testimonials from "@/components/Testimonials";
import StatsAndAwards from "@/components/StatsAndAwards";
import PricingSection from "@/components/PricingSection";
import Partnerships from "@/components/Partnerships";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import WaitlistModal from "@/components/WaitlistModal";

export default function Home() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const [isSimulatorOpen, setIsSimulatorOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const handleOpenWaitlist = () => setIsWaitlistOpen(true);
  const handleCloseWaitlist = () => setIsWaitlistOpen(false);

  const handleOpenSimulator = () => setIsSimulatorOpen(true);
  const handleCloseSimulator = () => setIsSimulatorOpen(false);

  const handleScrollToStore = () => {
    const el = document.getElementById("store");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleAddToCart = (product: Product, selectedOption?: string, quantity: number = 1) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity, selectedOption: selectedOption || item.selectedOption }
            : item
        );
      }
      return [...prev, { product, selectedOption, quantity }];
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    setCartItems((prev) =>
      prev.map((item) => (item.product.id === productId ? { ...item, quantity } : item))
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleClearCart = () => setCartItems([]);

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <main className="min-h-screen bg-[#F7F6F0] text-[#161616] font-sans antialiased selection:bg-[#C8FF2E] selection:text-[#161616]">
      {/* Sticky Navigation Header with Cart Badge */}
      <Navbar
        onOpenWaitlist={handleOpenWaitlist}
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Hero Section matching Krackerz screenshot */}
      <Hero
        onOpenWaitlist={handleOpenWaitlist}
        onScrollToStore={handleScrollToStore}
      />

      {/* Marquee & Value Callout Banners */}
      <MarqueeBanners onOpenWaitlist={handleOpenWaitlist} />

      {/* Official E-Commerce Store & Products */}
      <ProductStore
        onSelectProduct={(product) => setSelectedProduct(product)}
        onAddToCart={(product) => handleAddToCart(product)}
      />

      {/* Core Features Tabs & Scenarios */}
      <CoreFeatures
        onOpenWaitlist={handleOpenWaitlist}
        onOpenSimulator={handleOpenSimulator}
      />

      {/* Interactive Sticker Playground */}
      <StickerPlayground onOpenWaitlist={handleOpenWaitlist} />

      {/* Designer Testimonials */}
      <Testimonials onOpenWaitlist={handleOpenWaitlist} />

      {/* Track Record & Industry Awards */}
      <StatsAndAwards />

      {/* Pricing Section */}
      <PricingSection onOpenWaitlist={handleOpenWaitlist} />

      {/* Partner With Us */}
      <Partnerships />

      {/* FAQ Accordion Section */}
      <FAQSection onOpenWaitlist={handleOpenWaitlist} />

      {/* Footer */}
      <Footer onOpenWaitlist={handleOpenWaitlist} />

      {/* Modals & Drawers */}
      <WaitlistModal isOpen={isWaitlistOpen} onClose={handleCloseWaitlist} />

      <ScenarioSimulatorModal
        isOpen={isSimulatorOpen}
        onClose={handleCloseSimulator}
        onOpenWaitlist={handleOpenWaitlist}
      />

      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
        onOpenWaitlist={handleOpenWaitlist}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />
    </main>
  );
}
