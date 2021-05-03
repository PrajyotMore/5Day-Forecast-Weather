import React from 'react';
import CitySelect from './Components/CitySelect';
import {API_KEY, API_BASE_URL} from './Api/config';
import WeatherList from './Components/WeatherList';
import {Route,Switch} from 'react-router-dom';
import Error from './Error';

const App = () => {
  return (
    <>
    <Switch>
      <Route exact path='/'/>
      <Route component={Error}/>
    </Switch>
    <div className="App">
    <CitySelect/>
    </div>
    </>
  );
}

export default App;
