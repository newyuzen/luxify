export async function POST() {
  return Response.json({
    result: {
      aesthetic: "clean girl",
      brands: [
        "Jaded London",
        "Charles & Keith",
        "Check2Check",
        "Nike",
        "Fila"
      ],
    },
  });
}