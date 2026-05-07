const brands = [
  {
    name: "Jaded London",
    image: "/brands/jaded.jpg",
    vibe: "Dark Feminine",
    link: "https://afflink.one/s/4Epn5",
  },

  {
    name: "CHARLES & KEITH",
    image: "/brands/charles.jpg",
    vibe: "Luxury Feminine",
    link: "https://linkgo.one/s/rSHNC",
  },

  {
    name: "FASBEE",
    image: "/brands/fasbee.jpg",
    vibe: "Korean Soft Girl",
    link: "https://linkgo.one/s/mAYZw",
  },

  {
    name: "Shopbop",
    image: "/brands/shopbop.jpg",
    vibe: "Model Off Duty",
    link: "https://afflink.one/s/DN6vD",
  },

  {
    name: "Club21",
    image: "/brands/club21.jpg",
    vibe: "Quiet Luxury",
    link: "https://linkgo.one/s/pwyOv",
  },

  {
    name: "Goelia",
    image: "/brands/goelia.jpg",
    vibe: "Soft Elegant",
    link: "https://onelink.one/s/SQgev",
  },

  {
    name: "ALLSAINTS",
    image: "/brands/allsaints.jpg",
    vibe: "Cool Rich Girl",
    link: "https://linkgo.one/s/b513D",
  },

  {
    name: "WISKII",
    image: "/brands/wiskii.jpg",
    vibe: "Pilates Princess",
    link: "https://onelink.one/s/Im7nr",
  },

  {
    name: "LePARMENTIER",
    image: "/brands/leparmentier.jpg",
    vibe: "Old Money",
    link: "https://afflink.one/s/6ulxI",
  },

  {
    name: "lululemon",
    image: "/brands/lululemon.jpg",
    vibe: "Clean Girl",
    link: "https://afflink.one/s/QGH6s",
  },

  {
    name: "Check2Check",
    image: "/brands/check2check.jpg",
    vibe: "Vintage Luxury",
    link: "https://linkgo.one/s/a4JKZ",
  },

  {
    name: "NIKE",
    image: "/brands/nike.jpg",
    vibe: "Sporty Aesthetic",
    link: "https://onelink.one/s/AtDaY",
  },
];

export default function AllBrandsPage() {
  return (
    <main className="min-h-screen bg-[#fff4f6] px-6 py-10">

      <div className="max-w-7xl mx-auto">

        <div className="mb-12">

          <p className="text-pink-400 font-medium mb-3">
            LUXIFY AI SHOP
          </p>

          <h1 className="text-6xl font-bold tracking-tight mb-4">
            All Brands
          </h1>

          <p className="text-zinc-500 text-lg">
            Luxury brands matched to your beauty aura
          </p>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">

          {brands.map((brand) => (

            <a
              key={brand.name}
              href={brand.link}
              target="_blank"
              className="bg-white rounded-[32px] overflow-hidden border border-pink-100 hover:scale-[1.03] hover:shadow-xl transition duration-300"
            >

              <img
                src={brand.image}
                alt={brand.name}
                className="w-full h-[320px] object-contain bg-[#fff7f8]"
              />

              <div className="p-6">

                <p className="text-pink-400 text-sm mb-2">
                  {brand.vibe}
                </p>

                <h2 className="text-2xl font-bold mb-5">
                  {brand.name}
                </h2>

                <div className="flex items-center justify-between">

                  <span className="text-zinc-500">
                    Shop Now
                  </span>

                  <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center">
                    →
                  </div>

                </div>

              </div>

            </a>

          ))}

        </div>

      </div>

    </main>
  );
}

