export async function GET(request) {
    try{
        const { searchParams } = new URL(request.url);
        const city = searchParams.get('city');

        const API_KEY = process.env.WEATHER_API_KEY;
    
        const response = await fetch (`https://api.openweathermap.org/data/2.5/forecast?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`);
        
        const data = await response.json();
        return Response.json(data);
    } catch (error) {
        console.error('SERVER ERROR:', error);
        return Response.json({ error: 'Failed to fetch weather data' }, { status: 500 });
    }
}
