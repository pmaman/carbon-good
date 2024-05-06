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
                    // borderBottom: '2px',
                    // borderColor:'#46BD9A'
                }
            }
        }
        // MuiAccordion:{
        //     styleOverrides:{
        //         root:{
        //             position:'fixed',
        //             top:'100px',
        //             left:'100px'
        //         }
        //     }
        // }
    }
});

export default theme;