import React, { useState } from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { Order } from '../Order/Order';
import './style.css';

export const Header = (props) => {
  const [basketActive, setBasketActive] = useState(false);
  let summa = 0;
  props.orders.forEach(el => summa += Number(el.price));

  return (
    <>
      <header>
        <div className='logo'>
          <a href='#'>House staff</a>
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

      </header>
      <div className='presentation'>
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
            {props.orders.length > 0 && (
              <p className='order-summa'> Сумма: {summa.toFixed(2)}$</p>
            )}
          </div>
        )}
      </div>
    </>
  );
}
