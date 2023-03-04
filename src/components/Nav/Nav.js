import Logo from '../../assets/Logo .svg'
const Nav = () => {
  return (
    <>
      <img src={Logo} alt="Lemon Logo" />
      <ul>
        <li><a href="/html/">HOME</a></li>
        <li><a href="/html/">ABOUT</a></li>
        <li><a href="/html/">MENU</a></li>
        <li><a href="/html/">RESERVATIONS</a></li>
        <li><a href="/html/">ORDER ONLINE</a></li>
        <li><a href="/html/">LOGIN</a></li>
      </ul>
    </>
  );
}

export default Nav;