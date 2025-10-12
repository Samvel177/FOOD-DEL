import React, { useState } from 'react'
import Navbar from './commponents/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './commponents/Footer/Footer'
import LoginPopup from './commponents/LoginPopup/LoginPopup'
import { BrowserRouter } from 'react-router-dom'
import StoreContextProvider from './context/StoreContext.jsx'

const App = () => {

  const [showLogin,setShowLogin] = useState(false)

  return (
    <>
      <BrowserRouter>
    <StoreContextProvider>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />
        </Routes>
      </div>
      <Footer />   </StoreContextProvider>
  </BrowserRouter>
    </>
  )
}

export default App