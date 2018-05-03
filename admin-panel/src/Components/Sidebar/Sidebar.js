import React, { Component } from "react";
import "./Sidebar.css";

import { Link } from "react-router-dom";

class Sidebar extends Component{
  ToggleSidebarHandler = () => {
    let currentPos = this.showHide.style.marginLeft;
    if(currentPos==="0px"){
      this.showHide.style.marginLeft = "-11%";
    }else{
      this.showHide.style.marginLeft = "0px";
    }
    

  }

  render(){
    return(
      <div>

        <div className="hamburgerClone">
          <button onClick={this.ToggleSidebarHandler}><i className="fas fa-bars"></i></button>
        </div>

        <div className="Sidebar" ref={input => this.showHide = input} style={{ marginLeft: "0px" }}>
          <div className="Sidebar__block hamburgerBlock">
            <button onClick={this.ToggleSidebarHandler}><i className="fas fa-bars"></i></button>
          </div>

          <div className="Sidebar__block categories">
            <Link className="categories__button" to="/panel/catalog" ><i className="fab fa-readme"></i>Каталог</Link>
            <Link className="categories__button" to="/panel/categories" ><i className="fas fa-book"></i>Категории</Link>
          </div>
        </div>
      </div>
      
    );
  }
}

export default Sidebar;