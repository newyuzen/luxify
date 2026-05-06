export default function AllShopPage() {
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
      brand: "JUICESTORE",
      vibe: "streetwear it girl",
      link: "https://onelink.one/s/hVVtx",
    },

    {
      brand: "FASBEE",
      vibe: "korean trendy aesthetic",
      link: "https://linkgo.one/s/mAYZw",
    },

    {
      brand: "Club21",
      vibe: "quiet luxury energy",
      link: "https://linkgo.one/s/pwyOv",
    },

    {
      brand: "Goelia",
      vibe: "french soft girl",
      link: "https://onelink.one/s/SQgev",
    },

    {
      brand: "WISKII",
      vibe: "pilates girl energy",
      link: "https://onelink.one/s/Im7nr",
    },

    {
      brand: "LePARMENTIER",
      vibe: "rich elegant aura",
      link: "https://afflink.one/s/6ulxI",
    },

    {
      brand: "BEIGY",
      vibe: "minimal feminine aesthetic",
      link: "https://onelink.one/s/QGJCV",
    },

    {
      brand: "AIDAI 愛戴",
      vibe: "cute trendy vibe",
      link: "https://linkgo.one/s/NROA3",
    },

    {
      brand: "MARAIS",
      vibe: "artsy elegant energy",
      link: "https://linkgo.one/s/Gi3Rt",
    },

    {
      brand: "Lucy's",
      vibe: "soft but dangerous",
      link: "https://onelink.one/s/6wPGW",
    },

    {
      brand: "ALLSAINTS",
      vibe: "cold luxury aura",
      link: "https://linkgo.one/s/b513D",
    },

    {
      brand: "lululemon",
      vibe: "clean sporty lifestyle",
      link: "https://afflink.one/s/QGH6s",
    },

    {
      brand: "Check2Check",
      vibe: "dark feminine mood",
      link: "https://linkgo.one/s/a4JKZ",
    },

    {
      brand: "OB嚴選",
      vibe: "pinterest girl energy",
      link: "https://linkgo.one/s/GBqQv",
    },

    {
      brand: "Shopbop",
      vibe: "fashion influencer aesthetic",
      link: "https://afflink.one/s/DN6vD",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">

      <div className="max-w-7xl mx-auto">

        <a
          href="/shop"
          className="text-gray-400 hover:text-white transition"
        >
          ← Back to Shop
        </a>

        <h1 className="text-5xl font-bold mt-6 mb-3">
          Full Aesthetic Collection
        </h1>

        <p className="text-gray-400 mb-12">
          Discover all curated brands for every aura.
        </p>

        <div className="grid md:grid-cols-3 gap-6">

          {products.map((product, index) => (
            <div
              key={index}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6"
            >

              <div className="h-52 bg-zinc-800 rounded-2xl mb-5"></div>

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

    </main>
  );
}