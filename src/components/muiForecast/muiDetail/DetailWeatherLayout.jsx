import React, {useState, useEffect, useContext} from 'react';
import {forecastContext} from "../../context/ForecastContext.jsx";
import {Box, Button, Fade, Grid, Typography} from "@mui/material";
import Loading from "../Loading";
import {responsiveLayoutInternalLeft} from "../muiSearch/MuiStyles.jsx";
import {responsiveLayoutInternalRight} from "../muiSearch/MuiStyles.jsx";
import {responsiveLayoutExternal} from "../muiSearch/MuiStyles.jsx";


export default function DetailWeatherLayout({tempType, tempResult, setTempType, buttonSelectedF, buttonSelectedC, changeColor}) {
    const context = useContext(forecastContext)
    let array = context.cityToShow
    let arrayH3 = context. forecast3hs

    console.log(arrayH3)
    return (
        <>
            {
                context.loadingSelected ? <Loading></Loading> :
                    <Fade in={true}>
                        <Box display='flex' justifyContent='center' mt={3} width={1}>
                            <Box width={1} sx={responsiveLayoutExternal} >
                                <Box display='flex' flexWrap='wrap' p={2}>
                                    <Box pb={1} borderBottom={1} mb={2} display='flex' justifyContent='space-between'
                                         width={1} mt={1}>
                                        <Box><Typography variant="h6" component="h3">CURRENT WEATHER</Typography></Box>
                                        <Box display='flex'>
                                            <Box><Button color={buttonSelectedF} size='medium' onClick={() => {
                                                setTempType(true);
                                                changeColor(true)
                                            }}>°F</Button></Box>
                                            <Box><Button color={buttonSelectedC} size='medium' onClick={() => {
                                                setTempType(false);
                                                changeColor(false)
                                            }}>°C</Button></Box>
                                        </Box>

                                    </Box>
                                    <Box pt={1} sx={responsiveLayoutInternalLeft} display='flex' alignItems='center'
                                         flexDirection='column' flexWrap='wrap'>
                                        <Box display='flex' justifyContent='center' width={1}>
                                            <Box display='flex' justifyContent='center' flexDirection='column'
                                                 alignItems='flex-start'>
                                                <Box>
                                                    <Typography variant='h6'
                                                                component='span'>{(array.weather[0].main).toUpperCase()}</Typography>

                                                </Box>
                                                <Box><img style={{width: '5rem'}} className="weather-icon"
                                                          src={`https://openweathermap.org/img/wn/${array.weather[0].icon}.png`}
                                                          alt="weather icon"/></Box>
                                            </Box>
                                            <Box ml={1} width={0.6} pl={2} display='flex' alignItems='center'
                                                 justifyContent='center'
                                                 flexDirection='column'>
                                                <Box><Typography variant='h3'
                                                                 component='span'>{tempResult(array.main.temp)}{tempType('h3')}</Typography></Box>
                                                <Box pt={1}><Typography variant='body2'
                                                            component='span'>RealFeel {tempResult(array.main.feels_like)}</Typography></Box>
                                            </Box>
                                        </Box>
                                    </Box>
                                    <Box sx={responsiveLayoutInternalRight} display='flex' flexDirection='column'
                                         alignItems='center' justifyContent='flex-end'>
                                        <Box mb={2} width={1} display='flex' flexDirection='column'>
                                            <Typography variant='body1'
                                                        component='span'>Humidity: {array.main.humidity}%</Typography>
                                            <Typography variant='body1' pt={1}
                                                        component='span'>Wind: {array.wind.speed}km/hs</Typography>
                                        </Box>
                                    </Box>
                                </Box>
                                {arrayH3.list &&
                                    <Box p={2} display='flex' width={1} flexWrap='wrap' justifyContent='space-around'>
                                        <Box borderBottom={1} width={1} display='flex' justifyContent='center'>
                                            <Typography component='span'>Next Hours</Typography>
                                        </Box>
                                        {arrayH3.list.map((el, i) => {
                                            if(i < 4) {
                                                return(
                                                    <Box pt={3} display='flex' flexDirection='column' alignItems='center'>
                                                        <Box>{(i + 1) * 3}HS</Box>
                                                        <Box>
                                                            <img className="weather-icon"
                                                                 src={`https://openweathermap.org/img/wn/${el.weather[0].icon}.png`}
                                                                 alt="weather icon"/>
                                                        </Box>
                                                        <Box>{el.weather[0].main}</Box>
                                                        <Box>{tempResult(el.main.temp)}{tempType('body2')}</Box>
                                                    </Box>
                                                )
                                            }
                                        })}
                                    </Box>}

                            </Box>
                        </Box>
                    </Fade>
            }
        </>)
};
