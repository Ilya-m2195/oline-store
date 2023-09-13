import React from "react";
import Header from "./components/Header/Header";
import Items from "./components/Items";
import chair from "./img/chair-white.jpg";
import table from "./img/table.jpeg";
import bad from "./img/bad.jpeg";
import closet from "./img/closet.jpg";
import sofa from "./img/sofa.jpeg";
import nightstand from "./img/nightstand.jpg";
import Footer from "./components/Footer/Footer";


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      items: [
        {
          id: 1,
          title: 'Стул белый',
          img: chair,
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          category: 'Категория - Стулья',
          price: '49.99',
        },
        {
          id: 2,
          title: 'Стол обеденный',
          img: table,
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          category: 'Категория - Столы',
          price: '99.99'
        },
        {
          id: 3,
          title: 'Кровать двуспальная',
          img: bad,
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          category: 'Категория - Кровати',
          price: '109.99'
        },
        {
          id: 4,
          title: 'Шкаф-купе',
          img: closet,
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          category: 'Категория - Мебель для хранения',
          price: '169.99'
        },
        {
          id: 5,
          title: 'Диван',
          img: sofa,
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          category: 'Категория - диваны',
          price: '100'
        },
        {
          id: 6,
          title: 'Тумбочка прикроватная',
          img: nightstand,
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          category: 'Категория - Мебель для хранения',
          price: '50.99'
        },
      ]
    }
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
  }

  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} deleteOrder={this.deleteOrder} />
        <Items items={this.state.items} addToOrder={this.addToOrder} />
        <Footer />
      </div>
    );
  }
  addToOrder(item) {
    let isInArray = false;
    this.state.orders.forEach(el => {
      if (el.id === item.id) {
        isInArray = true;
      }
    });
    if (!isInArray) {
      this.setState({ orders: [...this.state.orders, item] });
    }
  }

  deleteOrder(id) {
    this.setState({orders:this.state.orders.filter(el => el.id !== id)})
  }
}

export default App;
