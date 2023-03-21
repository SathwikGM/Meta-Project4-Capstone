import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import Footer from '../Footer/Footer';
import './Nav.css';
import Logo from '../../../assets/Logo.svg';

const Nav = () => {
  const [toggle, setToggle] = useState(false)
  const toggaleClass = (e) => {
    setToggle(!toggle)
  }
  return (
    <>
      <nav className='navbar'>
        <div className="brand-image">
          <img src={Logo} alt="Lemon Logo" />
        </div>
        <button href="#" className="toggle-button" onClick={toggaleClass}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
        <div className={`navbar-links ${toggle ? 'active' : ''}`}>
          <ul >
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/about">ABOUT</Link></li>
            <li><Link to="/menu">MENU</Link></li>
            <li><Link to="/reservations">RESERVATIONS</Link></li>
            <li><Link to="/orderonline">ORDER ONLINE</Link></li>
            <li><Link to="/login">LOGIN</Link></li>
          </ul>
        </div>
      </nav>
      <Outlet />
      <Footer />
    </>
  );
}

export default Nav;