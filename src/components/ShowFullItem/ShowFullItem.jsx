import React from 'react';
import './style.css';

export const ShowFullItem = ({ item, addToOrder, onShowItem, deleteOrder }) => {
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
        {!item.selected ?
        <button className='fullItem__button fullItem__button_add' onClick={() => addToOrder(item)}>+</button>
        :
        <button className='fullItem__button fullItem__button_selected' disabled>&#10004;</button>
      }
      {
        item.selected && (
          <button className='fullItem__button fullItem__button-delete' onClick={() => deleteOrder(item)}>&#10008;</button>
        )
      }
      </div>
    </div>
  )
}
