import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Items from "./components/Items";
import chair from  "./img/chair-white.jpg";
import table from  "./img/table.jpeg";
import bad from  "./img/bad.jpeg";
import closet from "./img/closet.jpg"


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [
        {
          id: 1,
          title: 'Стул белый',
          img: chair,
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          category: 'Категория - Стулья',
          price: '49.99'
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
      ]
    }
  }

  render() {
    return (
      <div className="wrapper">
        <Header />
        <Items items={this.state.items}/>
        <Footer />
      </div>
    );
  }

}

export default App;
