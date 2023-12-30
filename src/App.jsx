import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Products from './Pages/Products/Products'
import Cart from './Pages/Cart/Cart'
import ProductDetails from './Pages/ProductDetails/ProductDetails'
import Navbar from './Components/Navbar'
import Login from './Components/Login'



const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>  
        <Route path='/productdetails' element={<ProductDetails/>}/>  
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      {/*<Login/>*/}
    </BrowserRouter>
  )
}

export default App