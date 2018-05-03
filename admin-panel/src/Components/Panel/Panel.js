import React, { Component } from "react";
import "./Panel.css";

import { Switch, Route } from "react-router-dom";

import Sidebar from "../Sidebar/Sidebar";
import StartPanel from "./StartPanel/StartPanel";
import Catalog from "./Catalog/Catalog";
import Categories from "./Categories/Categories";

class Panel extends Component{
  state = {
    sidebarHided: true
  }

  componentDidMount = () => {
    document.title = "Admin Panel";
  }

  render(){
    return(
      <div className="Panel">
        <Sidebar></Sidebar>
          <div className="contentPart">
            <Switch>
              <Route exact path="/panel" component={StartPanel} />
              <Route exact path="/panel/catalog" component={Catalog} />
              <Route exact path="/panel/categories" component={Categories} />
            </Switch>
          </div>
      </div>
    );
  }
}

export default Panel;