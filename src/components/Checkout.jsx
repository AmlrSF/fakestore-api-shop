import { useNavigate } from 'react-router-dom';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { CardMedia } from '@mui/material';
import { useState } from 'react';
import { useEffect } from 'react';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function Checkout() {
  // set count
  
  const [rows, setRows] = useState([]);

  
  useEffect(() => {
    setRows(JSON.parse(localStorage.getItem('products')) || []);
  }, [rows]);

  // set navigate
  const navigate = useNavigate();
  
  const handelMinus = (e)=>{
    const products = JSON.parse(localStorage.getItem('products')) || []
    const id = e.currentTarget.id;
    let find = products.find(product => product.id === parseInt(id));
    find.count--;
    find.res = find.count*find.price
    localStorage.setItem('products',JSON.stringify(products));
  }

  const handelPlus = (e)=>{
    const id = e.currentTarget.id;
    const products = JSON.parse(localStorage.getItem('products')) || []
    let find = products.find(product => product.id === parseInt(id));
    find.count++;
    find.res = find.count*find.price
    localStorage.setItem('products',JSON.stringify(products));
    console.log(find)
  }
  
  const handelDelete = (e)=>{
    const id = e.currentTarget.id;
    const products = JSON.parse(localStorage.getItem('products')) || [];
    const newProducts = products.filter(product => product.id != id);
    console.log(newProducts);
    localStorage.setItem('products',JSON.stringify(newProducts));
  }
  
  const [res,setRes] = useState(0);

  useEffect(()=>{
    const products = JSON.parse(localStorage.getItem('products')) || [];
    const result = products.map(product=>product.res ? product.res : product.price).reduce((a,b)=>a+b,0);
    setRes(result);
  },[res,rows])
 

  return (
    <Box sx={{width:'100%',height:'90vh',py:3,display:'flex',alignItems:'center',justifyContent:'center',gap:2,flexDirection:'column'}}>
      {rows.length > 0 ?
        <>
          <Typography variant='h3'>CART</Typography>
          <Typography variant='h5'>{res}$</Typography>
          <Button variant='contained' onClick={()=>navigate('/products')}>Go Back To Products</Button>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>id (id Product)</StyledTableCell>
                  <StyledTableCell align="center">image</StyledTableCell>
                  <StyledTableCell align="center">title</StyledTableCell>
                  <StyledTableCell align="center">count</StyledTableCell>
                  <StyledTableCell align="center">price</StyledTableCell>
                  <StyledTableCell align="center">total</StyledTableCell>
                  <StyledTableCell align="center">delete</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <StyledTableRow key={row.id}>
                    <StyledTableCell align="center">{row.id}</StyledTableCell>
                    <StyledTableCell component="th" scope="row">
                      <CardMedia height='65px' width='65px' sx={{objectFit:'contain'}}  component='img' image={row.image} />
                    </StyledTableCell>
                    <StyledTableCell align="center">{row.title}</StyledTableCell>
                    <StyledTableCell align="center">
                      <Box id={row.id} 
                      onClick={handelMinus} sx={{padding:'1px',color:'#fff',borderRadius:'15px',cursor:'pointer'}} backgroundColor='#1976d2'>-</Box>
                        <Typography variant='h5' >{row.count}</Typography>
                      <Box id={row.id} 
                      onClick={handelPlus} sx={{padding:'1px',color:'#fff',borderRadius:'15px',cursor:'pointer'}} backgroundColor='#1976d2' >+</Box>
                    </StyledTableCell>
                    <StyledTableCell align="center">{row.price}$</StyledTableCell>
                    <StyledTableCell align="center">{row.res?row.res : row.price}$</StyledTableCell>
                    <StyledTableCell  id={row.id} onClick={handelDelete}  align="center" sx={{color:'red',cursor:'pointer',textDecoration:'underline'}}>delete</StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer> 
        </>
      :    
        <>
          <Button variant='contained' onClick={()=>navigate('/products')}>Go Back To Products</Button>
          <Typography variant='h3'>The Cart Is empty</Typography>
        </>
    }
    </Box>
  );
}