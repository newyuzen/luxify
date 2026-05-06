import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {

  try {

    const body = await req.json();

    const image = body.image;

    const response =
      await openai.chat.completions.create({

        model: "gpt-4o-mini",

        messages: [

          {
            role: "user",

            content: [

              {
                type: "text",

                text: `
You are an AI beauty stylist.

Analyze the person's:
- face vibe
- aura
- fashion aesthetic
- beauty style

Choose ONE style only:

1. Sporty Clean Girl
2. Quiet Luxury
3. Dark Feminine
4. Pinterest Trend Girl

Return ONLY JSON.

Example:

{
  "style": "Quiet Luxury",
  "vibe": "soft rich girl aesthetic",
  "brands": [
    {
      "brand": "Calvin Klein",
      "image": "/brands/ck.jpg",
      "link": "https://linkgo.one/s/sRTCW"
    },

    {
      "brand": "ALLSAINTS",
      "image": "/brands/allsaints.jpg",
      "link": "https://linkgo.one/s/b513D"
    }
  ]
}
                `,
              },

              {
                type: "image_url",

                image_url: {
                  url: image,
                },
              },

            ],
          },

        ],

      });

    return Response.json({
      result:
        response.choices[0].message.content,
    });

  } catch (error) {

    console.log(error);

    return Response.json({
      error: "failed",
    });

  }

}