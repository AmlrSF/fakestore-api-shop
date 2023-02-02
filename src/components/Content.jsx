import React from 'react'
import { Box, Button, Typography} from '@mui/material';
import { useNavigate } from 'react-router-dom';
const Content = () => {
  const navigate = useNavigate();
  return (
    <>
      <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center', width:'100%',height:'calc(100vh - 64px)'}}>
          <Typography variant='h3' gutterBottom color='primary' textAlign='center'>
          The Rise of E-Commerce and its Impact on the Retail Industry
          </Typography>
          <Typography variant='p' paragraph textAlign='center'>
            E-commerce has dramatically changed the retail industry in recent years, providing consumers with an convenient and accessible way to shop for products online. The widespread adoption of the internet and mobile devices has fueled the growth of e-commerce, which continues to disrupt traditional brick-and-mortar retail businesses. As more consumers shift towards online shopping, businesses must adapt and find ways to effectively compete in the digital marketplace.
          </Typography>
          <Button onClick={()=>navigate('/products')} variant='contained' sx={{fontWeight:'bold',py:2,px:3}}>
            click here to see our latest products
          </Button>
      </Box>
    </>
  )
}

export default Content