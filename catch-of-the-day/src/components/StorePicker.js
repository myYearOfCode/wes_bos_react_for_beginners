import React from 'react';
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
  myInput = React.createRef();
  goToStore = event => {
    // stop the form from submitting
    event.preventDefault();
    //get the text from that Input
    let storeName = this.myInput.value.value
    // change the page to /store/whatever-was-randomly-entered
    this.props.history.push(`/store/${storeName}`);
  }
  render(){
    return(
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please enter a store</h2>
        <input
          type="text"
          required placeholder="Store Name"
          ref={this.myInput}
          default value = {getFunName()}
        />
        <button type="submit">Visit Store -> </button>
      </form>
    )
  }
}

export default StorePicker;
