import { Outlet, Link } from "react-router-dom";
import Footer from '../Footer/Footer';
import './Nav.css';
import Logo from '../../assets/Logo.svg';

const Nav = () => {
  return (
    <>
      <nav className='nav-container'>
        <img src={Logo} alt="Lemon Logo" />
        <ul className='container'>
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/about">ABOUT</Link></li>
          <li><Link to="/menu">MENU</Link></li>
          <li><Link to="/reservations">RESERVATIONS</Link></li>
          <li><Link to="/orderonline">ORDER ONLINE</Link></li>
          <li><Link to="/login">LOGIN</Link></li>
        </ul>
      </nav>
      <Outlet />
      <Footer />
    </>
  );
}

export default Nav;