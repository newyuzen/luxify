export default function ShopPage() {

  const products = [

    {
      brand: "NIKE",
      vibe: "sporty it girl",
      image: "/brands/nike.jpg",
      link: "https://onelink.one/s/AtDaY",
    },

    {
      brand: "FILA",
      vibe: "off-duty model vibe",
      image: "/brands/fila.jpg",
      link: "https://onelink.one/s/RQ7gW",
    },

    {
      brand: "Calvin Klein",
      vibe: "minimal cool girl",
      image: "/brands/ck.jpg",
      link: "https://linkgo.one/s/sRTCW",
    },

    {
      brand: "CHARLES & KEITH",
      vibe: "clean feminine energy",
      image: "/brands/charles.jpg",
      link: "https://linkgo.one/s/rSHNC",
    },

    {
      brand: "Jaded London",
      vibe: "hot girl after midnight",
      image: "/brands/jaded.jpg",
      link: "https://afflink.one/s/4Epn5",
    },

    {
      brand: "JUICESTORE",
      vibe: "street luxury aesthetic",
      image: "/brands/juicestore.jpg",
      link: "https://onelink.one/s/hVVtx",
    },

    {
      brand: "FASBEE",
      vibe: "korean pinterest mood",
      image: "/brands/fasbee.jpg",
      link: "https://linkgo.one/s/mAYZw",
    },

    {
      brand: "Club21",
      vibe: "luxury feminine aura",
      image: "/brands/club21.jpg",
      link: "https://linkgo.one/s/pwyOv",
    },

    {
      brand: "Goelia",
      vibe: "french soft girl",
      image: "/brands/goelia.jpg",
      link: "https://onelink.one/s/SQgev",
    },

    {
      brand: "WISKII",
      vibe: "pilates princess",
      image: "/brands/wiskii.jpg",
      link: "https://onelink.one/s/Im7nr",
    },

    {
      brand: "LePARMENTIER Paris",
      vibe: "old money elegance",
      image: "/brands/leparmentier.jpg",
      link: "https://afflink.one/s/6ulxI",
    },

    {
      brand: "BEIGY",
      vibe: "clean luxury lifestyle",
      image: "/brands/beigy.jpg",
      link: "https://onelink.one/s/QGJCV",
    },

    {
      brand: "AIDAI",
      vibe: "soft korean beauty",
      image: "/brands/aidai.jpg",
      link: "https://linkgo.one/s/NROA3",
    },

    {
      brand: "MARAIS",
      vibe: "aesthetic interior mood",
      image: "/brands/marais.jpg",
      link: "https://linkgo.one/s/Gi3Rt",
    },

    {
      brand: "Lucy's",
      vibe: "cute trendy campus girl",
      image: "/brands/lucys.jpg",
      link: "https://onelink.one/s/6wPGW",
    },

    {
      brand: "ALLSAINTS",
      vibe: "dark rich girl aura",
      image: "/brands/allsaints.jpg",
      link: "https://linkgo.one/s/b513D",
    },

    {
      brand: "lululemon",
      vibe: "clean gym girl",
      image: "/brands/lululemon.jpg",
      link: "https://afflink.one/s/QGH6s",
    },

    {
      brand: "Check2Check",
      vibe: "dark feminine trend girl",
      image: "/brands/check2check.jpg",
      link: "https://linkgo.one/s/a4JKZ",
    },

    {
      brand: "OB",
      vibe: "daily korean fit",
      image: "/brands/ob.jpg",
      link: "https://linkgo.one/s/GBqQv",
    },

    {
      brand: "Shopbop",
      vibe: "fashion influencer aesthetic",
      image: "/brands/shopbop.jpg",
      link: "https://afflink.one/s/DN6vD",
    },

  ];

  return (

    <main className="min-h-screen bg-black text-white px-6 py-12">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-6xl font-bold mb-4">
          LUXIFY SHOP
        </h1>

        <p className="text-zinc-400 text-lg mb-14">
          aesthetic brands selected for your vibe
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {products.map((item, index) => (

            <div
              key={index}
              className="bg-zinc-900 rounded-3xl overflow-hidden"
            >

              <img
                src={item.image}
                alt={item.brand}
                className="w-full h-80 object-cover"
              />

              <div className="p-6">

                <h2 className="text-3xl font-bold mb-2">
                  {item.brand}
                </h2>

                <p className="text-zinc-400 mb-5">
                  {item.vibe}
                </p>

                <a
                  href={item.link}
                  target="_blank"
                  className="inline-block bg-white text-black px-5 py-2 rounded-full font-semibold"
                >
                  Shop Now
                </a>

              </div>

            </div>

          ))}

        </div>

      </div>

    </main>

  );

}