import React from 'react'
import { styled } from '@mui/material/styles'
//import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import { Typography } from '@mui/material'

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2)
}));

export default function About() {
  return (
    // <Box mt={8} sx={{ flexGrow: 1}}>
      <Grid container spacing={2} mt={6} sx={{minWidth: "100%"}}>
        <Grid item xs={12} sm={12}> 
          <Item sx={{backgroundColor:'#000', borderRadius:'0px'}}>
            <Stack direction='row' spacing={5}>
              <Typography variant="h3" sx={{color:'white'}}>About</Typography>
              <iframe 
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/vkteemwYEvw?si=niZIqchOlHJuw363&amp;controls=0"
                title="CarbonGood MIT SOLVE" 
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen> 
              </iframe>
            </Stack>
          </Item>
        </Grid>
      </Grid>
    //</Box>
  );
}