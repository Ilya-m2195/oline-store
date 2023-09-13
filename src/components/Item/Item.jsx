import React from 'react';
import './style.css';

export default function Item({ item, addToOrder }) {
  return (
    <div className='item'>
      <img className='item__img' src={item.img} alt={item.title} />
      <div className='item__information-block'>
        <h2 className='item__title'>{item.title}</h2>
        <p className='item__category'>{item.category}</p>
        <p className='item__desc'>{item.desc}</p>
        <p className='item__price'>{item.price}$</p>
      </div>
      <button className='item__button' onClick={() => addToOrder(item)}>+</button>
    </div>
  )
}
