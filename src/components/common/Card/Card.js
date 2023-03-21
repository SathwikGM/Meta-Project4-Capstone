import "./Card.css";
import { menu } from '../../pages/Menu/Food'
import Button from "../Button/Button"

import React from 'react'

const Card = () => {
  const food = menu.map((item) => {
    return (
      <div className="card-element-container">
        <img className="card-image" src={item.image} alt="food" />
        <p className="card-element">{item.dish}</p>
        <p className="card-element">{item.price}</p>
        <p className="card-element">{item.description}</p>
        <Button type="submit" buttonName={item.button} />
      </div>
    )
  })

  return (
    <div className="card-container">
      {food}
    </div>
  )
}

export default Card