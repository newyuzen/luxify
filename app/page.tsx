"use client";

import { useState } from "react";

const aesthetics = [
  "Soft Elegance",
  "Clean Girl",
  "Old Money",
  "Coquette",
  "Model Off Duty",
  "Luxury Minimal",
  "Dark Feminine",
  "Romantic Muse",
  "Korean Soft Glam",
  "Rich Girl Aura",
];

const vibes = [
  "Warm & Elegant",
  "Cold Beauty",
  "Luxury Princess",
  "Soft Feminine",
  "High Fashion",
  "Chic & Clean",
  "Elegant Aura",
  "Dreamy Beauty",
  "Natural Luxury",
];

const analysisTexts = [
  "Your facial harmony creates a soft luxury aura with elegant proportions.",
  "You have a naturally attractive and balanced face structure that fits clean luxury styles.",
  "Your features give a dreamy feminine vibe that suits elegant aesthetics.",
  "Your appearance feels expensive, calm, and effortlessly attractive.",
  "You match minimal luxury fashion with clean and sophisticated energy.",
];

const brands = [
  {
    name: "CELINE",
    link: "https://www.celine.com",
  },

  {
    name: "CHANEL",
    link: "https://www.chanel.com",
  },

  {
    name: "DIOR",
    link: "https://www.dior.com",
  },

  {
    name: "PRADA",
    link: "https://www.prada.com",
  },

  {
    name: "MIU MIU",
    link: "https://www.miumiu.com",
  },

  {
    name: "LOEWE",
    link: "https://www.loewe.com",
  },

  {
    name: "CHARLES & KEITH",
    link: "https://www.charleskeith.com",
  },
];

export default function Home() {
  const [image, setImage] = useState<string | null>(null);
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [brand, setBrand] = useState("");
  const [locked, setLocked] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState<any>(null);
  const [rolling, setRolling] = useState(false);

  const handleUpload = (e: any) => {
    const file = e.target.files[0];

    if (!file) return;

    const url = URL.createObjectURL(file);
    setImage(url);
    setResult(null);
setLocked(false);
setSelectedBrand(null);
setBrand("");
  };

  const analyzeFace = async () => {
    if (!image) return;

    setLoading(true);

    setTimeout(() => {
      const randomScore = Math.floor(Math.random() * 21) + 80;

      const aesthetic =
        aesthetics[Math.floor(Math.random() * aesthetics.length)];

      const vibe = vibes[Math.floor(Math.random() * vibes.length)];

      const analysis =
        analysisTexts[Math.floor(Math.random() * analysisTexts.length)];

      setResult({
        score: randomScore,
        aesthetic,
        vibe,
        analysis,
      });

      setLoading(false);
    }, 2000);
  };

  const rollBrand = () => {

  if (locked) return;

  setRolling(true);

  let count = 0;

  const interval = setInterval(() => {

    const random =
      brands[Math.floor(Math.random() * brands.length)];

    setBrand(random.name);

    count++;

    if (count >= 20) {

      clearInterval(interval);

      setRolling(false);

      setLocked(true);

      setSelectedBrand(random);

    }

  }, 120);

};

  return (
    <main className="min-h-screen bg-[#fff4f6] text-black px-6 py-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-6xl font-bold tracking-tight mb-3">
          LUXIFY AI
        </h1>

        <p className="text-zinc-600 text-lg mb-10">
          Discover Your Aesthetic Identity
        </p>

        <div className="bg-white rounded-[40px] p-8 shadow-sm border border-pink-100">
          <div className="flex flex-col items-center">
            {!image ? (
              <label className="w-72 h-72 rounded-[35px] border-2 border-dashed border-pink-200 bg-pink-50 flex flex-col items-center justify-center cursor-pointer hover:bg-pink-100 transition">
                <div className="text-6xl text-pink-300 mb-3">+</div>

                <p className="text-xl font-medium">
                  Upload Your Photo
                </p>

                <p className="text-zinc-400 mt-2">
                  JPG / PNG
                </p>

                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleUpload}
                />
              </label>
            ) : (
              <img
                src={image}
                alt="preview"
                className="w-72 h-72 object-cover rounded-[35px]"
              />
            )}

            <button
              onClick={analyzeFace}
              className="mt-8 bg-black text-white px-10 py-4 rounded-full text-lg hover:scale-105 transition"
            >
              Analyze My Face ✨
            </button>
          </div>
        </div>

        {loading && (
          <div className="mt-10 text-center text-xl">
            Analyzing your beauty aura...
          </div>
        )}

        {result && (
          <div className="mt-10 grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-[35px] p-6 border border-pink-100">
              <img
                src={image!}
                className="w-full h-[420px] object-cover rounded-[25px]"
              />

              <button
                onClick={() => {
                  navigator.share?.({
                    title: "My Luxify Result",
                    text: "Check my AI beauty result!",
                    url: window.location.href,
                  });
                }}
                className="w-full mt-6 bg-pink-400 hover:bg-pink-500 text-white py-4 rounded-full text-lg transition"
              >
                Share Result
              </button>
            </div>

            <div className="space-y-5">
              <div className="bg-white rounded-[30px] p-6 border border-pink-100">
                <p className="text-zinc-500 mb-2">
                  Beauty Score
                </p>

                <h2 className="text-7xl font-bold">
                  {result.score}
                  <span className="text-2xl text-zinc-400">
                    /100
                  </span>
                </h2>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-[25px] p-5 border border-pink-100">
                  <p className="text-zinc-500 mb-2">
                    Aesthetic Type
                  </p>

                  <h3 className="text-xl font-semibold">
                    {result.aesthetic}
                  </h3>
                </div>

                <div className="bg-white rounded-[25px] p-5 border border-pink-100">
                  <p className="text-zinc-500 mb-2">
                    Face Vibe
                  </p>

                  <h3 className="text-xl font-semibold">
                    {result.vibe}
                  </h3>
                </div>
              </div>

              <div className="bg-white rounded-[30px] p-6 border border-pink-100">
                <h3 className="text-2xl font-bold mb-4">
                  AI Analysis
                </h3>

                <p className="text-zinc-600 leading-8">
                  {result.analysis}
                </p>
              </div>

              <div className="bg-white rounded-[30px] p-6 border border-pink-100">
                <h3 className="text-2xl font-bold mb-6 text-center">
                  Your Lucky Brand ✨
                </h3>

                <div className="bg-gradient-to-r from-pink-200 to-pink-100 rounded-[25px] h-40 flex items-center justify-center text-4xl font-bold">

  {selectedBrand ? (

    <a
      href={selectedBrand.link}
      target="_blank"
      className="hover:scale-110 transition"
    >
      {selectedBrand.name}
    </a>

  ) : (

    <span>{brand || "???"}</span>

  )}

</div>

                <button
  onClick={rollBrand}
  disabled={locked || rolling}
  className={`w-full mt-6 py-4 rounded-full text-lg transition ${
    locked
      ? "bg-zinc-300 text-zinc-500 cursor-not-allowed"
      : "bg-black text-white hover:scale-105"
  }`}
>
  {rolling
    ? "Matching Your Brand..."
    : locked
    ? "Brand Matched ✨"
    : "Find Your Brand"}
</button>

                <a
  href="/shop/all"
  className="block text-center w-full mt-4 border border-pink-200 py-4 rounded-full text-lg hover:bg-pink-50 transition"
>
  View All Brands
</a>
              </div>
            </div>
          </div>
        )}

        
      </div>
    </main>
  );
}

