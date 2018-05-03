import React, { Component } from 'react';
import './App.css';

import { BrowserRouter, Switch, Route } from "react-router-dom";

import LoginComponent from "./Components/LoginComponent/LoginComponent";
import Panel from "./Components/Panel/Panel";

// Заход в панель. Если есть cookie - чек, иначе ожидаем

class App extends Component {
  render() {
    return (
      <BrowserRouter basename="/admin">
          <Switch>
            <Route exact path="/" component={LoginComponent} />
            <Route exact path="/panel" component={Panel} />
          </Switch>
        
      </BrowserRouter>
    );
  }
}

export default App;