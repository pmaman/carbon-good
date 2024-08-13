import React, {useState} from 'react'
import Grid from '@mui/material/Grid'
import discordIcon from '../Logo/icon_clyde_white_RGB.png'
import globeIcon from '../Logo/Globe.png'
import { Tabs, Tab, Paper, Stack, Button, Typography, ThemeProvider } from '@mui/material'
import theme, {MuiImg} from '../Theme.tsx'
import harvestImg from "../images/Harvest-v4.png"
import Carousel from './Carousel'
import imgData from './imgData'
import PageTabs from './PageTabs.js'

export default function About() {
  return (
    <ThemeProvider theme = {theme}>
      <Grid 
        container
        mt={10}
        sx={{minWidth: "100%"}}
      >
        <Grid item xs={12}> 
          <Grid item xs={12}>
              <Typography 
                  sx={{
                      variant:"h1",
                      fontSize:"3rem",
                      padding:'30px'
                  }}>
                  About The Project
              </Typography>
          </Grid>
          <Grid item xs={12} sx={{mt:'50px', mb:'50px'}}> 
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
          <Grid 
            item xs={12}
          >
            <Stack 
              direction="row" 
              spacing ={10}
              padding="5%"
            >
              <Stack
                direction="column"
                spacing={2}
              >
                <MuiImg
                  src={harvestImg} 
                  alt="harvest image"
                  sx={{
                    width:'100%',
                    borderRadius:'10px'
                  }}
                >
                </MuiImg>
                <Typography
                  sx={{
                    variant:"p",
                    fontSize:"1rem",
                    height: '50px'
                  }}
                >
                  Join the Discussion about where CarbonGood is being used to help sequester CO2 and grow healthy crops!
                </Typography>
                <Button 
                  variant="contained" 
                  color="secondary"
                  startIcon={<img src={discordIcon} height="20px" width="auto"></img>}

                >
                  Join The Discussion 
                </Button>
              </Stack>
              <Stack direction="row" spacing ={2}>
                <Stack
                  direction="column"
                  spacing={2}
                >
                  <MuiImg
                    src={harvestImg} 
                    alt="harvest image"
                    sx={{
                      width:'100%',
                      borderRadius:'10px'
                    }}
                  >
                  </MuiImg>
                  <Typography
                    sx={{
                      variant:"p",
                      fontSize:"1rem",
                      height: '50px'
                    }}
                  >
                    Think that CarbonGood could help in your community? Let us know where!
                  </Typography>
                  <Button 
                    variant="contained" 
                    color="secondary"
                    startIcon={<img src={globeIcon} height="20px" width="auto" color="#ffffff"></img>}

                  >
                    Explore The Atlas                  
                  </Button>
                </Stack>
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <PageTabs /> 
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}