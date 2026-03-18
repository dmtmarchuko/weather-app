'use client'

import { ButtonSection } from './rightBar/Buttons'
import {Week} from './rightBar/Week/Week'
import {useContext} from "react"
import {CityContext} from './CityProvider'
import TodaySection from './rightBar/Today/Today'


export const RightBar = () => {
    const {active} = useContext(CityContext)

    return (
        <div className="RightBar">
            <ButtonSection/>
            {active === 2 ? <Week/> : <TodaySection/>}
        </div>
    )
}

