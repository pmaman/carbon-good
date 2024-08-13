import { createTheme } from "@mui/material";
import { styled } from '@mui/system';

export const MuiImg = styled('img')(({ theme }) => ({
    //borderRadius: theme.shape.borderRadius,  // Use theme border radius
    width: '100%',  // Make the image take 100% width of its container
    height: 'auto',  // Maintain aspect ratio
    //boxShadow: theme.shadows[1],  // Apply a shadow from the theme
    objectFit: 'cover',  // Cover the container area
    alignItems:"center"
  }));

const theme = createTheme({
    palette:{
        primary: {
            main:'#fff',
            contrastText: "#000",
        },
        secondary:{
            main:'#3B9D95'
        }
    },
    typography:{
        fontFamily: [
            'Futura Md Bt',
            'Inter',
            'Arial',
          ].join(','),
    },
    components:{
        MuiContainer:{
            styleOverrides:{
                root:{
                    //backgroundColor: '#fff'
                }
            }
        },
        MuiGrid:{
            styleOverrides: {
                root: {
                    width:'100%',
                    justifyContent:'center',
                    alignItems:'center',
                    margin:'0',
                    paddingLeft:'0px !important'
                },
                item:{
                    padding:'0px'
                },
                container:{
                    padding:'0px'
                }
            },
        },
        MuiButton:{
            styleOverrides:{
                root:{
                }
            }
        },
        MuiPaper:{
            styleOverrides:{
                root:{
                    borderRadius:'10px',
                    justifyContent:'center',
                    alignItems:'center',
                    paddingBottom:'20px',
                    //boxShadow: '2px 4px 4px 0px rgba(0, 0, 0, 0.15)'
                }
            }
        },
        MuiAppBar:{
            styleOverrides:{
                root:{
                    borderRadius:'0px',
                    margin:'0px',
                    padding:'0px'
                }
            }
        },
        MuiStack:{
            styleOverrides:{
                root:{
                    alignItems:'center',
                    justifyContent:'space-between'
                }
            }
        },
        MuiTypography:{
            styleOverrides:{
                root:{
                    //width:'100%',
                    textAlign:'center'
                }
            }
        }
    }
    // media: {
    //     height: 'auto',
    //     width: '100%',
    //     //objectFit: 'cover'
    // }
});

export default theme;

