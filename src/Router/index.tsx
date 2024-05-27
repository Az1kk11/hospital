import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { CardDetail, Home } from '../Page'

const Routers = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/doctor/:id' element={<CardDetail />} />
        </Routes>
    )
}

export default Routers