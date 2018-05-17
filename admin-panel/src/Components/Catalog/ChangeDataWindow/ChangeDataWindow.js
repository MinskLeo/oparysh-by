import React, { Component } from "react";
import "./ChangeDataWindow.css";

import axios from "axios";

class ChangeDataWindow extends Component{
  state = {
    productName: null,
    productPrice: null,
    productDescription: null,
    productImage: null,
    selectedCategory: "Категория",
    dropDownOpened: false
  }

  componentWillMount = () => {
    this.setState({
      productImage: this.props.item.image,
      productDescription: this.props.item.description,
      productPrice: this.props.item.price,
      productName: this.props.item.name,
      categories: this.props.categories,
      id: this.props.item["_id"],
      selectedCategory: this.props.selectedCategory
    });
  }

  OnDropDownOpenerClick = () => {
    if(this.state.dropDownOpened){
      
      this.dropDownSelect.style.maxHeight = "0px";
    }else{
      this.dropDownSelect.style.maxHeight = "700px";
    }
    this.setState({
      dropDownOpened: !this.state.dropDownOpened
    });
  }

  CategoryOptionClick = (name, e) => {
    this.setState({
      selectedCategory: name,
      dropDownOpened: false
    });
    this.dropDownSelect.style.maxHeight="0px";
  }

  SaveButtonClick = () => {
    let objectToSend = {
      id: this.state.id,
      name: this.NameField.value,
      price: this.PriceField.value,
      category: this.state.selectedCategory,
      description: this.DescrtiptionField.value
    }
    
    axios.post('http://localhost:8080/admin/setproduct', {...objectToSend}).then( (result) => {
      if(result.status=="OK"){
        alert("OK!");
      }else{
        alert("Error! 1");
      }

      const formData = new FormData();
      formData.append('file', this.FileField.files[0]);
      formData.append('id', this.state.id);
      const config = {
        headers: {
          'content-type': 'multipart/form-data'
        }
      }

      return axios.post("http://localhost:8080/admin/setproductfile", formData, config);

    }).catch( (error) => {
      alert("Error! 2");
    });

    
  }

  DeleteButtonClick = () => {

  }

  render(){
    let categoriesSelectRendered = null;
    if(this.state.categories){
      categoriesSelectRendered = this.state.categories.map( (item,index)=>{
        return (
          <li key={item["_id"]} className="options__option"><button className="option__button" onClick={this.CategoryOptionClick.bind(this,item.name)}>{item.name}</button></li>
        );
      });
    }
    // name
    // description
    // price
    // image
    // category
    return(
      <div className="ChangeDataWindow">
      
        <div className="container">
          <div className="row form">

            <div className="col-md-12 ">
              <div className="row">

              <div className="col-md-8 form__container">
                <input type="text" placeholder="Название" className="form__text" defaultValue={this.state.productName} ref={input => this.NameField = input}/>
                  <input type="text" placeholder="Цена" className="form__text" defaultValue={this.state.productPrice} ref={input => this.PriceField = input}/>
                  <div className="form__select">
                    <button className="select__opener" onClick={this.OnDropDownOpenerClick}>{this.state.selectedCategory}</button>
                    <ul className="select__options" ref={input => this.dropDownSelect = input}>
                      {categoriesSelectRendered}
                    </ul>
                  </div>
                  <textarea cols="30" rows="5" className="form__text" placeholder="Описание" defaultValue={this.state.productDescription} ref={input => this.DescrtiptionField = input}></textarea>
                  <div>
                    <button className="form__button form__button-del">Удалить</button>
                    <button className="form__button form__button-save" onClick={this.SaveButtonClick}>Сохранить</button>
                  </div>
                  
              </div>

              <div className="col-md-4 form__container">
                
                <div className="card fixedCard">
                  <img src={this.state.productImage} alt={this.state.productName} className="img-thumbnail"/>
                  <div className="cardmask">
                  <div className="cardmask__wrapper">
                  <input type="file" accept=".png, .jpg, .jpeg"  ref={input => this.FileField = input}/>
                    <i className="fas fa-pencil-alt"></i>
                  </div>
                </div>
                </div>
                
              </div>
                
                
              </div>

            </div>

          </div>
        </div>
      
      </div>
    );
  }
}

export default ChangeDataWindow;