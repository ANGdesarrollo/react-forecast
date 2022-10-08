import React, {useState, useEffect, useContext} from 'react';
import DetailWeatherContainer from "./muiDetail/DetailWeatherContainer";
import {forecastContext} from "../context/ForecastContext";
import MuiSearchContainer from "./muiSearch/MuiSearchContainer.jsx";

export default function MuiForecastContainer() {
    const context = useContext(forecastContext)
    return (
        <>
            <MuiSearchContainer/>
            {context.showResult && <DetailWeatherContainer/>}
        </>
    );
};
