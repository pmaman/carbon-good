import React, { useState } from 'react';
import { Tabs, Tab, Box, Typography, Paper, ThemeProvider } from '@mui/material';
import theme, {MuiImg} from '../Theme.tsx'
import harvestImg from "../images/Harvest-v4.png"
import diffuserImg from "../images/diffuser.png"
import commGdn from "../images/commGdn2.png"
import Carousel from './Carousel'
import howImgData from './howImgData.js'
import whatImgData from './whatImgData.js'
import whyImgData from './whyImgData.js'


function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
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
      </div>
    );
  }
  

function PageTabs() {
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    }
    
  return (
    <ThemeProvider theme= {theme}>
      <Paper
          sx={{
              padding:"20px"
          }}
      >
          <Tabs 
              value={value} 
              onChange={handleChange}
          >   
              <Tab label="What Is Carbon Good?" />
              <Tab label="How Does It Work?" />
              <Tab label="Why Do We Need It?" />
          </Tabs>
          <TabPanel value={value} index={0}>
            <Carousel data={whatImgData}/>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Carousel data={whyImgData}/>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Carousel data={howImgData}/>   
          </TabPanel>
      </Paper>
    </ThemeProvider>

  )
}

export default PageTabs