import { Search } from "./leftBar/search";
import { Weather } from "./leftBar/weather";
import { Params } from "./leftBar/params";
import { WindSpeed } from "./leftBar/windSpeed";

export const LeftBar = () => {
    return (
        <div className="LeftBar">
            <Search/>
            <Weather/>
            <div className="group__ParamsAndWidth">
                <Params/>
                <WindSpeed/>
            </div>
        </div>
    )
}

