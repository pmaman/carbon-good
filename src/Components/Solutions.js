import React from 'react'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2)
}));

export default function Solutions() {
  return (
    <Grid container spacing={2}>
      <Grid item>
        <Item>
          <h1>Solutions</h1>
        </Item>
      </Grid>
    </Grid>
    
  )
}