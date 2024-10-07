import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    // Log para verificar si el cuerpo de la solicitud se está recibiendo correctamente
    console.log('Receiving request...');
    const { url } = await request.json();
    console.log('URL received:', url);

    // Verifica que la API key esté presente
    const apiKey = process.env.NEXT_PUBLIC_URLDAY_API_KEY;
    if (!apiKey) {
      console.error('API Key is missing');
      return NextResponse.json({ error: 'API Key is missing' }, { status: 500 });
    }

    console.log('Using API Key:', apiKey);

    const apiResponse = await fetch(`https://www.urlday.com/api/v1/links?search=${url}`, {
      method: 'GET',
      headers: {
        //'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Bearer ${apiKey}`,
        'Accept': 'application/json'
      },
      /*body: new URLSearchParams({
        url: url
      }),*/
    });
    console.log('API Response:', apiResponse);
    console.log('API Response status:', apiResponse.status);

    if (apiResponse.status != 200) {
      //const errorData = await apiResponse.json();
      console.error('API Error:', apiResponse.statusText);
      return NextResponse.json({ error: apiResponse.statusText }, { status: apiResponse.status });
    }

    const data = await apiResponse.json();
    console.log('Data from API:', data);
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error('Error in API route:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
