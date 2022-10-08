import {AppBar, Fade, Toolbar, Typography} from "@mui/material";
import {CSSTransition} from "react-transition-group";


export default function MuiNavBar() {
    return (
        <Fade in={true}>
            <AppBar position='relative' style={{width: '100%'}} color='transparent' sx={{boxShadow: 0}}>
                <Toolbar>
                    <img
                        src="https://res.cloudinary.com/dwz16rstr/image/upload/v1664849434/react-js-weather/react_rxjqmh.svg"
                        alt=""/>
                    <Typography ml={2} variant='h4' component='h2'>React Forecast</Typography>
                </Toolbar>
            </AppBar>
        </Fade>


    );
};
