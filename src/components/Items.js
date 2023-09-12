import React, { Component } from 'react'
import Item from './Item'

export class Items extends Component {
  render() {
    return (
      <main>
        {this.props.items.map(el => {
          return (
            <Item
              key={el.id}
              title={el.title}
              desc={el.desc}
              price={el.price}
              img={el.img}
              category={el.category} />
          )
        })}
      </main>
    )
  }
}

export default Items
