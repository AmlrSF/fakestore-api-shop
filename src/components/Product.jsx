import { CardMedia, Typography,Stack,Box,Rating, Button } from '@mui/material'
import React from 'react';
import {useState,useEffect} from 'react'
import { json, Link, useNavigate, useParams } from 'react-router-dom'
import {fetchData} from '../utils/index'
const Product = () => {
  // set useParms
  const {produitId} = useParams();

  // set product
  const [product,setProduct] = useState({});

  // set navigate
  const navigate = useNavigate()

  const [soldProducts,setSoldProducts] = useState([]);

  // set fetch data
  useEffect(() => {
      fetchData(`products/${produitId}`).then(
        (data)=>setProduct(data)
      )
  }, [produitId])
  
  return (
    <>
      <Box 
        sx={{
          width:'100%',
          minHeight:'90vh',
          display:'flex',
          py:2,
          flexDirection:'column',
          justifyContent:'center',
          alignItems:'center',
        }}>
       
        <Stack sx={{flexDirection:{sm:'column',md:'row'},alignItems:'center',gap:"50px"}}>
          <CardMedia 
            sx = {{objectFit:'contain'}} 
            height='450px' 
            width='300px' 
            component='img' 
            image={product.image}
          />
           
          <Stack>
            <Typography variant='p'>category :  </Typography>
            <Typography variant='h4' gutterBottom>
                {product.title}
            </Typography>
            <Typography variant='h5' sx={{display:'flex',alignItems:'center'}}>
              Rating :   <Rating name="half-rating" defaultValue={4} precision={0.5} />
            </Typography>
            <Typography variant='h3' gutterBottom sx={{display:'flex',alignItems:'center'}}>
               {product.price}$
            </Typography>
            <Typography variant='p' paragraph sx={{display:'flex',alignItems:'center'}}>
               {product.description}.
            </Typography>
            <Typography variant='p' paragraph sx={{display:'flex',alignItems:'center'}}>
         
                 object available in the stock :  
                 <Typography variant='h6' sx={{backgroundColor:''}} mr={1}>
                  {product?.rating?.count} piece
                </Typography>
            </Typography>
            <Button onClick={()=>navigate('/products')} variant='contained' >Continue Shopping</Button>
          </Stack>
        </Stack>
      </Box>
    </>
  )
}

export default Product