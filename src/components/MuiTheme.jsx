import React, {useState, useEffect} from 'react';
import {createTheme} from "@mui/material";

export const theme = createTheme({
    palette: {
        primary: {
            main: '#fff0ff'
        },
        secondary: {
            main: '#ffa500'
        }
    },

    typography: {
        "fontFamily": `'Cairo', 'sans-serif'`,
        "fontSize": 14,
        "fontWeightLight": 300,
        "fontWeightRegular": 400,
        "fontWeightMedium": 500
    }
});
