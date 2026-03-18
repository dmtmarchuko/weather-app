'use client'

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area} from "recharts";
import {CityContext} from '../../CityProvider'
import { useContext, useState, useEffect } from 'react'
import fetchGet from '../../../lib/fetchGet'
import CustomTooltip from '../ToolTip'

export default function WeekGrafic (){
    const [hour, setHour] = useState(null)
    const graficData = []
    const {city} = useContext(CityContext)

    useEffect(() => {
        const load = async () => {
            const data = await fetchGet.getForecast(city);
            setHour(data)
        };
        load()
    },[city]);

    if(!hour){
        return <div>Loading...</div>
    }

    const chartData = hour.list.slice(0, 9).map((hour) => (graficData.push({
        time: hour.dt_txt.slice(11, 16),
        temp: hour.main.temp
    })))


    
    return(
        <div className="Week__Grafic">
            <div className="Grafic__abs" style={{width: "103%", height: '100%'}}>
                <ResponsiveContainer>
                    <LineChart data={graficData} className="Grafic__hover">
                        <defs>
                            <filter id="shadow">
                                <feDropShadow
                                dx="1"
                                dy="10"
                                stdDeviation="20"
                                floodColor="#4499f3"
                                floodOpacity="0.9"
                                />
                            </filter>
                        </defs>
                        <Line
                            type="monotone"
                            dataKey="temp"
                            strokeWidth={2}
                            filter="url(#shadow)"
                            dot={{ r: 4 }}
                            activeDot={{ r: 6 }}
                        />
                        <CartesianGrid vertical={false} strokeDasharray='2 2' stroke="#000000"/>
                        <XAxis tickLine={false} dataKey="time"/>
                        <YAxis tickLine={false} unit="°C"/>
                        <Tooltip
                            content={<CustomTooltip/>}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}