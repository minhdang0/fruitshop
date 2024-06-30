import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';

import Home from '../pages/Home';
import Reagister from '../pages/Reagister';
import Login from '../pages/Login';
import Fruit from '../pages/Fruit';
import Vegetable from '../pages/Vegetable';
import Drink from '../pages/Drink';
import Snack from '../pages/Snack';
import ShopingCart from '../pages/ShoppingCart';
import GiftFruit from '../pages/GiftFruit';
import Profile from '../pages/Profile';
const Routers = () => {
  return (
   <Routes>

        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/fruit" element={<Fruit/>} />
        <Route path="/vegetable" element={<Vegetable/>} />
        <Route path="/drink" element={<Drink/>} />
        <Route path="/snack" element={<Snack/>} />
        <Route path="/giftFruit" element={<GiftFruit />} />
        <Route path="/shoppingCart" element={<ShopingCart/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/reagister" element={<Reagister />} />
        <Route path="/profile" element={<Profile />} />

   </Routes>
  )
}

export default Routers;