import React from 'react';
import './style.css';

export const Item = ({ item, addToOrder, onShowItem, deleteOrder }) => {
  return (
    <div className='item'>
      <img className='item__img' src={item.img} alt={item.title} onClick={() => onShowItem(item)} />
      <div className='item__information-block'>
        <h2 className='item__title'>{item.title}</h2>
        <p className='item__category'>Категория: {item.category}</p>
        <p className='item__desc'>{item.desc}</p>
        <p className='item__price'>{item.price}$</p>
      </div>
      {!item.selected ?
        <button className='item__button item__button_add' onClick={() => addToOrder(item)}>+</button>
        :
        <button className='item__button item__button_selected' disabled>&#10004;</button>
      }
      {
        item.selected && (
          <button className='item__button item__button-delete' onClick={() => deleteOrder(item)}>&#10008;</button>
        )
      }
    </div>
  );
}
