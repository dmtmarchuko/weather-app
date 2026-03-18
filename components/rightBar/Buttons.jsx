'use client'

import React , {useContext, useState} from "react"
import {CityContext} from '../CityProvider'

export function ButtonSection () {
    const {active, setActive} = useContext(CityContext)
    const [toggleDiv, setToggleDiv] = useState(false)

    const toggleTheme = () => {
        document.body.classList.toggle("light-theme")
        setToggleDiv(prev => !prev)
    }

    return (
        <div className="btn__section">
            <div>
                <button className={active === 1 ? 'btn__RightBar__Active': 'btn__RightBar'} 
                    onClick={() => setActive(1)}>Today</button>
                <button className={active === 2 ? 'btn__RightBar__Active': 'btn__RightBar'} 
                    onClick={() => setActive(2)}>Week</button>
            </div>
            <div onClick={toggleTheme} className={`toggle ${toggleDiv ? "active" : ""}`}>
                <div className="slider"></div>
            </div>
        </div>
    )
}