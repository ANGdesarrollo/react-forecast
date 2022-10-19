import {Box} from "@mui/material";
import { Orbit } from "@uiball/loaders";

export default function LoadingData() {
    console.log('entro loading data')
    return(
        <Box mt={4} width={1} display='flex' justifyContent='center'>
            <Orbit size={35} color="#231F20" />
        </Box>
    )
}
