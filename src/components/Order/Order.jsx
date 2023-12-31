import './style.css'
import { TiTrash } from "react-icons/ti";

export const Order = ({ item, deleteOrder, incrementItem,  decrementItem }) => {

  return (
    <div className="order-wrapper">
      <div className='order'>
        <img className='order__img' src={item.img} alt={item.title} />
        <h2 className='order__title'>{item.title}</h2>
        <p className='order__price'>{item.price}$</p>
      </div>
      <div className='order__buttons-wrapper'>
        <div className='order__counter'>
          <button className= {item.count > 0 ? 'counter__button': 'counter__button default-cursor'} onClick={() => decrementItem(item)} disabled={item.count === 0}><span>-</span></button>
          <span className='counter__count'>{item.count}</span>
          <button className='counter__button' onClick={() => incrementItem(item)}><span>+</span></button>
        </div>
        <TiTrash className="order__delete-icon" onClick={() => deleteOrder(item)} />
      </div>
    </div>
  )
}