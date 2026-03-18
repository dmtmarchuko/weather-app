'use client'
import {CityContext} from '../CityProvider'
import fetchGet from '../../lib/fetchGet'
import { useEffect, useState, useContext } from 'react'

export const Params = () => {
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

    let s = weather.weather[0].description

    let WeatherTitle = s
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

    return(
        <div className="Params">
            <div className="Params__clouds">
                <img src="/img/CloudRain.svg" alt=""/>
                <p>{WeatherTitle}</p>
            </div>
            <div className="Params__TempMax">
                <img src="/img/TempMax.svg" alt=""/>
                <p>Max Temperature {weather.main.temp_max}°C</p>
            </div>
            <div className="Params__TempMin">
                <img src="/img/TempMin.svg" alt=""/>
                <p>Min Temperature {weather.main.temp_min}°C</p>
            </div>
            <div className="Params__TempMin">
                <p>Feels Like: {weather.main.feels_like}°C</p>
            </div>
        </div>
    )
}