import React, { Component } from "react";
import "./StartPanel.css";

class StartPanel extends Component{
  render(){
    return(
      <div className="StartPanel">
        <div className="StartPanel__block">
          <i className="fas fa-arrow-left"></i>
        </div>
      </div>
    );
  }
}

export default StartPanel;