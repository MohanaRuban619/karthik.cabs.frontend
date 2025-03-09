import React from 'react'
import { Routes,Route} from 'react-router-dom'
import Home from './Pages/Home/Home'
// import ContactUs from './Pages/ContactUs/ContactUs'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/'  element={<Home/>} />
        {/* <Route path='/contact-us'  element={<ContactUs/>} /> */}
    </Routes>
  )
}

export default AllRoutes