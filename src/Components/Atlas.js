import React from 'react'
//import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
//import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import BaseMap from './BaseMap';


export default function Atlas() {
  return (
    <Box sx={{ flexGrow: 1}}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12}>
          <BaseMap />
        </Grid>
      </Grid>
    </Box>
  )
}