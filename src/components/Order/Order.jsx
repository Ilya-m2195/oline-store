import './style.css'
import { TiTrash } from "react-icons/ti";

export const Order = ({ item, deleteOrder }) => {

  return (
    <div className="order-wrapper">
      <div className='order'>
        <img className='order__img' src={item.img} alt={item.title} />
        <h2 className='order__title'>{item.title}</h2>
        <p className='order__price'>{item.price}$</p>

      </div>
      <>
        <TiTrash className="order__delete-icon" onClick={() => deleteOrder(item.id)}/>
      </>
    </div>
  )
}