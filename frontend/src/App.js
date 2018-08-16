import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import WebshopContainer from './Containers/WebshopContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/" component={WebshopContainer} />
          <Route path="/login" compontent={WebshopContainer} />
          <Route path="/logout" compontent={WebshopContainer} />
          <Route path="/register" compontent={WebshopContainer} />
          <Route path="/admin/login" compontent={WebshopContainer} />
          <Route path="/admin/dashboard" compontent={WebshopContainer} />
          <Route path="/checkout" compontent={WebshopContainer} />
          <Route path="/mypages" compontent={WebshopContainer} />
          <Route path="/mypages" compontent={WebshopContainer} />
          <Route path="/products" compontent={WebshopContainer} />
          <Route path="/product/:id" component={WebshopContainer} />
        </Switch>
      </div>
    );
  }
}

export default App;
