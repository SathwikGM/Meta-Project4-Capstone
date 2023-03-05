import HeroLogo from '../../assets/Food.png';
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

        <button>Reserve a Table</button>
      </div>
      <div className='hero-img-container'>
        <img className='hero-img' src={HeroLogo} alt="Lemon Logo" />

      </div>
    </section>
  </>)
}

export default Hero;