import React, { Component } from "react";
import "./ChangeDataWindow.css";
// name
// description
// price
// image
// category
class ChangeDataWindow extends Component{
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
      <div className="ChangeDataWindow">
        
        <div className="ChangeDataWindow__dataContainer">
          <div className="closeWindow" onClick={this.props.closeMethod}>
            <i className="fas fa-times"></i>
          </div>

          <input type="text" placeholder="Название" onInput={this.OnNameChange} value={this.state.productName} className="dataContainer__textField" onChange={this.OnInputChange}/>
          <input type="text" placeholder="Цена" onInput={this.OnPriceChange} value={this.state.productPrice} className="dataContainer__textField"/>
          <select name="" className="dataContainer__select" >
            <option value="">1</option>
            <option value="">2</option>
            <option value="">3</option>
            <option value="">4</option>
          </select>
          <textarea type="text" placeholder="Описание" className="dataContainer__textField" rows="10" cols="20" onInput={this.OnDescriptionChange} value={this.state.productDescription}/>

          <div className="dataContainer__imageWrapper">
            {this.state.productImage ? <div className="imageWrapper__container-imageWrapper"><img src={this.state.productImage} alt="" className="container-imageWrapper__image" /><div className="imageWrapper__symbolWrapper imageWrapper__symbolWrapper-mask"><i className="fas fa-pencil-alt"></i></div> </div> : <div className="imageWrapper__symbolWrapper"><i className="fas fa-plus-circle"></i></div> }
          </div>
          
        </div>
      </div>
    );
  }
}

export default ChangeDataWindow;