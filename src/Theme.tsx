import { BorderBottom } from "@mui/icons-material";
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
        MuiTabs:{
            styleOverrides:{
                root:{
                    display: 'flex',
                    justifyContent: 'center',
                },
                flexContainer:{
                    justifyContent:'center'
                }
            }
        },
        MuiTab:{
            styleOverrides:{
                root:{
                    borderBottom: '4px solid #ffffff', // Border bottom stroke for active tab
                    '&.Mui-selected': {
                    color: '#3B9D95', // Active tab color
                    borderBottom: '4px solid #3B9D95', // Border bottom stroke for active tab
                    }
                }
            }
        },
        MuiButtonBase:{
            styleOverrides:{
                root:{
                    // justifyContent:'space-between',                    
                    // '&.Mui-selected': {
                    //     borderBottom:'2px', //TODO - center tabs and get border rendering properly
                    //     borderColor:'#3B9D95',
                    //     backgroundColor: '#3B9D95',
                    //     borderRadius:'5px 5px 0px 0px',
                    //     opacity:1,
                    // }
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
});

export default theme;

