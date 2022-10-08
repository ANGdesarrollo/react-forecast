import React, {useContext, useEffect} from 'react';
import {Box, Fade, Grid, TextField} from "@mui/material";
import {forecastContext} from "../../context/ForecastContext.jsx";

export default function MuiSearchLayout({selectCity, filterStates}) {
    const context = useContext(forecastContext);

    useEffect(() => {
        filterStates()
    }, [context.listOfCitys.data]);


    return (
        <Fade in={true}>
            <Grid container mt={2}>
                <Grid item xs={12}>
                    <Box w={1} justifyContent='center' alignItems='center' display='flex' flexDirection='column'>
                        <Box  display='flex' flexDirection='column' alignItems='center'>
                            <Box w={1} display='flex' justifyContent='center'>
                                <TextField
                                    focused
                                    color = 'primary'
                                    label='Search'
                                    onKeyUp={(e) => {
                                        context.findCity(e);
                                    }}
                                    onChange={(e) => {
                                        context.setSearchCity(e.target.value)
                                    }}/>
                            </Box>
                            <Box display='flex' flexDirection='column' alignItems='flex-start'>
                                {context.cityIsNotSelected && selectCity()}
                            </Box>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Fade>
    );
};
