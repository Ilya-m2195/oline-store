import React, { useState } from 'react';
import { FaShoppingCart } from "react-icons/fa";

import './style.css';
import { Order } from '../Order/Order';

export default function Header(props) {
  const [basketActive, setBasketActive] = useState(false);
  let summa = 0;
  props.orders.forEach(el => summa += Number(el.price));

  return (
    <>
      <header>
        <div>
          <span className='logo'>House staff</span>
        </div>
        <ul className='nav'>
          <li>
            Про нас
          </li>
          <li>
            Контакты
          </li>
          <li>
            Кабинет
          </li>
          <li>
            <button className='basket-btn'>
              <FaShoppingCart onClick={() => setBasketActive(!basketActive)}
                className={!basketActive ? 'basket-icon' : 'basket-icon active'} /></button>
          </li>
        </ul>
        {basketActive && (
          <div className='open-basket'>
            {props.orders.length
              ? props.orders.map(el => {
                return (
                  <Order item={el} key={el.id} deleteOrder={props.deleteOrder} />
                )
              }
              )
              : <p className='basket-empty__massage'>Корзина пуста</p>
            }
            {props.orders.length > 0 &&
              (<p className='order-summa'> Сумма: {summa.toFixed(2)}$</p>)}
          </div>
        )}
      </header>
      <div className='presentation'></div>
    </>
  )
}
