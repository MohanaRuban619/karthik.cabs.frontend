import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { HelmetProvider, Helmet } from 'react-helmet-async';
import Home from './Pages/Home/Home'
import ContactUs from './Pages/ContactUs/ContactUs'

const AllRoutes = () => {
  return (
    <HelmetProvider> {/* Wrap your app with HelmetProvider */}
      <Routes>
        <Route 
          path='/' 
          element={
            <>
              <Helmet>
                <title>Karthik Cabs - Reliable Taxi Service in Coimbatore</title>
                <meta 
                  name="description" 
                  content="Karthik Cabs offers reliable taxi services in Coimbatore for your travel and tour needs. Book a cab today for a smooth and comfortable ride!" 
                />
                <meta name="keywords" content="travels in Coimbatore, taxi service, cab service, tour in Coimbatore, taxi booking" />
              </Helmet>
              <Home />
            </>
          } 
        />
        <Route 
          path='/contact-us' 
          element={
            <>
              <Helmet>
                <title>Contact Karthik Cabs - Taxi Service in Coimbatore</title>
                <meta 
                  name="description" 
                  content="Get in touch with Karthik Cabs for your taxi and travel service needs in Coimbatore. We offer quick and easy bookings for your convenience." 
                />
                <meta name="keywords" content="contact Karthik Cabs, taxi service Coimbatore, book a cab" />
              </Helmet>
              <ContactUs />
            </>
          } 
        />
      </Routes>
    </HelmetProvider>
  );
}

export default AllRoutes;
