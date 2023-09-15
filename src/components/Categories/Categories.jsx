import React, { Component } from 'react';
import './styles.css';

export default class Categories extends Component {
  constructor(props) {
    super(props)
    this.state = {
      categories: [
        {
          key: 'all',
          name: 'все'
        },
        {
          key: 'chairs',
          name: 'Стулья'
        },
        {
          key: 'tables',
          name: 'Столы'
        },
        {
          key: 'beds',
          name: 'Кровати'
        },
        {
          key: 'cabinets',
          name: 'Мебель для хранения'
        },
        {
          key: 'sofas',
          name: 'Диваны'
        },
      ]
    }
  }
  render() {
    return (
      <ul className='categories__list'>
        {this.state.categories.map(el => {
          return (
              <li key={el.key} className='categories__item' onClick={() => this.props.chooseCategory(el.key)}>{el.name}</li>
          );
        })}
      </ul>
    );
  }
}

