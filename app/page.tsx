"use client";

import { useState } from "react";

export default function Home() {
  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(false);

  const [score, setScore] = useState(92);
  const [type, setType] = useState("Cold Korean Luxury");

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
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

      const scores = [78, 82, 87, 91, 96];
      const randomScore =
        scores[Math.floor(Math.random() * scores.length)];

      const types = [
        "Cold Korean Luxury",
        "Dark Feminine",
        "Soft Rich Girl",
        "Main Character",
        "Model Energy",
      ];

      const randomType =
        types[Math.floor(Math.random() * types.length)];

      setScore(randomScore);
      setType(randomType);

      setResult(true);
    }, 2500);
  };

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="max-w-3xl text-center">

        <p className="text-sm tracking-[0.3em] text-gray-400 mb-6">
          LUXIFY AI
        </p>

        <h1 className="text-5xl md:text-7xl font-semibold leading-tight mb-6">
          看看你的氛圍看起來是否昂貴
        </h1>

        <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
          AI 會分析你的氣場、能量輪廓和主角潛力。
        </p>

        <label className="bg-white text-black px-6 py-3 rounded-full font-medium hover:scale-105 transition cursor-pointer inline-block">
          上傳照片
          <input
            type="file"
            accept="image/*"
            onChange={handleUpload}
            className="hidden"
          />
        </label>

        {image && (
          <div className="mt-10 flex flex-col items-center">

            <img
              src={image}
              alt="preview"
              className="w-64 h-64 object-cover rounded-3xl border border-white/10 mb-6"
            />

            <button
              onClick={analyzePhoto}
              className="border border-white/20 px-6 py-3 rounded-full hover:bg-white/10 transition"
            >
              Analyze Aura
            </button>

          </div>
        )}

        {loading && (
          <p className="mt-8 text-gray-400 animate-pulse">
            Analyzing luxury aura...
          </p>
        )}

        {result && (
          <div className="mt-10 bg-gradient-to-b from-white/10 to-white/5 border border-white/10 rounded-[32px] p-8 text-left max-w-md mx-auto backdrop-blur-xl shadow-2xl">

            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-sm text-gray-400">
                  LUXIFY ANALYSIS
                </p>

                <h2 className="text-2xl font-semibold mt-1">
                  Luxury Aura Result
                </h2>
              </div>

              <div className="text-4xl">
                ✨
              </div>
            </div>

            <div className="space-y-5">

              <div>
                <p className="text-gray-500 text-sm mb-1">
                  Aura Score
                </p>

                <h3 className="text-4xl font-bold">
                  {score}%
                </h3>
              </div>

              <div className="border-t border-white/10 pt-5 space-y-4">

                <div className="flex justify-between">
                  <span className="text-gray-400">
                    Visual Type
                  </span>

                  <span>
                    {type}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-400">
                    Energy
                  </span>

                  <span>
                    Mysterious
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-400">
                    Main Character
                  </span>

                  <span>
                    9.4 / 10
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-400">
                    Social Potential
                  </span>

                  <span>
                    Very High
                  </span>
                </div>

              </div>

              <button className="w-full mt-6 bg-white text-black py-3 rounded-2xl font-medium hover:scale-[1.02] transition">
                Download Result
              </button>

            </div>
          </div>
        )}

      </div>
    </main>
  );
}