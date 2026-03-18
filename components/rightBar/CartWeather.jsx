export const CartWeather = ({day, temp, weather}) => {

    return(
        <div className="Cart__Weather">
            <p className="Cart__Weather__day">{day}</p>
            <img className="Cart__Weather__img" src={`../../img/${weather}.svg`} alt=""/>
            <p className="Cart__Weather__temp">{Math.floor(temp)}°</p>
        </div>
    )
}