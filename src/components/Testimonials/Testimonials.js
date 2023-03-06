
import './Testimonials.css'

const testimonials = [
  {
    name: "Nate",
    image: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
    rating: 5,
    review: 'ebfbbfbwueofwv'
  },
  {

    name: "Lisa",
    image: "https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
    rating: 4,
    review: 'ebfbbfbwueofwv'
  },
  {
    name: "Daniels",
    image: "https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
    rating: 5,
    review: 'ebfbbfbwueofwv'
  },
  {
    name: "Daniels",
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDV8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
    rating: 5,
    review: 'ebfbbfbwueofwv'
  },
]


const Testimonials = () => {
  return (<>
    <section className='testimonials-container'>
      <h2 className='test-header'>Testimonials</h2>
      <div className='reviews-container'>
        {
          testimonials.map((testimonial) => {
            return (
              <div className='reviews' key={testimonial.image}>
                <img className='special-img' src={testimonial.image} alt='' />
                <h4>{testimonial.name}</h4>
                <p>{testimonial.rating}</p>
                <p>{testimonial.review}</p>
              </div>
            );
          })
        }
      </div>
    </section>
  </>)
}

export default Testimonials;