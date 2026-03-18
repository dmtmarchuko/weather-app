'use client'
import {CityContext} from '../CityProvider'
import fetchGet from '../../lib/fetchGet'
import { useEffect, useState, useContext } from 'react'

export const Weather = () => {
    const {city} = useContext(CityContext)
    const [weather, setWeather] = useState(null)

    useEffect(() => {
        const load = async () => {
            const data = await fetchGet.getToday(city);
            setWeather(data)
        };
        load()
    },[city]);

    if(!weather){
        return <div>Loading...</div>
    }

    const today = new Date();
    const dayName = today.toLocaleDateString('en-EN', { weekday: 'long' });

    let s = city
    let WeatherCity = s
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

    return(
        <div className="weather__container">
            <div className='group'>
                <img className="weather__container__img" src={`/img/${weather.weather[0].main}.svg`} alt="" />
                {weather && <h1 className="weather__container__degrees">{weather.main.temp}</h1>}
            </div>
            <div className="weather__container__location">
                <h4 className="weather__container__city">{WeatherCity}</h4>
                <h4 className="weather__container__day">{dayName}</h4>
            </div>
        </div>
    )
}