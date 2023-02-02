import { Box, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <Box 
    sx={{
        backgroundColor:'#1976d2',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        height:'60px'}}>
        <Typography variant='p' color='#fff'>
            copyright 2017-2023 by Amir
        </Typography>
    </Box>
  )
}

export default Footer