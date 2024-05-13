import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor:"#fff",
  padding: theme.spacing(2),
  textAlign: 'center'
}));

export default function About() {
  return (
    <Box m={5} sx={{ flexGrow: 1}}>
      <Grid container spacing={2}>
        <h1>About</h1>
        <Grid item xs={12} sm={12}> 
          <Item>item</Item>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Item>item</Item>
        </Grid>
      </Grid>
    </Box>
  );
}