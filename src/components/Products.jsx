import { Grid, Typography } from '@mui/material';
import React, { useState } from 'react'
import {Box,Stack,CardActionArea,Button,Badge,IconButton} from '@mui/material';
import {fetchData} from '../utils/index'
import { useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Link } from 'react-router-dom';
import '../components/components.css';
import { useNavigate } from 'react-router-dom';
import MailIcon from '@mui/icons-material/Mail';

const Products = () => {
  //set loading 
  const [loading,setLoading] = useState(false);

  //set products
  const [products, setProducts] = useState([])

  // set Navigate
  const navigate = useNavigate();
  
  // ===================fetch products===============
  useEffect(()=>{
    setLoading(true);

    fetchData('products').then(
      (products)=>setProducts(products),
      console.log(products)
      // console.log('yes',products)
    )
    setTimeout(()=>setLoading(false),1000)
  },[])

  // navigate 
  document.querySelectorAll('.card').forEach(card=>{
    card.addEventListener('click',(e)=>{
      console.log("yes")
      navigate(`/products/${e.currentTarget.id}`)
    })

  })

  const [soldProduct, setSoldProduct] = useState([]);

  const handelSoldProducts = (e)=>{
    const findProduct = products.find(product=>product.id==e.currentTarget.id)
    const newProducts = {
      id:findProduct.id,
      image:findProduct.image,
      price:findProduct.price,
      count:1,
      title:findProduct.title.slice(1,10),
    }
   
      console.log(soldProduct);
    let find = soldProduct.find(soldproduct=> soldproduct.id === findProduct.id);
    
    if(find) return 
    if(find == undefined){
      setSoldProduct([newProducts ,...soldProduct]);
      console.log(soldProduct);
      localStorage.setItem('products',JSON.stringify(soldProduct));
    }

    let count = soldProduct.length;
    notificationsLabel(count);
  }

  const notificationsLabel = count => {
    if (count === 0) {
      return 'no notifications';
    }
    if (count > 99) {
      return 'more than 99 notifications';
    }
    return `${count} notifications`;
  }

  return (
    <>
      <Box sx={{py:5,height:'min-height:calc(100vh - 64px)'}}>
          <Typography sx={{color:'#1976d2',mt:2}} gutterBottom variant='h3' textAlign='center'>
            Our Products 
              <IconButton sx={{ml:2}} color="neutral" aria-label={notificationsLabel(100)}>
                <Badge badgeContent={soldProduct.length} fontSize='14px' badgeInset="-20%">
                  🛒
                </Badge>
              </IconButton> 
          </Typography>
          <Typography gutterBottom variant='p' paragraph textAlign='center'>
            In general, the products can include a variety of items such as games and electronics. These products can vary in terms of their functions and features, and may appeal to different audiences based on their individual needs and preferences         
          </Typography>
          <Button variant='contained' sx={{mx:'auto',my:2,display:'block'}} onClick={()=>navigate('/checkout')}>Go To Cart</Button>
          <Box sx={{width:'100%',display:'flex',alignItems:'center',justifyContent:'center'}} >
            {
              loading ? 
                <Typography marginTop='200px' variant='h3'>
                  Loading
                </Typography>
              :  
              <Grid container spacing={2}>
                  {products.map(product=>(
                      <Grid item  xs={12} sm={6} md={4} >
                        {/* <Link to={`/products/${product.id}`}> */}
                            <Card  
                              key={product.id} 
                              id={product.id}
                              sx={{ maxWidth: 345 ,boxShadow:'1px 1px 5px rgba(00,0,0,0.5)'}}
                            >
                              <CardActionArea>
                                <CardMedia
                                  sx={{objectFit:'contain'}}
                                  component="img"
                                  height="200"
                                  image={product.image}
                                  alt="green iguana"
                                />
                                <CardContent sx={{backgroundColor:''}}>
                                  <Stack flexDirection='row' alignItems='center' justifyContent='space-between'>
                                    <Typography  gutterBottom variant="h5" component="div">
                                      {product.title.slice(1,10)}...
                                    </Typography>
                                    <Typography variant='h5'  >
                                      {product.price}$
                                    </Typography>
                                  </Stack>
                                  <Typography variant="body2" >
                                  {product.description.slice(1,65)}...
                                  </Typography>
                                  <Stack flexDirection='row' mt={2} sx={{justifyContent:'center',gap:2}}>
                                    <Button id={product.id} sx={{zIndex:999}}  onClick={handelSoldProducts} variant='contained'>Add To Cart</Button>
                                    <Button  onClick={()=>navigate(`/products/${product.id}`)}  variant='outlined'>More Info</Button>
                                  </Stack>
                                </CardContent>
                              </CardActionArea>
                            
                            </Card>
                          {/* </Link> */}
                      </Grid>
                  ))}
            </Grid>
            }
          </Box>
      </Box>
    </>
  )
}

export default Products