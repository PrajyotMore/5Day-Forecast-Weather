import React from 'react'
import WeatherCard from './WeatherCard';

const WeatherList = ({weathers}) => {
    const city = weathers.city;
    const weatherlist = weathers.list;
    console.log(city);
    console.log(weatherlist);
    return (
        <div>
           {weatherlist.map(({dt,main,weather}) => (
                <div key={dt}>
                    <WeatherCard 
                    temp_max={main.temp_max} 
                    temp_min={main.temp_min}
                    lat={city.coord.lat}
                    lon={city.coord.lon} 
                    humidity={main.humidity}
                    dt={dt} 
                    main={weather[0].main} 
                    icon={weather[0].icon} 
                    />
                </div>
            ))} 
        </div>
    )
}

export default WeatherList;
