import React from 'react'
import Grid from '@mui/material/Grid'
import discordIcon from '../Logo/icon_clyde_white_RGB.png'
import { Paper, Stack, Button, Typography, ThemeProvider } from '@mui/material'
import theme, {MuiImg} from '../Theme.tsx'
import harvestImg from "../images/Harvest-v4.png"
import Carousel from './Carousel'
import imgData from './imgData'

export default function About() {
  return (
    <ThemeProvider theme = {theme}>
      <Grid 
        container 
        spacing={5} 
        mt={6} 
        sx={{minWidth: "100%"}}
      >
        <Grid item> 
          <Grid item xs={12} spacing={2}>
              <Typography 
                  sx={{
                      variant:"h1",
                      fontSize:"3rem"
                  }}>
                  About Carbon Good
              </Typography>
          </Grid>
          {/*<Paper>
            <Stack
              direction="column"
              spacing={5}
            >
              <MuiImg
                src={harvestImg} 
                alt="harvest image"
              >
              </MuiImg>
              <Typography
                sx={{
                  variant:"p",
                  fontSize:"1rem"
                }}
              >
                Test
              </Typography>
              <Button 
                variant="contained" 
                color="secondary"
                startIcon={<img src={discordIcon} height="20px" width="auto"></img>}

              >
                Join The Discussion 
              </Button>
            </Stack>
          </Paper>*/}
          <Paper>
            <Carousel data={imgData}/>
          </Paper> 
        </Grid> 
        <Grid item sx={{width:"100%"}}> 
          <iframe
            width="100%" 
            height="300px"
            src="https://www.youtube.com/embed/vkteemwYEvw?si=niZIqchOlHJuw363&amp;controls=0"
            title="CarbonGood MIT SOLVE" 
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" 
            //allowfullscreen
            > 
          </iframe>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}