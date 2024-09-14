import React, { useState } from 'react';
import { Tabs, Tab, Box, Typography, styled, ThemeProvider } from '@mui/material';
import theme from '../Theme.tsx'
import Carousel from './Carousel'
import howImgData from './howImgData.js'
import whatImgData from './whatImgData.js'
import whyImgData from './whyImgData.js'
import zIndex from '@mui/material/styles/zIndex';



function TabPanel(props) {
    const { children, value, index, ...other } = props;

    const StyledDiv = styled('div')(({ theme }) => ({
      position:'sticky !important',
      top:'110px !important',
      zIndex:998,
      backgroundColor:"lightblue"
    }));

    return (
      <ThemeProvider theme = {theme}>
        <StyledDiv
          role="tabpanel"
          hidden={value !== index}
          id={`simple-tabpanel-${index}`}
          aria-labelledby={`simple-tab-${index}`}
          {...other}
        >
          {value === index && (
            <Box >
              <Typography
                  sx={{
                      variant:"p",
                      fontSize:"2rem"
                  }}
              >
                  {children}
              </Typography>
            </Box>
          )}
        </StyledDiv>
      </ThemeProvider>
    );
  }
  

function PageTabs() {
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    }
    
  return (
    <ThemeProvider theme= {theme}>
          <Tabs 
              value={value} 
              onChange={handleChange}
              sx={{
                position:"sticky", 
                top:"100px", 
                zIndex:1000,
                backgroundColor: '#fff'
              }}
          >   
              <Tab label="What Is Carbon Good?" />
              <Tab label="How Does It Work?" />
              <Tab label="Why Do We Need It?" />
          </Tabs>
          <TabPanel value={value} index={0} >
            <Carousel data={whatImgData}/>
          </TabPanel>
          <TabPanel value={value} index={1} >
            <Carousel data={whyImgData}/>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Carousel data={howImgData}/>   
          </TabPanel>
    </ThemeProvider>

  )
}

export default PageTabs