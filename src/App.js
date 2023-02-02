import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';

import Checkout from './components/Checkout';
import Content from './components/Content';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Product from './components/Product';
import Echec404 from './components/Echec404';
import { Container } from '@mui/material';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <CssBaseline />
        <Navbar />
        <Container maxWidth='lg'>
          <Routes>
            <Route path='/' exact  element={<Content />} />
            <Route path='/products' exact element={<Products />} />
            <Route path='/products/:produitId' exact element={<Product />} />
            <Route path='/checkout' exact element={<Checkout />} />
            <Route path='*' exact element={<Echec404 />} />
          </Routes>
        </Container>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App