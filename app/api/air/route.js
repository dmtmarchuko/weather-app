export async function GET(request) {
    try{
        const { searchParams } = new URL(request.url);
        const city = searchParams.get('city');

        const API_KEY = process.env.WEATHER_API_KEY;
    
        const response = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}`);
        
        const data = await response.json();
        const lat = data.coord.lat
        const lon = data.coord.lon

        const air = await fetch(`https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`)
        const airData = await air.json()

        return Response.json(airData)
    } catch (error) {
        console.error('SERVER ERROR:', error);
        return Response.json({ error: 'Failed to fetch weather data' }, { status: 500 });
    }
}
