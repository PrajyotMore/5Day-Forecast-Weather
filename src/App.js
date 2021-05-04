import React,{useState} from 'react';
import CitySelect from './Components/CitySelect';
import {Route,Switch} from 'react-router-dom';
import Error from './Error';

const App = () => {
  return (
    <>
    <Switch>
      <Route exact path='/' component={CitySelect}/>
      <CitySelect city = "mumbai"/>
      <Route component={Error}/>
    </Switch>
    </>
  );
}

export default App;
