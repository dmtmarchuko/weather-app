'use client'
import {CityContext} from '../CityProvider'
import fetchGet from '../../lib/fetchGet'
import { useEffect, useState, useContext } from 'react'


export const WindSpeed = () => {
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

    return(
        <div className="WindSpeed">
            <div className="WindSpeed__section">
                <img className="WindSpeed__section__img" src="/img/water.svg" alt="" />
                <div className="WindSpeed__section__info">
                    <p className="WindSpeed__section__bold">{weather.main.humidity}%</p>
                    <p className="WindSpeed__section__text">Humidity</p>
                </div>
            </div>
            <div className="WindSpeed__section">
                <img className="WindSpeed__section__img" src="/img/wind.svg" alt="" />
                <div className="WindSpeed__section__info">
                    <p className="WindSpeed__section__bold">{weather.wind.speed}km/h</p>
                    <p className="WindSpeed__section__text">Wind Speed</p>
                </div>
            </div>
        </div>
    )
}