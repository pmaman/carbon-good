import React, {useState, useEffect} from "react";
import IconButton from '@mui/material/IconButton';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Box, Grid, Stack, Typography, createTheme, ThemeProvider } from "@mui/material";
import "./Carousel.css";
import theme, {MuiImg} from '../Theme.tsx'

// const theme = createTheme => ({
//     components: {
//         MuiGrid: {
//             styleOverrides: {
//                 root: {
//                     width:'100%'
//                 },
//             },
//         },
//     },
//     Media: {
//         height: 'auto',
//         width: '100%',
//         //objectFit: 'cover'
//     }
// });

//console.log('Theme', theme);

export default function Carousel({data}){
    //console.log(data);
    const [currentIndex,setCurrentIndex] = useState(0);

    //auto play functionality
    /*useEffect(()=>{
        const interval = setInterval(()=> {
            setCurrentIndex((prevIndex)=>(prevIndex+1 )%data.length);
        }, 2500);
        return () => clearInterval(interval);
    });*/

    //Next & Prev Func
    const handleNext= () =>{
        setCurrentIndex((prevIndex) => (prevIndex+1)%data.length)
    }

    const handlePrev= () =>{
        setCurrentIndex((prevIndex) => (prevIndex-1)%data.length)
    }


    return (
        <ThemeProvider theme={theme}>
            <Grid
                container
                className="carousel-details"
                direction="row"
                alignItems="center"
                justifyContent="center"
                spacing={2}
                width="100%"
            >
                <Stack 
                    direction="column"
                    alignItems="center"
                    width="100%"
                    margin="10px"
                    spacing={2}
                >
                    
                    <Grid item xs={12}
                        sx={{
                            alignItems:"center",
                            justifyContent:"center",
                            width:"100%",
                            mt:"10px"
                        }}
                    >
                        <Typography 
                            sx={{
                                variant:"h1",
                                fontSize:"2rem"
                            }}
                        >
                            {data[currentIndex].title ?? "There is no title for this image."}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} /*sx={{mt:'1000px' justifyContent:'space-between', alignItems:'center'}}*/>
                        <Stack direction="row" spacing={3}>
                            <IconButton onClick={handlePrev}>
                                <ArrowBackIosNewIcon fontSize="large"/>
                            </IconButton>
                            <Stack direction="column" spacing={5}>
                                <Stack direction="row" spacing={2}>
                                    <MuiImg
                                        src={data[currentIndex].img} 
                                        alt="process image"
                                        sx={{width:"50%"}}
                                        >
                                    </MuiImg>
                                    <MuiImg
                                        src={data[currentIndex+1].img} 
                                        alt="process image"
                                        sx={{width:"50%"}}
                                        >
                                    </MuiImg>
                                </Stack>
                                <Typography 
                                    className="carousel-text" 
                                    sx={{variant:'p', fontSize:'1rem'}}
                                >
                                    {data[currentIndex].description ?? "There is no description for this image."}
                                </Typography>
                            </Stack>
                            <IconButton onClick={handleNext} >
                                <ArrowForwardIosIcon fontSize="large"/>
                            </IconButton>
                        </Stack>
                    </Grid>
                </Stack>
            </Grid>
        </ThemeProvider>
    )
}