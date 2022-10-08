import React, {useState, useEffect} from 'react';
import {Box} from "@mui/material";

export default function Loading() {
    return (
        <Box width={1} display='flex' justifyContent='center'>
            <img src="https://res.cloudinary.com/dwz16rstr/image/upload/v1664920565/react-js-weather/Search_eytzlw.gif"
                 alt="looking for data"></img>
        </Box>
    );
};
