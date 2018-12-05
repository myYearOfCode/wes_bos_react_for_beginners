import React from "react";

class EditFishForm extends React.Component {
  handleChange = event => {
    //update that fish
    // take a copy of the current fish
    const updatedFish = {
      ...this.props.fish,
      [event.currentTarget.name]: event.currentTarget.value
      //above in the [] is a cool es6 thing called "computed property names"
      //it allows you to grab the name of the updated element and not have to
      //write a handler for every single input.
      // this is the reason we put a "name" field on all of the inputs.

    };
    this.props.updateFish(this.props.index, updatedFish)
  }
  render() {
    return (
      <div className="fish-edit">
        <input type="text" name="name" value={this.props.fish.name} onChange={this.handleChange} />
        <input type="text" name="price" value={this.props.fish.price} onChange={this.handleChange} />
        <select type="text" name="status" value={this.props.fish.status} onChange={this.handleChange} >
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea name="desc" value={this.props.fish.desc} onChange={this.handleChange} />
        <input type="text" name="image" value={this.props.fish.image} onChange={this.handleChange} />
        <button onClick={ () => this.props.deleteFish(this.props.index)}>Remove Fish</button>
      </div>
    )
  }
}

export default EditFishForm;
