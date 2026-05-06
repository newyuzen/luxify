"use client";

import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [preview, setPreview] = useState("");
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleUpload = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {

    const file = e.target.files?.[0];

    if (!file) return;

    const imageUrl = URL.createObjectURL(file);

    setPreview(imageUrl);

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

        <h1 className="text-7xl font-bold mb-3">
          LUXIFY AI
        </h1>

        <p className="text-zinc-400 mb-12 text-lg">
          AI Aesthetic Analysis Platform
        </p>

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 mb-14">

          <label className="block">

            <div className="w-full h-[380px] bg-black border border-zinc-800 rounded-3xl overflow-hidden flex items-center justify-center cursor-pointer hover:opacity-90 transition">

              {preview ? (

                <img
                  src={preview}
                  alt="preview"
                  className="w-full h-full object-cover"
                />

              ) : (

                <div className="text-center">

                  <p className="text-2xl font-semibold mb-3">
                    Upload Your Photo
                  </p>

                  <p className="text-zinc-500">
                    JPG / PNG
                  </p>

                </div>

              )}

            </div>

            <input
              type="file"
              accept="image/*"
              onChange={handleUpload}
              className="hidden"
            />

          </label>

        </div>

        {loading && (

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 mb-12">

            <p className="text-3xl font-bold">
              Analyzing your aesthetic...
            </p>

          </div>

        )}

        {result && (

          <>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 mb-12">

              <p className="text-zinc-400 mb-3">
                AI DETECTED AESTHETIC
              </p>

              <h2 className="text-5xl font-bold capitalize">
                {result.aesthetic}
              </h2>

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

            <div className="grid md:grid-cols-2 gap-6">

              {result.brands.map((brand: any, index: number) => (

                <div
                  key={index}
                  className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden"
                >

                  <img
                    src={brand.image}
                    alt={brand.name}
                    className="w-full h-[300px] object-cover"
                  />

                  <div className="p-6">

                    <h3 className="text-3xl font-bold mb-2">
                      {brand.name}
                    </h3>

                    <p className="text-zinc-400 mb-5">
                      {brand.vibe}
                    </p>

                    <a
                      href={brand.link}
                      target="_blank"
                      className="inline-block bg-white text-black px-5 py-2 rounded-full font-semibold"
                    >
                      Shop Now
                    </a>

                  </div>

                </div>

              ))}

            </div>

          </>

        )}

      </div>

    </main>
  );
}