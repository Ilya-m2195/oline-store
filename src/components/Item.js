import React from 'react'

export default function Item({title, desc, price, img, category}) {
  return (
    <div className='item'>
      <img src={img} alt={title}/>
      <h2 className='item__title'>{title}</h2>
      <p className='item__category'>{category}</p>
      <p className='item__desc'>{desc}</p>
      <p className='item__price'>{price}$</p>
      <button className='item__button'>+</button>

    </div>
  )
}
