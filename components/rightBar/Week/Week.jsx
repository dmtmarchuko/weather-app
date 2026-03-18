import {WeekDays} from './WeekDays'
import {WeekInfo} from './WeekInfo'
import WeekGrafic from './WeekGrafic'


export const Week = () => {
    return(
        <div className="Week__section">
            <WeekDays/>
            <WeekInfo/>
            <WeekGrafic/>
        </div>
    )
}