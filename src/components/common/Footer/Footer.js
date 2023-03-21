import './Footer.css';
import Logo from '../../../assets/Asset 20@4x.png';
const Footer = () => {
  return (<>
    <footer className='footer-container'>
      <img className='footer-logo' src={Logo} alt="Lemon Logo" />
      <ul className='footer-nav-link-container'>
        <li><a href="/html/">Home</a></li>
        <li><a href="/html/">About</a></li>
        <li><a href="/html/">Menu</a></li>
        <li><a href="/html/">Reservations</a></li>
        <li><a href="/html/">Order Online</a></li>
        <li><a href="/html/">Login</a></li>
      </ul>
      <ul className='footer-contact-link-container'>
        <li><a href="/html/">Address</a></li>
        <li><a href="/html/">Phone Number</a></li>
        <li><a href="/html/">Email</a></li>
      </ul>
      <ul className='footer-social-link-container'>
        <li><a href="/html/">Facebook</a></li>
        <li><a href="/html/">Instagram</a></li>
      </ul>
    </footer>
  </>)
}

export default Footer;