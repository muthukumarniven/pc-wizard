import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './screens/Home';
import AboutUs from './screens/AboutUs';
import Products from './screens/Products';
import Contact from './screens/Contact';
import ServiceSupport from './screens/ServiceSupport';
import ProductDetail from './screens/ProductDetail';


export default function Navigation() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about_us' element={<AboutUs />} />
                    <Route path='/products' element={<Products/>} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/service-support' element={<ServiceSupport/>}/>
                    <Route path='/product-detail' element={<ProductDetail/>} />
                </Routes>
            </BrowserRouter>
        </>
    )
}
