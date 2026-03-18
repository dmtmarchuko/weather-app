"use client"

import fetchGet from '../../../lib/fetchGet'
import {CityContext} from '../../CityProvider'
import { useContext, useState, useEffect } from 'react'

export const WeekInfo = () => {
    const {city} = useContext(CityContext)
    const [today, setToday] = useState(null)
    const [air, setAir] = useState(null)

    useEffect(() => {
        const load = async () => {
            const data = await fetchGet.getToday(city);
            setToday(data)
        };
        load()
    },[city]);

    useEffect(() => {

        if(!city)return
        
        const load = async () => {
            const data = await fetchGet.getAirQuality(city);
            setAir(data)
        };
        load()
    },[city]);

    if(!today || !air){
        return <div>Loading...</div>
    }

    const sunrise = today.sys.sunrise
    const sunset = today.sys.sunset

    const dataSunrise = new Date(sunrise * 1000).toLocaleTimeString("en-EN", {hour:"2-digit", minute:"2-digit"})
    const dataSunset = new Date(sunset * 1000).toLocaleTimeString("en-EN", {hour:"2-digit", minute:"2-digit"})
    
    let HOW = ''
    let COLOR = ''
    if(today.main.pressure < 1000){
        HOW = "Low"
        COLOR = "Blue"
    }else if(today.main.pressure > 1025){
        HOW = "Hight"
        COLOR = "Red"
    }else{
        HOW = "Normal"
        COLOR = "Green"
    }

    const AIR = air.list[0].main.aqi
    let AIRtext = ''
    let AIRcolor = ''

    if(AIR === 1){
        AIRcolor = "Green"
        AIRtext = "Very Good"
    }else if(AIR === 2){
        AIRcolor = "Yellow"
        AIRtext = "Good"
    }else if (AIR === 3){
        AIRcolor = "Orange"
        AIRtext = "Moderate"
    }else if (AIR === 3){
        AIRcolor = "Red"
        AIRtext = "Poor"
    }else if (AIR === 4){
        AIRcolor = "Purple"
        AIRtext = "Very Poor"
    }

    return(
        <div className="Week__Info">
            <h3 className="Week__Info__Title">Today’s Overview</h3>
            <div className="Week__Info__section">
                <div className="Week__Info__block">
                    <p className="Week__Info__name">Air Quality Index</p>
                    <p className='Week__Info__state'>{AIR}</p>
                    <div className="Week__Info__block__params">
                        <p className={`Week__Info__block__parag ${AIRcolor}`}>{AIRtext}</p>
                        <img className='imgWidth' src="../../../img/air-pollution.svg" alt=""/>
                    </div>
                </div>
                <div className="Week__Info__block">
                    <p className="Week__Info__name">Pressure (hpa)</p>
                    <p className="Week__Info__state">{today.main.pressure}</p>
                    <div className="Week__Info__block__params">
                        <p className={`Week__Info__block__parag ${COLOR}`}>{HOW}</p>
                        <img className='imgWidth' src="../../../img/barometer.svg" alt=""/>
                    </div>
                </div>
                <div className="Week__Info__block">
                    <p className="Week__Info__name">Sunrise & Sunset</p>
                    <div className="Week__Info__Sunset">
                        <div className="Week__Info__Sunset__div">
                            <img className='imgSunrise'  src="../../../img/Sunrise.svg" alt=""/>
                            <div className="Week__Info__Sunset__div__p">
                                <p className="Week__Info__Sunset__div__switch">Sunrise</p>
                                <p className="Week__Info__Sunset__div__time">{dataSunrise}</p>
                            </div>
                        </div>
                        <div className="Week__Info__Sunset__div">
                            <img className='imgSunrise' src="../../../img/Sunset.svg" alt=""/>
                            <div className="Week__Info__Sunset__div__p">
                                <p className="Week__Info__Sunset__div__switch">Sunset</p>
                                <p className="Week__Info__Sunset__div__time">{dataSunset}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}