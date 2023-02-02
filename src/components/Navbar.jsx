import { Toolbar,AppBar, Typography } from '@mui/material'
import React from 'react'
import {Link} from 'react-router-dom';
import Search  from './Search';

const Navbar = () => {
  return (
    <AppBar position='sticky' sx={{top:0}}>
        <Toolbar sx={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
            <Link style={{textDecoration:'none',color:'#fff'}} to='/'>
                <Typography 
                  sx={{fontWeight:'bold'}} 
                  variant='h5'>
                    E-Commerce
                </Typography>
            </Link>
            <Search />
        </Toolbar>
    </AppBar>
  )
}

export default Navbar

