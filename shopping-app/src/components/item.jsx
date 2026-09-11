import React from 'react'
import image from '../assets/hero.png'


const Item = ({ title, price }) => {
  return (
    <div className='item'>
      <img src={image} alt='Item Image' className='item-image' />
      <div className='item-details'>
        <h2>Title: {title}</h2>
        <h3>Price: ₹{price}/-</h3>
        <button>Add to Cart</button>
      </div>
    </div>
  )
}

export default Item
