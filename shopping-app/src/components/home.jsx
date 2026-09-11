import React from 'react'
import Item from './item'

const Home = () => {
  const itemData = [
    { title: 'ReactJS', price: '465' },
    { title: 'NodeJS', price: '565' },
    { title: 'ExpressJS', price: '763' },
  ]

  return (
    <div className='home'>
      <div className='items-row'>
        {itemData.map((item, index) => (
          <Item key={`${item.title}-${index}`} title={item.title} price={item.price} />
        ))}
      </div>
    </div>
  )
}

export default Home
