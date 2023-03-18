import { Link } from "react-router-dom";
import HeroLogo from '../../assets/Food.png';
import Button from "../Button/Button";
import './Hero.css'
const Hero = () => {
  return (<>
    <section className='hero-container'>
      <div className='hero-desc-container'>
        <h1>Little Lemon</h1>
        <h4>Chicago</h4>
        <p>Lorem ipsum, dolor sit amet consectetur
          Lorem ipsum, dolor sit amet consectetur</p>
        <p>Lorem ipsum, dolor sit amet consectetur
          Lorem ipsum, dolor sit amet consectetur</p>

        <Link to="/reservations"><Button type="submit" buttonName={"Reserve a Table"} /></Link>
      </div>
      <div className='hero-img-container'>
        <img className='hero-img' src={HeroLogo} alt="Lemon Logo" />

      </div>
    </section>
  </>)
}

export default Hero;