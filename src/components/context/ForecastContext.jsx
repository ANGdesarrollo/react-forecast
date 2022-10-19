import React, {useState, createContext} from 'react';
import axios from "axios";
export const forecastContext = createContext(ForecastContext)

export default function ForecastContext({children}) {
    const [searchCity, setSearchCity] = useState('')
    const [listOfCitys, setListOfCitys] = useState([])
    const [loadingFind, setLoadingFind] = useState(false)
    const [loadingSelected, setLoadingSelected] = useState(false)
    const [cityToShow, setCityToShow] = useState({})
    const [cityIsNotSelected, setCityIsNotSelected] = useState(true)
    const [showResult, setShowResult] = useState(false)
    const [forecast3hs, setForecast3hs] = useState([])

    function findCity(e) {
        if (e.key === 'Enter') {
            setShowResult(false)
            setCityIsNotSelected(true)
            setLoadingFind(true)
            axios.get(`https://api.openweathermap.org/geo/1.0/direct?q=${searchCity}&limit=5&appid=41baaad6d0789c3abb285a7e068730f4`)
                .then(res => {setListOfCitys(res)})
                .catch(err => err)
                .finally(() => setLoadingFind(false))
        }
    }

    function findCitySelected(itemSelected) {
        const cityWeather = listOfCitys.data.find(el => el.country.includes(itemSelected.country))
        setLoadingSelected(true)
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${cityWeather.lat}&lon=${cityWeather.lon}&appid=41baaad6d0789c3abb285a7e068730f4`)
            .then(res => {setCityToShow(res.data); console.log(loadingSelected)})
            .catch(err => err)
            .finally(() =>
            {
            setShowResult(true)}
            )

        axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${cityWeather.lat}&lon=${cityWeather.lon}&appid=41baaad6d0789c3abb285a7e068730f4`)
            .then(res => {setForecast3hs(res.data); console.log(loadingSelected)})
            .catch(err => err)
            .finally(() =>
                {setLoadingSelected(false)}
            )
    }
    return (
        <forecastContext.Provider value={{
            setSearchCity, findCity, listOfCitys, loadingFind, findCitySelected,
            cityIsNotSelected, setCityIsNotSelected, cityToShow, loadingSelected, showResult, forecast3hs
        }}>
            {children}
        </forecastContext.Provider>
    );
};
