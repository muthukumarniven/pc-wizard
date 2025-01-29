import React from 'react'



import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './screens/Home';


export default function Navigation() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}
