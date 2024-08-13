import React, { useState } from 'react';
import { Tabs, Tab, Box, Typography, Paper } from '@mui/material';
import Carousel from './Carousel'
import imgData from './imgData'


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
            <Carousel data={imgData}/>
        </TabPanel>
        <TabPanel value={value} index={1}>
            <Carousel data={imgData}/>
        </TabPanel>
        <TabPanel value={value} index={2}>
            <Carousel data={imgData}/>   
        </TabPanel>
    </Paper>
  )
}

export default PageTabs