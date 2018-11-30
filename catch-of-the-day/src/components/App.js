import React from "react";
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from "../sample-fishes";
import Fish from './Fish';

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
  loadSampleFishes = () => {
    this.setState({fishes: sampleFishes})
  }
  addToOrder = key => {
    //take a copy of state order
    const order = {...this.state.order };
    //either add to the order or update the number in our order
    order[key] = order[key] + 1 || 1;
    // call setstate to update our state Object
    this.setState({ order })
  }
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market"/>
          <ul className="fishes">
            {Object.keys(this.state.fishes).map(key => (
              <Fish
                addToOrder={this.addToOrder}
                key={key}
                index={key}
                details={this.state.fishes[key]}
              />))}
          </ul>
        </div>
        <Order />
        <Inventory fishHandler={this.addFish} loadSampleFishes={this.loadSampleFishes}/>
      </div>
    )
  }

}

export default App;
