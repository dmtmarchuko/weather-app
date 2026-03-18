const URL = 'http://localhost:3000/api/';

const fetchGet = {
    getToday: async (city) => {
        const response = await fetch(`${URL}weather?city=${city}`);
        return response.json();
    },
    
    getForecast: async (city) => {
        const response = await fetch(`${URL}forecast?city=${city}`);
        return response.json();
    },

    getAirQuality: async (city) => {
        const response = await fetch(`${URL}air?city=${city}`);
        return response.json();
    },
}

export default fetchGet;