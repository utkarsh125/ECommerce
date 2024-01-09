import React from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShopCategory from './pages/ShopCategory.jsx';
import LoginSignup from './pages/LoginSignup.jsx';
const App = () => {
  return (
    <div className=''>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element = {<Shop/>}></Route>
        <Route path='/men' element = {<ShopCategory category="men"/>}></Route>
        <Route path='/women' element = {<ShopCategory category="women"/>}></Route>
        <Route path='/kids' element = {<ShopCategory category="kids"/>}></Route>
        <Route path="product" element={<Product />}>
          <Route path=':productId' element={<Product />} />
        </Route>

        <Route path='/cart' element={<Cart />}/>
        <Route path='/cart' element={<LoginSignup />}/>

        
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App