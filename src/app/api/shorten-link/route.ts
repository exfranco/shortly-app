import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    console.log('Request received at /api/shorten-link');
    
    const { url } = await request.json();
    console.log('URL received:', url);

    const apiKey = process.env.URLDAY_API_KEY;
    console.log('API Key:', apiKey); // Log para verificar si se está obteniendo la API key en producción

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

    console.log('Response status from URL Bae:', apiResponse.status);

    if (apiResponse.status !== 200) {
      const errorText = await apiResponse.text();
      console.error('Error from URL shortening API:', apiResponse.status, errorText);
      return NextResponse.json({ error: apiResponse.statusText }, { status: apiResponse.status });
    }

    const data = await apiResponse.json();
    console.log('Data received from URL Bae:', data);
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error('Error in API route:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
