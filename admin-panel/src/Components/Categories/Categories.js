import React, { Component } from "react";
import "./Categories.css";

import axios from "axios";

import Sidebar from "../Sidebar/Sidebar";

class Categories extends Component{
  state = {
    categories: null,
    selectedCategory: null,
    selectedIndex: null,
    nextNew: true
  }
  OnNameInput = (event) => {
    this.setState({
      selectedCategory: {
        ...this.state.selectedCategory,
        name: event.target.value
      }
    });
  }
  OnLinkInput = (event) => {
    this.setState({
      selectedCategory: {
        ...this.state.selectedCategory,
        link: event.target.value
      }
    });
  }
  OnDescriptionInput = (event) => {
    this.setState({
      selectedCategory: {
        ...this.state.selectedCategory,
        description: event.target.value
      }
    });
  }

  componentWillMount = () => {
    // Title
    document.title = "Категории";

    // Categories
    axios.get('http://localhost:8080/admin/getcategories', {}).then((result) => {
      this.setState({
        categories: result.data
      });
      console.log(result.data);
    }).catch((error) => {
      alert('Error!');
    });
  }

  OnCategoryClick = (index, e) => {
    this.setState({
      selectedCategory: this.state.categories[index],
      nextNew: false,
      selectedIndex: index
    });
  }
  OnAddNewClick = () => {
    this.setState({
      nextNew: true,
      selectedCategory: null
    });
  }

  OnSaveClick = (e) => {
    let requestString = null;
    let requestObj = null;

    if(this.state.nextNew){
      // Новая категория
      if(this.state.selectedCategory.name!=="" &&
        this.state.selectedCategory.link!=="" &&
        this.state.selectedCategory.description!==""){

          requestString = "/admin/newcategory";
          requestObj = {
            name: this.state.name,
            link: this.state.link,
            description: this.state.description
          };
        }
      
    }else{
      requestString = "/admin/setcategory";
      requestObj = {
        _id: this.state["_id"],
        name: this.state.name,
        link: this.state.link,
        description: this.state.description
      };
    }

    axios.post(requestString, {
      
    }).then( (result) => {
    
    }).catch( (error) => {
    
    });
  }

  OnDeleteClick = (e) => {
    axios.post('http://localhost:8080/admin/delcategory', { id: this.state.categories[this.state.selectedIndex]["_id"] }).then((result) => {
      // {
      //    success: true | false,
      //    categories: []
      // }

      if (result.data.success === true) {
        this.setState({
          categories: result.data.categories,
          selectedCategory: null,
          selectedIndex: null,
          nextNew: true
        });
      } else {
        alert("Errors with deleting...(in response)");
      }
    }).catch((error) => {
      alert("Errors with deleting...(catch)");
    });

  }

  render(){
    let renderedCategories = null;
    let categoryName = null;
    let categoryLink = null;
    let categoryDescription = null;

    if(this.state.categories){
      renderedCategories = this.state.categories.map( (item,index)=>{
        return (
          <li className="categoriesList__item" key={item.link}>
            <button className="item__button" onClick={this.OnCategoryClick.bind(this,index)}>{item.name}</button>
          </li>
        );
      }); 
    }

    if(!this.state.nextNew){
      categoryName = this.state.selectedCategory.name;
      categoryLink = this.state.selectedCategory.link;
      categoryDescription = this.state.selectedCategory.description;
    }else{
      categoryName = "Новая категория";
      categoryLink = "";
      categoryDescription = "";
    }

    return(
      <div className="row wrap">
        <Sidebar></Sidebar>

        <div className="col-md-10">
          <div className="container">
            <div className="row">

              <div className="col-md-4"></div>

              {/* CENTER */}
              <div className="col-md-4 column categoriesColumn">
                <div className="addNewCatBlock">
                  <i class="far fa-plus-square" onClick={this.OnAddNewClick}></i>
                </div>
                <ul className="categoriesList">

                  {renderedCategories}
                  
                </ul>
              </div>

              {/* Change Window */}
              <div className="col-md-4 column">
                <div className="categoriesChange">

                  <p className="categoryLogo" style={this.state.nextNew ? { color: "rgb(8, 160, 160)" } : { color: "#333" } }>
                    {categoryName  ? categoryName : null}
                  </p>

                  <label htmlFor="name" className="categoriesChange__label">Название</label>
                  <input type="text" placeholder="Название" id="name" className="categoriesChange__textinput" value={categoryName} onInput={this.OnNameInput}/>
                  <label htmlFor="link" className="categoriesChange__label">Ссылка (англ. без пробелов и спец. симв.)</label>
                  <input type="text" placeholder="Ссылка" id="link" className="categoriesChange__textinput" value={categoryLink} onInput={this.OnLinkInput}/>
                  <label htmlFor="description" className="categoriesChange__label">Краткое описание</label>
                  <textarea id="description" cols="30" rows="10" placeholder="Описание" className="categoriesChange__textinput" value={categoryDescription} onInput={this.OnDescriptionInput}></textarea>
                  <button className="categoriesChange__button delbtn" style={this.state.nextNew ? { display: "none" } : { display: "block" } } onClick={this.OnDeleteClick}>Удалить</button>
                  <button className="categoriesChange__button" onClick={this.OnSaveClick}>Сохранить</button>
                  
                </div>
              </div>

            </div>

          </div>
          
        </div>
      </div>
    );
  }
}

export default Categories;