"use client";

import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [imageUrl, setImageUrl] = useState("");
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const analyzeFace = async () => {
    if (!imageUrl) return;

    setLoading(true);

    try {
      const res = await fetch("/api/analyze", {
        method: "POST",
      });

      const data = await res.json();

      setResult(data.result);
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-black text-white px-6 py-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-6xl font-bold mb-3">LUXIFY AI</h1>

        <p className="text-zinc-400 mb-10">
          AI Aesthetic Analysis Platform
        </p>

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 mb-12">
          <input
            type="text"
            placeholder="Paste image URL..."
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            className="w-full bg-black border border-zinc-700 rounded-2xl px-5 py-4 mb-5 outline-none"
          />

          <button
            onClick={analyzeFace}
            className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:opacity-80 transition"
          >
            {loading ? "Analyzing..." : "Analyze My Face ✨"}
          </button>
        </div>

        {result && (
          <>
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-3">
                Analysis Result
              </h2>

              <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
                <p className="text-zinc-400 mb-3">
                  AI detected your aesthetic:
                </p>

                <h3 className="text-5xl font-bold capitalize">
                  {result.aesthetic}
                </h3>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-bold">
                  Recommended Brands
                </h2>

                <Link
                  href="/shop/all"
                  className="text-zinc-400 hover:text-white transition"
                >
                  View More →
                </Link>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {result.brands.map((brand: any, index: number) => (
                  <div
                    key={index}
                    className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden hover:scale-[1.02] transition"
                  >
                    <img
                      src={brand.image}
                      alt={brand.name}
                      className="w-full h-[280px] object-cover"
                    />

                    <div className="p-5">
                      <h3 className="text-2xl font-bold mb-2">
                        {brand.name}
                      </h3>

                      <p className="text-zinc-400 mb-5">
                        {brand.vibe}
                      </p>

                      <a
                        href={brand.link}
                        target="_blank"
                        className="inline-block bg-white text-black px-5 py-2 rounded-full font-medium"
                      >
                        Shop Now
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </main>
  );
}