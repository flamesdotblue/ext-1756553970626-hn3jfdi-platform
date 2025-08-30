import React from "react";

const products = [
  {
    id: "yosemite",
    name: "Yosemite",
    notes: ["Giant Sequoia", "Mountain Pine", "Morning Mist"],
    image:
      "https://images.unsplash.com/photo-1470074558764-1dcb4100e9a9?q=80&w=1600&auto=format&fit=crop",
    price: 28,
  },
  {
    id: "zion",
    name: "Zion",
    notes: ["Red Sandstone", "Desert Sage", "Amber"],
    image:
      "https://images.unsplash.com/photo-1508264165352-258a6ab6b33e?q=80&w=1600&auto=format&fit=crop",
    price: 28,
  },
  {
    id: "acadia",
    name: "Acadia",
    notes: ["Coastal Spruce", "Sea Salt", "Wild Blueberry"],
    image:
      "https://images.unsplash.com/photo-1535914254981-b5012eebbd15?q=80&w=1600&auto=format&fit=crop",
    price: 28,
  },
  {
    id: "rocky-mountain",
    name: "Rocky Mountain",
    notes: ["Alpine Fir", "Snowmelt", "Cedarwood"],
    image:
      "https://images.unsplash.com/photo-1520690214124-2405c5217031?q=80&w=1600&auto=format&fit=crop",
    price: 28,
  },
];

function NotePill({ note }) {
  return (
    <span className="inline-flex items-center rounded-full bg-stone-100 px-2.5 py-1 text-xs text-stone-700">
      {note}
    </span>
  );
}

function ProductCard({ product }) {
  return (
    <div className="group rounded-xl border border-stone-200 bg-white shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      <div className="relative h-56 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold tracking-tight text-lg">{product.name}</h3>
          <span className="text-stone-900 font-medium">${product.price}.00</span>
        </div>
        <p className="mt-1 text-sm text-stone-600">Scent notes</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {product.notes.map((n) => (
            <NotePill key={n} note={n} />
          ))}
        </div>
        <div className="mt-5 flex items-center gap-2">
          <button className="inline-flex w-full items-center justify-center rounded-md bg-stone-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-stone-800">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default function ProductGrid() {
  return (
    <section id="shop" className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
      <div className="flex items-end justify-between">
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Park Collection</h2>
          <p className="mt-2 text-stone-600 max-w-2xl">
            A curated collection of clean-burning candles inspired by iconic National Parks. Designed to bring the trail home, one light at a time.
          </p>
        </div>
        <a href="#gift" className="hidden sm:inline-flex text-sm underline underline-offset-4 hover:text-stone-900">
          Looking for gifts?
        </a>
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
