import React from "react";
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from "../sample-fishes";
import Fish from './Fish';
import base from '../base'; // importing firebase

class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  };

  componentDidMount(){
    const { params } = this.props.match;
    // reinstate localStorage
    const localStorageRef = localStorage.getItem(params.storeId);
    if(localStorageRef) {
      this.setState({ order: JSON.parse(localStorageRef)});
    }
      // refs in firebase are references to a piece of data.
      this.ref = base.syncState(`${params.storeId}/fishes`, {
      context: this, // idk what this is.
      state: "fishes" // state to sync
    });
  }

  componentDidUpdate(){
    localStorage.setItem(this.props.match.params.storeId, JSON.stringify(this.state.order));
    // console.log('it updated!')
  }

  componentWillUnmount(){
    base.removeBinding(this.ref); // this prevents a memory leak.
  }

  addFish = fish => {
    // console.log(`${fish}`);
    // take a copy of our existing state
    const fishes = { ...this.state.fishes };
    // add our new fish to the state copy
    fishes[`${Date.now()}`] = fish;
    // update the state to the new state
    this.setState({fishes});
  }

  updateFish = (key, updatedFish) => {
    const fishes = { ...this.state.fishes };
    fishes[key] = updatedFish;
    this.setState({ fishes });
  }

  deleteFish = (key) => {
    const fishes = { ...this.state.fishes }
    fishes[key] = null
    this.setState({ fishes })
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

  deleteFromOrder = key => {
    const order = {...this.state.order };
    delete order[key];
    // console.dir(order)
    this.setState({ order });
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
        <Order
          fishes={this.state.fishes}
          order={this.state.order}
          // index={key}
          deleteFromOrder={this.deleteFromOrder}
        />
        <Inventory
          deleteFish={this.deleteFish}
          fishHandler={this.addFish}
          loadSampleFishes={this.loadSampleFishes}
          fishes = {this.state.fishes}
          updateFish = {this.updateFish}
        />
      </div>
    )
  }

}

export default App;
