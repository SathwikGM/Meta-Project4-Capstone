import React from 'react';
import { Routes, Route } from "react-router-dom";
import Nav from './components/common/Nav/Nav';
import Home from './components/pages/Home/Home';
import About from "./components/pages/AboutPage/AboutPage";
import Menu from "./components/pages/Menu/Menu";
import Reservations from "./components/pages/Reservations/Reservations";
import OrderOnline from "./components/pages/OrderOnline/OrderOnline";
import Login from "./components/pages/Login/Login";
import ConfirmedBooking from "./components/common/ConfirmedBooking/ConfirmedBooking";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Nav />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="Menu" element={<Menu />} />
        <Route path="reservations" element={<Reservations />} />
        <Route path="orderOnline" element={<OrderOnline />} />
        <Route path="login" element={<Login />} />
        <Route path="confirmation" element={< ConfirmedBooking />} />
      </Route>
    </Routes>
  )
}

export default Router;