import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from './component/Cart'
import Navbar from './component/Navbar'
import Products from './component/Products'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Products />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </>
  )
}

export default App
