"use client"

import { CartWeather } from "../CartWeather"
import fetchGet from '../../../lib/fetchGet'
import {CityContext} from '../../CityProvider'
import { useContext, useState, useEffect } from 'react'

export const WeekDays = () => {
    const {city} = useContext(CityContext)
    const [week, setWeek] = useState(null)
    const [today, setToday] = useState(null)

    useEffect(() => {
        const load = async () => {
            const data = await fetchGet.getToday(city);
            setToday(data)
        };
        load()
    },[city]);

    useEffect(() => {
        const load = async () => {
            const data = await fetchGet.getForecast(city);
            setWeek(data)
        };
        load()
    },[city]);

    if(!week || !today){
        return <div>Loading...</div>
    }

    const days = []
    const temp = []
    const weather = []

    const tempToday = today.main.temp
    const weatherToday = today.weather[0].main

    week.list.forEach((item) => {
        const date = item.dt_txt.split(" ")[0];
        if(days.find((day) => day.split(" ")[0] === date)){}else{
            if(item.dt_txt.split(" ")[1] === '12:00:00'){ 
                temp.push(item.main.temp)
                weather.push(item.weather[0].main)
            }
        }
    })

    const daysShort = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    const getNextDays = (count) => {
        const today = new Date();
        const todayIndex = today.getDay(); // 0–6

        const result = [];

        for (let i = 0; i < count; i++) {
            const dayIndex = (todayIndex + i) % 7;
            result.push(daysShort[dayIndex]);
        }

            return result;
    }

    const objectsDays = getNextDays(6);
    objectsDays.forEach((el) => {
        days.push(el)
    })


    return(
        <div className="Week__Days">
            <CartWeather day={"Today"} temp={tempToday} weather={weatherToday}/>
            <CartWeather day={days[1]} temp={temp[0]} weather={weather[0]}/>
            <CartWeather day={days[2]} temp={temp[1]} weather={weather[1]}/>
            <CartWeather day={days[3]} temp={temp[2]} weather={weather[2]}/>
            <CartWeather day={days[4]} temp={temp[3]} weather={weather[3]}/>
            <CartWeather day={days[5]} temp={temp[4]} weather={weather[4]}/>
        </div>
    )
}