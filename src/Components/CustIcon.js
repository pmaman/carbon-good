import React from 'react'
import Box from '@mui/material/Box';
import logo from '../Logo/CG Logo.png';

export default function CustIcon() {
  return (
    <>
        <Box
            sx={{
                backgroundImage: `url(${logo})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: '100%',
                width: '25px',
                height: '45px'
            }}
        >
        </Box>
        <Box
            sx={{
                width: '20px',
                height: '20px'
            }}
        >
        </Box>
    </>
  )
}
