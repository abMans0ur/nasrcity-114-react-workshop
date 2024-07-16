import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Routes/HomePage'
import About from './Routes/About'
import Products from './Routes/Products'
import SingleProduct from './Routes/SingleProduct'
import Cart from './Routes/Cart'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/home' element={<HomePage/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/products/:id' element={<SingleProduct/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </>
  )
}

export default App
