export async function GET(request: Request) {
  const apiKey = process.env.HARVARD_API_KEY;

  if (!apiKey) {
    return Response.json({ error: "API key not configured" }, { status: 500 });
  }

  try {
    // generate random page number (1-1000)
    const randomPage = Math.floor(Math.random() * 1000) + 1;

    const response = await fetch(
      `https://api.harvardartmuseums.org/object?apikey=${apiKey}&size=20&hasimage=1&page=${randomPage}`
    );

    if (!response.ok) {
      if (response.status === 429) {
        return Response.json(
          { error: "API rate limit exceeded. Please try again later." },
          { status: 429 }
        );
      }
      throw new Error("Harvard API request failed");
    }

    const data = await response.json();
    return Response.json(data);
  } catch (error) {
    console.error("API Error:", error);
    return Response.json(
      { error: "Failed to fetch artworks. The API may be down." },
      { status: 500 }
    );
  }
}
