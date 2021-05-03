import React, {useState} from 'react';
import WeatherList from '../Components/WeatherList';

const CitySelect = ()=> {
     const [city, setCity] = useState('');
     const [data, setData] = useState(null);

     const onSearch = () => {
        //console.log(city);
       const URL = `http://api.openweathermap.org/data/2.5/forecast?&q=${city}&cnt=5&appid=2d33d77e59fa1a65556ea0eaf413b187`;
        fetch(URL)
            .then((response) => response.json())
            .then((data) => {
                setData(data);
            })
            .catch((error) => {
                console.log(error);
            });
     }

    
    const renderCityData = (responseInfo: any) => {
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
                <h1>Keep checking Weather</h1>
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