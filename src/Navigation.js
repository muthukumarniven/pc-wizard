import React from 'react'



import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './screens/Home';
import AboutUs from './screens/AboutUs';


export default function Navigation() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about_us' element={<AboutUs />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}
