import React from 'react';
import {WiCloud,WiCelsius} from "react-icons/wi";

const Weather = ({loading,weather}) => {
    if(loading)
        return <h1>Loading...</h1>
    return(
     <div>
    <p>Region:{weather.location?.region}</p>
    <p>Country:{weather.location?.country}</p>
    <p> Temperature:{weather.current?.temp_c}<WiCelsius/></p>
    <p><WiCloud/> Cloud:{weather.current?.cloud}</p>
    <p>UV : {weather.current?.uv}</p>
    </div>
    
    
    )};

export default Weather;


