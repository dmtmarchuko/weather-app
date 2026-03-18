"use client"

import { createContext, useEffect, useState } from "react"
import fetchGet from '../lib/fetchGet'

export const CityContext = createContext();

export default function CityProvaider({ children }){
    const [city, setCity] = useState("London");
    const [active, setActive] = useState(2)

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(async (position) => {
            const lat = position.coords.latitude
            const lon = position.coords.longitude

            const res = await fetch(`/api/weather?lat=${lat}&lon=${lon}`)
            const data = await res.json()
            console.log(lat, lon)
            setCity(data.name)
        })
    },[])

    return (
        <CityContext.Provider value={{
            city,
            setCity,
            active,
            setActive,
        }}>
            {children}            
        </CityContext.Provider>
    );
}
