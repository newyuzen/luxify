"use client";

import { useState } from "react";

export default function Home() {

  const [image, setImage] = useState("");

  const [result, setResult] = useState(false);

  const [style, setStyle] = useState("");

  const [vibe, setVibe] = useState("");

  const [brands, setBrands] = useState<any[]>([]);

  const analyzeFace = () => {

    const random = Math.floor(Math.random() * 4);

    if (random === 0) {

      setStyle("Sporty Clean Girl");

      setVibe("pilates princess energy");

      setBrands([
        {
          brand: "NIKE",
          image: "/brands/nike.jpg",
          link: "https://onelink.one/s/AtDaY",
        },

        {
          brand: "FILA",
          image: "/brands/fila.jpg",
          link: "https://onelink.one/s/RQ7gW",
        },

        {
          brand: "lululemon",
          image: "/brands/lululemon.jpg",
          link: "https://afflink.one/s/QGH6s",
        },
      ]);

    }

    else if (random === 1) {

      setStyle("Quiet Luxury");

      setVibe("soft rich girl aesthetic");

      setBrands([
        {
          brand: "Calvin Klein",
          image: "/brands/ck.jpg",
          link: "https://linkgo.one/s/sRTCW",
        },

        {
          brand: "ALLSAINTS",
          image: "/brands/allsaints.jpg",
          link: "https://linkgo.one/s/b513D",
        },

        {
          brand: "Club21",
          image: "/brands/club21.jpg",
          link: "https://linkgo.one/s/pwyOv",
        },
      ]);

    }

    else if (random === 2) {

      setStyle("Dark Feminine");

      setVibe("mysterious hot girl energy");

      setBrands([
        {
          brand: "Jaded London",
          image: "/brands/jaded.jpg",
          link: "https://afflink.one/s/4Epn5",
        },

        {
          brand: "CHARLES & KEITH",
          image: "/brands/charles.jpg",
          link: "https://linkgo.one/s/rSHNC",
        },

        {
          brand: "Check2Check",
          image: "/brands/check2check.jpg",
          link: "https://linkgo.one/s/a4JKZ",
        },
      ]);

    }

    else {

      setStyle("Pinterest Trend Girl");

      setVibe("clean influencer aesthetic");

      setBrands([
        {
          brand: "FASBEE",
          image: "/brands/fasbee.jpg",
          link: "https://linkgo.one/s/mAYZw",
        },

        {
          brand: "Goelia",
          image: "/brands/goelia.jpg",
          link: "https://onelink.one/s/SQgev",
        },

        {
          brand: "Shopbop",
          image: "/brands/shopbop.jpg",
          link: "https://afflink.one/s/DN6vD",
        },
      ]);

    }

    setResult(true);

  };

  return (

    <main className="min-h-screen bg-black text-white px-6 py-12">

      <div className="max-w-6xl mx-auto">

        <div className="mb-14">

          <h1 className="text-7xl font-bold mb-4">
            LUXIFY AI
          </h1>

          <p className="text-zinc-400 text-lg">
            AI beauty & aesthetic analysis
          </p>

        </div>

        <div className="bg-zinc-900 rounded-3xl p-6 mb-10">

          <input
            type="text"
            placeholder="Paste image URL..."
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="w-full bg-black border border-zinc-800 rounded-2xl px-5 py-4 outline-none"
          />

          <button
            onClick={analyzeFace}
            className="mt-5 bg-white text-black px-6 py-3 rounded-full font-semibold"
          >
            Analyze My Face ✨
          </button>

        </div>

        {result && (

          <>

            <div className="bg-zinc-900 rounded-3xl p-8 mb-10">

              <p className="text-zinc-500 mb-2">
                AI DETECTED STYLE
              </p>

              <h2 className="text-5xl font-bold mb-4">
                {style}
              </h2>

              <p className="text-zinc-300 text-lg">
                {vibe}
              </p>

            </div>

            <h2 className="text-3xl font-bold mb-6">
              Recommended Brands
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {brands.map((item, index) => (

                <div
                  key={index}
                  className="bg-zinc-900 rounded-3xl overflow-hidden"
                >

                  <img
                    src={item.image}
                    alt={item.brand}
                    className="w-full h-72 object-cover"
                  />

                  <div className="p-5">

                    <h3 className="text-2xl font-bold">
                      {item.brand}
                    </h3>

                    <a
                      href={item.link}
                      target="_blank"
                      className="inline-block mt-5 bg-white text-black px-5 py-2 rounded-full"
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