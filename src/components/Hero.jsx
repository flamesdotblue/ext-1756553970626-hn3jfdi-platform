import React from "react";

export default function Hero() {
  return (
    <section className="relative">
      <div className="absolute inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2400&auto=format&fit=crop"
          alt="Golden hour over pine forest and mountains"
          className="h-[72vh] w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-50 via-stone-50/30 to-transparent" />
      </div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="max-w-2xl">
          <p className="inline-block rounded-full border border-white/40 bg-white/60 px-3 py-1 text-xs tracking-wide backdrop-blur">Hand-poured in small batches</p>
          <h1 className="mt-4 font-semibold tracking-tight text-4xl sm:text-5xl leading-tight text-stone-900">National Park candles for the trail memories you can light again.</h1>
          <p className="mt-4 text-stone-700 max-w-lg">Each scent is crafted to echo the wild—pine groves after rain, canyon winds at sunset, alpine meadows in bloom. Clean-burning wax, cotton wicks, and recyclable packaging.</p>
          <div className="mt-6 flex items-center gap-3">
            <a href="#shop" className="inline-flex items-center justify-center rounded-md bg-stone-900 px-5 py-3 text-white text-sm hover:bg-stone-800">Shop Candles</a>
            <a href="#gift" className="inline-flex items-center justify-center rounded-md border border-stone-300 bg-white px-5 py-3 text-sm hover:bg-stone-50">Gift Packaging</a>
          </div>
        </div>
      </div>
    </section>
  );
}
