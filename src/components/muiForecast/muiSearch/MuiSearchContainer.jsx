import MuiSearchLayout from "./MuiSearchLayout.jsx";
import React, {useContext, useState} from "react";
import {forecastContext} from "../../context/ForecastContext.jsx";
import Loading from "../Loading.jsx";
import {Button, Fade} from "@mui/material";
import {Send} from "@mui/icons-material";

export default function MuiSearchContainer() {
    const context = useContext(forecastContext);
    const arrayCon = context.listOfCitys.data
    const [state, setState] = useState([])

    function filterStates() {
        const listOfResults = []
        if (arrayCon !== undefined) {
            arrayCon.map(el => {
                let item = {
                    name: el.name,
                    state: el.state,
                    country: el.country
                }
                listOfResults.push(item)
            })
        }
        if (listOfResults.length !== 0) {
            const reduceList = listOfResults.reduce((a, e) => {
                if (!a.find(d => d.state === e.state)) {
                    a.push(e)
                }
                return a
            }, [])
            setState(reduceList)
        }
    }

    function selectCity() {
        return (
            <>{context.loading ? <Loading/> : state.length !== 0 && state.map((el, i) => {
                return (
                    <Fade key={i} in={true}>
                        <Button color='inherit'
                            onClick={() => {
                                context.findCitySelected(el);
                                context.setCityIsNotSelected(false);
                            }}
                            endIcon={<Send></Send>}>{el.name}, {el.state} {el.country}</Button>
                    </Fade>)
            })}
            </>
        )
    }

    return (
        <>
            <MuiSearchLayout filterStates={filterStates} selectCity={selectCity}/>
        </>
    )
};
