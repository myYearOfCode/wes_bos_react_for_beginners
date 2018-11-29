import React from "react";

class AddFishForm extends React.Component {
  nameRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  descRef = React.createRef();
  imageRef = React.createRef();

  createFish = event => {
    event.preventDefault();
    // console.log(this.nameRef.value.value);
    const fish = {
      nameRef: this.nameRef.value.value,
      priceRef: parseFloat(this.priceRef.value.value),
      statusRef: this.statusRef.value.value,
      descRef: this.descRef.value.value,
      imageRef: this.imageRef.value.value
    }
    console.log(fish);
    this.props.fishHandler(fish);
    event.currentTarget.reset(); //reset the form
  }

  render() {
    return (
      <form className="fish-edit" onSubmit={this.createFish}>
          <input name="name" ref={this.nameRef} type="text" placeholder="name" />
          <input name="price" ref={this.priceRef} type="text" placeholder="price" />
          <select name="status" ref={this.statusRef} placeholder="status" >
            <option value="available">Fresh!</option>
            <option value="unavailable">Sold Out!</option>
          </select>
          <textarea name="desc" ref={this.descRef} placeholder="desc" />
          <input name="image" ref={this.imageRef} type="text" placeholder="image" />
          <button type="submit">+ Add Fish</button>
        </form>
    )
  }

}

export default AddFishForm;
