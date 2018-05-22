import React, { Component } from "react";
import "./Catalog.css";

import Sidebar from "../Sidebar/Sidebar";
// import NewChangeDataWindow from "./NewChangeDataWindow/NewChangeDataWindow";
import ChangeDataWindow from "./ChangeDataWindow/ChangeDataWindow";

import axios from "axios";

class Catalog extends Component{
  state = {
    categories: null,
    items: null,
    selectedProduct: null,
    selectedCategory: null
  }

  componentDidMount = () => {
    // Title
    document.title = "Каталог";

    // Categories
    axios.get('http://localhost:8080/admin/getcategories', {} ).then( (result) => {
      this.setState({
        categories: result.data
      });
    }).catch( (error) => {
      alert('Error!');
    });
  }

  OnCategoryClick = (link,name,e) => {
    axios.post('http://localhost:8080/admin/getcatalog', {
      category: link
    }).then( (result) => {
      this.setState({
        items: result.data,
        selectedCategory: link
      })
    }).catch( (error) => {
      alert('Error!');
    });
  }

  OnItemClickChange = (index,e) => {
    
    this.setState({
      selectedProduct: this.state.items[index]
    }); 
  }

  CloseDataWindowMethod = () => {
    this.setState({
      selectedProduct: null
    });
    axios.post('http://localhost:8080/admin/getcatalog', {
      category: this.state.selectedCategory
    }).then((result) => {
      this.setState({
        items: result.data
      })
    }).catch((error) => {
      alert('Error!');
    });
  }

  render(){
    // console.log(this.state.selectedProduct);
    // console.log("==========");
    // console.log(this.state.selectedCategory);
    let categoriesRendered = null;
    let itemsRendered = null;
    let changeDataWindowRendered = null;

    if(this.state.categories){
      categoriesRendered =  this.state.categories.map( (item)=>{
        return (
          <li className="catContainer__li" key={item.link}><button className="catContainer__button" onClick={this.OnCategoryClick.bind(this, item.link, item.name)}>{item.name}</button></li>
        );
      });
    }

    if(this.state.items){
      itemsRendered = this.state.items.map( (item,index)=>{
        return (
          <div className="col-md-3 col-sm-4" key={item.name}>
            <div className="card_container">
              <div className="card" style={{ overflow: "hidden" }} >

                <div className="cardmask">
                  <div className="cardmask__wrapper">
                    <i className="fas fa-pencil-alt" onClick={this.OnItemClickChange.bind(this, index)}></i>
                    <i className="fas fa-trash-alt"></i>
                  </div>
                </div>

                <img className="card-img-top" src={item.image} alt="Card cap" />
                <div className="card-body">
                  <p className="card-text card__title h5 text-center">{item.name}</p>
                </div>

              </div>
            </div>
          </div>
        );
      });
      
    }

    if(this.state.selectedProduct){
      // changeDataWindowRendered = <ChangeDataWindow item={this.state.selectedProduct} categories={this.state.categories} closeMethod={this.CloseDataWindowMethod} />
      changeDataWindowRendered = <ChangeDataWindow item = {
        this.state.selectedProduct
      }
      categories = {
        this.state.categories
      }
      closeMethod = {
        this.CloseDataWindowMethod
      } 
      selectedCategory = {
        this.state.selectedCategory
      }
      CloseMethod = {
        this.CloseDataWindowMethod
      }
      />
    }

    return(
      <div>
        {changeDataWindowRendered}
        <div className="row wrap">

          
          <Sidebar></Sidebar>

          <div className="col-md-8">

            <div className="row" style={{ height: "100vh" }} ref={input=>{this.ContentPart = input}}>
              {itemsRendered}
            </div>

          </div>

          <div className="col-md-2 Sidebar">
            <ul className="Sidebar__catContainer">
              <li className="catContainer__li"><button className="catContainer__button" onClick={this.OnCategoryClick.bind(this, "all")}>Весь каталог</button></li>
              {categoriesRendered}
            </ul>
          </div>


        </div>
      </div>
      
    );
  }
}

export default Catalog;