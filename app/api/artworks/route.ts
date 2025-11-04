export async function GET(request: Request) {
  // Get page parameter
  const { searchParams } = new URL(request.url);
  const page = searchParams.get('page') || '1';
  
  const apiKey = process.env.HARVARD_API_KEY;
  
  if (!apiKey) {
    return Response.json(
      { error: 'API key not configured' },
      { status: 500 }
    );
  }

  try {
    const response = await fetch(
      `https://api.harvardartmuseums.org/object?apikey=${apiKey}&size=20&page=${page}`
    );

    if (!response.ok) {
      if (response.status === 429) {
        return Response.json(
          { error: 'API rate limit exceeded. Please try again later.' },
          { status: 429 }
        );
      }
      throw new Error('Harvard API request failed');
    }

    const data = await response.json();
    return Response.json(data);
    
  } catch (error) {
    console.error('API Error:', error);
    return Response.json(
      { error: 'Failed to fetch artworks. The API may be down.' },
      { status: 500 }
    );
  }
}