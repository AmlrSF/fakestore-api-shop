import React from 'react';
import { useState } from 'react';
import './components.css'
import {Paper,IconButton,Badge,Typography} from '@mui/material';
const Search = () => {
  const [searchProduct,setSearchProduct] = useState("");

  const handelSubmit = (e)=>{
    e.preventDefault();
  }

  return (
    <>
      <Paper component='form' onSubmit={handelSubmit} sx={{
          borderRadius:'20px',
          border:'1px solid #e3e3e3',
          pl:2,
          boxSahdow:'none',
      }}>
          <input className='input-field' placeholder='Search...' value={searchProduct} onChange={(e)=>setSearchProduct(e.target.value)} />
          <IconButton type='submit'>
            <i style={{color:'#1976d2',p:'5px'}} className="fa-solid fa-magnifying-glass"></i>
          </IconButton>
      </Paper>
    </>
  )
}

export default Search