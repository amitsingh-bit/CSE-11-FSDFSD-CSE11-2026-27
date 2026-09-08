import React from 'react'
import image from '../assets/hero.png'


const Item = () => {
  return (
    <div className='item'>
      <img src={image} alt='Item Image' className='item-image' />
      <div className='item-details'>
        <h2>Title: ReactJS</h2>
        <h3>Price: Rs756/-</h3>
        <button>Add to Cart</button>
      </div>
    </div>
  )
}

export default Item
