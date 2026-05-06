"use client";

import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleUpload = (e: any) => {
    const file = e.target.files?.[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result as string);
    };

    reader.readAsDataURL(file);
  };

  const analyzeFace = async () => {
    if (!image) return;

    setLoading(true);

    try {
      const res = await fetch("/api/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ image }),
      });

      const data = await res.json();

      setResult(data);
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-black text-white px-6 py-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-7xl font-black tracking-tight text-center mb-4">
          LUXIFY AI
        </h1>

        <p className="text-center text-zinc-400 text-lg mb-12">
          Discover your beauty aura & aesthetic identity
        </p>

        <div className="bg-zinc-900 border border-zinc-800 rounded-[32px] p-8">
          <div className="flex flex-col items-center">
            {image ? (
              <img
                src={image}
                alt="preview"
                className="w-72 h-72 object-cover rounded-[28px] mb-6"
              />
            ) : (
              <label className="w-72 h-72 rounded-[28px] bg-zinc-800 border border-dashed border-zinc-600 flex items-center justify-center cursor-pointer hover:bg-zinc-700 transition mb-6">
                <span className="text-zinc-400 text-lg">
                  Upload Photo
                </span>

                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleUpload}
                />
              </label>
            )}

            {image && (
              <button
                onClick={analyzeFace}
                className="bg-white text-black px-8 py-4 rounded-full font-bold hover:scale-105 transition"
              >
                {loading ? "Analyzing..." : "Analyze My Face ✨"}
              </button>
            )}
          </div>

          {result && (
            <div className="mt-12">
              <div className="grid md:grid-cols-3 gap-5 mb-8">
                <div className="bg-zinc-800 rounded-3xl p-6">
                  <p className="text-zinc-400 text-sm mb-2">
                    Beauty Score
                  </p>

                  <h2 className="text-5xl font-black">
                    {result.score || "92"}
                  </h2>
                </div>

                <div className="bg-zinc-800 rounded-3xl p-6">
                  <p className="text-zinc-400 text-sm mb-2">
                    Aesthetic Type
                  </p>

                  <h2 className="text-3xl font-bold capitalize">
                    {result.aesthetic || "Clean Girl"}
                  </h2>
                </div>

                <div className="bg-zinc-800 rounded-3xl p-6">
                  <p className="text-zinc-400 text-sm mb-2">
                    Face Vibe
                  </p>

                  <h2 className="text-3xl font-bold">
                    {result.vibe || "Elegant"}
                  </h2>
                </div>
              </div>

              <div className="bg-zinc-800 rounded-3xl p-6 mb-8">
                <h3 className="text-2xl font-bold mb-4">
                  AI Analysis
                </h3>

                <p className="text-zinc-300 leading-relaxed text-lg">
                  {result.analysis ||
                    "You have a clean and soft luxury aura with balanced facial harmony and elegant features."}
                </p>
              </div>

              <div className="flex flex-wrap gap-4 mb-12">
                <button
  onClick={() => {
    navigator.clipboard.writeText(window.location.href);
    alert("Link copied!");
  }}
  className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition"
>
  Share Result
</button>

                <Link
                  href="/shop"
                  className="border border-zinc-700 px-6 py-3 rounded-full hover:bg-zinc-800 transition"
                >
                  View Recommended Brands
                </Link>
              </div>

              <div className="flex items-center justify-between mb-6">
                <h2 className="text-4xl font-bold">
                  Recommended Brands
                </h2>

                <Link
                  href="/shop/all"
                  className="text-zinc-400 hover:text-white transition"
                >
                  View More →
                </Link>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-zinc-800 rounded-3xl overflow-hidden">
                  <img
                    src="/brands/jaded.jpg"
                    className="w-full h-52 object-cover"
                  />

                  <div className="p-5">
                    <h3 className="font-bold text-xl mb-2">
                      Jaded London
                    </h3>

                    <p className="text-zinc-400 mb-4">
                      Edgy fashion aesthetic
                    </p>

                    <a
                      href="https://jadedldn.com"
                      target="_blank"
                      className="bg-white text-black px-4 py-2 rounded-full inline-block"
                    >
                      Shop Now
                    </a>
                  </div>
                </div>

                <div className="bg-zinc-800 rounded-3xl overflow-hidden">
                  <img
                    src="/brands/charles.jpg"
                    className="w-full h-52 object-cover"
                  />

                  <div className="p-5">
                    <h3 className="font-bold text-xl mb-2">
                      CHARLES & KEITH
                    </h3>

                    <p className="text-zinc-400 mb-4">
                      Elegant feminine vibe
                    </p>

                    <a
                      href="https://charleskeith.com"
                      target="_blank"
                      className="bg-white text-black px-4 py-2 rounded-full inline-block"
                    >
                      Shop Now
                    </a>
                  </div>
                </div>

                <div className="bg-zinc-800 rounded-3xl overflow-hidden">
                  <img
                    src="/brands/check2check.jpg"
                    className="w-full h-52 object-cover"
                  />

                  <div className="p-5">
                    <h3 className="font-bold text-xl mb-2">
                      CHECK2CHECK
                    </h3>

                    <p className="text-zinc-400 mb-4">
                      Luxury vintage fashion
                    </p>

                    <a
                      href="https://check2check.com"
                      target="_blank"
                      className="bg-white text-black px-4 py-2 rounded-full inline-block"
                    >
                      Shop Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}