export default function ShopPage() {
  const products = [
    {
      brand: "NIKE",
      vibe: "sporty clean aesthetic",
      link: "https://onelink.one/s/AtDaY",
    },

    {
      brand: "Calvin Klein",
      vibe: "emotionally expensive",
      link: "https://linkgo.one/s/sRTCW",
    },

    {
      brand: "CHARLES & KEITH",
      vibe: "dark feminine aesthetic",
      link: "https://linkgo.one/s/rSHNC",
    },

    {
      brand: "FILA",
      vibe: "off-duty model vibe",
      link: "https://onelink.one/s/RQ7gW",
    },

    {
      brand: "Jaded London",
      vibe: "hot girl after midnight",
      link: "https://afflink.one/s/4Epn5",
    },

    {
      brand: "ALLSAINTS",
      vibe: "rich girl aura",
      link: "https://linkgo.one/s/b513D",
    },

    {
      brand: "lululemon",
      vibe: "pilates girl energy",
      link: "https://afflink.one/s/QGH6s",
    },

    {
      brand: "Goelia",
      vibe: "french soft girl",
      link: "https://onelink.one/s/SQgev",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">

      <div className="max-w-6xl mx-auto">

        <a
          href="/"
          className="text-gray-400 hover:text-white transition"
        >
          ← Back
        </a>

        <h1 className="text-5xl font-bold mt-6 mb-3">
          Your Aesthetic Shop
        </h1>

        <p className="text-gray-400 mb-12">
          Curated fashion & beauty brands for your aura.
        </p>

        <div className="grid md:grid-cols-2 gap-6">

          {products.map((product, index) => (
            <div
              key={index}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6"
            >

              <div className="h-56 bg-zinc-800 rounded-2xl mb-5"></div>

              <h2 className="text-2xl font-semibold">
                {product.brand}
              </h2>

              <p className="text-gray-400 mt-2 mb-6">
                {product.vibe}
              </p>

              <a
                href={product.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-black px-5 py-3 rounded-2xl font-medium hover:scale-105 transition"
              >
                Shop Now
              </a>

            </div>
          ))}

        </div>

      </div>

      <a
  href="/shop/all"
  className="block w-full mt-10 bg-white text-black py-4 rounded-2xl text-center font-semibold hover:scale-105 transition"
>
  View More Products
</a>

    </main>
  );
}
