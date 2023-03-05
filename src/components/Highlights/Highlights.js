
import GreekSalad from '../../assets/greek salad.jpg';
import Bruschetta from '../../assets/bruchetta.svg';
import LemonDessert from '../../assets/lemon dessert.jpg';
import './Highlights.css'

const specials = [
  {
    image: GreekSalad,
    dish: 'Greek Salad',
    price: '$12.99',
    description: 'ebfbbfbwueofwv',
    button: 'Order for Delivery',
  },
  {
    image: Bruschetta,
    dish: 'Bruschetta',
    price: '$10.99',
    description: 'ebfbbfbwueofwv',
    button: 'Order for Delivery',
  },
  {
    image: LemonDessert,
    dish: 'Lemon Dessert',
    price: '$15.99',
    description: 'ebfbbfbwueofwv',
    button: 'Order for Delivery',
  }
]


const Highlights = () => {
  return (<>
    <section className='highlights-container'>
      <div className='high-desc-container'>
        <h2>This Weeks Specials</h2>
        <button>Online Menu</button>
      </div>
      <div className='specials-container'>
        {
          specials.map((special) => {
            return (
              <div className='special'>
                <img className='special-img' src={special.image} alt='' />
                <h3>{special.dish}</h3>
                <p>{special.price}</p>
                <p>{special.description}</p>
                <button>{special.button}</button>
              </div>
            );
          })
        }
      </div>
    </section>
  </>)
}

export default Highlights;