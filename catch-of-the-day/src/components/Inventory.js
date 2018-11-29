import React from "react";
import AddFishForm from "./AddFishForm";

class Inventory extends React.Component {
  render() {
    return (
      <div className="Inventory">
        <h2>Inventory</h2>
        < AddFishForm fishHandler={this.props.fishHandler}/>
      </div>
    )
  }

}

export default Inventory;
