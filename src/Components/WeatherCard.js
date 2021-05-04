import React from 'react';

const WeatherCard = ({dt, temp_min, temp_max, lat, lon, humidity, main, icon, sun, set}) => {

    const date = new Date(dt);
    return(
        <>
        <div className="card">
        {/* get the src from example url and pass the icon prop for icon code */}
            <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt="weather_img"/>   
            <div className="card_Body">
                <h1 className="title font-effect-outline">Cloudy</h1>
                 <p className="date">
                    {date.toLocaleDateString()} - {date.toLocaleTimeString()}
                </p>
                <p className="temperature_Min">Min : {temp_min}</p>
                {/* maximum temperature */}
                <p className="temperature_Min">Max: {temp_max}</p>
                <p className="humidity">Humidity : {humidity}</p>
                <p className="latlon"> latitude : {lat}| longitude : {lon}</p>
                <p className="sunset"> sunrise : {sun}| sunset : {set}</p>
            </div>
            </div>
            <>
        </>
        </>
    );
}

export default WeatherCard;
