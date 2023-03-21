import React from 'react'
import './Button.css'

const Button = ({ buttonName, type }) => {
  return (
    <button className='button' type={type}>{buttonName}</button>
  )
}

export default Button;