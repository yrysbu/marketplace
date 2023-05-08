import React from 'react';
import Shop from '../pages/Shop';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Cart from '../pages/Cart';
import Checkout from '../pages/Checkout';
import ProductDetails from '../pages/ProductDetails';
import HomePage from '../pages/HomePage';
import { Routes, Route, Navigate } from 'react-router-dom';

const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path='home' element={<HomePage />} />
            <Route path='shop' element ={<Shop/>} />
            <Route path='login' element ={<Login/>} />
            <Route path='signup' element={<Signup />} />
            <Route path='cart' element={<Cart />} />
            <Route path='checkout' element={<Checkout />} />
            <Route path='shop/:id' element ={<ProductDetails/>} />
       </Routes>
    );
};

export default Routers;