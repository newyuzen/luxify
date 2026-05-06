export default function ShopPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">

      <div className="max-w-4xl mx-auto">

        {/* Back Button */}

        <a
          href="/"
          className="inline-block mb-10 text-gray-400 hover:text-white transition"
        >
          ← Back to Analysis
        </a>

        {/* Title */}

        <h1 className="text-5xl font-bold tracking-tight mb-4">
          Your Aesthetic Shop
        </h1>

        <p className="text-gray-400 text-lg mb-14">
          Curated fashion picks for your aura.
        </p>

        {/* Products */}

        <div className="space-y-6">

          {/* CHARLES & KEITH */}

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-7 flex items-center justify-between hover:border-zinc-600 transition">

            <div>
              <p className="text-sm text-gray-500 mb-2">
                CHARLES & KEITH
              </p>

              <h2 className="text-2xl font-semibold">
                Luxury Feminine Vibe
              </h2>

              <p className="text-gray-400 mt-3">
                Elegant bags & accessories for rich girl energy.
              </p>
            </div>

            <a
              href="https://linkgo.one/s/rSHNC"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black px-6 py-3 rounded-2xl font-medium hover:scale-105 transition"
            >
              Shop
            </a>

          </div>

          {/* Calvin Klein */}

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-7 flex items-center justify-between hover:border-zinc-600 transition">

            <div>
              <p className="text-sm text-gray-500 mb-2">
                Calvin Klein
              </p>

              <h2 className="text-2xl font-semibold">
                Clean Rich Girl Essentials
              </h2>

              <p className="text-gray-400 mt-3">
                Minimal fashion with expensive energy.
              </p>
            </div>

            <a
              href="https://linkgo.one/s/sRTCW"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black px-6 py-3 rounded-2xl font-medium hover:scale-105 transition"
            >
              Shop
            </a>

          </div>

          {/* Nike */}

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-7 flex items-center justify-between hover:border-zinc-600 transition">

            <div>
              <p className="text-sm text-gray-500 mb-2">
                Nike
              </p>

              <h2 className="text-2xl font-semibold">
                Cool Girl Street Energy
              </h2>

              <p className="text-gray-400 mt-3">
                Sporty outfits with confident aura.
              </p>
            </div>

            <a
              href="https://onelink.one/s/AtDaY"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black px-6 py-3 rounded-2xl font-medium hover:scale-105 transition"
            >
              Shop
            </a>

          </div>

          {/* FILA */}

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-7 flex items-center justify-between hover:border-zinc-600 transition">

            <div>
              <p className="text-sm text-gray-500 mb-2">
                FILA
              </p>

              <h2 className="text-2xl font-semibold">
                Korean Casual Aesthetic
              </h2>

              <p className="text-gray-400 mt-3">
                Soft sporty looks inspired by Korean fashion.
              </p>
            </div>

            <a
              href="https://onelink.one/s/RQ7gW"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black px-6 py-3 rounded-2xl font-medium hover:scale-105 transition"
            >
              Shop
            </a>

          </div>

        </div>

      </div>

    </main>
  );
}