import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    
    
    const { url } = await request.json();
    

    const apiKey = process.env.URLDAY_API_KEY;
    

    if (!apiKey) {
      return NextResponse.json({ error: 'API Key is missing' }, { status: 500 });
    }

    const apiResponse = await fetch(`https://urlbae.com/api/url/add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        url: url
      })
    });

    

    if (apiResponse.status !== 200) {
      const errorText = await apiResponse.text();
      console.error('Error from URL shortening API:', apiResponse.status, errorText);
      return NextResponse.json({ error: apiResponse.statusText }, { status: apiResponse.status });
    }

    const data = await apiResponse.json();
    
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error('Error in API route:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
