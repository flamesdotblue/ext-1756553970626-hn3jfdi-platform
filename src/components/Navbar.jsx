import React from "react";
import { ShoppingCart, Gift, Leaf, Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-stone-200">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Leaf className="h-6 w-6 text-emerald-600" />
            <span className="font-semibold tracking-tight">Trail & Ember</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#shop" className="text-stone-700 hover:text-stone-900">Shop</a>
            <a href="#notes" className="text-stone-700 hover:text-stone-900">Scent Notes</a>
            <a href="#gift" className="text-stone-700 hover:text-stone-900 flex items-center gap-2"><Gift className="h-4 w-4" /> Gift Options</a>
          </nav>
          <div className="flex items-center gap-3">
            <button className="relative inline-flex items-center gap-2 rounded-full border border-stone-200 px-3 py-1.5 text-sm hover:border-stone-300 hover:bg-white">
              <ShoppingCart className="h-4 w-4" />
              <span>Cart</span>
              <span className="ml-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-600 text-white text-xs">0</span>
            </button>
            <button className="md:hidden inline-flex items-center justify-center rounded-md border border-stone-200 p-2 hover:bg-white" aria-label="Menu">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
