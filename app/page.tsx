"use client";

import { useState } from "react";

export default function Home() {
  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(false);

  const [score, setScore] = useState(92);
  const [type, setType] = useState("Luxury Muse");
  const [bio, setBio] = useState("");
  const [vibe, setVibe] = useState("");

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
        "Cold Luxury",
        "Soft Glam",
        "Dark Feminine",
        "Main Character",
        "Editorial Face",
        "Rich Girl Energy",
      ];

      const bios = [
        "too rare to explain",
        "emotionally expensive",
        "soft but dangerous",
        "pretty enough to disappear",
        "offline is better",
        "not made for everyone",
      ];

      const vibes = [
        "mirror selfies at night",
        "dark luxury aesthetic",
        "low exposure lifestyle",
        "editorial fashion energy",
        "mysterious main character",
      ];

      const randomScore =
        scores[Math.floor(Math.random() * scores.length)];

      const randomType =
        types[Math.floor(Math.random() * types.length)];

      const randomBio =
        bios[Math.floor(Math.random() * bios.length)];

      const randomVibe =
        vibes[Math.floor(Math.random() * vibes.length)];

      setScore(randomScore);
      setType(randomType);
      setBio(randomBio);
      setVibe(randomVibe);

      setResult(true);
    }, 2000);
  };

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-md">

        <h1 className="text-center text-5xl font-bold mb-3 tracking-tight">
          LUXIFY AI
        </h1>

        <p className="text-center text-gray-400 mb-10">
          Discover your beauty aura & aesthetic identity
        </p>

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 shadow-2xl">

          <div className="flex flex-col items-center">

            {image ? (
              <img
                src={image}
                alt="preview"
                className="w-44 h-44 object-cover rounded-3xl mb-6"
              />
            ) : (
              <label className="w-44 h-44 rounded-3xl bg-zinc-800 flex items-center justify-center text-gray-500 cursor-pointer mb-6 hover:bg-zinc-700 transition">
                Upload Photo
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
            <div className="mt-10 border-t border-zinc-800 pt-8">

              <div className="flex justify-between items-center mb-8">
                <div>
                  <p className="text-xs text-gray-500 tracking-widest">
                    LUXIFY ANALYSIS
                  </p>

                  <h2 className="text-3xl font-bold mt-2">
                    Elite Aura Analysis
                  </h2>
                </div>

                <div className="text-4xl">
                  ✨
                </div>
              </div>

              <div className="mb-8">
                <p className="text-gray-400 text-sm mb-2">
                  Aura Score
                </p>

                <h1 className="text-7xl font-bold">
                  {score}%
                </h1>
              </div>

              <div className="space-y-5 text-sm">

                <div className="flex justify-between">
                  <span className="text-gray-400">
                    Visual Identity
                  </span>

                  <span className="text-right">
                    {type}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-400">
                    Presence
                  </span>

                  <span className="text-right">
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

                <div className="flex justify-between">
                  <span className="text-gray-400">
                    Best IG Bio
                  </span>

                  <span className="text-right max-w-[180px]">
                    {bio}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-400">
                    Best Aesthetic
                  </span>

                  <span className="text-right max-w-[180px]">
                    {vibe}
                  </span>
                </div>

              </div>

              <button
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: "LUXIFY AI",
                      text: "Check out my aura result ✨",
                      url: window.location.href,
                    });
                  }
                }}
                className="w-full mt-8 bg-white text-black py-3 rounded-2xl font-semibold hover:scale-105 transition"
              >
                Share Result
              </button>

              <a
                href="/shop"
                className="block w-full mt-4 bg-zinc-800 text-white py-3 rounded-2xl font-semibold text-center hover:scale-105 transition"
              >
                View Your Aesthetic
              </a>

            </div>
          )}

        </div>
      </div>
    </main>
  );
}