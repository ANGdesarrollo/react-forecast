import './App.css'
import MuiNavBar from "./components/muiNavBar/MuiNavBar";
import ForecastContext from "./components/context/ForecastContext.jsx";
import MuiForecastContainer from "./components/muiForecast/MuiForecastContainer";
import {ThemeProvider} from "@mui/material";
import {theme} from "./components/MuiTheme.jsx";

export default function App() {
    return (
        <ForecastContext>
            <ThemeProvider theme={theme}>
                <MuiNavBar/>
                <MuiForecastContainer/>
            </ThemeProvider>
        </ForecastContext>

    )
}


