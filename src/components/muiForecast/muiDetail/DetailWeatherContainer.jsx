import React, {useState} from 'react';
import DetailWeatherLayout from "./DetailWeatherLayout";
import {Typography} from "@mui/material";

export default function DetailWeatherContainer() {
    const [tempSelected, setTempSelected] = useState(true)
    const [fahrenheit, setFahrenheit] = useState(true)

    let buttonSelectedF = tempSelected ? 'secondary' : 'inherit'
    let buttonSelectedC = !tempSelected ? 'secondary' : 'inherit'

    function isFarOrCelDom(variant) {
        if(fahrenheit) {return (<Typography variant={variant} color='orange' component='span'>°F</Typography>)}
        if(!fahrenheit) {return (<Typography variant={variant} color='orange' component='span'>°C</Typography>)}
    }

    function calculateGrades(param) {
        if(fahrenheit) {return (((param - 273.15) * 9/5 + 32).toFixed(2))}
        if(!fahrenheit) {return ((param - 273.15).toFixed(2))}
    }

    return (
        <DetailWeatherLayout tempType={isFarOrCelDom}
                             tempResult={calculateGrades}
                             setTempType={setFahrenheit}
                             buttonSelectedF={buttonSelectedF}
                             buttonSelectedC={buttonSelectedC}
                             changeColor={setTempSelected}
        />
    );
};
