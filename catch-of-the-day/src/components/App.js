import React from "react";
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';

class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  }

  addFish = fish => {
    console.log(`${fish}`);
    const fishes = { ...this.state.fishes };
    fishes[`${Date.now()}`] = fish;
    this.setState({fishes});
  }
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market"/>
        </div>
        <Order />
        <Inventory fishHandler={this.addFish}/>
      </div>
    )
  }

}

export default App;
