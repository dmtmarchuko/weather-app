export async function GET(request) {
    try{
        const { searchParams } = new URL(request.url);
        const city = searchParams.get('city');
        const lat = searchParams.get("lat");
        const lon = searchParams.get("lon");

        const API_KEY = process.env.WEATHER_API_KEY;
        
        let url
        
        if(city) {
            url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        }

        if(lat && lon) {
            url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
        }

    
        const response = await fetch(url)
        const data = await response.json();

        return Response.json(data);
    } catch (error) {
        console.error('SERVER ERROR:', error);
        return Response.json({ error: 'Failed to fetch weather data' }, { status: 404 });
    }
}