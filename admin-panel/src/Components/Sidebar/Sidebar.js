import React, { Component } from "react";
import "./Sidebar.css";

class Sidebar extends Component{
  render(){
    return(
      <div className="Sidebar">
        <div className="Sidebar__block hamburgerBlock">
          <h1><i className="fas fa-bars"></i></h1>
        </div>

        <div className="Sidebar__block categories">
          <button className="categories__button"><i className="fab fa-readme"></i>Каталог</button>
          <button className="categories__button"><i className="fas fa-book"></i>Категории</button>
        </div>
      </div>
    );
  }
}

export default Sidebar;