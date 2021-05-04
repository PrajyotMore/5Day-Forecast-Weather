import React, {useState} from 'react';
import WeatherList from '../Components/WeatherList';

const CitySelect = ()=> {
     const [city, setCity] = useState('');
     const [data, setData] = useState(null);

     const onSearch = () => {
        //console.log(city);
       const URL = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=5&appid=e6f7d23b6d1f8c60547cf396eb425548`;
        fetch(URL)
            .then((response) => response.json())
            .then((data) => {
                setData(data);
                //console.log(data);
            })
            .catch((error) => {
                console.log(error);
            });
     }

    
    const renderCityData = (responseInfo) => {
        if (responseInfo === null) {
            return (<div/>);
        }
        return (
            <WeatherList weathers = {responseInfo}/>
        )
        
   }    

    return(
        <>
            <div className="Header">
                <h1>Check Weather 🌧️</h1>
            </div>
            <hr/>
            <form>
            <input  
            type="text" 
            placeholder="Search City..." 
            onChange={(event) => setCity(event.target.value)}
            />
            </form>
            <button className="submitBtn" onClick={onSearch}>Check Weather</button>
            
            {renderCityData(data)}

        </>
    );
}

export default CitySelect;
