"use client";

import { useState } from "react";

export default function Home() {
  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(false);

  const [score, setScore] = useState(92);
  const [type, setType] = useState("Luxury Muse");

  const handleUpload = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];

    if (file) {
      setImage(URL.createObjectURL(file));
      setResult(false);
    }
  };

  const analyzePhoto = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);

      const scores = [82, 86, 89, 93, 96, 98];

      const types = [
        "Cold Beauty",
        "Luxury Muse",
        "Main Character Energy",
        "Soft Glam Aura",
        "Editorial Face",
        "Dark Feminine",
        "Rich Girl Energy",
      ];

      const randomScore =
        scores[Math.floor(Math.random() * scores.length)];

      const randomType =
        types[Math.floor(Math.random() * types.length)];

      setScore(randomScore);
      setType(randomType);

      setResult(true);
    }, 2000);
  };

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="w-full max-w-sm">

        <h1 className="text-center text-4xl font-bold mb-2 tracking-tight">
          LUXIFY AI
        </h1>

        <p className="text-center text-gray-400 mb-10 text-sm">
          Discover your luxury aura
        </p>

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 shadow-2xl">

          <div className="flex flex-col items-center">

            {image ? (
              <img
                src={image}
                alt="preview"
                className="w-40 h-40 object-cover rounded-2xl mb-5"
              />
            ) : (
              <label className="w-40 h-40 rounded-2xl bg-zinc-800 flex items-center justify-center text-gray-500 cursor-pointer mb-5">
                Upload
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
                onClick={analyzePhoto}
                className="bg-white text-black px-6 py-3 rounded-full font-medium hover:scale-105 transition"
              >
                {loading ? "Analyzing..." : "Analyze Energy"}
              </button>
            )}
          </div>

          {result && (
            <div className="mt-8 border-t border-zinc-800 pt-6">

              <div className="flex justify-between items-center mb-6">
                <div>
                  <p className="text-xs text-gray-500 tracking-widest">
                    LUXIFY ANALYSIS
                  </p>

                  <h2 className="text-2xl font-bold mt-1">
                    Elite Aura Analysis
                  </h2>
                </div>

                <div className="text-3xl">
                  ✨
                </div>
              </div>

              <div className="mb-8">
                <p className="text-gray-400 text-sm mb-1">
                  Aura Score
                </p>

                <h1 className="text-6xl font-bold">
                  {score}%
                </h1>
              </div>

              <div className="space-y-4 text-sm">

                <div className="flex justify-between">
                  <span className="text-gray-400">
                    Visual Identity
                  </span>

                  <span>
                    {type}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-400">
                    Presence
                  </span>

                  <span>
                    Mysterious & Magnetic
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-400">
                    Main Character Energy
                  </span>

                  <span>
                    9.6 / 10
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-400">
                    Social Influence
                  </span>

                  <span>
                    Exceptionally High
                  </span>
                </div>

              </div>

              <button className="w-full mt-8 bg-white text-black py-3 rounded-2xl font-semibold hover:scale-[1.02] transition">
                Download Result
              </button>

            </div>
          )}

        </div>
      </div>
    </main>
  );
}