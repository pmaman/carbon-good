import { createTheme } from "@mui/material";

const theme = createTheme({
    palette:{
        primary: {
            main:'#46BD9A',
            contrastText: "#fff",
        }
    },
    /* need to get the font working still*/
    typography: {
        fontFamily: [
            'Inter',
            'Roboto',
        ].join(','),
    }
});

export default theme;