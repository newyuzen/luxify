export async function POST() {
  return Response.json({
    result: {
      aesthetic: "clean girl",
      brands: [
        {
          name: "Jaded London",
          vibe: "edgy cool girl",
          image: "/brands/jaded.jpg",
          link: "https://jadedldn.com",
        },

        {
          name: "Charles & Keith",
          vibe: "luxury feminine",
          image: "/brands/charles.jpg",
          link: "https://www.charleskeith.com",
        },

        {
          name: "Check2Check",
          vibe: "korean street style",
          image: "/brands/check2check.jpg",
          link: "https://check2check.com",
        },
      ],
    },
  });
}