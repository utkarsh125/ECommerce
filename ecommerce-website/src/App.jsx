import React from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import ShopCategory from './pages/ShopCategory.jsx';
import LoginSignup from './pages/LoginSignup.jsx';
import Shop from './pages/Shop.jsx';
import Product from './pages/Product.jsx';
import Cart from './pages/Cart.jsx';
import Hero from './components/Hero/Hero.jsx';
import Footer from './components/Footer/Footer.jsx';
import men_banner from './components/assets/banner_mens.png'
import women_banner from './components/assets/banner_women.png'
import kid_banner from './components/assets/banner_kids.png'

const App = () => {
  return (
    <div className=''>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element = {<Shop/>}></Route>
        <Route path='/men' element = {<ShopCategory banner={men_banner} category="men"/>}></Route>
        <Route path='/women' element = {<ShopCategory banner={women_banner} category="women"/>}></Route>
        <Route path='/kids' element = {<ShopCategory banner={kid_banner} category="kids"/>}></Route>
        <Route path="product" element={<Product />}>
          <Route path=':productId' element={<Product />} />
        </Route>
        

        <Route path='/cart' element={<Cart />}/>
        <Route path='/login' element={<LoginSignup />}/>
        
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App