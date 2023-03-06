import OwnerPhotoOne from '../../assets/Mario and Adrian A.jpg';
import OwnerPhotoTwo from '../../assets/Mario and Adrian b.jpg';
import './AboutPage.css'

const AboutPage = () => {
  return (<>
    <section className='about-page-container'>
      <div className='about-page-desc-container'>
        <h2>Little Lemon</h2>
        <h4>Chicago</h4>
        <p>Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Et sed laboriosam numquam
          alias eius at placeat itaque quas eos velit mollitia
          officia pariatur, labore deleniti, error enim quo vitae debitis.</p>
      </div>
      <div className='about-page-img-container'>
        <img className='about-page-img' src={OwnerPhotoOne} alt="Lemon Logo" />
        <img className='about-page-img over-img' src={OwnerPhotoTwo} alt="Lemon Logo" />
      </div>
    </section>

  </>)
}

export default AboutPage;