import { Link } from "react-router-dom";
import Button from '../Button/Button';
import GreekSalad from '../../../assets/greek salad.jpg';
import Bruschetta from '../../../assets/bruchetta.svg';
import LemonDessert from '../../../assets/lemon dessert.jpg';
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
        <Link to="/menu"> <Button buttonName="Online Menu" /></Link>
      </div>
      <div className='specials-container'>
        {
          specials.map((special) => {
            return (
              <div className='special' key={special.dish}>
                <div className='special-img'>
                  <img className='special-img' src={special.image} alt='' />
                </div>
                <div>
                  <h3>{special.dish}</h3>
                  <p>{special.price}</p>
                  <p>{special.description}</p></div>
                <div special-btn>
                  <Button buttonName={special.button} />
                </div>
              </div>
            );
          })
        }
      </div>
    </section>
  </>)
}

export default Highlights;