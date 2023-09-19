import React from "react";
import { Header } from "./components/Header/Header";
import { Items } from "./components/Items";
import { Footer } from "./components/Footer/Footer";
import { ShowFullItem } from "./components/ShowFullItem/ShowFullItem";
import chair from "./img/chair-white.jpg";
import table from "./img/table.jpeg";
import bad from "./img/bad.jpeg";
import closet from "./img/closet.jpg";
import sofa from "./img/sofa.jpeg";
import nightstand from "./img/nightstand.jpg";
import Categories from "./components/Categories/Categories";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      showFullItem: false,
      fullItem: {},
      items: [
        {
          id: 1,
          title: 'Стул белый',
          img: chair,
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          category: 'стулья',
          categoryKey: 'chairs',
          price: '49.99',
          selected: false,
          count: 0
        },
        {
          id: 2,
          title: 'Стол обеденный',
          img: table,
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          category: 'столы',
          categoryKey: 'tables',
          price: '99.99',
          selected: false,
          count: 0
        },
        {
          id: 3,
          title: 'Кровать двуспальная',
          img: bad,
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          category: 'кровати',
          categoryKey: 'beds',
          price: '109.99',
          selected: false,
          count: 0
        },
        {
          id: 4,
          title: 'Шкаф-купе',
          img: closet,
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          category: 'мебель для хранения',
          categoryKey: 'cabinets',
          price: '169.99',
          selected: false,
          count: 0
        },
        {
          id: 5,
          title: 'Диван',
          img: sofa,
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          category: 'диваны',
          categoryKey: 'sofas',
          price: '100',
          selected: false,
          count: 0
        },
        {
          id: 6,
          title: 'Тумбочка прикроватная',
          img: nightstand,
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          category: 'мебель для хранения',
          categoryKey: 'cabinets',
          price: '50.99',
          selected: false,
          count: 0
        },
      ]
    }
    this.state.currentItems = this.state.items;
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
    this.onShowItem = this.onShowItem.bind(this);
    this.incrementItem = this.incrementItem.bind(this);
    this.decrementItem = this.decrementItem.bind(this);
  }

  render() {
    return (
      <div className="wrapper">
        <Header
          orders={this.state.orders}
          deleteOrder={this.deleteOrder}
          incrementItem={this.incrementItem}
          decrementItem={this.decrementItem}
        />
        <Categories chooseCategory={this.chooseCategory} />
        <Items
          onShowItem={this.onShowItem}
          items={this.state.currentItems}
          addToOrder={this.addToOrder}
          deleteOrder={this.deleteOrder}
        />
        {this.state.showFullItem && (
          <ShowFullItem
            item={this.state.fullItem}
            addToOrder={this.addToOrder}
            onShowItem={this.onShowItem}
            deleteOrder={this.deleteOrder}
          />
        )}
        <Footer />
      </div>
    );
  }

  onShowItem(item) {
    this.setState({ fullItem: item });
    this.setState({ showFullItem: !this.state.showFullItem });
    !this.state.showFullItem ?
      document.body.classList.add('hidden')
      :
      document.body.classList.remove('hidden');
  }

  chooseCategory(categoryKey) {
    if (categoryKey === 'all') {
      this.setState({
        currentItems: this.state.items
      });
      return;
    }
    this.setState({
      currentItems: this.state.items.filter(el => el.categoryKey === categoryKey)
    });
  }
  addToOrder(item) {
    let isInArray = false;
    this.setState({ items: [...this.state.items, item.selected = true] });
    this.setState({ items: [...this.state.items, item.count = 1] });
    this.state.orders.forEach(el => {
      if (el.id === item.id) {
        isInArray = true;
      }
    });
    if (!isInArray) {
      this.setState({ orders: [...this.state.orders, item] });
    }
  }

  deleteOrder(item) {
    this.setState({ orders: [...this.state.orders, item.selected = false] });
    this.setState({ orders: this.state.orders.filter(el => el.id !== item.id) });
    this.setState({ items: [...this.state.orders, item.count = 0] });
  }

  incrementItem(item) {
    this.setState({ items: [...this.state.orders, item.count += 1] });
  }

  decrementItem(item) {
    if (item.count === 0) {
      return;
    }
    this.setState({ items: [...this.state.orders, item.count -= 1] });
  }
}

export default App;
