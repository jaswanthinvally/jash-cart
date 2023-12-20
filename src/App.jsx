import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Products from './Pages/Products/Products'
import ProductDetails from './Pages/ProductDetails/ProductDetails'
import Cart from './Pages/Cart/Cart'
function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={Home} />
        <Route path='/products' element={Products} />
        <Route path='/productsdetail' element={ProductDetails} />
        <Route path='/cart' element={Cart} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
