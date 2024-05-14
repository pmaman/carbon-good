import { createTheme } from "@mui/material";

const theme = createTheme({
    palette:{
        primary: {
            main:'#fff',
            contrastText: "#000",
        }
    },
    typography:{
        fontFamily: [
            'Inter',
            'Arial',
          ].join(','),
    },
    components:{
        MuiContainer:{
            styleOverrides:{
                root:{
                    backgroundColor: '#fff',
                }
            }
        }
    }
});

export default theme;