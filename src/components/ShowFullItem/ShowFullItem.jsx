import React from 'react';
import './style.css';

export const ShowFullItem = ({ item, addToOrder, onShowItem }) => {
  return (
    <div className='fullItem__container'>
      <div className='fullItem__modal'>
        <img className='fullItem__img' src={item.img} alt={item.title} onClick={() => onShowItem()} />
        <div className='fullItem__information-block'>
          <h2 className='fullItem__title'>{item.title}</h2>
          <p className='fullItem__category'>Категория: {item.category}</p>
          <p className='fullItem__desc'>{item.desc}</p>
          <p className='fullItem__price'>{item.price}$</p>
        </div>
        <button className='fullItem__button' onClick={() => addToOrder(item)}>+</button>
      </div>
    </div>
  )
}
