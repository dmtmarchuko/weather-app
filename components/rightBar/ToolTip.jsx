export default function CustomTooltip({active, payload}){
    if(active && payload){
        return(
            <div className="tooltip">
                {payload[0].value} °C
            </div>
        )
    }

    return null
}