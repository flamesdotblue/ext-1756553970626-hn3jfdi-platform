import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductGrid from "./components/ProductGrid";
import GiftOptions from "./components/GiftOptions";

export default function App() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      <Navbar />
      <main>
        <Hero />
        <ProductGrid />
        <GiftOptions />
      </main>
      <footer className="border-t border-stone-200 py-10 text-center text-sm text-stone-600">
        <p>© {new Date().getFullYear()} Trail & Ember — Hand-poured candles inspired by America’s National Parks.</p>
        <p className="mt-2">Crafted with soy-coconut wax, cotton wicks, and phthalate-free scents.</p>
      </footer>
    </div>
  );
}
