import { Routes, Route } from "react-router-dom";

import Nav from './components/Nav/Nav';
import Home from './pages/Home/Home';
import About from "./pages/About/About";
import Menu from "./pages/Menu/Menu";
import Reservations from "./pages/Reservations/Reservations";
import OrderOnline from "./pages/OrderOnline/OrderOnline";
import Login from "./pages/Login/Login";


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
