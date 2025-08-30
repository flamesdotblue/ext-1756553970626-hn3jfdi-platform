import React, { useState } from "react";
import { Gift } from "lucide-react";

export default function GiftOptions() {
  const [wrap, setWrap] = useState(true);
  const [note, setNote] = useState("");
  const [setChoice, setSetChoice] = useState("duo");

  return (
    <section id="gift" className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
      <div className="rounded-2xl border border-stone-200 bg-gradient-to-br from-white to-stone-50 p-6 sm:p-10">
        <div className="flex items-start gap-4">
          <div className="mt-1 rounded-full bg-emerald-100 p-2 text-emerald-700">
            <Gift className="h-5 w-5" />
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-semibold tracking-tight">Elevate your gift</h3>
            <p className="mt-1 text-stone-600">Thoughtful details make it unforgettable—sustainably wrapped boxes, reusable tins, and a handwritten card.</p>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <div className="rounded-lg border border-stone-200 bg-white p-4">
                  <div className="flex items-center justify-between">
                    <label htmlFor="wrap" className="font-medium">Gift wrap</label>
                    <input
                      id="wrap"
                      type="checkbox"
                      checked={wrap}
                      onChange={(e) => setWrap(e.target.checked)}
                      className="h-5 w-5 accent-stone-900"
                    />
                  </div>
                  <p className="mt-2 text-sm text-stone-600">Plastic-free kraft paper, natural twine, pressed fern sprig.</p>
                </div>

                <div className="rounded-lg border border-stone-200 bg-white p-4">
                  <label htmlFor="message" className="font-medium">Handwritten note</label>
                  <textarea
                    id="message"
                    rows={3}
                    placeholder="Write your message here..."
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    className="mt-2 w-full rounded-md border border-stone-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-stone-400"
                  />
                  <p className="mt-1 text-xs text-stone-500">We’ll write this exactly as provided.</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="rounded-lg border border-stone-200 bg-white p-4">
                  <p className="font-medium">Curated gift sets</p>
                  <div className="mt-3 grid grid-cols-3 gap-2 text-sm">
                    <button
                      onClick={() => setSetChoice("solo")}
                      className={`rounded-md border px-3 py-2 ${setChoice === "solo" ? "border-stone-900 bg-stone-900 text-white" : "border-stone-300 bg-white"}`}
                    >
                      Solo
                    </button>
                    <button
                      onClick={() => setSetChoice("duo")}
                      className={`rounded-md border px-3 py-2 ${setChoice === "duo" ? "border-stone-900 bg-stone-900 text-white" : "border-stone-300 bg-white"}`}
                    >
                      Duo
                    </button>
                    <button
                      onClick={() => setSetChoice("trio")}
                      className={`rounded-md border px-3 py-2 ${setChoice === "trio" ? "border-stone-900 bg-stone-900 text-white" : "border-stone-300 bg-white"}`}
                    >
                      Trio
                    </button>
                  </div>
                  <p className="mt-2 text-stone-600">Choose a set size and we’ll pair complementary park scents with matching packaging.</p>
                </div>

                <div className="rounded-lg border border-stone-200 bg-white p-4">
                  <p className="font-medium">Preview</p>
                  <div className="mt-3 space-y-1 text-sm text-stone-700">
                    <p>Gift wrap: <span className="font-medium">{wrap ? "Included" : "No wrap"}</span></p>
                    <p>Set: <span className="font-medium capitalize">{setChoice}</span></p>
                    <p>Note: <span className="font-medium">{note ? `${note.slice(0, 60)}${note.length > 60 ? "…" : ""}` : "None"}</span></p>
                  </div>
                  <button className="mt-4 inline-flex w-full items-center justify-center rounded-md bg-stone-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-stone-800">
                    Add Gift Packaging - $6
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <InfoCard
                title="Sustainable by design"
                body="Recycled boxes, soy-coconut wax, and plastic-free filler—good for your home and the places that inspired us."
              />
              <InfoCard
                title="Ships in 1–2 days"
                body="Fast, careful fulfillment from our mountain studio. Free shipping over $60 in the contiguous U.S."
              />
              <InfoCard
                title="Perfect for any occasion"
                body="Birthdays, thank-yous, or just because—our park-inspired scents make easy, thoughtful gifts."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({ title, body }) {
  return (
    <div className="rounded-lg border border-stone-200 bg-white p-4">
      <p className="font-medium">{title}</p>
      <p className="mt-1 text-sm text-stone-600">{body}</p>
    </div>
  );
}
