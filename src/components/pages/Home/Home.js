import Hero from "../../common/Hero/Hero";
import Highlights from "../../common/Highlights/Highlights";
import About from "../../common/About/About";
import Testimonials from "../../common/Testimonials/Testimonials";
import './Home.css';


const Home = () => {
  return (
    <>
      <Hero />
      <Highlights />
      <Testimonials />
      <About />
    </>

  )
}

export default Home;