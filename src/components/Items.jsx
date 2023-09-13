import React, { Component } from 'react'
import Item from './Item/Item'

class Items extends Component {
  render() {
    return (
      <main>
        {this.props.items.map(el => {
          return (
            <Item
              item={el}
              key={el.id}
              addToOrder={this.props.addToOrder} />
          )
        })}
      </main>
    )
  }
}

export default Items;
