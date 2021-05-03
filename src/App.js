import React from 'react';
import CitySelect from './Components/CitySelect';
import WeatherList from './Components/WeatherList';
import {Route,Switch} from 'react-router-dom';
import Error from './Error';

const App = () => {
  return (
    <>
    <Switch>
      <Route exact path='/' component={CitySelect}/>
      <Route component={Error}/>
    </Switch>
    </>
  );
}

export default App;
