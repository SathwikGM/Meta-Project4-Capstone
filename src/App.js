import { Routes, Route } from "react-router-dom";

import Nav from './components/Nav/Nav';
import Home from './components/pages/Home/Home';
import About from "./components/pages/AboutPage/AboutPage";
import Menu from "./components/pages/Menu/Menu";
import Reservations from "./components/pages/Reservations/Reservations";
import OrderOnline from "./components/pages/OrderOnline/OrderOnline";
import Login from "./components/pages/Login/Login";


import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="Menu" element={<Menu />} />
          <Route path="reservations" element={<Reservations />} />
          <Route path="orderOnline" element={<OrderOnline />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
