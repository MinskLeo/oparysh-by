import React, { Component } from "react";
import "./NewChangeDataWindow.css";

class NewChangeDataWindow extends Component{

  state = {
    productName: null,
    productPrice: null,
    productDescription: null,
    productImage: null
  }

  OnNameChange = (event) => {
    this.setState({
      productName: event.target.value
    });
  }
  OnImageChange = (event) => {
    this.setState({
      productImage: event.target.value
    });
  }
  OnDescriptionChange = (event) => {
    this.setState({
      productDescription: event.target.value
    });
  }
  OnPriceChange = (event) => {
    this.setState({
      productPrice: event.target.value
    });
  }

  componentWillMount = () => {
    this.setState({
      productImage: this.props.item.image,
      productDescription: this.props.item.description,
      productPrice: this.props.item.price,
      productName: this.props.item.name
    });
  }



  render(){
    return(
      <div className="NewChangeDataWindow">
        <h1>Hello! 1</h1>
        <h1>Hello! 2</h1>
        <h1>Hello! 3</h1>
        <h1>Hello! 4</h1>



      </div>
    );
  }
}

export default NewChangeDataWindow;