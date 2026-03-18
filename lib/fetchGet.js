const fetchGet = {
    getToday: async (city) => {
        const response = await fetch(`/api/weather?city=${city}`);
        return response.json();
    },
    
    getForecast: async (city) => {
        const response = await fetch(`/api/forecast?city=${city}`);
        return response.json();
    },

    getAirQuality: async (city) => {
        const response = await fetch(`/api/air?city=${city}`);
        return response.json();
    },
}

export default fetchGet;