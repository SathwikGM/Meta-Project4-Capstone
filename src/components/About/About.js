import OwnerPhotoOne from '../../assets/Mario and Adrian A.jpg';
import OwnerPhotoTwo from '../../assets/Mario and Adrian b.jpg';
import './About.css'

const About = () => {
  return (<>
    <section className='about-container'>
      <div className='about-desc-container'>
        <h2>Little Lemon</h2>
        <h4>Chicago</h4>
        <p>Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Et sed laboriosam numquam
          alias eius at placeat itaque quas eos velit mollitia
          officia pariatur, labore deleniti, error enim quo vitae debitis.</p>
      </div>
      <div className='about-img-container'>
        <img className='about-img' src={OwnerPhotoOne} alt="Lemon Logo" />
        <img className='about-img over-img' src={OwnerPhotoTwo} alt="Lemon Logo" />
      </div>
    </section>

  </>)
}

export default About;