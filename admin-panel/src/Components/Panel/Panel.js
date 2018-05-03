import React, { Component } from "react";
import "./Panel.css";

import Sidebar from "../Sidebar/Sidebar";

class Panel extends Component{
  componentDidMount = () => {
    document.title = "Admin Panel"
  }

  render(){
    return(
      <div className="Panel">
        <Sidebar></Sidebar>
        <div className="Panel__contentPart">
          <h1>Panel!</h1>
        </div>
      </div>
    );
  }
}

export default Panel;