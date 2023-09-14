import React, { Component } from 'react'
import Item from './Item/Item'

class Items extends Component {
  render() {
    return (
      <main>
        {this.props.items.map(el => {
          return (
            <Item
              key={el.id}
              item={el}
              deleteOrder={this.props.deleteOrder}
              addToOrder={this.props.addToOrder}
              onShowItem={this.props.onShowItem}
            />
          )
        })}
      </main>
    )
  }
}

export default Items;
